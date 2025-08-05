"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitOrderPayment = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.SplitOrderPayment = utils_1.model.define('split_order_payment', {
    id: utils_1.model.id({ prefix: 'sp_ord_pay' }).primaryKey(),
    status: utils_1.model.text(),
    currency_code: utils_1.model.text(),
    authorized_amount: utils_1.model.bigNumber(),
    captured_amount: utils_1.model.bigNumber().default(0),
    refunded_amount: utils_1.model.bigNumber().default(0),
    payment_collection_id: utils_1.model.text()
});
//# sourceMappingURL=split-order-payment.js.map