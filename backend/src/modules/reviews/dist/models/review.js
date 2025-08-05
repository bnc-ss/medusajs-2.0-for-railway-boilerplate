"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Review = utils_1.model.define('review', {
    id: utils_1.model.id({ prefix: 'rev' }).primaryKey(),
    reference: utils_1.model.enum(['product', 'seller']),
    rating: utils_1.model.number(),
    customer_note: utils_1.model.text().nullable(),
    seller_note: utils_1.model.text().nullable()
});
//# sourceMappingURL=review.js.map