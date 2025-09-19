import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text, Button } from "@medusajs/ui"
import { useEffect } from "react"

const RequestAccessPage = () => {
  useEffect(() => {
    // Redirect to marketing portal
    window.location.href = "https://marketing.boxncase.com"
  }, [])

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-center px-6 py-12">
        <div className="text-center">
          <Heading level="h1" className="mb-4">Redirecting to Marketing Portal</Heading>
          <Text className="text-ui-fg-subtle mb-6">
            You're being redirected to our marketing portal where you can learn more about our AI-powered tools.
          </Text>
          <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              Go to Marketing Portal
            </Button>
          </a>
        </div>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Request Access",
})

export const handle = {
  breadcrumb: () => "Request Access",
}

export default RequestAccessPage