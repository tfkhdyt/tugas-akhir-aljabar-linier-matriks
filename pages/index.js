// import module
import { useState } from 'react'
import Head from 'next/head'

// import components
import Content from '../components/Content'
import Data, { AritmatikaContext } from '../config'
import Form from '../components/Form'
import HasilAritmatika from '../components/HasilAritmatika'
import TableAritmatika from '../components/TableAritmatika'


// export component aritmatika
export default function Aritmatika () {
  // state untuk menyimpan matrix dan hasil
  const [matrixA, setMatrixA] = useState()
  const [matrixB, setMatrixB] = useState()
  const [matrixC, setMatrixC] = useState()
  const [result, setResult] = useState()

  // variabel content
  const content = (
    // pass data ke context
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
      {/* Tampilkan component form dengan component TableAritmatika sebagai props */}
      <Form content={<TableAritmatika />} />
      {/* tampilkan component HasilAritmatika jika state result memiliki nilai */}
      {result ? <HasilAritmatika /> : null}
    </AritmatikaContext.Provider>
  )

  // tampilan halaman operasi aritmetika matriks
  return (
    <div>
      <Head>
        {/* judul halaman */}
        <title>
          {Data.menu[0]} | {Data.judul}
        </title>
      </Head>
      <main className='container mx-auto p-6 lg:px-24'>
        <span className='text-2xl font-semibold'>{Data.menu[0]}</span>
        <div className='mt-6'>
          {/* panggil component Content dengan variabel content sebagai props */}
          <Content content={content} />
        </div>
      </main>
    </div>
  )
}
