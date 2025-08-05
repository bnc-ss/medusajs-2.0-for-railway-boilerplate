"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerOnboarding = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_1 = require("./seller");
exports.SellerOnboarding = utils_1.model.define('seller_onboarding', {
    id: utils_1.model.id({ prefix: 'sel_onb' }).primaryKey(),
    store_information: utils_1.model.boolean().default(false),
    stripe_connection: utils_1.model.boolean().default(false),
    locations_shipping: utils_1.model.boolean().default(false),
    products: utils_1.model.boolean().default(false),
    seller: utils_1.model.belongsTo(() => seller_1.Seller, { mappedBy: 'onboarding' })
});
//# sourceMappingURL=onboarding.js.map