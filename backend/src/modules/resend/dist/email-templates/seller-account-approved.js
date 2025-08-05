"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerAccountApprovedEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerAccountApprovedEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: '2rem', marginBottom: 8 }, children: ["Hello, ", data.user_name, " ", (0, jsx_runtime_1.jsx)("span", { role: "img", "aria-label": "wave", children: "\uD83D\uDC4B" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '1.5rem', fontWeight: 600 }, children: "Your account has been approved!" })] }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: '1.1rem', marginBottom: 16 }, children: "We\u2019re happy to let you know that your application has been approved! This means your account is now activated on the Mercur marketplace." }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: '1.1rem', marginBottom: 24 }, children: "Thank you for choosing us. We are excited about your success and will support you every step of the way." }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#888', marginBottom: 24 }, children: ["You received this email because you registered as a seller on the Mercur marketplace.", (0, jsx_runtime_1.jsx)("br", {}), "If you have any questions, please contact our support team."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.SellerAccountApprovedEmailTemplate = SellerAccountApprovedEmailTemplate;
//# sourceMappingURL=seller-account-approved.js.map