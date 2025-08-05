"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSellerInviteEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NewSellerInviteEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            background: '#fff',
            padding: 24,
            borderRadius: 10
        }, children: [(0, jsx_runtime_1.jsx)("h1", { style: { fontSize: '2rem', marginBottom: '8px' }, children: "You are invited to sell on MercurJS!" }), (0, jsx_runtime_1.jsxs)("p", { style: { fontSize: '1.1rem', marginBottom: '16px' }, children: ["To join the platform, please accept the invitation.", (0, jsx_runtime_1.jsx)("br", {})] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: 24 }, children: [(0, jsx_runtime_1.jsx)("a", { href: `${data.url}`, style: {
                            display: 'inline-block',
                            padding: '10px 24px',
                            background: '#222',
                            color: '#fff',
                            borderRadius: 6,
                            textDecoration: 'none',
                            fontWeight: 600,
                            marginBottom: 8
                        }, children: "Accept Invitation" }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#555', marginTop: 8 }, children: ["If you can\u2019t click the button, here\u2019s your link: ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: '#0070f3' }, children: `${data.url}` })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: '#888', marginBottom: 24 }, children: ["You received this email because you were invited to join the Mercur marketplace.", (0, jsx_runtime_1.jsx)("br", {}), "If you have any questions, please contact our support team."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: '#888', marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.NewSellerInviteEmailTemplate = NewSellerInviteEmailTemplate;
//# sourceMappingURL=new-seller-invitation.js.map