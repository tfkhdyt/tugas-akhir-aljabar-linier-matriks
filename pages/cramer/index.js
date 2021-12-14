import Head from 'next/head'
import { useState } from 'react'

import Content from '../../components/Content'
import Data, { CramerContext } from '../../config'
import Form from '../../components/Form'
import HasilCramer from '../../components/HasilCramer'
import TableCramer from '../../components/TableCramer'

export default function Cramer() {
  const [persamaan1, setPersamaan1] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  })
  const [persamaan2, setPersamaan2] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  })
  const [persamaan3, setPersamaan3] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  })
  const [result, setResult] = useState()

  const form = (
    <>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan 3 persamaan:
        </p>
      </div>
      <TableCramer />
    </>
  )

  const content = (
    <CramerContext.Provider
      value={{
        persamaan1,
        setPersamaan1,
        persamaan2,
        setPersamaan2,
        persamaan3,
        setPersamaan3,
        result,
        setResult,
      }}
    >
      <Form content={form} />
      {result ? <HasilCramer /> : null}
    </CramerContext.Provider>
  )
  return (
    <div>
      <Head>
        <title>
          {Data.menu[2]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-24'>
        <span className='text-2xl font-semibold'>{Data.menu[2]}</span>
        <div className='mt-6'>
          <Content content={content} />
        </div>
      </main>
    </div>
  )
}
