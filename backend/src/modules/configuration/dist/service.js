"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRuleDefaults = void 0;
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
const framework_1 = require("@boxncase/framework");
exports.ConfigurationRuleDefaults = new Map([
    [framework_1.ConfigurationRuleType.GLOBAL_PRODUCT_CATALOG, false],
    [framework_1.ConfigurationRuleType.PRODUCT_REQUEST_ENABLED, true],
    [framework_1.ConfigurationRuleType.REQUIRE_PRODUCT_APPROVAL, false],
    [framework_1.ConfigurationRuleType.PRODUCT_IMPORT_ENABLED, true],
]);
class ConfigurationModuleService extends (0, utils_1.MedusaService)({
    ConfigurationRule: models_1.ConfigurationRule,
}) {
    async isRuleEnabled(type) {
        const [rule] = await this.listConfigurationRules({
            rule_type: type,
        });
        return rule ? rule.is_enabled : exports.ConfigurationRuleDefaults.get(type);
    }
}
exports.default = ConfigurationModuleService;
//# sourceMappingURL=service.js.map