"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onboarding = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_account_1 = require("./payout-account");
exports.Onboarding = utils_1.model.define('onboarding', {
    id: utils_1.model.id({ prefix: 'onb' }).primaryKey(),
    data: utils_1.model.json().nullable(),
    context: utils_1.model.json().nullable(),
    payout_account: utils_1.model.belongsTo(() => payout_account_1.PayoutAccount, {
        mappedBy: 'onboarding'
    })
});
//# sourceMappingURL=onboarding.js.map