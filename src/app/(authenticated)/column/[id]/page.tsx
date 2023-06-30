import { columns } from "@/types/column"
import Image from "next/image"

export default function ColumnDetail({ params }: { params: { id: number } }) {
  const { id } = params

  const column = columns.find((column) => column.id == id)

  if (!column) return <div></div>

  return (
    <div className="p-2 flex flex-col gap-4">
      <Image
        src={column.eyecatchUrl ? column.eyecatchUrl : "/eyecatch.png"}
        alt="アイキャッチ"
        width={720}
        height={320}
      />
      <div className="flex flex-col gap-2">
        <p className="text-[18px] font-bold">{column.title}</p>
        <p className="text-[14px]">{column.publishedAt}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: column.content }} />
    </div>
  )
}
