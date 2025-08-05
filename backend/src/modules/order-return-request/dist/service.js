"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
class OrderReturnModuleService extends (0, utils_1.MedusaService)({
    OrderReturnRequest: models_1.OrderReturnRequest,
    OrderReturnRequestLineItem: models_1.OrderReturnRequestLineItem
}) {
}
exports.default = OrderReturnModuleService;
//# sourceMappingURL=service.js.map