"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutReversal = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_1 = require("./payout");
exports.PayoutReversal = utils_1.model.define('payout_reversal', {
    id: utils_1.model.id({ prefix: 'prev' }).primaryKey(),
    currency_code: utils_1.model.text(),
    amount: utils_1.model.bigNumber(),
    data: utils_1.model.json().nullable(),
    payout: utils_1.model.belongsTo(() => payout_1.Payout, {
        mappedBy: 'reversals'
    })
});
//# sourceMappingURL=payout-reversal.js.map