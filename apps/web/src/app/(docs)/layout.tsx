import React from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { TOC } from './_components/toc'
import { cn } from '@/lib'
import "../globals.css"

export const metadata: Metadata = {
    description: 'Relic of lies',
    metadataBase: new URL('https://relicoflies.xyz'),
    keywords: [
      'Relic of lies',
    ],
    generator: 'Next.js',
    applicationName: 'Relic of lies',
    appleWebApp: {
      title: 'Relic of lies'
    },
    title: {
      default: 'Relic of lies – Relic of lies',
      template: '%s | Relic of lies'
    },
    openGraph: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      url: './',
      siteName: 'Relic of lies',
      locale: 'en_US',
      type: 'website'
    },
    other: {
      'msapplication-TileColor': '#fff'
    },
    twitter: {
      site: 'https://relicoflies.xyz'
    },
    alternates: {
      canonical: './'
    }
  }
   
  const banner = (
    <Banner storageKey="2.0-release">
      <Link href="/docs/act/act-1">
        🎉 Relic of lies is released. Read more →
      </Link>
    </Banner>
  
  )
  const navbar = (
    <Navbar
      logo={<div className={
        cn(
          'flex items-center gap-2',
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )
      }>
        <Image src="/logo.png" alt="Relic of lies" width={32} height={32}
          className={'rounded-full'}
        />
      <span className={
          'text-2xl font-bold'
      }>Relic of lies</span>
      </div>}
  
      projectLink='https://github.com/UyLeQuoc/relic-of-lies'
    />
  )
  const footer = <Footer>MIT {new Date().getFullYear()} © Relic of lies.</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html
        // Not required, but good for SEO
        lang="en"
        // Required to be set
        dir="ltr"
        // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
        suppressHydrationWarning
      >
        <Head
        // ... Your additional head options
        >
          {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
          <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/UyLeQuoc/relic-of-lies/tree/main"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            editLink="Edit this page on GitHub"
            toc={{
              backToTop: null,
              extraContent: <TOC />,
            }}
          >
            {children}
          </Layout>
        </body>
      </html>
    )
  }