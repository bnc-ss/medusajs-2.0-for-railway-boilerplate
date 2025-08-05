"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Brand = utils_1.model.define('brand', {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text()
});
//# sourceMappingURL=brand.js.map