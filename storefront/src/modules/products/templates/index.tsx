import { HttpTypes } from "@medusajs/types"
import ImageGallery from "@/modules/products/components/image-gallery"
import ProductActions from "@/modules/products/components/product-actions"
import ProductTabs from "@/modules/products/components/product-tabs"
import RelatedProducts from "@/modules/products/components/related-products"
import ProductInfo from "@/modules/products/templates/product-info"
import SkeletonRelatedProducts from "@/modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import React, { Suspense } from "react"
import ProductActionsWrapper from "./product-actions-wrapper"
import ProductFacts from "../components/product-facts"
import { B2BCustomer } from "@/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  customer?: B2BCustomer | null
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  customer,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-y-4 small:gap-y-8 my-2 small:my-6">
      <div
        className="content-container flex flex-col small:grid small:grid-cols-2 gap-4 small:gap-8 w-full"
        data-testid="product-container"
      >
        <div className="order-1">
          <ImageGallery product={product} />
        </div>
        <div className="order-2 flex flex-col bg-neutral-100 w-full gap-4 small:gap-6 items-start justify-center p-4 small:p-8 medium:p-20">
          <ProductInfo product={product} customer={customer} />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} customer={customer} />
          </Suspense>
          <ProductFacts product={product} />
        </div>
      </div>
      <div className="content-container px-4 small:px-0">
        <ProductTabs product={product} />
      </div>
      <div
        className="content-container px-4 small:px-0"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
