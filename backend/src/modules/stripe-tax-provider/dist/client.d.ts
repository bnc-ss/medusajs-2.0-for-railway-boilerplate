import Stripe from 'stripe';
import { StripeTaxCalculationResponse } from './validators';
export default class StripeTaxClient {
    private stripe_;
    constructor(apiKey?: string);
    getCalculation(payload: Stripe.Tax.CalculationCreateParams): Promise<StripeTaxCalculationResponse>;
}
//# sourceMappingURL=client.d.ts.map