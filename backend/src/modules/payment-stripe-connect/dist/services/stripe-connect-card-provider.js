"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_connect_provider_1 = __importDefault(require("../core/stripe-connect-provider"));
const framework_1 = require("@boxncase/framework");
class StripeConnectCardProviderService extends stripe_connect_provider_1.default {
    constructor(_, options) {
        super(_, options);
    }
    get paymentIntentOptions() {
        return {
            payment_method_types: ["card"],
        };
    }
}
StripeConnectCardProviderService.identifier = framework_1.PaymentProviderKeys.CARD;
exports.default = StripeConnectCardProviderService;
//# sourceMappingURL=stripe-connect-card-provider.js.map