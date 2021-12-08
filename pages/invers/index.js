import Head from 'next/head'
import { useState } from 'react'

import Content from '../../components/Content'
import Data, { MatrixContext } from '../../config'
import Form from '../../components/Form'
import Hasil from '../../components/Hasil'
import Table from '../../components/Table'

export default function Invers () {
  const [matrix, setGlobalMatrix] = useState()

  const form = (
    <>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan matriks 3x3:
        </p>
      </div>
      <Table />
    </>
  )

  const content = (
    <MatrixContext.Provider value={{ matrix, setGlobalMatrix }}>
      <Form content={form} />
      {matrix ? <Hasil /> : null}
    </MatrixContext.Provider>
  )
  return (
    <div>
      <Head>
        <title>
          {Data.menu[1]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-24'>
        <span className='text-2xl font-semibold'>{Data.menu[1]}</span>
        <div className='mt-6'>
          <Content content={content} />
        </div>
      </main>
    </div>
  )
}
