"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
class MarketplaceModuleService extends (0, utils_1.MedusaService)({
    OrderSet: models_1.OrderSet
}) {
}
exports.default = MarketplaceModuleService;
//# sourceMappingURL=service.js.map