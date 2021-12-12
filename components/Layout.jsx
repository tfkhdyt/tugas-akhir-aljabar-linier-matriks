import { useRouter } from 'next/router'
import Head from 'next/head'
import { ToastContainer, Slide } from 'react-toastify'
import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Data from '../config'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Layout ({ children }) {
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState(global.innerWidth)

  const handleResize = () => {
    setWindowWidth(global.innerWidth)
  }

  useEffect(() => {
    global.addEventListener('resize', handleResize)
    return () => {
      global.addEventListener('resize', handleResize)
    }
  })

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

  const ResponsiveLayout = () => {
    if (windowWidth < 1024) return <Mobile />
    return <Desktop />
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
        <ToastContainer
          position='top-right'
          transition={Slide}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={router.pathname !== '/404'}
          rtl={false}
          pauseOnFocusLoss={router.pathname !== '/404'}
          draggable={router.pathname !== '/404'}
          pauseOnHover={router.pathname !== '/404'}
        />
        <ResponsiveLayout />
      </div>
    </>
  )
}
