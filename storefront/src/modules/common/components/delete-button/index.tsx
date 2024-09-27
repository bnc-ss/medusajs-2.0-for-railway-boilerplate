import { deleteLineItem } from "@lib/data/cart"
import Spinner from "@modules/common/icons/spinner"
import { clx } from "@medusajs/ui"
import { useState } from "react"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="text-neutral-950 text-xs shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-full px-2 py-1 hover:bg-neutral-100 min-w-20 flex items-center justify-center"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? <Spinner size={12} /> : "Remove"}
      </button>
    </div>
  )
}

export default DeleteButton
