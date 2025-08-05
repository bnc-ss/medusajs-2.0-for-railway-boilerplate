"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberInvite = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
const seller_1 = require("./seller");
exports.MemberInvite = utils_1.model.define("member_invite", {
    id: utils_1.model.id({ prefix: "meminv" }).primaryKey(),
    email: utils_1.model.text(),
    role: utils_1.model.enum(framework_1.MemberRole).default(framework_1.MemberRole.OWNER),
    seller: utils_1.model.belongsTo(() => seller_1.Seller, { mappedBy: "invites" }),
    token: utils_1.model.text(),
    expires_at: utils_1.model.dateTime(),
    accepted: utils_1.model.boolean().default(false),
});
//# sourceMappingURL=invite.js.map