// import module
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// export component 404
export default function Custom404() {
  // buat variabel untuk router
  const router = useRouter()

  // component message toast
  const Msg = () => {
    // state angka countdown
    const [countDown, setCountDown] = useState(5)

    // lifecycle
    useEffect(() => {
      const timer = setInterval(() => {
        setCountDown((countDown) => countDown - 1)
        console.log(countDown)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    })

    // lifecycle saat state countDown berubah
    useEffect(() => {
      if (countDown === 0) {
        router.push('/')
      }
    }, [countDown])

    // tampilan yang akan tampil pada componen Msg
    return (
      <span>
        Anda akan kembali ke halaman utama dalam waktu <b>{countDown}</b>{' '}
        detik...
      </span>
    )
  }

  // lifecycle saat component mounted
  useEffect(() => {
    toast.info(<Msg />, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: 'bruh',
    })
  }, [])

  // function untuk handle click event
  const handleClick = () => {
    // singkirkan semua toast
    toast.dismiss()
    // pergi ke halaman / (root)
    router.push('/')
  }

  // tampilan dari halaman 404
  return (
    <div className='min-w-screen grid min-h-screen place-items-center p-12'>
      <div className='mb-24 flex max-w-md flex-col lg:mb-0'>
        <div className='text-5xl font-bold text-gray-600'>404</div>
        <p className='mb-3 text-xl font-light leading-normal text-gray-600 md:text-3xl'>
          Maaf, halaman yang Anda kunjungi tidak ditemukan
        </p>
        <div className='w-auto'>
          <button
            onClick={handleClick}
            className='flex w-auto transform-gpu items-center space-x-2 rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white transition duration-500 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <span>Kembali ke halaman utama</span>
          </button>
        </div>
      </div>
    </div>
  )
}
