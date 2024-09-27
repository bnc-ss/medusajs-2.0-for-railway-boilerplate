import { getProductsById } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import PreviewAddToCart from "./preview-add-to-cart"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  console.log({ variants: pricedProduct?.variants })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  const inventoryQuantity = pricedProduct.variants?.reduce((acc, variant) => {
    console.log({ inventory_quantity: variant?.inventory_quantity })
    return acc + (variant?.inventory_quantity || 0)
  }, 0)

  const listInventoryQuantity = pricedProduct.variants?.map((variant) => {
    return variant?.inventory_quantity
  })
  console.log({ listInventoryQuantity })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="flex flex-col gap-4 relative w-full overflow-hidden p-4 bg-white shadow-borders-base rounded-large group-hover:shadow-[0_0_0_4px_rgba(0,0,0,0.1)] transition-shadow ease-in-out duration-150"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="square"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col txt-compact-medium">
          <Text className="text-neutral-600 text-xs">BRAND</Text>
          <Text className="text-ui-fg-base" data-testid="product-title">
            {product.title}
          </Text>
        </div>
        <div className="flex flex-col gap-0">
          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          <Text className="text-neutral-600 text-[0.6rem]">Excl. VAT</Text>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row gap-1 items-center">
            <span
              className={clx({
                "text-green-500": inventoryQuantity > 50,
                "text-orange-500":
                  inventoryQuantity <= 50 && inventoryQuantity > 0,
                "text-red-500": inventoryQuantity === 0,
              })}
            >
              •
            </span>
            <Text className="text-neutral-600 text-xs">
              {inventoryQuantity} left
            </Text>
          </div>
          <PreviewAddToCart product={product} region={region} />
        </div>
      </div>
    </LocalizedClientLink>
  )
}
