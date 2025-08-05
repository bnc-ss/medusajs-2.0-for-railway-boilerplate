"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const review_1 = require("./models/review");
class ReviewModuleService extends (0, utils_1.MedusaService)({
    Review: review_1.Review
}) {
}
exports.default = ReviewModuleService;
//# sourceMappingURL=service.js.map