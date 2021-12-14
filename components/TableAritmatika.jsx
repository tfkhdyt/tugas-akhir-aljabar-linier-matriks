import { useContext, useEffect, useRef } from 'react'
import { matrix, multiply, transpose, add } from 'mathjs'

import Button from './Button'
import { AritmatikaContext } from '../config'
import ResetDialog from './ResetDialog'

export default function TableAritmatika () {
  const {
    matrixA,
    setMatrixA,
    matrixB,
    setMatrixB,
    matrixC,
    setMatrixC,
    setResult
  } = useContext(AritmatikaContext)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = e.target
    setMatrixA([
      [data.A11.value, data.A12.value],
      [data.A21.value, data.A22.value]
    ])
    setMatrixB([
      [data.B11.value, data.B12.value],
      [data.B21.value, data.B22.value]
    ])
    setMatrixC([
      [data.C11.value, data.C12.value],
      [data.C21.value, data.C22.value],
      [data.C31.value, data.C32.value]
    ])
  }

  const handleReset = (e) => {
    e.preventDefault()
    // form.blur()
    ResetDialog(setResult, form)
  }

  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      console.log(matrixA)
      console.log(matrixB)
      console.log(matrixC)
      const tex = {
        a: null,
        b: null,
        c: null
      }
      const a = multiply(matrix(matrixC), matrix(matrixA)).valueOf()
      console.log(a)
      const b = multiply(transpose(matrixA), add(matrixA, matrixB)).valueOf()
      console.log(b)
      const c = transpose(multiply(matrixC, matrixB)).valueOf()
      console.log(c)
      tex.a = String.raw`\begin{align}
        CA & = \begin{bmatrix}
          ${a[0][0]} && ${a[0][1]} \\
          ${a[1][0]} && ${a[1][1]} \\
          ${a[2][0]} && ${a[2][1]} 
        \end{bmatrix} \\ \\
      `
      tex.b = String.raw`
        A^{T} (A + B) & = \begin{bmatrix}
          ${b[0][0]} && ${b[0][1]} \\
          ${b[1][0]} && ${b[1][1]} 
        \end{bmatrix} \\ \\
      `
      tex.c = String.raw`
        (CB)^{T} & = \begin{bmatrix}
          ${c[0][0]} && ${c[0][1]} && ${c[0][2]}\\
          ${c[1][0]} && ${c[1][1]} && ${c[1][2]}
        \end{bmatrix}
        \end{align}
      `
      setResult(tex)
    }
  }, [matrixA, matrixB, matrixC])

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className='group grid grid-cols-2 gap-6'>
        {/* matriks a */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks A:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='w-full table-fixed text-center transition duration-500 ease-in-out group-hover:ring-2 group-hover:ring-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='A11'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='A12'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
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
                      name='A21'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='A22'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* matriks b */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks B:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='w-full table-fixed text-center transition duration-500 group-hover:ring-2 group-hover:ring-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='B11'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='B12'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
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
                      name='B21'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='B22'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* matriks c */}
        <div className='col-span-2'>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks C:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='w-full table-fixed text-center transition duration-500 group-hover:ring-2 group-hover:ring-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='C11'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='C12'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
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
                      name='C21'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='C22'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
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
                      name='C31'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[3,2]'
                      name='C32'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Button handleReset={handleReset} />
    </form>
  )
}
