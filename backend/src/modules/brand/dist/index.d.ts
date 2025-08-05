import BrandModuleService from "./service";
export declare const BRAND_MODULE = "brand";
export { BrandModuleService };
declare const _default: import("@medusajs/types").ModuleExports<typeof BrandModuleService> & {
    linkable: {
        readonly brand: {
            id: {
                serviceName: "brand";
                field: "brand";
                linkable: "brand_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "brand";
                field: "brand";
                linkable: "brand_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map