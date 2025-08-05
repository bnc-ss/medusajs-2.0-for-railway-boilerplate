"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultReviewSettings = exports.defaultProductSettings = exports.AlgoliaModuleService = exports.ALGOLIA_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.AlgoliaModuleService = service_1.default;
exports.ALGOLIA_MODULE = "algolia";
var service_2 = require("./service");
Object.defineProperty(exports, "defaultProductSettings", { enumerable: true, get: function () { return service_2.defaultProductSettings; } });
Object.defineProperty(exports, "defaultReviewSettings", { enumerable: true, get: function () { return service_2.defaultReviewSettings; } });
exports.default = (0, utils_1.Module)(exports.ALGOLIA_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=index.js.map