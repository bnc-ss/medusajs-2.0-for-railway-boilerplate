import { listRegions } from "@/lib/data/regions"
import { retrieveCustomer } from "@/lib/data/customer"
import FeaturedProducts from "@/modules/home/components/featured-products"
import Hero from "@/modules/home/components/hero"
import FeaturedIn from "@/modules/home/components/featured-in"
import FindUs from "@/modules/home/components/find-us"
import Founder from "@/modules/home/components/founder"
import ProductShowcase from "@/modules/home/components/product-showcase"
import Collaborations from "@/modules/home/components/collaborations"
import IngredientsProcess from "@/modules/home/components/ingredients-process"
import VideoSection from "@/modules/home/components/video-section"
import SkeletonFeaturedProducts from "@/modules/skeletons/templates/skeleton-featured-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const dynamicParams = true

export const metadata: Metadata = {
  title: "Monty's B2B Portal - Pure Plant-Based Dairy Essentials",
  description:
    "Shop wholesale pure plant-based cream cheese & butter made with cashews. The cleanest ingredients for really living.",
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then(
    (regions) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )
  return countryCodes.map((countryCode) => ({ countryCode }))
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params
  const customer = await retrieveCustomer().catch(() => null)

  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedIn />
      <ProductShowcase />
      <FindUs />
      <VideoSection />
      <Founder />
      <IngredientsProcess />
      <Collaborations />
      <Suspense fallback={<SkeletonFeaturedProducts />}>
        <FeaturedProducts countryCode={countryCode} customer={customer} />
      </Suspense>
    </div>
  )
}
