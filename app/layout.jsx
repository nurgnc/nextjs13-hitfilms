import { Inter } from '@next/font/google'

import '@/styles/reset.css'
import '@/styles/global.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const interFontFamily = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <head>
        <link rel="stylesheet" href="node_modules/smartbanner.js/dist/smartbanner.min.css" />
        <Script src="node_modules/smartbanner.js/dist/smartbanner.min.js"></Script>
        {/* <!-- Start SmartBanner configuration --> */}
        <meta name="smartbanner:title" content="Smart Application" />
        <meta name="smartbanner:author" content="SmartBanner Contributors" />
        <meta name="smartbanner:price" content="FREE" />
        <meta name="smartbanner:price-suffix-apple" content=" - On the App Store" />
        <meta name="smartbanner:price-suffix-google" content=" - In Google Play" />
        <meta name="smartbanner:icon-apple" content="https://url/to/apple-store-icon.png" />
        <meta name="smartbanner:icon-google" content="https://url/to/google-play-icon.png" />
        <meta name="smartbanner:button" content="VIEW" />
        <meta name="smartbanner:button-url-apple" content="https://ios/application-url" />
        <meta name="smartbanner:button-url-google" content="https://android/application-url" />
        <meta name="smartbanner:enabled-platforms" content="android,ios" />
        <meta name="smartbanner:close-label" content="Close" />
        {/* <!-- End SmartBanner configuration --> */}

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
