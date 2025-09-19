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
            <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="w-full">
                Learn More
              </Button>
            </a>
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
            <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="w-full">
                Learn More
              </Button>
            </a>
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
            <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="w-full">
                Learn More
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-ui-bg-subtle p-6">
          <Heading level="h2" className="mb-3">Learn More About AI Marketing</Heading>
          <Text className="text-ui-fg-subtle mb-4">
            Discover how our AI Marketing suite can help transform your business with powerful 
            tools designed for growth and efficiency.
          </Text>
          <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              Visit Marketing Portal
            </Button>
          </a>
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