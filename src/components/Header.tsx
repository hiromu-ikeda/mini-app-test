import Image from "next/image"
import { UserProfile } from "./UserProfile"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
      <div className="flex items-center gap-1">
        <Image src="/logo.png" width={64} height={64} alt="ロゴ" />
        <h1 className="font-bold text-gray-700">いきいき通販 ポータル</h1>
      </div>
      <UserProfile />
    </header>
  )
}
