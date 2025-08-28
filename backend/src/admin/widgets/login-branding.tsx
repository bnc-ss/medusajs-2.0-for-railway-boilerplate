import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { useEffect } from "react"

const LoginBrandingWidget = () => {
  useEffect(() => {
    // Redirect to our custom login page
    if (window.location.pathname === "/app/login") {
      window.location.href = "/app/access"
    }
  }, [])

  return null
}

export const config = defineWidgetConfig({
  zone: "login.before"
})

export default LoginBrandingWidget