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
        <meta name="apple-itunes-app" content="app-id=1106420758, app-argument=https://apps.apple.com/tr/app/idefix/id1106420758?l=tr" />
        <meta name="google-play-app" content="app-id=tr.com.idefix.android" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="node_modules/smart-app-banner/dist/smart-app-banner.css" type="text/css" media="screen" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="android-touch-icon" href="android-icon.png" />

      </head>
      <body className='container'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script src="node_modules/smart-app-banner/dist/smart-app-banner.js"></Script>
        <Script id='smartbanner' type="text/javascript" dangerouslySetInnerHTML={{
          __html: `new SmartBanner({
          daysHidden: 15,   // days to hide banner after close button is clicked (defaults to 15)
          daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
          appStoreLanguage: 'us', // language code for the App Store (defaults to user's browser language)
          title: 'MyPage',
          author: 'MyCompany LLC',
          button: 'VIEW',
          store: {
              ios: 'On the App Store',
              android: 'In Google Play',
              windows: 'In Windows store'
          },
          price: {
              ios: 'FREE',
              android: 'FREE',
              windows: 'FREE'
          }`,
        }} />
      </body>

    </html>
  )
}
