import type React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { LayoutProps } from "@/interface"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {" "}
        {/* Added pt-20 to account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
