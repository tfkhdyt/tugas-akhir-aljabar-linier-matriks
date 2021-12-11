import Link from 'next/link'

import Data from '../config'

export default function Footer () {
  return (
    <footer className='bottom-0 inset-x-0 p-4 mb-2 font-light flex flex-col justify-center items-center text-center text-gray-500'>
      <p>Built with ♥️ by Kelompok 2</p>
      <Link
        href={`https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks/releases/tag/v${Data.versi}`}
      >
        <a target='_blank' className='text-sm hover:text-indigo-900'>
          v{Data.versi}
        </a>
      </Link>
    </footer>
  )
}
