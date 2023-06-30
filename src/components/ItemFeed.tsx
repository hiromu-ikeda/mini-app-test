import { items } from "@/types/item"
import { ItemCard } from "./ItemCard"

export const ItemFeed = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  )
}
