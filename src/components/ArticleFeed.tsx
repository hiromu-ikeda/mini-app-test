import { Article } from "@/types/article"
import { ArticleCard } from "./ArticleCard"

interface Props {
  amount: number
}

const articles: Article[] = [
  {
    title: "ここにタイトルが入ります。",
    content:
      "<p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>",
    publishedAt: "2023-06-25",
  },
  {
    title: "ここにタイトルが入ります。",
    content:
      "<p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>",
    publishedAt: "2023-06-25",
  },
  {
    title: "ここにタイトルが入ります。",
    content:
      "<p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>",
    publishedAt: "2023-06-25",
  },
  {
    title: "ここにタイトルが入ります。",
    content:
      "<p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>",
    publishedAt: "2023-06-25",
  },
  {
    title: "ここにタイトルが入ります。",
    content:
      "<p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>",
    publishedAt: "2023-06-25",
  },
]

export const ArticleFeed = ({ amount }: Props) => {
  return (
    <div className="p-2 flex flex-col gap-2">
      {articles.map((article, index) => {
        if (amount < index + 1) return

        return (
          <ArticleCard
            key={index}
            title={article.title}
            content={article.content}
            publishedAt={article.publishedAt}
            eyecatchUrl={article.eyecatchUrl}
          />
        )
      })}
    </div>
  )
}
