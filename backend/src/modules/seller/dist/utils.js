"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSellerCustomers = selectSellerCustomers;
exports.selectCustomerOrders = selectCustomerOrders;
exports.selectOrdersChartData = selectOrdersChartData;
exports.selectCustomersChartData = selectCustomersChartData;
const utils_1 = require("@medusajs/framework/utils");
async function selectSellerCustomers(container, seller_id, pagination, fields = ['*']) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const customers = await knex
        .select('id')
        .from('customer')
        .whereIn('customer.id', function () {
        this.distinct('customer_id')
            .from('order')
            .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
            .where('seller_id', seller_id);
    });
    const { data, metadata } = await query.graph({
        entity: 'customer',
        fields,
        filters: {
            id: customers.map((c) => c.id)
        },
        pagination
    });
    return { customers: data, count: metadata?.count };
}
async function selectCustomerOrders(container, seller_id, customer_id, pagination, fields = ['*']) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const orders = await knex
        .select(fields.map((f) => `order.${f}`))
        .from('order')
        .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
        .where('order.customer_id', customer_id)
        .andWhere('seller_seller_order_order.seller_id', seller_id)
        .limit(pagination.take)
        .offset(pagination.skip);
    const countResult = (await knex
        .countDistinct('order.id')
        .from('order')
        .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
        .where('order.customer_id', customer_id)
        .andWhere('seller_seller_order_order.seller_id', seller_id));
    return { orders, count: parseInt(countResult[0]?.count || '0') };
}
async function selectOrdersChartData(container, seller_id, time_range) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const result = await knex('seller_seller_order_order')
        .select(knex.raw(`DATE_TRUNC('DAY', "created_at") AS date`))
        .count('*')
        .where('seller_id', seller_id)
        .andWhereBetween('created_at', time_range)
        .groupByRaw('date')
        .orderByRaw('date asc');
    return result;
}
async function selectCustomersChartData(container, seller_id, time_range) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const result = await knex
        .with('customer_first_orders', (qb) => {
        qb.select('customer_id')
            .select(knex.raw('MIN(seller_seller_order_order.created_at) as first_order_date'))
            .from('order')
            .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
            .where('seller_id', seller_id)
            .groupBy('customer_id');
    })
        .select(knex.raw(`DATE_TRUNC('DAY', "first_order_date") AS date`))
        .count('*')
        .from('customer_first_orders')
        .whereBetween('first_order_date', time_range)
        .groupByRaw('date')
        .orderByRaw('date asc');
    return result;
}
//# sourceMappingURL=utils.js.map