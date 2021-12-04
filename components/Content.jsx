// import Link from 'next/link'
// import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Provider, Node } from '@nteract/mathjax'
import { inv, matrix, round, det, fraction, map } from 'mathjs'
import Fraction from 'fraction.js'

const Table = (props) => {
  const [_matrix, setMatrix] = useState()
  const [result, setResult] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = e.target
    // console.log(e.target._11.value)
    setMatrix([
      [data._11.value, data._12.value, data._13.value],
      [data._21.value, data._22.value, data._23.value],
      [data._31.value, data._32.value, data._33.value]
    ])
  }

  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false
    else {
      const original = String.raw`
        A = \begin{bmatrix}
          ${_matrix[0][0]} & ${_matrix[0][1]} & ${_matrix[0][2]} \\
          ${_matrix[1][0]} & ${_matrix[1][1]} & ${_matrix[1][2]} \\
          ${_matrix[2][0]} & ${_matrix[2][1]} & ${_matrix[2][2]}
        \end{bmatrix}
      `.trim()
      let invMat, inverse;
      console.log(det(_matrix))
      if (round(det(_matrix) == 0))
        return alert('Matriks tidak valid!')
      else if ([-1, 1].includes(round(det(_matrix)))) {
        invMat = round(inv(matrix(_matrix)).valueOf())
      } else {
        invMat = map(inv(matrix(_matrix)).valueOf(), (x) => Fraction(x).toFraction(true))
      }
      const pecahan = map(invMat, (e) => {
        console.log(e)
        if (e == -0) return 0
        if (!e.toString().includes('/')) return e
        if (e.toString().includes('/') && e.toString().includes('-')) {
          e = e.slice(1).split('/');
          return String.raw`-\frac{${e[0]}}{${e[1]}}`
        }
        e = e.split('/')
        return String.raw`\frac{${e[0]}}{${e[1]}}`
      })
       inverse = String.raw`
          A^{-1} = \begin{bmatrix}
            ${pecahan[0][0]} & ${pecahan[0][1]} & ${pecahan[0][2]} \\
            ${pecahan[1][0]} & ${pecahan[1][1]} & ${pecahan[1][2]} \\
            ${pecahan[2][0]} & ${pecahan[2][1]} & ${pecahan[2][2]}
          \end{bmatrix}
        `.trim()
      // console.log(invMat)
      console.log(invMat)
      setResult({
        original,
        inverse
      })
    }
  }, [_matrix])

  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false
    else {
      // console.log(result)
      props.onResultChange(result)
    }
  }, [result])

  return (
    <form onSubmit={handleSubmit}>
      <div className='hover:shadow w-full transition duration-500 ease-in-out'>
        <table className='w-full table-fixed text-center'>
          <tbody className='bg-white divide-y divide-gray-200'>
            {/* baris satu */}
            <tr className='divide-x divide-gray-200'>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,1]'
                  name='_11'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,2]'
                  name='_12'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,3]'
                  name='_13'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
            </tr>
            {/* baris dua */}
            <tr className='divide-x divide-gray-200'>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[2,1]'
                  name='_21'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[2,2]'
                  name='_22'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[2,3]'
                  name='_23'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
            </tr>
            {/* baris tiga */}
            <tr className='divide-x divide-gray-200'>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[3,1]'
                  name='_31'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[3,2]'
                  name='_32'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[3,3]'
                  name='_33'
                  className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type='submit'
        className='bg-blue-400 px-4 py-2 text-white mt-5 rounded-md hover:bg-blue-500 hover:shadow-md font-semibold mr-2'
      >
        Hitung
      </button>
      <button
        type='reset'
        className='bg-red-400 px-5 py-2 text-white mt-5 rounded-md hover:bg-red-500 hover:shadow-md font-semibold'
      >
        Reset
      </button>
    </form>
  )
}

const Form = (props) => {
  const [matrix, setMatrix] = useState()
  const handleResult = (result) => {
    setMatrix(result)
  }

  const i = useRef(true)
  useEffect(() => {
    if (i.current) i.current = false
    else {
      // console.log(`Matrixnya adalah:`, matrix)
      props.onMatrixChange(matrix)
    }
  }, [matrix])
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 flex flex-col transition duration-500 ease-in-out'>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan matriks 3x3:
        </p>
      </div>
      <Table onResultChange={handleResult} />
    </div>
  )
}

const Hasil = ({ result }) => {
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 transition duration-500 ease-in-out flex flex-col'>
      <p className='text-xl font-semibold mb-4 text-gray-800'>Hasil</p>
      <div>
        <p className='text-left text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{result.original}</Node>
          </Provider>
        </p>
        <p className='text-left text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{result.inverse}</Node>
          </Provider>
        </p>
      </div>
    </div>
  )
}

export const Content = (props) => {
  const [matrix, setMatrix] = useState()
  const handleMatrix = (matrix) => {
    setMatrix(matrix)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch w-full'>
      <Form onMatrixChange={handleMatrix} />
      {matrix ? <Hasil result={matrix} /> : null}
    </div>
  )
}
