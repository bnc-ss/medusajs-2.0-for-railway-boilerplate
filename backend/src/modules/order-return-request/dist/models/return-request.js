"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnRequest = void 0;
const utils_1 = require("@medusajs/framework/utils");
const return_request_line_item_1 = require("./return-request-line-item");
exports.OrderReturnRequest = utils_1.model.define('order_return_request', {
    id: utils_1.model.id({ prefix: 'oretreq' }).primaryKey(),
    customer_id: utils_1.model.text(),
    customer_note: utils_1.model.text(),
    shipping_option_id: utils_1.model.text().nullable(),
    vendor_reviewer_id: utils_1.model.text().nullable(),
    vendor_reviewer_note: utils_1.model.text().nullable(),
    vendor_review_date: utils_1.model.dateTime().nullable(),
    admin_reviewer_id: utils_1.model.text().nullable(),
    admin_reviewer_note: utils_1.model.text().nullable(),
    admin_review_date: utils_1.model.dateTime().nullable(),
    line_items: utils_1.model.hasMany(() => return_request_line_item_1.OrderReturnRequestLineItem, {
        mappedBy: 'return_request'
    }),
    status: utils_1.model
        .enum(['pending', 'refunded', 'withdrawn', 'escalated', 'canceled'])
        .default('pending')
});
//# sourceMappingURL=return-request.js.map