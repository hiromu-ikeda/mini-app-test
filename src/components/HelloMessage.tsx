"use client"

import { useContext } from "react"
import { LiffContext } from "./LiffProvider"

const FallbackHelloMessage = () => {
  return (
    <div className="p-2">
      <div className="h-8 w-[148px] bg-gray-200" />
    </div>
  )
}
export const HelloMessage = () => {
  const liff = useContext(LiffContext)

  const profile = liff?.getDecodedIDToken()

  if (!profile) return <FallbackHelloMessage />

  return (
    <div>
      <p>ようこそ、{profile.name}さん</p>
    </div>
  )
}
