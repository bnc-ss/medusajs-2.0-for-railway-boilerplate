"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const taxcode_1 = __importDefault(require("./models/taxcode"));
class TaxCodeService extends (0, utils_1.MedusaService)({ TaxCode: taxcode_1.default }) {
    constructor(_, { apiKey }) {
        super(_);
        this.stripe_ = new stripe_1.default(apiKey || "sk_");
    }
    async getTaxCodes() {
        let response = await this.stripe_.taxCodes.list({ limit: 100 });
        const taxCodes = [...response.data];
        while (response.has_more) {
            const lastId = response.data.pop().id;
            const currentResponse = await this.stripe_.taxCodes.list({
                limit: 100,
                starting_after: lastId,
            });
            taxCodes.push(...currentResponse.data);
            response = currentResponse;
        }
        return taxCodes;
    }
}
exports.default = TaxCodeService;
//# sourceMappingURL=service.js.map