"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultReviewSettings = exports.defaultProductSettings = void 0;
const algoliasearch_1 = require("algoliasearch");
exports.defaultProductSettings = {
    searchableAttributes: [
        "title",
        "subtitle",
        "brand.name",
        "tags.value",
        "type.value",
        "categories.name",
        "collection.title",
        "variants.title",
    ],
};
exports.defaultReviewSettings = {
    attributesForFaceting: ["filterOnly(reference_id)", "filterOnly(reference)"],
};
class AlgoliaModuleService {
    constructor(_, options) {
        this.options_ = options;
        this.algolia_ = (0, algoliasearch_1.algoliasearch)(this.options_.appId, this.options_.apiKey);
    }
    getAppId() {
        return this.options_.appId;
    }
    checkIndex(index) {
        return this.algolia_.indexExists({
            indexName: index,
        });
    }
    updateSettings(index, settings) {
        return this.algolia_.setSettings({
            indexName: index,
            indexSettings: settings,
        });
    }
    batch(type, toAdd, toDelete) {
        const requests = toAdd.map((entity) => {
            return {
                action: "addObject",
                objectID: entity.id,
                body: entity,
            };
        });
        requests.concat(toDelete.map((id) => {
            return {
                action: "deleteObject",
                objectID: id,
                body: {},
            };
        }));
        return this.algolia_.batch({
            indexName: type,
            batchWriteParams: {
                requests,
            },
        });
    }
    batchUpsert(type, entities) {
        return this.algolia_.batch({
            indexName: type,
            batchWriteParams: {
                requests: entities.map((entity) => {
                    return {
                        action: "addObject",
                        objectID: entity.id,
                        body: entity,
                    };
                }),
            },
        });
    }
    batchDelete(type, ids) {
        return this.algolia_.batch({
            indexName: type,
            batchWriteParams: {
                requests: ids.map((id) => {
                    return {
                        action: "deleteObject",
                        objectID: id,
                        body: {},
                    };
                }),
            },
        });
    }
    upsert(type, entity) {
        return this.algolia_.addOrUpdateObject({
            indexName: type,
            objectID: entity.id,
            body: entity,
        });
    }
    delete(type, id) {
        return this.algolia_.deleteObject({
            indexName: type,
            objectID: id,
        });
    }
    partialUpdate(type, entity) {
        return this.algolia_.partialUpdateObject({
            indexName: type,
            objectID: entity.id,
            attributesToUpdate: { ...entity },
        });
    }
}
exports.default = AlgoliaModuleService;
//# sourceMappingURL=service.js.map