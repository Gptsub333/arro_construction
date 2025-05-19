import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arro Construction LLC - Premium Home Remodeling",
  description: "Award-winning home remodeling services tailored to your vision and budget.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical video assets */}
        <link rel="preload" href="/house-remodeling-new.webm" as="video" type="video/webm" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
