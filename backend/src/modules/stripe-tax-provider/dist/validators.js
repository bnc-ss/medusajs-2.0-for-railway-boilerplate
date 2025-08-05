"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeTaxCalculationResponseValidator = void 0;
const zod_1 = require("zod");
const TaxBreakdownObject = zod_1.z.object({
    amount: zod_1.z.number(),
    taxable_amount: zod_1.z.number(),
    sourcing: zod_1.z.string(),
    tax_rate_details: zod_1.z.array(zod_1.z.object({
        display_name: zod_1.z.string(),
        percentage_decimal: zod_1.z.string(),
        tax_type: zod_1.z.string()
    }))
});
exports.StripeTaxCalculationResponseValidator = zod_1.z.object({
    id: zod_1.z.string(),
    line_items: zod_1.z.object({
        has_more: zod_1.z.boolean(),
        total_count: zod_1.z.number(),
        data: zod_1.z.array(zod_1.z.object({
            reference: zod_1.z.string(),
            amount: zod_1.z.number(),
            amount_tax: zod_1.z.number(),
            tax_behavior: zod_1.z.string(),
            tax_breakdown: zod_1.z.array(TaxBreakdownObject),
            tax_code: zod_1.z.string(),
            quantity: zod_1.z.number()
        }))
    }),
    shipping_cost: zod_1.z.object({
        amount: zod_1.z.number(),
        amount_tax: zod_1.z.number(),
        tax_code: zod_1.z.string(),
        tax_behavior: zod_1.z.string(),
        tax_breakdown: zod_1.z.array(TaxBreakdownObject)
    })
});
//# sourceMappingURL=validators.js.map