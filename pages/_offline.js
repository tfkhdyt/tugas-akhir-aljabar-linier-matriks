import { useRouter } from 'next/router'

export default function Offline (props) {
  const router = useRouter()

  const handleClick = () => {
    router.reload(window.location.pathname)
  }

  return (
    <div className='min-h-screen min-w-screen p-12 grid place-items-center'>
      <div className='flex flex-col mb-24 lg:mb-0 max-w-md'>
        <div className='text-4xl text-gray-600 font-bold'>No Internet</div>
        <p className='text-lg md:text-2xl text-gray-600 font-light leading-normal mb-3'>
          Untuk melanjutkan, hubungkan perangkat Anda ke Internet terlebih dahulu.
        </p>
        <div className='w-auto'>
          <button
            onClick={handleClick}
            className='space-x-2 text-sm transition duration-500 transform-gpu active:scale-95 bg-blue-400 px-3 py-2 text-white rounded-md hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 font-semibold flex items-center w-auto'
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
