import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/redux/provider'
import Registry from '@/utils/registry'
import QueryClientProviders from '@/utils/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ODOI',
  description: 'One day, One Interview',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="ODOI" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={inter.className}>
        <QueryClientProviders>
          <Providers>
            <Registry>{children}</Registry>
          </Providers>
        </QueryClientProviders>
      </body>
    </html>
  )
}
