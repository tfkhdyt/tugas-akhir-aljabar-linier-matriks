// import module
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// export component MemberCard
export default function MemberCard(props) {
  // tampilan MemberCard
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='flex w-auto flex-col items-center justify-center rounded-lg bg-blue-50 py-12 shadow-md transition duration-500 ease-in-out hover:bg-blue-100 hover:shadow-lg'
    >
      <div className='mb-4'>
        <Image
          className='rounded-full'
          width={100}
          height={100}
          src={props.foto}
          objectPosition='center'
          objectFit='cover'
          alt={`Foto ${props.nama}`}
          priority={true}
        />
      </div>
      <div className='text-center'>
        <p className='mb-1 whitespace-nowrap text-lg font-semibold text-blue-400'>
          {props.nama}
        </p>
        <p className='mb-1 text-sm font-light text-gray-500'>{props.nim}</p>
        <p className='mb-4 text-sm font-light text-gray-500'>{props.prodi}</p>
        <Link href={`https://instagram.com/${props.ig}`}>
          <a target='_blank'>
            <button className='transform-gpu rounded bg-blue-300 px-4 py-2 font-medium text-white transition duration-500 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95 active:bg-blue-500'>
              <svg
                className='mr-1 inline'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#FFFFFF'
                  d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                />
              </svg>
              <span className='inline'>{props.ig}</span>
            </button>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
