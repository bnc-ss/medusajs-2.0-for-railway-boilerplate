"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnModuleService = exports.ORDER_RETURN_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.OrderReturnModuleService = service_1.default;
exports.ORDER_RETURN_MODULE = "order_return";
exports.default = (0, utils_1.Module)(exports.ORDER_RETURN_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=index.js.map