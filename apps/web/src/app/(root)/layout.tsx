import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import WrappedLayout from "./wrapped-layout";
import { Toaster } from "@/components/ui/sonner";
import localFont from 'next/font/local'

const godOfWar = localFont({
  src: "../../../public/fonts/relic-of-lies/god-of-war.ttf",
  variable: '--font-god-of-war'
})

const faithCollapsing = localFont({
  src: "../../../public/fonts/relic-of-lies/faith-collapsing.ttf",
  variable: '--font-faith-collapsing'
})

const helvetica = localFont({
  src: "../../../public/fonts/relic-of-lies/helvetica.ttf",
  variable: '--font-helvetica'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${faithCollapsing.variable} ${helvetica.variable} ${godOfWar.variable} antialiased`}
      >
        <WrappedLayout>
          {children}
          <Toaster />
        </WrappedLayout>
      </body>
    </html>
  );
}
