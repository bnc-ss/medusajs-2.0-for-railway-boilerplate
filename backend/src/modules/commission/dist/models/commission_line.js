"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionLine = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.CommissionLine = utils_1.model.define('commission_line', {
    id: utils_1.model.id({ prefix: 'com_line' }).primaryKey(),
    item_line_id: utils_1.model.text(),
    rule_id: utils_1.model.text(),
    currency_code: utils_1.model.text(),
    value: utils_1.model.bigNumber()
});
//# sourceMappingURL=commission_line.js.map