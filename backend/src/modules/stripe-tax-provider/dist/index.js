"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeTaxProvider = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("@medusajs/utils");
const service_1 = __importDefault(require("./service"));
exports.StripeTaxProvider = service_1.default;
exports.default = (0, utils_2.ModuleProvider)(utils_1.Modules.TAX, {
    services: [service_1.default],
});
//# sourceMappingURL=index.js.map