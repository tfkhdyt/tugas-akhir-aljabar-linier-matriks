// import module
import { useRouter } from 'next/router'

// export component Offline
export default function Offline() {
  // buat variable untuk router
  const router = useRouter()

  // function untuk handle click event
  const handleClick = () => {
    // refresh halaman
    router.reload()
  }

  return (
    // tampilan dari offline
    <div className='min-w-screen grid min-h-screen place-items-center p-12'>
      <div className='mb-24 flex max-w-md flex-col lg:mb-0'>
        <div className='text-4xl font-bold text-gray-600'>No Internet</div>
        <p className='mb-3 text-lg font-light leading-normal text-gray-600 md:text-2xl'>
          Untuk melanjutkan, hubungkan perangkat Anda ke Internet terlebih
          dahulu.
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
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>
    </div>
  )
}
