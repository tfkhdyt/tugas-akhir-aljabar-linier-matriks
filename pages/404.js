import Link from 'next/link'

export default function Custom404 (props) {
  return (
    <div class='bg-gray-50 flex items-center grid place-items-center'>
      <div class='container flex flex-col md:flex-row items-center justify-center px-6 py-44 text-gray-700'>
        <div class='max-w-md'>
          <div class='text-5xl font-dark font-bold'>404</div>
          <p class='text-2xl md:text-3xl font-light leading-normal mb-3'>
            Maaf, halaman yang Anda kunjungi tidak ditemukan
          </p>
          <Link href='/'>
            <a class='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-400 active:bg-blue-600 hover:bg-blue-500'>
              Kembali ke halaman utama
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
