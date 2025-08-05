"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionRule = void 0;
const utils_1 = require("@medusajs/framework/utils");
const commission_rate_1 = require("./commission_rate");
exports.CommissionRule = utils_1.model.define('commission_rule', {
    id: utils_1.model.id({ prefix: 'com_rule' }).primaryKey(),
    name: utils_1.model.text().searchable(),
    reference: utils_1.model.text().searchable(),
    reference_id: utils_1.model.text(),
    is_active: utils_1.model.boolean().default(true),
    rate: utils_1.model.hasOne(() => commission_rate_1.CommissionRate, {
        mappedBy: 'rule'
    })
});
//# sourceMappingURL=commission_rule.js.map