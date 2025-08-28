import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text, Button, Input, Textarea, Label, toast } from "@medusajs/ui"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RequestAccessPage = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    contactEmail: "",
    phone: "",
    monthlyVolume: "",
    useCase: "",
    additionalNotes: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Request submitted successfully! We'll contact you within 2-3 business days.")
      setIsSubmitting(false)
      // Reset form
      setFormData({
        businessName: "",
        contactEmail: "",
        phone: "",
        monthlyVolume: "",
        useCase: "",
        additionalNotes: ""
      })
      // Navigate back to AI Marketing page after 2 seconds
      setTimeout(() => {
        navigate("/app/ai-marketing")
      }, 2000)
    }, 1500)
  }

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Heading level="h1">Request Access to AI Marketing</Heading>
          <Text className="text-ui-fg-subtle">
            Join the waitlist for our AI-powered marketing tools
          </Text>
        </div>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <div className="grid gap-6">
            {/* Business Information Section */}
            <div className="rounded-lg border border-ui-border-base p-6">
              <Heading level="h2" className="mb-4">Business Information</Heading>
              
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="businessName" className="mb-2">
                    Business Name <span className="text-ui-fg-error">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="contactEmail" className="mb-2">
                      Contact Email <span className="text-ui-fg-error">*</span>
                    </Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      placeholder="email@company.com"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="monthlyVolume" className="mb-2">
                    Estimated Monthly Order Volume
                  </Label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    className="w-full rounded-md border border-ui-border-base bg-ui-bg-base px-3 py-2 text-ui-fg-base focus:border-ui-border-interactive focus:outline-none"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                  >
                    <option value="">Select volume range</option>
                    <option value="0-100">0-100 orders</option>
                    <option value="100-500">100-500 orders</option>
                    <option value="500-1000">500-1,000 orders</option>
                    <option value="1000-5000">1,000-5,000 orders</option>
                    <option value="5000+">5,000+ orders</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Use Case Section */}
            <div className="rounded-lg border border-ui-border-base p-6">
              <Heading level="h2" className="mb-4">How will you use AI Marketing?</Heading>
              
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="useCase" className="mb-2">
                    Primary Use Case <span className="text-ui-fg-error">*</span>
                  </Label>
                  <select
                    id="useCase"
                    name="useCase"
                    className="w-full rounded-md border border-ui-border-base bg-ui-bg-base px-3 py-2 text-ui-fg-base focus:border-ui-border-interactive focus:outline-none"
                    value={formData.useCase}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select primary use case</option>
                    <option value="content-generation">AI Content Generation</option>
                    <option value="email-campaigns">Email Campaign Optimization</option>
                    <option value="analytics">Predictive Analytics</option>
                    <option value="all">All Features</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="additionalNotes" className="mb-2">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Tell us more about your marketing goals and how AI can help..."
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="rounded-lg bg-ui-bg-subtle p-6">
              <Heading level="h3" className="mb-3">What you'll get with AI Marketing:</Heading>
              <ul className="space-y-2 text-ui-fg-subtle">
                <li className="flex items-start">
                  <span className="mr-2 text-ui-fg-interactive">✓</span>
                  Automated product description generation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ui-fg-interactive">✓</span>
                  Smart email campaign templates
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ui-fg-interactive">✓</span>
                  Customer behavior predictions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ui-fg-interactive">✓</span>
                  Performance analytics dashboard
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ui-fg-interactive">✓</span>
                  Priority support from our AI team
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/app/ai-marketing")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </div>
        </form>
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