import Head from 'next/head'
import { useState } from 'react'

import Content from '../components/Content'
import Data, { AritmatikaContext } from '../config'
import Form from '../components/Form'
import HasilAritmatika from '../components/HasilAritmatika'
import TableAritmatika from '../components/TableAritmatika'
// import Table from '../components/Table'

export default function Aritmatika () {
  const [matrixA, setMatrixA] = useState()
  const [matrixB, setMatrixB] = useState()
  const [matrixC, setMatrixC] = useState()
  const [result, setResult] = useState()

  const form = (
    <>
      <TableAritmatika />
    </>
  )

  const content = (
    <AritmatikaContext.Provider
      value={{
        matrixA,
        setMatrixA,
        matrixB,
        setMatrixB,
        matrixC,
        setMatrixC,
        result,
        setResult
      }}
    >
      <Form content={form} />
      {result ? <HasilAritmatika /> : null}
    </AritmatikaContext.Provider>
  )
  return (
    <div>
      <Head>
        <title>
          {Data.menu[0]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-24'>
        <span className='text-2xl font-semibold'>{Data.menu[0]}</span>
        <div className='mt-6'>
          <Content content={content} />
        </div>
      </main>
    </div>
  )
}
