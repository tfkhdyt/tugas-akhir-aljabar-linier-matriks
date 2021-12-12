import { useRouter } from 'next/router'
import Head from 'next/head'
import { useMediaQuery } from '@react-hook/media-query'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Data from '../config'

export default function Layout ({ children }) {
  const router = useRouter()
  const matches = useMediaQuery('only screen and (min-width: 1024px)')

  const Mobile = () => {
    if (!['/404', '/_offline'].includes(router.pathname)) {
      return <Sidebar content={children} />
    }
    return children
  }

  const Desktop = () => {
    if (!['/404', '/_offline'].includes(router.pathname)) {
      return (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      )
    }
    return children
  }

  return (
    <>
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
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='image_src' href={Data.thumbnail} />
      </Head>
      <div>
        {/* <div className='lg:hidden'>
          <Mobile />
        </div>
        <div className='hidden lg:block'>
          <Desktop />
        </div> */}
        {!matches ? <Mobile /> : <Desktop />}
      </div>
    </>
  )
}
