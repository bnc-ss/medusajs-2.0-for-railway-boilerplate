"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutProvider = void 0;
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const __1 = require("..");
const framework_1 = require("@boxncase/framework");
class PayoutProvider {
    constructor({ logger, configModule }) {
        this.logger_ = logger;
        const moduleDef = configModule.modules?.[__1.PAYOUT_MODULE];
        if (typeof moduleDef !== "boolean" && moduleDef?.options) {
            this.config_ = {
                apiKey: moduleDef.options.apiKey,
                webhookSecret: moduleDef.options.webhookSecret,
            };
        }
        this.client_ = new stripe_1.default(this.config_.apiKey, {
            apiVersion: "2025-02-24.acacia",
        });
    }
    async createPayout({ amount, currency, account_reference_id, transaction_id, source_transaction, }) {
        try {
            this.logger_.info(`Processing payout for transaction with ID ${transaction_id}`);
            const transfer = await this.client_.transfers.create({
                currency,
                destination: account_reference_id,
                amount: (0, framework_1.getSmallestUnit)(amount, currency),
                source_transaction,
                metadata: {
                    transaction_id,
                },
            }, { idempotencyKey: transaction_id });
            return {
                data: transfer,
            };
        }
        catch (error) {
            this.logger_.error("Error occured while creating payout", error);
            const message = error?.message ?? "Error occured while creating payout";
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async createPayoutAccount({ context, account_id, }) {
        try {
            const { country } = context;
            this.logger_.info("Creating payment profile");
            if (!(0, utils_1.isPresent)(country)) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `"country" is required`);
            }
            const account = await this.client_.accounts.create({
                country: country,
                type: "standard",
                metadata: {
                    account_id,
                },
            });
            return {
                data: account,
                id: account.id,
            };
        }
        catch (error) {
            const message = error?.message ?? "Error occured while creating payout account";
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async initializeOnboarding(accountId, context) {
        try {
            this.logger_.info("Initializing onboarding");
            if (!(0, utils_1.isPresent)(context.refresh_url)) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `'refresh_url' is required`);
            }
            if (!(0, utils_1.isPresent)(context.return_url)) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `'return_url' is required`);
            }
            const accountLink = await this.client_.accountLinks.create({
                account: accountId,
                refresh_url: context.refresh_url,
                return_url: context.return_url,
                type: "account_onboarding",
            });
            return {
                data: accountLink,
            };
        }
        catch (error) {
            const message = error?.message ?? "Error occured while initializing onboarding";
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async getAccount(accountId) {
        try {
            const account = await this.client_.accounts.retrieve(accountId);
            return account;
        }
        catch (error) {
            const message = error?.message ?? "Error occured while getting account";
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async reversePayout(input) {
        try {
            const reversal = await this.client_.transfers.createReversal(input.transfer_id, {
                amount: (0, framework_1.getSmallestUnit)(input.amount, input.currency),
            });
            return reversal;
        }
        catch (error) {
            const message = error?.message ?? "Error occured while reversing payout";
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async getWebhookActionAndData(payload) {
        const signature = payload.headers["stripe-signature"];
        const event = this.client_.webhooks.constructEvent(payload.rawData, signature, this.config_.webhookSecret);
        const data = event.data.object;
        switch (event.type) {
            case "account.updated":
                // here you can validate account data to make sure it's valid
                return {
                    action: framework_1.PayoutWebhookAction.ACCOUNT_AUTHORIZED,
                    data: {
                        account_id: data.metadata?.account_id,
                    },
                };
        }
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, `Unsupported event type: ${event.type}`);
    }
}
exports.PayoutProvider = PayoutProvider;
//# sourceMappingURL=provider.js.map