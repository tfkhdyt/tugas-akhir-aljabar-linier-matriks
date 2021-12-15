// import module
import { ToastContainer, Slide } from 'react-toastify'
import { useRouter } from 'next/router'

// import komponen
import Layout from '../components/Layout'

// import styling
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.min.css'

// export component App
export default function App ({ Component, pageProps }) {
  // buat variabel untuk router
  const router = useRouter()
  return (
    <div>
      {/* panggil komponen Layout */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* panggil komponen ToastContainer */}
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
