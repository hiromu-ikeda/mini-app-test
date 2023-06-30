import { Column } from "@/types/column"
import Image from "next/image"
import Link from "next/link"

export const ColumnCard = ({ id, title, eyecatchUrl, publishedAt }: Column) => {
  return (
    <Link href={`/column/${id}`} className="border border-gray-300 rounded">
      <Image
        src={eyecatchUrl ? eyecatchUrl : "/column-eyecatch.png"}
        alt="アイキャッチ"
        width={720}
        height={320}
      />
      <div className="p-2">
        <p>{title}</p>
        <p className="text-[10px]">{publishedAt}</p>
      </div>
    </Link>
  )
}
