"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerNewOrderEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerNewOrderEmailTemplate = ({ data }) => {
    const { order } = data;
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: '2rem', marginBottom: 8 }, children: ["Hello, ", order.seller.name, "!", (0, jsx_runtime_1.jsx)("br", {}), "You have received a new order!"] }), (0, jsx_runtime_1.jsxs)("p", { style: { fontSize: '1.1rem', marginBottom: 24 }, children: ["Order ", (0, jsx_runtime_1.jsxs)("b", { children: ["#", order.display_id] }), " has just been placed by ", order.customer.first_name, " ", order.customer.last_name, "."] }), (0, jsx_runtime_1.jsx)("h3", { style: { marginTop: 32, marginBottom: 12 }, children: "Order items:" }), (0, jsx_runtime_1.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse', marginBottom: 32 }, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { textAlign: 'left', padding: '8px', borderBottom: '1px solid #eee' }, children: "Product" }), (0, jsx_runtime_1.jsx)("th", { style: { textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }, children: "Amount" }), (0, jsx_runtime_1.jsx)("th", { style: { textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }, children: "Qty" }), (0, jsx_runtime_1.jsx)("th", { style: { textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }, children: "Total" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: order.items.map((item, idx) => ((0, jsx_runtime_1.jsxs)("tr", { style: { borderBottom: '1px solid #f3f3f3' }, children: [(0, jsx_runtime_1.jsx)("td", { style: { padding: '12px 8px', verticalAlign: 'top' }, children: (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center' }, children: [item.thumbnail && ((0, jsx_runtime_1.jsx)("img", { src: item.thumbnail, alt: item.product_title, style: {
                                                    width: 48,
                                                    height: 48,
                                                    objectFit: 'cover',
                                                    borderRadius: 6,
                                                    marginRight: 12,
                                                    border: '1px solid #eee'
                                                } })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: item.product_title }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#555' }, children: ["Variant: ", item.variant_title] })] })] }) }), (0, jsx_runtime_1.jsxs)("td", { style: { textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }, children: [item.unit_price, " eur"] }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }, children: item.quantity }), (0, jsx_runtime_1.jsxs)("td", { style: { textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }, children: [item.unit_price * item.quantity, " eur"] })] }, item.id || idx))) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#888', marginBottom: 24 }, children: ["You received this email because you are a seller on the Mercur marketplace.", (0, jsx_runtime_1.jsx)("br", {}), "If you have any questions, please contact our support team."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.SellerNewOrderEmailTemplate = SellerNewOrderEmailTemplate;
//# sourceMappingURL=seller-new-order.js.map