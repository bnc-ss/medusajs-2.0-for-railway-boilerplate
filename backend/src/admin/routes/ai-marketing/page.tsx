import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Sparkles } from "@medusajs/icons"
import { Container, Heading, Text, Button } from "@medusajs/ui"
import { Link } from "react-router-dom"

const AIMarketingPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Heading level="h1">AI Marketing</Heading>
          <Text className="text-ui-fg-subtle">
            Leverage AI-powered tools to optimize your marketing campaigns
          </Text>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Content Generation Card */}
          <div className="rounded-lg border border-ui-border-base p-6 hover:shadow-elevation-card-hover transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ui-bg-component">
              <Sparkles className="text-ui-fg-base" />
            </div>
            <Heading level="h3" className="mb-2">AI Content Generation</Heading>
            <Text className="text-ui-fg-subtle mb-4">
              Create compelling product descriptions and marketing copy with AI
            </Text>
            <Link to="/app/ai-marketing/request-access">
              <Button variant="secondary" className="w-full">
                Request Access
              </Button>
            </Link>
          </div>

          {/* Smart Campaign Optimizer Card */}
          <div className="rounded-lg border border-ui-border-base p-6 hover:shadow-elevation-card-hover transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ui-bg-component">
              <Sparkles className="text-ui-fg-base" />
            </div>
            <Heading level="h3" className="mb-2">Smart Campaign Optimizer</Heading>
            <Text className="text-ui-fg-subtle mb-4">
              Optimize your email campaigns with AI-driven insights
            </Text>
            <Link to="/app/ai-marketing/request-access">
              <Button variant="secondary" className="w-full">
                Request Access
              </Button>
            </Link>
          </div>

          {/* Predictive Analytics Card */}
          <div className="rounded-lg border border-ui-border-base p-6 hover:shadow-elevation-card-hover transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ui-bg-component">
              <Sparkles className="text-ui-fg-base" />
            </div>
            <Heading level="h3" className="mb-2">Predictive Analytics</Heading>
            <Text className="text-ui-fg-subtle mb-4">
              Forecast trends and customer behavior with AI analytics
            </Text>
            <Link to="/app/ai-marketing/request-access">
              <Button variant="secondary" className="w-full">
                Request Access
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-ui-bg-subtle p-6">
          <Heading level="h2" className="mb-3">Coming Soon</Heading>
          <Text className="text-ui-fg-subtle">
            Our AI Marketing suite is currently in beta. Request access to be among the first vendors 
            to leverage these powerful tools for your business growth.
          </Text>
        </div>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "AI Marketing",
  icon: Sparkles,
})

export const handle = {
  breadcrumb: () => "AI Marketing",
}

export default AIMarketingPage