"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("./models/wishlist");
class WishlistModuleService extends (0, utils_1.MedusaService)({
    Wishlist: wishlist_1.Wishlist
}) {
}
exports.default = WishlistModuleService;
//# sourceMappingURL=service.js.map