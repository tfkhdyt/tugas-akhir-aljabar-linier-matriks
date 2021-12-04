// import Link from 'next/link'
// import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Provider, Node } from '@nteract/mathjax'
import { inv, matrix, round, det, map } from 'mathjs'
import Fraction from 'fraction.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
      let invMat
      console.log(det(_matrix))
      if (round(det(_matrix) === 0)) {
        return MySwal.fire({
          icon: 'error',
          title: 'Matriks tidak valid!',
          text: 'Dikarenakan matriks tersebut menghasilkan determinan 0',
          confirmButtonText: (
            <span className='flex flex-row'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
              </svg>
              <span>Okesiap bang</span>
            </span>
          ),
          confirmButtonColor: '#60A5FA'
        })
      } else if ([-1, 1].includes(round(det(_matrix)))) {
        invMat = round(inv(matrix(_matrix)).valueOf())
      } else {
        invMat = map(inv(matrix(_matrix)).valueOf(), (x) =>
          Fraction(x).toFraction(true)
        )
      }
      const pecahan = map(invMat, (e) => {
        console.log(e)
        if (e == -0) return 0 // eslint-disable-line
        if (!e.toString().includes('/')) return e
        if (e.toString().includes('/') && e.toString().includes('-')) {
          e = e.slice(1).split('/')
          return String.raw`-\frac{${e[0]}}{${e[1]}}`
        }
        e = e.split('/')
        return String.raw`\frac{${e[0]}}{${e[1]}}`
      })
      const inverse = String.raw`
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
      <div className='flex flex-row items-center mb-2'>
        <button
          type='submit'
          className='bg-blue-400 px-2 py-2 text-white mt-5 rounded-md hover:bg-blue-500 hover:shadow-md font-semibold mr-2 flex flex-row items-center justify-between'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
            />
          </svg>
          <span className='mx-0.5'>Hitung</span>
        </button>
        <button
          type='reset'
          className='bg-red-400 px-2 py-2 text-white mt-5 rounded-md hover:bg-red-500 hover:shadow-md font-semibold flex flex-row items-center justify-between'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
          <span className='mx-1'>Reset</span>
        </button>
      </div>
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
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div>
        <p className='text-left text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{result.original}</Node>
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
