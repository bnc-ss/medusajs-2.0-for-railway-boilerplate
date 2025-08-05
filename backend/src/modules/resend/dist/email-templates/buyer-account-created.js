"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerAccountCreatedEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BuyerAccountCreatedEmailTemplate = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: "480px",
            margin: "40px auto",
            padding: "32px 24px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            fontFamily: "Arial, sans-serif",
            color: "#222",
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: "2rem", marginBottom: "16px", color: "#222" }, children: ["Welcome to Mercur, ", data.user_name, "!"] }), (0, jsx_runtime_1.jsxs)("p", { style: { fontSize: "1.1rem", marginBottom: "24px" }, children: ["We\u2019re excited to have you join us on this journey.", (0, jsx_runtime_1.jsx)("br", {}), "Your account has been created successfully."] }), (0, jsx_runtime_1.jsx)("a", { href: "https://mercurjs.com", style: {
                    display: "inline-block",
                    padding: "12px 28px",
                    background: "#222",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 600,
                    marginBottom: "32px",
                }, children: "Visit Mercur" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#888", marginTop: 4 }, children: "mercurjs.com" })] })] }));
};
exports.BuyerAccountCreatedEmailTemplate = BuyerAccountCreatedEmailTemplate;
//# sourceMappingURL=buyer-account-created.js.map