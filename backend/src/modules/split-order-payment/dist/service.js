"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const split_order_payment_1 = require("./models/split-order-payment");
class SplitOrderPaymentModuleService extends (0, utils_1.MedusaService)({
    SplitOrderPayment: split_order_payment_1.SplitOrderPayment
}) {
}
exports.default = SplitOrderPaymentModuleService;
//# sourceMappingURL=service.js.map