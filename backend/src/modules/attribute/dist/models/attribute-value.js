"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./attribute"));
const AttributeValue = utils_1.model.define('attribute_value', {
    id: utils_1.model.id({ prefix: 'attr_val' }).primaryKey(),
    value: utils_1.model.text(),
    rank: utils_1.model.number(),
    metadata: utils_1.model.json().nullable(),
    attribute: utils_1.model.belongsTo(() => attribute_1.default, {
        mappedBy: 'values'
    })
});
exports.default = AttributeValue;
//# sourceMappingURL=attribute-value.js.map