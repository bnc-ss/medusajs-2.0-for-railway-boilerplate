"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvgRating = getAvgRating;
exports.getSellersWithRating = getSellersWithRating;
exports.getProductsWithRating = getProductsWithRating;
async function getAvgRating(container, type, id) {
    const knex = container.resolve('__pg_connection__');
    const joinField = type === 'product' ? 'product_id' : 'seller_id';
    const joinTable = type === 'product'
        ? 'product_product_review_review'
        : 'seller_seller_review_review';
    const [result] = await knex('review')
        .avg('review.rating')
        .leftJoin(joinTable, `${joinTable}.review_id`, 'review.id')
        .where(`${joinTable}.${joinField}`, id);
    return result.avg;
}
async function getSellersWithRating(container, fields) {
    const knex = container.resolve('__pg_connection__');
    const result = await knex
        .select(...fields.map((f) => `seller.${f}`))
        .avg('review.rating as rating')
        .from('product')
        .leftJoin('seller_seller_review_review', 'seller.id', 'seller_seller_review_review.product_id')
        .leftJoin('review', 'review.id', 'seller_seller_review_review.review_id')
        .groupBy('seller.id');
    return result;
}
async function getProductsWithRating(container, fields) {
    const knex = container.resolve('__pg_connection__');
    const result = await knex
        .select(...fields.map((f) => `product.${f}`))
        .avg('review.rating as rating')
        .from('product')
        .leftJoin('product_product_review_review', 'product.id', 'product_product_review_review.product_id')
        .leftJoin('review', 'review.id', 'product_product_review_review.review_id')
        .groupBy('product.id');
    return result;
}
//# sourceMappingURL=utils.js.map