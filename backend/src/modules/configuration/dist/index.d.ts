import ConfigurationModuleService, { ConfigurationRuleDefaults } from "./service";
export declare const CONFIGURATION_MODULE = "configuration";
export { ConfigurationModuleService, ConfigurationRuleDefaults };
declare const _default: import("@medusajs/types").ModuleExports<typeof ConfigurationModuleService> & {
    linkable: {
        readonly configurationRule: {
            id: {
                serviceName: "configuration";
                field: "configurationRule";
                linkable: "configuration_rule_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "configuration";
                field: "configurationRule";
                linkable: "configuration_rule_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map