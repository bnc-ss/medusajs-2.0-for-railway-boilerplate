"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutAccount = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
const onboarding_1 = require("./onboarding");
const payout_1 = require("./payout");
exports.PayoutAccount = utils_1.model.define("payout_account", {
    id: utils_1.model.id({ prefix: "pacc" }).primaryKey(),
    status: utils_1.model.enum(framework_1.PayoutAccountStatus).default(framework_1.PayoutAccountStatus.PENDING),
    reference_id: utils_1.model.text(),
    data: utils_1.model.json(),
    context: utils_1.model.json().nullable(),
    onboarding: utils_1.model.hasOne(() => onboarding_1.Onboarding).nullable(),
    payouts: utils_1.model.hasMany(() => payout_1.Payout),
});
//# sourceMappingURL=payout-account.js.map