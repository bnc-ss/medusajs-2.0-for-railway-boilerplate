"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionRate = void 0;
const utils_1 = require("@medusajs/framework/utils");
const commission_rule_1 = require("./commission_rule");
exports.CommissionRate = utils_1.model.define('commission_rate', {
    id: utils_1.model.id({ prefix: 'com_rate' }).primaryKey(),
    type: utils_1.model.text(),
    percentage_rate: utils_1.model.number().nullable(),
    include_tax: utils_1.model.boolean(),
    price_set_id: utils_1.model.text().nullable(),
    max_price_set_id: utils_1.model.text().nullable(),
    min_price_set_id: utils_1.model.text().nullable(),
    rule: utils_1.model
        .belongsTo(() => commission_rule_1.CommissionRule, {
        mappedBy: 'rate'
    })
        .nullable()
});
//# sourceMappingURL=commission_rate.js.map