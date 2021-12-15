// import module
import { useState } from 'react'
import Head from 'next/head'

// import config
import Data, { CramerContext } from '../../config'

// import components
import Content from '../../components/Content'
import Form from '../../components/Form'
import HasilCramer from '../../components/HasilCramer'
import TableCramer from '../../components/TableCramer'

// export component Cramer
export default function Cramer () {
  // state untuk persamaan dan hasil
  const [persamaan1, setPersamaan1] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0
  })
  const [persamaan2, setPersamaan2] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0
  })
  const [persamaan3, setPersamaan3] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0
  })
  const [result, setResult] = useState()

  // variabel form
  const form = (
    <div>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan 3 persamaan:
        </p>
      </div>
      {/* panggil component TableCramer */}
      <TableCramer />
    </div>
  )

  // variabel content
  const content = (
    // pass state ke context
    <CramerContext.Provider
      value={{
        persamaan1,
        setPersamaan1,
        persamaan2,
        setPersamaan2,
        persamaan3,
        setPersamaan3,
        result,
        setResult
      }}
    >
      {/* panggil component Form dengan variabel form sebagai props */}
      <Form content={form} />
      {/* panggil component HasilCramer jika state result memiliki nilai */}
      {result ? <HasilCramer /> : null}
    </CramerContext.Provider>
  )
  
  // tampilan halaman cramer
  return (
    <div>
      <Head>
        {/* judul halaman */}
        <title>
          {Data.menu[2]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-24'>
        <span className='text-2xl font-semibold'>{Data.menu[2]}</span>
        <div className='mt-6'>
          {/* panggil component Content dengan variabel content sebagai props */}
          <Content content={content} />
        </div>
      </main>
    </div>
  )
}
