"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerCanceledOrderEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerCanceledOrderEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["An order #", data.order.display_id, " has been cancelled."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: 24 }, children: [(0, jsx_runtime_1.jsx)("a", { href: data.order_address, style: {
                            display: 'inline-block',
                            padding: '10px 24px',
                            background: '#222',
                            color: '#fff',
                            borderRadius: 6,
                            textDecoration: 'none',
                            fontWeight: 600,
                            marginBottom: 8
                        }, children: "View Order Details" }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#555', marginTop: 8 }, children: ["If you can\u2019t click the button, here\u2019s your link: ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: '#0070f3' }, children: data.order_address })] })] }), (0, jsx_runtime_1.jsx)("p", { children: "If you have any questions, please contact our support team." }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercurjs.com" })] })] }));
};
exports.SellerCanceledOrderEmailTemplate = SellerCanceledOrderEmailTemplate;
//# sourceMappingURL=seller-canceled-order.js.map