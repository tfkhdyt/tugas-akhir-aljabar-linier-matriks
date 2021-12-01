import Link from 'next/link'
import Image from 'next/image'
import Data from '../config'
import { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav
        className='
          flex items-center flex-wrap bg-blue-400
          p-3 sticky w-100 z-50 top-0'
      >
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 h-4'>
            <Image src='/images/kbmfti.png' height={25} width={53} />
            <span className='text-xl text-white font-bold uppercase tracking-wide ml-2'>
              Kelompok 2
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white '>
                {Data.menu[0]}
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                {Data.menu[1]}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
