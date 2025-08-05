"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payout = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_account_1 = require("./payout-account");
const payout_reversal_1 = require("./payout-reversal");
exports.Payout = utils_1.model.define('payout', {
    id: utils_1.model.id({ prefix: 'pout' }).primaryKey(),
    currency_code: utils_1.model.text(),
    amount: utils_1.model.bigNumber(),
    data: utils_1.model.json().nullable(),
    payout_account: utils_1.model.belongsTo(() => payout_account_1.PayoutAccount, {
        mappedBy: 'payouts'
    }),
    reversals: utils_1.model.hasMany(() => payout_reversal_1.PayoutReversal)
});
//# sourceMappingURL=payout.js.map