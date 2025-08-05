"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Request = utils_1.model.define('request', {
    id: utils_1.model.id({ prefix: 'req' }).primaryKey(),
    type: utils_1.model.text(),
    data: utils_1.model.json(),
    submitter_id: utils_1.model.text(),
    reviewer_id: utils_1.model.text().nullable(),
    reviewer_note: utils_1.model.text().nullable(),
    status: utils_1.model
        .enum(['draft', 'pending', 'accepted', 'rejected'])
        .default('pending')
});
//# sourceMappingURL=request.js.map