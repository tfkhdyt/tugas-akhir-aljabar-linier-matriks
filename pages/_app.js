import 'tailwindcss/tailwind.css'
import { ToastContainer, Slide } from 'react-toastify'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import 'react-toastify/dist/ReactToastify.min.css'

export default function App ({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
    </div>
  )
}
