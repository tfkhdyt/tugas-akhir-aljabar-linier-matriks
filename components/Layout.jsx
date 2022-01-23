// import module
import { useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// import components
import Data from '../config'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

// buat hooks useMediaQuery
const useMediaQuery = (width) => {
  // state targetReached
  const [targetReached, setTargetReached] = useState(false)

  // callback updateTarget
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  // lifecycle saat mounted
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    if (media.matches) setTargetReached(true)

    // cleanup
    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

// export component Layout
export default function Layout({ children }) {
  // variabel router
  const router = useRouter()
  // variabel isBreakpoint
  const isBreakpoint = useMediaQuery(1024)

  // component Mobile
  const Mobile = () => {
    if (!['/404', '/_offline'].includes(router.pathname)) {
      return <Sidebar content={children} />
    }
    return children
  }

  // component Desktop
  const Desktop = () => {
    if (!['/404', '/_offline'].includes(router.pathname)) {
      return (
        <div className='hidden lg:block'>
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
        {/* google site verification */}
        <meta
          name='google-site-verification'
          content='JCu7ig2hkiijnjnq8doWrgNg9HPCpWwo2WrTQWko8Cs'
        />
        {/* metadata */}
        <meta name='description' content={Data.deskripsi} />
        <meta name='keywords' content={Data.keywords} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content={Data.deskripsi} />
        <meta name='twitter:image' content={Data.link + Data.thumbnail} />
        <meta name='twitter:title' content={Data.judul} />
        <meta property='og:description' content={Data.deskripsi} />
        <meta property='og:image' content={Data.link + Data.thumbnail} />
        <meta property='og:title' content={Data.judul} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={Data.link} />
        <link rel='image_src' href={Data.link + Data.thumbnail} />
        {/* favicon */}
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <div>
        {/* tampilkan component Mobile dan Desktop berdasarkan breakpoint */}
        {isBreakpoint ? <Mobile /> : <Desktop />}
      </div>
    </>
  )
}
