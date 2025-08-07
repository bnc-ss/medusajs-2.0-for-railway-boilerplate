import { getProductPrice } from "@/lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { B2BCustomer } from "@/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
  customer,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  customer?: B2BCustomer | null
}) {
  if (!product) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  const inventoryQuantity = product.variants?.reduce((acc, variant) => {
    return acc + (variant?.inventory_quantity || 0)
  }, 0)

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="flex flex-col gap-2 small:gap-4 relative aspect-[3/5] w-full overflow-hidden p-2 small:p-4 bg-white shadow-borders-base rounded-lg group-hover:shadow-[0_0_0_4px_rgba(0,0,0,0.1)] transition-shadow ease-in-out duration-150"
      >
        <div className="w-full h-full p-4 small:p-10">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="square"
            isFeatured={isFeatured}
          />
        </div>
        <div className="flex flex-col txt-compact-medium">
          <Text className="text-ui-fg-base text-xs small:text-sm" data-testid="product-title">
            {product.title}
          </Text>
        </div>
        <div className="flex flex-col gap-0">
          {customer ? (
            <>
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
              <Text className="text-neutral-600 text-[0.5rem] small:text-[0.6rem]">Excl. VAT</Text>
            </>
          ) : (
            <LocalizedClientLink href="/account/login" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
              <Text className="text-sm font-medium">Login to see prices</Text>
            </LocalizedClientLink>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <span
              className={clx("text-xs", {
                "text-green-500": inventoryQuantity && inventoryQuantity > 50,
                "text-orange-500":
                  inventoryQuantity &&
                  inventoryQuantity <= 50 &&
                  inventoryQuantity > 0,
                "text-red-500": inventoryQuantity === 0,
              })}
            >
              •
            </span>
            <Text className="text-neutral-600 text-[0.6rem] small:text-xs">
              {inventoryQuantity === 0 ? (
                <>
                  <span className="hidden xsmall:inline">Current Stock Unavailable. Request Custom Order</span>
                  <span className="xsmall:hidden">Request Order</span>
                </>
              ) : (
                <>
                  <span className="hidden xsmall:inline">{inventoryQuantity} left</span>
                  <span className="xsmall:hidden">{inventoryQuantity}</span>
                </>
              )}
            </Text>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
