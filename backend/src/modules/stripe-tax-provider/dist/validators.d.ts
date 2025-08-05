import { z } from 'zod';
export declare const StripeTaxCalculationResponseValidator: z.ZodObject<{
    id: z.ZodString;
    line_items: z.ZodObject<{
        has_more: z.ZodBoolean;
        total_count: z.ZodNumber;
        data: z.ZodArray<z.ZodObject<{
            reference: z.ZodString;
            amount: z.ZodNumber;
            amount_tax: z.ZodNumber;
            tax_behavior: z.ZodString;
            tax_breakdown: z.ZodArray<z.ZodObject<{
                amount: z.ZodNumber;
                taxable_amount: z.ZodNumber;
                sourcing: z.ZodString;
                tax_rate_details: z.ZodArray<z.ZodObject<{
                    display_name: z.ZodString;
                    percentage_decimal: z.ZodString;
                    tax_type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }, {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }, {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }>, "many">;
            tax_code: z.ZodString;
            quantity: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }, {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        data: {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }[];
        has_more: boolean;
        total_count: number;
    }, {
        data: {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }[];
        has_more: boolean;
        total_count: number;
    }>;
    shipping_cost: z.ZodObject<{
        amount: z.ZodNumber;
        amount_tax: z.ZodNumber;
        tax_code: z.ZodString;
        tax_behavior: z.ZodString;
        tax_breakdown: z.ZodArray<z.ZodObject<{
            amount: z.ZodNumber;
            taxable_amount: z.ZodNumber;
            sourcing: z.ZodString;
            tax_rate_details: z.ZodArray<z.ZodObject<{
                display_name: z.ZodString;
                percentage_decimal: z.ZodString;
                tax_type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }, {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }, {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        amount_tax: number;
        tax_behavior: string;
        tax_breakdown: {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }[];
        tax_code: string;
    }, {
        amount: number;
        amount_tax: number;
        tax_behavior: string;
        tax_breakdown: {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }[];
        tax_code: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    line_items: {
        data: {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }[];
        has_more: boolean;
        total_count: number;
    };
    shipping_cost: {
        amount: number;
        amount_tax: number;
        tax_behavior: string;
        tax_breakdown: {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }[];
        tax_code: string;
    };
}, {
    id: string;
    line_items: {
        data: {
            amount: number;
            reference: string;
            amount_tax: number;
            tax_behavior: string;
            tax_breakdown: {
                amount: number;
                taxable_amount: number;
                sourcing: string;
                tax_rate_details: {
                    display_name: string;
                    percentage_decimal: string;
                    tax_type: string;
                }[];
            }[];
            tax_code: string;
            quantity: number;
        }[];
        has_more: boolean;
        total_count: number;
    };
    shipping_cost: {
        amount: number;
        amount_tax: number;
        tax_behavior: string;
        tax_breakdown: {
            amount: number;
            taxable_amount: number;
            sourcing: string;
            tax_rate_details: {
                display_name: string;
                percentage_decimal: string;
                tax_type: string;
            }[];
        }[];
        tax_code: string;
    };
}>;
export type StripeTaxCalculationResponse = z.infer<typeof StripeTaxCalculationResponseValidator>;
//# sourceMappingURL=validators.d.ts.map