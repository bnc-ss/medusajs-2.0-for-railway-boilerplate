"use client"

import { SignInPage, Testimonial } from "@/components/ui/sign-in"
import { login } from "@/lib/data/customer"
import Register from "@/modules/account/components/register"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

export enum LOGIN_VIEW {
  LOG_IN = "log-in",
  REGISTER = "register",
}

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing shopping experience! The checkout process is seamless and the products are exactly as described."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This store has transformed how I shop. Clean design, fast shipping, and excellent customer support."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80",
    name: "Emily Martinez",
    handle: "@emilycreates",
    text: "I've tried many online stores, but this one stands out. Quality products and genuinely helpful service."
  },
];

const LoginTemplate = ({ regions }: { regions: HttpTypes.StoreRegion[] }) => {
  const route = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [showRegister, setShowRegister] = useState(false)

  const [currentView, setCurrentView] = useState<LOGIN_VIEW>(() => {
    const viewFromUrl = searchParams.get("view") as LOGIN_VIEW
    return viewFromUrl && Object.values(LOGIN_VIEW).includes(viewFromUrl)
      ? viewFromUrl
      : LOGIN_VIEW.LOG_IN
  })

  useEffect(() => {
    if (searchParams.has("view")) {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete("view")
      router.replace(
        `${route}${newParams.toString() ? `?${newParams.toString()}` : ""}`,
        { scroll: false }
      )
    }
  }, [searchParams, route, router])

  useEffect(() => {
    setShowRegister(currentView === LOGIN_VIEW.REGISTER)
  }, [currentView])

  const updateView = (view: LOGIN_VIEW) => {
    setCurrentView(view)
    router.push(`/account?view=${view}`)
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    const formData = new FormData(event.currentTarget)
    
    // Map form fields to match existing login expectations
    const email = formData.get('email')
    const password = formData.get('password')
    const rememberMe = formData.get('rememberMe')
    
    if (email) formData.set('email', email)
    if (password) formData.set('password', password)
    if (rememberMe === 'on') formData.set('remember_me', 'on')
    
    startTransition(async () => {
      const result = await login(null, formData)
      if (result) {
        setError(result)
      }
    })
  }

  const handleCreateAccount = () => {
    updateView(LOGIN_VIEW.REGISTER)
  }

  if (showRegister) {
    return (
      <div className="grid grid-cols-1 small:grid-cols-2 gap-2 m-2 min-h-[80vh]">
        <div className="flex justify-center items-center bg-neutral-100 p-6 small:p-0 h-full">
          <Register setCurrentView={updateView} regions={regions} />
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2160&q=80)` }}
          />
        </div>
      </div>
    )
  }

  return (
    <SignInPage
      title={
        <span className="font-light text-neutral-950 tracking-tighter">
          Log in for faster<br />checkout.
        </span>
      }
      description="Access your account and continue shopping with us"
      heroImageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2160&q=80"
      testimonials={sampleTestimonials}
      onSignIn={handleSignIn}
      onGoogleSignIn={() => {
        // Google sign-in not implemented yet
        alert("Google sign-in coming soon!")
      }}
      onResetPassword={() => {
        // Reset password functionality
        router.push("/account/password-reset")
      }}
      onCreateAccount={handleCreateAccount}
    />
  )
}

export default LoginTemplate
