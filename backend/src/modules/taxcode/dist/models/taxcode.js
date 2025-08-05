"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const TaxCode = utils_1.model.define('tax_code', {
    id: utils_1.model.id({ prefix: 'taxc' }).primaryKey(),
    name: utils_1.model.text().default(''),
    description: utils_1.model.text().default(''),
    code: utils_1.model.text().unique()
});
exports.default = TaxCode;
//# sourceMappingURL=taxcode.js.map