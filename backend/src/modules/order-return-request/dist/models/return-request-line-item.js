"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnRequestLineItem = void 0;
const utils_1 = require("@medusajs/framework/utils");
const return_request_1 = require("./return-request");
exports.OrderReturnRequestLineItem = utils_1.model.define("order_return_request_line_item", {
    id: utils_1.model.id({ prefix: "oretreqli" }).primaryKey(),
    line_item_id: utils_1.model.text(),
    quantity: utils_1.model.number(),
    reason_id: utils_1.model.text().nullable(),
    return_request: utils_1.model.belongsTo(() => return_request_1.OrderReturnRequest, {
        mappedBy: "line_items",
    }),
});
//# sourceMappingURL=return-request-line-item.js.map