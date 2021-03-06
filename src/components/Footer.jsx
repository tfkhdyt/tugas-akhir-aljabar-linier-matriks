// import module
import Link from 'next/link';

// import config
import Data from '../config';

// export component Footer
export default function Footer({ config, versi }) {
  return (
    <footer
      className={`inset-x-0 bottom-0 flex flex-col items-center justify-center p-4 text-center font-light text-gray-500 lg:mb-2 ${config}`}
    >
      <p>
        Built with ♥️ by <span className='font-medium'>Kelompok 2</span>
      </p>
      <p>
        Licensed under the{' '}
        <Link href='https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks/blob/main/LICENSE'>
          <a
            className='font-medium underline underline-offset-1'
            target='_blank'
          >
            GPL-3.0
          </a>
        </Link>
      </p>
      <Link
        href={`https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks/releases/tag/v${Data.versi}`}
      >
        <a
          target='_blank'
          className={`text-sm hover:text-indigo-900 ${versi} font-medium`}
        >
          v{Data.versi}
        </a>
      </Link>
    </footer>
  );
}
