import { columns } from "@/types/column"
import { ColumnCard } from "./ColumnCard"

interface Props {
  amount: number
}

export const ColumnFeed = ({ amount }: Props) => {
  return (
    <div className="p-2 flex flex-col gap-2">
      {columns.map((column, index) => {
        if (amount < index + 1) return

        return (
          <ColumnCard
            key={index}
            id={column.id}
            title={column.title}
            content={column.content}
            publishedAt={column.publishedAt}
            eyecatchUrl={column.eyecatchUrl}
          />
        )
      })}
    </div>
  )
}
