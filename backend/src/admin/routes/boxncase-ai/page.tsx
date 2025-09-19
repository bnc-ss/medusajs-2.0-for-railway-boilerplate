import { Container, Heading, Text, Button } from "@medusajs/ui"

const BoxNCaseAIPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-2">
        <Heading level="h1">BoxNCaseAI Marketer</Heading>
        <Text className="text-ui-fg-subtle">
          Request access to BoxNCaseAI Marketer features
        </Text>
      </div>
      
      <div className="mt-8">
        <div className="bg-ui-bg-subtle rounded-lg p-6">
          <Heading level="h2" className="mb-4">Discover BoxNCaseAI Marketer</Heading>
          <Text className="mb-4">
            BoxNCaseAI Marketer provides powerful AI-driven marketing tools and automation 
            designed specifically for your B2B e-commerce platform.
          </Text>
          <a href="https://marketing.boxncase.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="primary">
              Visit Marketing Portal
            </Button>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default BoxNCaseAIPage