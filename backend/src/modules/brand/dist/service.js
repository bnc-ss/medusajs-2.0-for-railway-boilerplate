"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const brand_1 = require("./models/brand");
class BrandModuleService extends (0, utils_1.MedusaService)({
    Brand: brand_1.Brand
}) {
}
exports.default = BrandModuleService;
//# sourceMappingURL=service.js.map