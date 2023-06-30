import { LiffProvider } from "@/components/LiffProvider"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "いきいき通販 ポータル",
  description: "いきいき通販のポータルです。",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LiffProvider>{children}</LiffProvider>
      </body>
    </html>
  )
}
