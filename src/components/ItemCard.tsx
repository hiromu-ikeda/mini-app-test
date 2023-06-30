import { Item } from "@/types/item"
import Image from "next/image"
import Link from "next/link"

interface Props {
  item: Item
}

export const ItemCard = ({ item }: Props) => {
  return (
    <Link
      className="border border-gray-300 rounded-[8px]"
      href={`/shopping/${item.id}`}
    >
      <div className="w-[240px] h-[240px]">
        <Image
          src={item.eyecatchUrl ? item.eyecatchUrl : "/item-eyecatch.png"}
          width={720}
          height={720}
          alt="アイキャッチ"
          className="rounded-t-[8px]"
        />
      </div>
      <div className="p-2">
        <p className="text-[14px]">{item.title}</p>
        <p className="text-[12px]">{item.price}円</p>
      </div>
    </Link>
  )
}
