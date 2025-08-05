"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
class StripeConnectProvider extends utils_1.AbstractPaymentProvider {
    constructor(container, options) {
        super(container);
        this.options_ = options;
        this.client_ = new stripe_1.default(options.apiKey);
    }
    async getPaymentStatus(input) {
        const id = input.data?.id;
        const paymentIntent = await this.client_.paymentIntents.retrieve(id);
        const dataResponse = paymentIntent;
        switch (paymentIntent.status) {
            case "requires_payment_method":
            case "requires_confirmation":
            case "processing":
                return { status: utils_1.PaymentSessionStatus.PENDING, data: dataResponse };
            case "requires_action":
                return {
                    status: utils_1.PaymentSessionStatus.REQUIRES_MORE,
                    data: dataResponse,
                };
            case "canceled":
                return { status: utils_1.PaymentSessionStatus.CANCELED, data: dataResponse };
            case "requires_capture":
                return { status: utils_1.PaymentSessionStatus.AUTHORIZED, data: dataResponse };
            case "succeeded":
                return { status: utils_1.PaymentSessionStatus.CAPTURED, data: dataResponse };
            default:
                return { status: utils_1.PaymentSessionStatus.PENDING, data: dataResponse };
        }
    }
    async initiatePayment(input) {
        const { amount, currency_code } = input;
        const email = input.context?.customer?.email;
        const paymentIntentInput = {
            ...this.paymentIntentOptions,
            currency: currency_code,
            amount: (0, framework_1.getSmallestUnit)(amount, currency_code),
        };
        // revisit when you could update customer using initiatePayment
        try {
            const { data: [customer], } = await this.client_.customers.list({
                email,
                limit: 1,
            });
            if (customer) {
                paymentIntentInput.customer = customer.id;
            }
        }
        catch (error) {
            throw this.buildError("An error occurred in initiatePayment when retrieving a Stripe customer", error);
        }
        if (!paymentIntentInput.customer) {
            try {
                const customer = await this.client_.customers.create({ email });
                paymentIntentInput.customer = customer.id;
            }
            catch (error) {
                throw this.buildError("An error occurred in initiatePayment when creating a Stripe customer", error);
            }
        }
        try {
            const data = (await this.client_.paymentIntents.create(paymentIntentInput));
            return {
                id: data.id,
                data,
            };
        }
        catch (error) {
            throw this.buildError("An error occurred in initiatePayment when creating a Stripe payment intent", error);
        }
    }
    async authorizePayment(data) {
        const result = await this.getPaymentStatus(data);
        if (result.status === utils_1.PaymentSessionStatus.CAPTURED) {
            return { status: utils_1.PaymentSessionStatus.AUTHORIZED, data: result.data };
        }
        return result;
    }
    async cancelPayment({ data: paymentSessionData, }) {
        try {
            const id = paymentSessionData?.id;
            if (!id) {
                return { data: paymentSessionData };
            }
            const data = (await this.client_.paymentIntents.cancel(id));
            return { data };
        }
        catch (error) {
            throw this.buildError("An error occurred in cancelPayment", error);
        }
    }
    async capturePayment({ data: paymentSessionData, }) {
        const id = paymentSessionData?.id;
        try {
            const data = (await this.client_.paymentIntents.capture(id));
            return { data };
        }
        catch (error) {
            if (error.code === framework_1.ErrorCodes.PAYMENT_INTENT_UNEXPECTED_STATE) {
                if (error.payment_intent?.status === framework_1.ErrorIntentStatus.SUCCEEDED) {
                    return { data: error.payment_intent };
                }
            }
            throw this.buildError("An error occurred in capturePayment", error);
        }
    }
    deletePayment(data) {
        return this.cancelPayment(data);
    }
    async refundPayment({ data: paymentSessionData, amount, }) {
        const id = paymentSessionData?.id;
        try {
            const currency = paymentSessionData?.currency;
            await this.client_.refunds.create({
                amount: (0, framework_1.getSmallestUnit)(amount, currency),
                payment_intent: id,
            });
        }
        catch (e) {
            throw this.buildError("An error occurred in refundPayment", e);
        }
        return { data: paymentSessionData };
    }
    async retrievePayment({ data: paymentSessionData, }) {
        try {
            const id = paymentSessionData?.id;
            const intent = (await this.client_.paymentIntents.retrieve(id));
            intent.amount = (0, framework_1.getAmountFromSmallestUnit)(intent.amount, intent.currency);
            console.log("Stripe - retrieving", intent);
            return { data: intent };
        }
        catch (e) {
            throw this.buildError("An error occurred in retrievePayment", e);
        }
    }
    async updatePayment(input) {
        const { data, amount, currency_code } = input;
        const amountNumeric = (0, framework_1.getSmallestUnit)(amount, currency_code);
        if ((0, utils_1.isPresent)(amount) && data?.amount === amountNumeric) {
            return { data };
        }
        try {
            const id = data?.id;
            const sessionData = (await this.client_.paymentIntents.update(id, {
                amount: amountNumeric,
            }));
            return { data: sessionData };
        }
        catch (e) {
            throw this.buildError("An error occurred in updatePayment", e);
        }
    }
    async updatePaymentData(sessionId, data) {
        try {
            // Prevent from updating the amount from here as it should go through
            // the updatePayment method to perform the correct logic
            if ((0, utils_1.isPresent)(data.amount)) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Cannot update amount, use updatePayment instead");
            }
            return (await this.client_.paymentIntents.update(sessionId, {
                ...data,
            }));
        }
        catch (e) {
            throw this.buildError("An error occurred in updatePaymentData", e);
        }
    }
    async getWebhookActionAndData(webhookData) {
        const event = this.constructWebhookEvent(webhookData);
        const intent = event.data.object;
        const { currency } = intent;
        switch (event.type) {
            case "payment_intent.amount_capturable_updated":
                return {
                    action: utils_1.PaymentActions.AUTHORIZED,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, framework_1.getAmountFromSmallestUnit)(intent.amount_capturable, currency),
                    },
                };
            case "payment_intent.succeeded":
                return {
                    action: utils_1.PaymentActions.SUCCESSFUL,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, framework_1.getAmountFromSmallestUnit)(intent.amount_received, currency),
                    },
                };
            case "payment_intent.payment_failed":
                return {
                    action: utils_1.PaymentActions.FAILED,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, framework_1.getAmountFromSmallestUnit)(intent.amount, currency),
                    },
                };
            default:
                return { action: utils_1.PaymentActions.NOT_SUPPORTED };
        }
    }
    constructWebhookEvent(data) {
        const signature = data.headers["stripe-signature"];
        return this.client_.webhooks.constructEvent(data.rawData, signature, this.options_.webhookSecret);
    }
    buildError(message, error) {
        return new utils_1.MedusaError(utils_1.MedusaError.Types.PAYMENT_AUTHORIZATION_ERROR, `${message}: ${error}`);
    }
}
exports.default = StripeConnectProvider;
//# sourceMappingURL=stripe-connect-provider.js.map