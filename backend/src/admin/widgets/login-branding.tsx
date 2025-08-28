import { defineWidgetConfig } from "@medusajs/admin-sdk"

const LoginBrandingWidget = () => {
  // This widget is no longer needed since we're overriding the login route directly
  return null
}

export const config = defineWidgetConfig({
  zone: "login.before"
})

export default LoginBrandingWidget