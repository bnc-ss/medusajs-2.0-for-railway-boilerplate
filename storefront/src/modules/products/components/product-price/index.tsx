import { clx, Text } from "@medusajs/ui"
import { getProductPrice } from "@/lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import { B2BCustomer } from "@/types"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default function ProductPrice({
  product,
  customer,
}: {
  product: HttpTypes.StoreProduct
  customer?: B2BCustomer | null
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  if (!customer) {
    return (
      <LocalizedClientLink href="/account/login" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
        <Text className="text-xl font-medium">Login to see prices</Text>
      </LocalizedClientLink>
    )
  }

  if (!cheapestPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-neutral-950">
      <span
        className={clx({
          "text-ui-fg-interactive": cheapestPrice.price_type === "sale",
        })}
      >
        <Text
          className="font-medium text-xl"
          data-testid="product-price"
          data-value={cheapestPrice.calculated_price_number}
        >
          From {cheapestPrice.calculated_price}
        </Text>
        <Text className="text-neutral-600 text-[0.6rem]">Excl. VAT</Text>
      </span>
      {cheapestPrice.price_type === "sale" && (
        <p
          className="line-through text-neutral-500"
          data-testid="original-product-price"
          data-value={cheapestPrice.original_price_number}
        >
          {cheapestPrice.original_price}
        </p>
      )}
    </div>
  )
}
