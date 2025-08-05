"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Wishlist = utils_1.model.define('wishlist', {
    id: utils_1.model.id({ prefix: 'wish' }).primaryKey(),
    reference: utils_1.model.enum(['product'])
});
//# sourceMappingURL=wishlist.js.map