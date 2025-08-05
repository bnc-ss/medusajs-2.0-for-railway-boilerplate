"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
class RequestsModuleService extends (0, utils_1.MedusaService)({
    Request: models_1.Request,
}) {
}
exports.default = RequestsModuleService;
//# sourceMappingURL=service.js.map