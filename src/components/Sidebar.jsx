// import module
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// import config
import Data from '../config';
// import component
import Footer from './Footer';

// export component Sidebar
export default function Sidebar({ content }) {
  // state active
  const [active, setActive] = useState(false);

  // function untuk handle click event
  const handleClick = () => {
    setActive(!active);
  };

  // lifecycle
  useEffect(() => {
    if (active) return (document.body.style.overflow = 'hidden');
    else return (document.body.style.overflow = ''); // eslint-disable-line

    return () => (document.body.style.overflow = 'hidden'); // eslint-disable-line
  });

  // tampilan Sidebar
  return (
    <div className='relative min-h-screen lg:flex'>
      {/* header */}
      <div
        className={`sticky top-0 z-40 flex w-screen items-center justify-between bg-gradient-to-br from-blue-400 to-blue-500 px-3 py-2 lg:hidden ${
          active ? 'blur-sm grayscale ' : null
        }`}
      >
        <Link href='/' scroll={false}>
          <a className='mr-4 inline-flex h-4 items-center p-2 transition duration-500'>
            <Image src='/images/kbmfti.png' height={25} width={53} priority />
            <span className='ml-2 text-xl font-bold uppercase tracking-wide text-white'>
              Kelompok 2
            </span>
          </a>
        </Link>
        <button
          className='ml-auto inline-flex transform-gpu rounded rounded-lg p-3 text-white outline-none transition duration-500 hover:bg-blue-500 hover:text-white active:scale-75 lg:hidden'
          onClick={handleClick}
        >
          <svg
            className='h-6 w-6'
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
      </div>
      {/* sidebar */}
      <div
        className={`${
          active ? '' : '-translate-x-full'
        } sidebar fixed inset-y-0 left-0 z-50 flex flex w-64 transform-gpu flex-col justify-between bg-gradient-to-b from-blue-400 to-blue-600 px-2 pt-7 text-gray-100 transition duration-200 ease-in-out lg:hidden`}
      >
        <div className='space-y-6 '>
          <p className='flex items-center space-x-2 px-4 text-white'>
            <span className='text-2xl font-extrabold'>
              Aljabar Linier dan Matriks
            </span>
          </p>
          <nav>
            <Link href='/' scroll={false}>
              <a
                className='mx-2 block rounded py-2.5 px-2 font-semibold transition duration-500 hover:bg-blue-600 hover:text-white'
                onClick={handleClick}
              >
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-1 h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                    />
                  </svg>
                  {Data.menu[0]}
                </span>
              </a>
            </Link>
            <Link href='/invers' scroll={false}>
              <a
                className='mx-2 block rounded py-2.5 px-2 font-semibold transition duration-500 hover:bg-blue-600 hover:text-white'
                onClick={handleClick}
              >
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-1 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                  </svg>
                  {Data.menu[1]}
                </span>
              </a>
            </Link>
            <Link href='/cramer' scroll={false}>
              <a
                className='mx-2 block rounded py-2.5 px-2 font-semibold transition duration-500 hover:bg-blue-600 hover:text-white'
                onClick={handleClick}
              >
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-1 h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8'
                    />
                  </svg>
                  {Data.menu[2]}
                </span>
              </a>
            </Link>
            <Link href='/about' scroll={false}>
              <a
                className='mx-2 block rounded py-2.5 px-2 font-semibold transition duration-500 hover:bg-blue-600 hover:text-white'
                onClick={handleClick}
              >
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-0.5 mr-1.5 mb-0.5 h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                  </svg>
                  {Data.menu[3]}
                </span>
              </a>
            </Link>
            <Link href='https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks'>
              <a
                className='mx-2 block rounded py-2.5 px-2 font-semibold transition duration-500 hover:bg-blue-600 hover:text-white'
                onClick={handleClick}
                target='_blank'
              >
                <span className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-0.5 mr-1.5 h-4 w-4'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className='fill-white'
                      d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                    />
                  </svg>
                  Source Code
                </span>
              </a>
            </Link>
          </nav>
        </div>
        <div>
          <Footer config='text-gray-100 text-sm mb-0' versi='text-xs' />
        </div>
      </div>
      {/* content */}
      <div
        className={`flex-1 lg:hidden ${active ? 'blur-sm grayscale ' : null}`}
      >
        {content}
      </div>
      <div
        className={`min-w-screen absolute inset-0 z-40 min-h-screen bg-black/50 ${
          active ? '' : 'hidden'
        }`}
        onClick={handleClick}
      />
    </div>
  );
}
