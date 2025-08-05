"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./models/attribute"));
const attribute_possible_value_1 = __importDefault(require("./models/attribute-possible-value"));
const attribute_value_1 = __importDefault(require("./models/attribute-value"));
class AttributeModuleService extends (0, utils_1.MedusaService)({
    Attribute: attribute_1.default,
    AttributeValue: attribute_value_1.default,
    AttributePossibleValue: attribute_possible_value_1.default,
}) {
    constructor({ attributeRepository, attributePossibleValueRepository, }) {
        super(...arguments);
        this.attributeRepository_ = attributeRepository;
        this.attributePossibleValueRepository_ = attributePossibleValueRepository;
    }
    /**
     *
     * @param input
     * @param sharedContext
     *
     * Useful to update attribute, allowing to upsert possible_values in the same operation. If "id"
     * is not provided for "possible_values" entries, it will lookup the DB by attributePossibleValue.value,
     * to update or create accordingly.
     *
     * Assumes caller will eventually refetch entities, for now, to reduce complexity of this
     * method and concentrate on upserting like ProductOption - ProductOptionValue from Medusa
     */
    async updateAttributeWithUpsertOrReplacePossibleValues(input, sharedContext) {
        const normalizedInput = Array.isArray(input) ? input : [input];
        return this.updateAttributeWithUpsertOrReplacePossibleValues_(normalizedInput, sharedContext);
    }
    async updateAttributeWithUpsertOrReplacePossibleValues_(input, sharedContext) {
        const upsertedValues = await this.attributePossibleValueRepository_.upsert(input.flatMap((element) => element.possible_values), sharedContext);
        const attributesInput = input.map((toUpdate) => {
            const { ...attribute } = toUpdate;
            return {
                ...attribute,
                possible_values: upsertedValues
                    .filter((val) => val.attribute_id === attribute.id)
                    .map((upserted) => ({ id: upserted.id })),
            };
        });
        return this.attributeRepository_.upsertWithReplace(attributesInput, { relations: ["possible_values"] }, sharedContext);
    }
}
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttributeModuleService.prototype, "updateAttributeWithUpsertOrReplacePossibleValues", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], AttributeModuleService.prototype, "updateAttributeWithUpsertOrReplacePossibleValues_", null);
exports.default = AttributeModuleService;
//# sourceMappingURL=service.js.map