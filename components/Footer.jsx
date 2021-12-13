import Link from 'next/link'

import Data from '../config'

export default function Footer ({ config, versi }) {
  return (
    <footer
      className={`bottom-0 inset-x-0 p-4 lg:mb-2 font-light flex flex-col justify-center items-center text-center text-gray-500 ${config}`}
    >
      <p>Built with ♥️ by <span className='font-medium'>Kelompok 2</span></p>
      <p>Licensed under the <Link href='https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks/blob/main/LICENSE'><a className='font-medium underline underline-offset-1' target='_blank'>GPL-3.0</a></Link></p>
      <Link
        href={`https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks/releases/tag/v${Data.versi}`}
      >
        <a target='_blank' className={`text-sm hover:text-indigo-900 ${versi} font-medium`}>
          v{Data.versi}
        </a>
      </Link>
    </footer>
  )
}
