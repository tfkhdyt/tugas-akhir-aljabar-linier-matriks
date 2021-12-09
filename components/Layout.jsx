import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import Navbar from './Navbar'
import Footer from './Footer'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Layout ({ children }) {
  const router = useRouter()
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={router.pathname !== '/404'}
        rtl={false}
        pauseOnFocusLoss={router.pathname !== '/404'}
        draggable={router.pathname !== '/404'}
        pauseOnHover={router.pathname !== '/404'}
      />
      {router.pathname !== '/404' ? <Navbar /> : null}
      {children}
      {router.pathname !== '/404' ? <Footer /> : null}
    </div>
  )
}
