import Link from 'next/link'
import Image from 'next/image'
import Data from '../config'
import { useState } from 'react'

export default function Navbar () {
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
          className=' inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none rounded-lg'
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
          <div className='lg:inline-flex lg:flex-row lg:mr-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white '>
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                  </svg>
                  {Data.menu[0]}
                </span>
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white'>
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-1 mb-0.5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                  </svg>
                  {Data.menu[1]}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
