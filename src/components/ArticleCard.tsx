import { Article } from "@/types/article"
import Image from "next/image"

export const ArticleCard = ({ title, eyecatchUrl, publishedAt }: Article) => {
  return (
    <div className="border border-gray-300 rounded">
      <Image
        src={eyecatchUrl ? eyecatchUrl : "/eyecatch.png"}
        alt="アイキャッチ"
        width={720}
        height={320}
      />
      <div className="p-2">
        <p>{title}</p>
        <p className="text-[10px]">{publishedAt}</p>
      </div>
    </div>
  )
}
