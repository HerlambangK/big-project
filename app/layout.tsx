import Navbar from "@/components/nav-bar"
import { cn } from "../lib/utils"
import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Toaster from "@/components/toaster";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Niagaweb - Website builder spesialist',
  description: 'Se menyenangkan itu dan se gampang itu untuk memiliki website pribadi.',
  keywords: [
    "AI",
    "ChatGPT",
    "Chatbot",

  ],
  authors: [
    {
      name: "Herlambanng",
      url: "https://instagram.com/herlambangk_",
    }
  ],
  creator: "herlambang",
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://niagaweb.com/',
    title: 'Big Project - Generate Task ',
    description: ' platform untuk membuat membuat menjadi lebih mudah dan menyenangkan.',
  },
  twitter: {
    creator: "@bukanherlambang",
  }
}

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={cn('dark:bg-[#0c0c0c] dark:text-white', inter.className)}>
        <Navbar />
        <main className="mt-24">
          {children}
          <Analytics />
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  )
}
