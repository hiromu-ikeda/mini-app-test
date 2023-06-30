import { items } from "@/types/item"
import Image from "next/image"

interface Props {
  params: { id: number }
}

export default function ShoppingDetail({ params }: Props) {
  const { id } = params

  const item = items.find((item) => item.id == id)

  if (!item) return <div></div>

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="py-2">
        <p className="text-[20px] font-bold">{item.title}</p>
      </div>
      <div className="flex justify-center">
        <Image
          src={item.eyecatchUrl ? item.eyecatchUrl : "/item-eyecatch.png"}
          alt="アイキャッチ"
          width={320}
          height={320}
        />
      </div>
      <div className="py-2 flex flex-col gap-4">
        <p>{item.description}</p>
        <p className="text-[20px] font-bold text-right">{item.price}円</p>
      </div>
      <button className="border border-gray-300 py-2 bg-gray-800 text-white rounded-[8px]">
        カートに入れる
      </button>
    </div>
  )
}
