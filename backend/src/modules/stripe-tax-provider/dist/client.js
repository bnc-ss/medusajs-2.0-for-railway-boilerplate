"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const validators_1 = require("./validators");
class StripeTaxClient {
    constructor(apiKey = 'sk_') {
        this.stripe_ = new stripe_1.default(apiKey);
    }
    async getCalculation(payload) {
        const response = await this.stripe_.tax.calculations.create(payload);
        if (response.line_items && response.line_items.has_more) {
            let lastItems = response.line_items;
            while (lastItems.has_more) {
                const lastId = lastItems.data.pop().id;
                const currentItems = await this.stripe_.tax.calculations.listLineItems(response.id, {
                    limit: 100,
                    starting_after: lastId,
                    expand: ['line_items.data.tax_breakdown']
                });
                response.line_items.data.push(...currentItems.data);
                lastItems = currentItems;
            }
        }
        try {
            const calculation = validators_1.StripeTaxCalculationResponseValidator.parse(response);
            return calculation;
        }
        catch {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Incorrect Stripe tax calculation response');
        }
    }
}
exports.default = StripeTaxClient;
//# sourceMappingURL=client.js.map