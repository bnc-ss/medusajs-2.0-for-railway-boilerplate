"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerProductRejectedEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerProductRejectedEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: '2rem', marginBottom: 8 }, children: ["Hello ", (0, jsx_runtime_1.jsx)("span", { role: "img", "aria-label": "wave", children: "\uD83D\uDC4B" })] }), (0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: '2rem', marginBottom: 8 }, children: ["We regret to inform you that your product ", data.product_title, " has been rejected."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.SellerProductRejectedEmailTemplate = SellerProductRejectedEmailTemplate;
//# sourceMappingURL=seller-product-rejected.js.map