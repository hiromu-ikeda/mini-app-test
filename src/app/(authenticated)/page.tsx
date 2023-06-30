import { ColumnFeed } from "@/components/ColumnFeed"
import { HelloMessage } from "@/components/HelloMessage"
import { Section } from "@/components/Section"

export default function Home() {
  return (
    <main>
      <HelloMessage />
      <Section title="本日のおすすめ記事" />
      <ColumnFeed amount={1} />
    </main>
  )
}
