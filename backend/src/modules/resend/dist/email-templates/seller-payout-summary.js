"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerPayoutSummaryEmailTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SellerPayoutSummaryEmailTemplate = ({ data }) => {
    const { seller, payouts } = data;
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            maxWidth: 600,
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
            color: "#222",
            background: "#fff",
            padding: 24,
            borderRadius: 10,
        }, children: [(0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: "2rem", marginBottom: 8 }, children: ["Hello, ", seller.name, "!", (0, jsx_runtime_1.jsx)("br", {}), "You have received new transfers to your Stripe account!"] }), (0, jsx_runtime_1.jsx)("h3", { style: { marginTop: 32, marginBottom: 12 }, children: "Transfer list:" }), (0, jsx_runtime_1.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse", marginBottom: 32 }, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: {
                                        textAlign: "left",
                                        padding: "8px",
                                        borderBottom: "1px solid #eee",
                                    }, children: "Order" }), (0, jsx_runtime_1.jsx)("th", { style: {
                                        textAlign: "right",
                                        padding: "8px",
                                        borderBottom: "1px solid #eee",
                                    }, children: "Amount" }), (0, jsx_runtime_1.jsx)("th", { style: {
                                        textAlign: "right",
                                        padding: "8px",
                                        borderBottom: "1px solid #eee",
                                    }, children: "Date" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: payouts.map((payout, idx) => ((0, jsx_runtime_1.jsxs)("tr", { style: { borderBottom: "1px solid #f3f3f3" }, children: [(0, jsx_runtime_1.jsx)("td", { style: { padding: "12px 8px", verticalAlign: "top" }, children: (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", alignItems: "center" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { fontWeight: 600 }, children: ["Order #", payout.order.display_id] }) }) }), (0, jsx_runtime_1.jsxs)("td", { style: {
                                        textAlign: "right",
                                        padding: "12px 8px",
                                        verticalAlign: "top",
                                    }, children: [payout.amount, " ", payout.currency_code] }), (0, jsx_runtime_1.jsx)("td", { style: {
                                        textAlign: "right",
                                        padding: "12px 8px",
                                        verticalAlign: "top",
                                    }, children: payout.order.created_at.toISOString() })] }, idx))) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 13, color: "#888", marginBottom: 24 }, children: ["You received this email because you are a seller on the Mercur marketplace.", (0, jsx_runtime_1.jsx)("br", {}), "If you have any questions, please contact our support team."] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 32 }, children: [(0, jsx_runtime_1.jsx)("div", { children: "Best regards," }), (0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 600 }, children: "The Mercur Team" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#888", marginTop: 4 }, children: "mercur.js" })] })] }));
};
exports.SellerPayoutSummaryEmailTemplate = SellerPayoutSummaryEmailTemplate;
//# sourceMappingURL=seller-payout-summary.js.map