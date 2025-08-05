"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerEmailVerifyEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerEmailVerifyEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", data.user_name, " \uD83D\uDC4B", (0, jsx_runtime_1.jsx)("br", {}), "Thank you for submiting your account to Mercur Marketplace"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Before we proceed with account submission there is but one last thing to do - verify your email. Please ", (0, jsx_runtime_1.jsx)("a", { href: data.link, children: "click here" }), " to verify your email."] }), (0, jsx_runtime_1.jsx)("p", { children: "Thank you for choosing us. We are excited about you joining us and will support you every step of the way." }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercurjs.com" })] })] }));
};
exports.SellerEmailVerifyEmailTemplate = SellerEmailVerifyEmailTemplate;
//# sourceMappingURL=seller-verify-email.js.map