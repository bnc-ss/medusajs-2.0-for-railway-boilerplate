import { defineRouteConfig } from "@medusajs/admin-sdk"
import GlobalAdminStyles from "./components/global-layout"

const customRouteConfig = defineRouteConfig({
  routes: [
    {
      path: "/companies",
      page: () => import("./routes/companies/page"),
      label: "Companies",
    },
    {
      path: "/companies/:companyId",
      page: () => import("./routes/companies/[companyId]/page"),
    },
    {
      path: "/quotes",
      page: () => import("./routes/quotes/page"),
      label: "Quotes", 
    },
    {
      path: "/quotes/:quoteId",
      page: () => import("./routes/quotes/[quoteId]/page"),
    },
    {
      path: "/quotes/:quoteId/manage",
      page: () => import("./routes/quotes/[quoteId]/manage/page"),
    },
    {
      path: "/approvals",
      page: () => import("./routes/approvals/page"),
      label: "Approvals",
    },
    {
      path: "/boxncase-ai",
      page: () => import("./routes/boxncase-ai/page"),
      label: "BoxNCaseAI Marketer",
    },
  ],
  widgets: [
    {
      zone: "product.list.before",
      widget: {
        Component: GlobalAdminStyles,
      },
    },
  ],
})

export default customRouteConfig