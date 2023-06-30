import { ArticleFeed } from "@/components/ArticleFeed"
import { HelloMessage } from "@/components/HelloMessage"
import { Section } from "@/components/Section"

export default function Home() {
  return (
    <main>
      <HelloMessage />
      <Section title="本日のおすすめ記事" />
      <ArticleFeed amount={1} />
    </main>
  )
}
