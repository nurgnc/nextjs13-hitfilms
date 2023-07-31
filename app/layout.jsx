import { Inter } from '@next/font/google'

import '@/styles/reset.css'
import '@/styles/global.css'

import Header from '@/components/header'
import Footer from '@/components/footer'

const interFontFamily = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <head>
        <meta name="application-name" content={process.env.NEXT_PUBLIC_SITENAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_SITENAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-itunes-app" content="app-id=1106420758, app-argument=https://apps.apple.com/tr/app/idefix/id1106420758?l=tr" />
        <meta name="google-play-app" content="app-id=tr.com.idefix.android" />
        <meta name="msapplication-TileColor" content="#fffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body className='container'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
