"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const stripe_connect_card_provider_1 = __importDefault(require("./services/stripe-connect-card-provider"));
exports.default = (0, utils_1.ModuleProvider)(utils_1.Modules.PAYMENT, {
    services: [stripe_connect_card_provider_1.default]
});
//# sourceMappingURL=index.js.map