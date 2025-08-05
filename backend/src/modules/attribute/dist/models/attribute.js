"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@boxncase/framework");
const attribute_possible_value_1 = __importDefault(require("./attribute-possible-value"));
const attribute_value_1 = __importDefault(require("./attribute-value"));
const Attribute = utils_1.model
    .define("attribute", {
    id: utils_1.model.id({ prefix: "attr" }).primaryKey(),
    name: utils_1.model.text().searchable(),
    description: utils_1.model.text().nullable(),
    is_filterable: utils_1.model.boolean().default(true),
    handle: utils_1.model.text().unique(),
    metadata: utils_1.model.json().nullable(),
    ui_component: utils_1.model
        .enum(Object.values(framework_1.AttributeUIComponent))
        .default(framework_1.AttributeUIComponent.SELECT),
    values: utils_1.model.hasMany(() => attribute_value_1.default),
    possible_values: utils_1.model.hasMany(() => attribute_possible_value_1.default),
})
    .cascades({
    delete: ["values", "possible_values"],
});
exports.default = Attribute;
//# sourceMappingURL=attribute.js.map