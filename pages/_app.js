import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Data from '../config'
import { Layout } from '../components/Layout'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta property='og:url' content={Data.link} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={Data.judul} />
        <meta name='twitter:card' content='summary' />
        <meta property='og:description' content={Data.deskripsi} />
        <meta property='og:image' content={Data.thumbnail} />
        <meta
          name='google-site-verification'
          content='JCu7ig2hkiijnjnq8doWrgNg9HPCpWwo2WrTQWko8Cs'
        />
        <link rel='image_src' href={Data.thumbnail} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
