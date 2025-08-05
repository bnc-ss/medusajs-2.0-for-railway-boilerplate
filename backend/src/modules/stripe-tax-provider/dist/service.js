"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
const client_1 = __importDefault(require("./client"));
const validators_1 = require("./validators");
class StripeTaxProvider {
    constructor({ remoteQuery }, options) {
        this.defaultTaxcode_ = options.defaultTaxcode;
        this.client_ = new client_1.default(options.apiKey);
        this.remoteQuery_ = remoteQuery;
    }
    getIdentifier() {
        return StripeTaxProvider.identifier;
    }
    async getTaxLines(itemLines, shippingLines, { address }) {
        if (itemLines.length === 0) {
            return [];
        }
        const currency = itemLines[0].line_item.currency_code?.toLowerCase() || "eur";
        const shipping = shippingLines.reduce((acc, l) => {
            return (acc = acc.plus(utils_1.MathBN.convert(l.shipping_line.unit_price || 0)));
        }, utils_1.MathBN.convert(0));
        const line_items = [];
        for (const item of itemLines) {
            const tax_code = await this.getProductTaxCode_(item.line_item.product_id);
            const quantity = utils_1.MathBN.convert(item.line_item.quantity || 0);
            const amount = utils_1.MathBN.convert(item.line_item.unit_price || 0).multipliedBy(quantity);
            line_items.push({
                reference: item.line_item.id,
                amount: (0, framework_1.getSmallestUnit)(amount, currency),
                quantity: quantity.toNumber(),
                tax_code,
            });
        }
        const calculationResponse = await this.client_.getCalculation({
            currency,
            customer_details: {
                address: {
                    country: address.country_code,
                    city: address.city,
                    line1: address.address_1,
                    line2: address.address_2,
                    postal_code: address.postal_code,
                    state: address.province_code,
                },
            },
            shipping_cost: { amount: (0, framework_1.getSmallestUnit)(shipping, currency) },
            line_items,
            expand: ["line_items.data.tax_breakdown"],
        });
        const calculation = validators_1.StripeTaxCalculationResponseValidator.parse(calculationResponse);
        const itemTaxLines = calculation.line_items
            ? calculation.line_items?.data.map((item) => {
                return {
                    line_item_id: item.reference,
                    rate: utils_1.MathBN.convert(item.tax_breakdown[0].tax_rate_details[0].percentage_decimal || 0).toNumber(),
                    code: item.tax_code,
                    provider_id: this.getIdentifier(),
                    name: `Stripe-${item.tax_code}`,
                };
            })
            : [];
        const shippingTaxLines = shippingLines.map((i) => {
            return {
                shipping_line_id: i.shipping_line.id,
                code: "SHIPPING",
                name: "SHIPPING",
                provider_id: this.getIdentifier(),
                rate: utils_1.MathBN.convert(calculation.shipping_cost.tax_breakdown[0].tax_rate_details[0]
                    .percentage_decimal || 0).toNumber(),
            };
        });
        return [...itemTaxLines, ...shippingTaxLines];
    }
    async getProductTaxCode_(productId) {
        const { data: [product], } = await this.remoteQuery_.graph({
            entity: "product",
            fields: ["categories.tax_code.code"],
            filters: { id: productId },
        });
        if (!product || product.categories.length !== 1) {
            return this.defaultTaxcode_;
        }
        return product.categories[0].tax_code?.code || this.defaultTaxcode_;
    }
}
StripeTaxProvider.identifier = "stripe-tax-provider";
exports.default = StripeTaxProvider;
//# sourceMappingURL=service.js.map