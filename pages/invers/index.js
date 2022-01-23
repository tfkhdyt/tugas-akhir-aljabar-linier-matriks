// import module
import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

// import config
import Data, { MatrixContext } from '../../config'
import variants from '../../config/variants'

// import components
import Content from '../../components/Content'
import Form from '../../components/Form'
import Hasil from '../../components/Hasil'
import Table from '../../components/Table'

// export component invers
export default function Invers() {
  // state matrix
  const [matrix, setGlobalMatrix] = useState()

  // variabel form
  const form = (
    <>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan matriks 3x3:
        </p>
      </div>
      {/* panggil component Table */}
      <Table />
    </>
  )

  // variabel content
  const content = (
    // pass state ke context
    <MatrixContext.Provider value={{ matrix, setGlobalMatrix }}>
      {/* tampilkan component Form dengan variabel form sebagai props */}
      <Form content={form} />
      {/* tampilkan component Hasil jika state matrix memiliki nilai */}
      {matrix ? <Hasil /> : null}
    </MatrixContext.Provider>
  )

  // tampilan halaman invers
  return (
    <div>
      <Head>
        {/* judul halaman */}
        <title>
          {Data.menu[1]} | {Data.judul}
        </title>
      </Head>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='container mx-auto p-6 lg:px-24'
      >
        <span className='text-2xl font-semibold'>{Data.menu[1]}</span>
        <div className='mt-6'>
          {/* panggil component Content dengan variabel content sebagai props */}
          <Content content={content} />
        </div>
      </motion.main>
    </div>
  )
}
