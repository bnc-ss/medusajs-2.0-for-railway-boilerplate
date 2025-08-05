"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
const framework_1 = require("@boxncase/framework");
class PayoutModuleService extends (0, utils_1.MedusaService)({
    Payout: models_1.Payout,
    PayoutReversal: models_1.PayoutReversal,
    PayoutAccount: models_1.PayoutAccount,
    Onboarding: models_1.Onboarding,
}) {
    constructor({ payoutProvider }) {
        super(...arguments);
        this.provider_ = payoutProvider;
    }
    async createPayoutAccount({ context }, sharedContext) {
        const result = await this.createPayoutAccounts({ context, reference_id: "placeholder", data: {} }, sharedContext);
        try {
            const { data, id: referenceId } = await this.provider_.createPayoutAccount({
                context,
                account_id: result.id,
            });
            await this.updatePayoutAccounts({
                id: result.id,
                data,
                reference_id: referenceId,
            }, sharedContext);
            const updated = await this.retrievePayoutAccount(result.id, undefined, sharedContext);
            return updated;
        }
        catch (error) {
            await this.deletePayoutAccounts(result.id, sharedContext);
            throw error;
        }
    }
    async syncStripeAccount(account_id, sharedContext) {
        const payout_account = await this.retrievePayoutAccount(account_id);
        const stripe_account = await this.provider_.getAccount(payout_account.reference_id);
        const status = stripe_account.details_submitted &&
            stripe_account.payouts_enabled &&
            stripe_account.charges_enabled &&
            stripe_account.tos_acceptance &&
            stripe_account.tos_acceptance?.date !== null;
        await this.updatePayoutAccounts({
            id: account_id,
            data: stripe_account,
            status: status
                ? framework_1.PayoutAccountStatus.ACTIVE
                : framework_1.PayoutAccountStatus.PENDING,
        }, sharedContext);
        const updated = await this.retrievePayoutAccount(account_id, undefined, sharedContext);
        return updated;
    }
    async initializeOnboarding({ context, payout_account_id }, sharedContext) {
        const [existingOnboarding] = await this.listOnboardings({
            payout_account_id,
        });
        const account = await this.retrievePayoutAccount(payout_account_id);
        const { data: providerData } = await this.provider_.initializeOnboarding(account.reference_id, context);
        let onboarding = existingOnboarding;
        if (!existingOnboarding) {
            onboarding = await super.createOnboardings({
                payout_account_id,
            }, sharedContext);
        }
        await this.updateOnboardings({
            id: onboarding.id,
            data: providerData,
            context,
        }, sharedContext);
        return await this.retrieveOnboarding(onboarding.id, undefined, sharedContext);
    }
    async createPayout(input, sharedContext) {
        const { amount, currency_code, account_id, transaction_id, source_transaction, } = input;
        const payoutAccount = await this.retrievePayoutAccount(account_id);
        const { data } = await this.provider_.createPayout({
            account_reference_id: payoutAccount.reference_id,
            amount,
            currency: currency_code,
            transaction_id,
            source_transaction,
        });
        // @ts-expect-error BigNumber incompatible interface
        const payout = await this.createPayouts({
            data,
            amount,
            currency_code,
            payout_account: payoutAccount.id,
        }, sharedContext);
        return payout;
    }
    async createPayoutReversal(input, sharedContext) {
        const payout = await this.retrievePayout(input.payout_id);
        if (!payout || !payout.data || !payout.data.id) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Payout not found");
        }
        const transfer_id = payout.data.id;
        const transferReversal = await this.provider_.reversePayout({
            transfer_id,
            amount: input.amount,
            currency: input.currency_code,
        });
        // @ts-expect-error BigNumber incompatible interface
        const payoutReversal = await this.createPayoutReversals({
            data: transferReversal,
            amount: input.amount,
            currency_code: input.currency_code,
            payout: payout.id,
        }, sharedContext);
        return payoutReversal;
    }
    async getWebhookActionAndData(input) {
        return await this.provider_.getWebhookActionAndData(input);
    }
}
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayoutAccount", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "syncStripeAccount", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "initializeOnboarding", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayout", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayoutReversal", null);
exports.default = PayoutModuleService;
//# sourceMappingURL=service.js.map