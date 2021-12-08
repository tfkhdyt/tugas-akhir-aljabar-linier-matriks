import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

export default function Custom404 (props) {
  const [countDown, setCountDown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    toast.info('Anda akan kembali ke halaman utama dalam waktu 5 detik...', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined
    })
    const timer = setInterval(() => {
      setCountDown((countDown) => countDown - 1)
      console.log(countDown)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (countDown === 0) router.push('/')
  }, [countDown])

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <div className='bg-gray-50 flex items-center grid place-items-center'>
        <div className='container flex flex-col md:flex-row items-center justify-center px-6 py-44 text-gray-700'>
          <div className='max-w-md'>
            <div className='text-5xl font-dark font-bold'>404</div>
            <p className='text-2xl md:text-3xl font-light leading-normal mb-3'>
              Maaf, halaman yang Anda kunjungi tidak ditemukan
            </p>
            <Link href='/'>
              <a className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-400 active:bg-blue-600 hover:bg-blue-500'>
                Kembali ke halaman utama
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
