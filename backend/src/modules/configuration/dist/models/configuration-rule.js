"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRule = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ConfigurationRule = utils_1.model.define("configuration_rule", {
    id: utils_1.model.id({ prefix: "conf" }).primaryKey(),
    rule_type: utils_1.model
        .enum([
        "global_product_catalog",
        "require_product_approval",
        "product_request_enabled",
        "product_import_enabled",
    ])
        .unique(),
    is_enabled: utils_1.model.boolean(),
});
//# sourceMappingURL=configuration-rule.js.map