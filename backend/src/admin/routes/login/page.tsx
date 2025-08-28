import { SignInPage, Testimonial } from "../../components/ui/sign-in"
import { useState } from "react"
import { toast } from "@medusajs/ui"

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80",
    name: "Sarah Chen",
    handle: "@chenelectronics",
    text: "BoxNCase has streamlined our B2B operations. The vendor dashboard is intuitive and saves us hours daily."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80",
    name: "Marcus Johnson",
    handle: "@techsupplyco",
    text: "As a vendor partner, the platform has transformed how we manage inventory and process bulk orders."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80",
    name: "Emily Martinez",
    handle: "@industrialparts",
    text: "The B2B features and vendor tools have made BoxNCase our primary distribution platform. Highly recommend!"
  },
];

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      // Use the Medusa admin auth endpoint
      const response = await fetch('/auth/user/emailpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      })

      if (response.ok) {
        // Success - redirect to dashboard
        window.location.href = '/app/orders'
      } else {
        const error = await response.json()
        toast.error(error.message || "Invalid email or password")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      toast.error("An error occurred during sign in. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    toast.info("Google sign-in coming soon!")
  }
  
  const handleResetPassword = () => {
    window.location.href = "/app/reset-password"
  }

  const handleCreateAccount = () => {
    toast.info("Please contact your administrator to create an account.")
  }

  return (
    <div className="fixed inset-0 z-50">
      <SignInPage
        title={
          <span className="font-light text-ui-fg-base tracking-tighter">
            Welcome to BoxNCase Partners
          </span>
        }
        description="Access your vendor dashboard and manage your business"
        heroImageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2160&q=80"
        testimonials={sampleTestimonials}
        onSignIn={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  )
}

export default LoginPage