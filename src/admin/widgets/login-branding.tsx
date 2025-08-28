import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Text } from "@medusajs/ui"

const LoginBrandingWidget = () => {
  return (
    <Container className="mb-6 text-center p-0">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-ui-fg-base">
          Welcome to BoxNCase Partners
        </h1>
        <Text className="text-ui-fg-subtle">
          Access your vendor dashboard and manage your business
        </Text>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "login.before"
})

export default LoginBrandingWidget