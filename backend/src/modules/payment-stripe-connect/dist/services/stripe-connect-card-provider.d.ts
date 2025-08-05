import StripeConnectProvider from "../core/stripe-connect-provider";
import { PaymentIntentOptions } from "@boxncase/framework";
declare class StripeConnectCardProviderService extends StripeConnectProvider {
    static identifier: string;
    constructor(_: any, options: any);
    get paymentIntentOptions(): PaymentIntentOptions;
}
export default StripeConnectCardProviderService;
//# sourceMappingURL=stripe-connect-card-provider.d.ts.map