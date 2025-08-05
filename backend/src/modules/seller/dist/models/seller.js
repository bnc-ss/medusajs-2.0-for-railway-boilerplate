"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
const invite_1 = require("./invite");
const member_1 = require("./member");
const onboarding_1 = require("./onboarding");
exports.Seller = utils_1.model.define("seller", {
    id: utils_1.model.id({ prefix: "sel" }).primaryKey(),
    store_status: utils_1.model.enum(framework_1.StoreStatus).default(framework_1.StoreStatus.ACTIVE),
    name: utils_1.model.text().searchable(),
    handle: utils_1.model.text().unique(),
    description: utils_1.model.text().searchable().nullable(),
    photo: utils_1.model.text().nullable(),
    email: utils_1.model.text().nullable(),
    phone: utils_1.model.text().nullable(),
    address_line: utils_1.model.text().nullable(),
    city: utils_1.model.text().nullable(),
    state: utils_1.model.text().nullable(),
    postal_code: utils_1.model.text().nullable(),
    country_code: utils_1.model.text().nullable(),
    tax_id: utils_1.model.text().nullable(),
    members: utils_1.model.hasMany(() => member_1.Member),
    invites: utils_1.model.hasMany(() => invite_1.MemberInvite),
    onboarding: utils_1.model.hasOne(() => onboarding_1.SellerOnboarding).nullable(),
});
//# sourceMappingURL=seller.js.map