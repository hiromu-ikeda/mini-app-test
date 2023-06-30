import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  )
}

export default AuthenticatedLayout
