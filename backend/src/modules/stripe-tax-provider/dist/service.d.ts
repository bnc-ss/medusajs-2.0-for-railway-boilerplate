import { ITaxProvider, RemoteQueryFunction, TaxTypes } from "@medusajs/framework/types";
import { Logger } from "@medusajs/medusa";
type InjectedDependencies = {
    logger: Logger;
    remoteQuery: Omit<RemoteQueryFunction, symbol>;
};
type Options = {
    apiKey: string;
    defaultTaxcode: string;
};
export default class StripeTaxProvider implements ITaxProvider {
    static identifier: string;
    private readonly client_;
    private defaultTaxcode_;
    private remoteQuery_;
    constructor({ remoteQuery }: InjectedDependencies, options: Options);
    getIdentifier(): string;
    getTaxLines(itemLines: TaxTypes.ItemTaxCalculationLine[], shippingLines: TaxTypes.ShippingTaxCalculationLine[], { address }: TaxTypes.TaxCalculationContext): Promise<(TaxTypes.ItemTaxLineDTO | TaxTypes.ShippingTaxLineDTO)[]>;
    private getProductTaxCode_;
}
export {};
//# sourceMappingURL=service.d.ts.map