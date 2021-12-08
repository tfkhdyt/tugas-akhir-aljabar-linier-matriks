import { Html, Head, Main, NextScript } from 'next/document'

import Data from '../config'

export default function Document () {
  return (
    <Html>
      <Head>
        <meta name='description' content={Data.deskripsi} />
        <meta
          name='google-site-verification'
          content='JCu7ig2hkiijnjnq8doWrgNg9HPCpWwo2WrTQWko8Cs'
        />
        <meta name='keywords' content={Data.keywords.join(', ')} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content={Data.deskripsi} />
        <meta name='twitter:image' content={Data.thumbnail} />
        <meta name='twitter:title' content={Data.judul} />
        <meta property='og:description' content={Data.deskripsi} />
        <meta property='og:image' content={Data.thumbnail} />
        <meta property='og:title' content={Data.judul} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={Data.link} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='image_src' href={Data.thumbnail} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
