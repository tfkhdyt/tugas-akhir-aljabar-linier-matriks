// import library
import { Html, Head, Main, NextScript } from 'next/document'

// export component document
export default function Document() {
  return (
    <Html>
      <Head>
        {/* untuk kepentingan PWA */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-512x512.png' />
        <meta name='theme-color' content='#60A5FA' />
        {/* untuk font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* atur warna body */}
      <body className='bg-gray-50'>
        {/* panggil component Main dan NextScript */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
