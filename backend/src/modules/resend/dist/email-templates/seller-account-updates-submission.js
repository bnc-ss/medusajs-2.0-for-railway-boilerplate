"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerAccountSubmissionEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerAccountSubmissionEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", data.user_name, " \uD83D\uDC4B"] }), (0, jsx_runtime_1.jsx)("p", { children: "We are thrilled about your interest in collaborating with us." }), (0, jsx_runtime_1.jsx)("p", { children: "Your application is currently being reviewed by our team. Please expect a response within [three] business days. If your submission meets our criteria and is accepted, you will receive a confirmation email from us." }), (0, jsx_runtime_1.jsx)("p", { children: "In the meantime, if you have any questions or need further assistance, feel free to reach out to us." }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.SellerAccountSubmissionEmailTemplate = SellerAccountSubmissionEmailTemplate;
//# sourceMappingURL=seller-account-updates-submission.js.map