import { ItemFeed } from "@/components/ItemFeed"
import { Section } from "@/components/Section"

export default function Shopping() {
  return (
    <div className="flex flex-col gap-4">
      <Section title="おすすめの商品" />
      <ItemFeed />
    </div>
  )
}
