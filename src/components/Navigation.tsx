"use client"

import { NewspaperIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
  const pathname = usePathname()
  const currentColor = "text-gray-700"
  const otherColor = "text-gray-300"

  return (
    <div className="flex justify-around py-2">
      <Link
        href="/"
        className={`flex flex-col items-center ${
          pathname === "/" ? currentColor : otherColor
        }`}
      >
        <HomeIcon className="w-7 h-7 p-1 rounded-[50%]" />
        <p className="text-[12px]">ホーム</p>
      </Link>
      <Link
        href="/column"
        className={`flex flex-col items-center ${
          pathname.startsWith("/column") ? currentColor : otherColor
        }`}
      >
        <NewspaperIcon className="w-7 h-7 p-1" />
        <p className="text-[12px]">コラム</p>
      </Link>
      <Link
        href="/shopping"
        className={`flex flex-col items-center ${
          pathname.startsWith("/shopping") ? currentColor : otherColor
        }`}
      >
        <ShoppingCartIcon className="w-7 h-7 p-1" />
        <p className="text-[12px]">通販</p>
      </Link>
    </div>
  )
}
