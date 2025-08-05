"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ForgotPasswordEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Have you forgotten your password?" }), (0, jsx_runtime_1.jsx)("p", { children: "We have received a request to reset the password for your Mercur account. Please click the button below to set a new password. Please note, the link is valid for the next 24 hours only." }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: `${data.url}`, children: (0, jsx_runtime_1.jsx)("button", { children: "Reset Password" }) }) }), (0, jsx_runtime_1.jsx)("p", { children: "If you did not request this change, please ignore this email." }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercurjs.com" })] })] }));
};
exports.ForgotPasswordEmailTemplate = ForgotPasswordEmailTemplate;
//# sourceMappingURL=forgot-password.js.map