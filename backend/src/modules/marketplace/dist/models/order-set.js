"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSet = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.OrderSet = utils_1.model.define('order_set', {
    id: utils_1.model.id({ prefix: 'ordset' }).primaryKey(),
    display_id: utils_1.model.number().nullable(),
    sales_channel_id: utils_1.model.text(),
    cart_id: utils_1.model.text(),
    customer_id: utils_1.model.text().nullable(),
    payment_collection_id: utils_1.model.text()
});
//# sourceMappingURL=order-set.js.map