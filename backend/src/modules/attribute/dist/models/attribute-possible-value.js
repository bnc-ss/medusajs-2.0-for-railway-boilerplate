"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./attribute"));
const AttributePossibleValue = utils_1.model
    .define('attribute_possible_value', {
    id: utils_1.model.id({ prefix: 'attr_pos_val' }).primaryKey(),
    value: utils_1.model.text(),
    rank: utils_1.model.number(),
    metadata: utils_1.model.json().nullable(),
    attribute: utils_1.model.belongsTo(() => attribute_1.default, {
        mappedBy: 'possible_values'
    })
})
    .indexes([
    {
        on: ['attribute_id', 'value'],
        name: 'UQ_attribute_id_value',
        unique: true
    }
]);
exports.default = AttributePossibleValue;
//# sourceMappingURL=attribute-possible-value.js.map