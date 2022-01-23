// import module
import { matrix, multiply, transpose, add } from 'mathjs'
import { useContext, useEffect, useRef, useState } from 'react'

// import context
import { AritmatikaContext } from '../config'

// import components
import Button from './Button'
import ResetDialog from './ResetDialog'

// export component TableAritmatika
export default function TableAritmatika() {
  // state matrix dan hasil
  const {
    matrixA,
    setMatrixA,
    matrixB,
    setMatrixB,
    matrixC,
    setMatrixC,
    setResult,
  } = useContext(AritmatikaContext)
  // reference untuk form
  const form = useRef()

  // function untuk handle submit event
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = e.target
    // input data matrix ke state
    setMatrixA([
      [data.A11.value, data.A12.value],
      [data.A21.value, data.A22.value],
    ])
    setMatrixB([
      [data.B11.value, data.B12.value],
      [data.B21.value, data.B22.value],
    ])
    setMatrixC([
      [data.C11.value, data.C12.value],
      [data.C21.value, data.C22.value],
      [data.C31.value, data.C32.value],
    ])
  }

  // function untuk handle reset
  const handleReset = (e) => {
    e.preventDefault()
    ResetDialog(setResult, form)
  }

  // lifecycle
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      // variable untuk menyimpan hasil
      const tex = {
        a: null,
        b: null,
        c: null,
      }
      // hitung soal a
      const a = multiply(matrix(matrixC), matrix(matrixA)).valueOf()
      // hitung soal b
      const b = multiply(transpose(matrixA), add(matrixA, matrixB)).valueOf()
      // hitung soal c
      const c = transpose(multiply(matrixC, matrixB)).valueOf()

      // ubah hasil menjadi string yang dimengerti mathjax
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

  // state untuk ring table
  const [isActiveA, setIsActiveA] = useState(false)
  const [isActiveB, setIsActiveB] = useState(false)
  const [isActiveC, setIsActiveC] = useState(false)

  // function untuk handle focus dan blur pada matrix
  const handleFocusBlurMatrixA = () => {
    setIsActiveA(!isActiveA)
  }
  const handleFocusBlurMatrixB = () => {
    setIsActiveB(!isActiveB)
  }
  const handleFocusBlurMatrixC = () => {
    setIsActiveC(!isActiveC)
  }

  // tampilan tabel aritmetika
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className='group grid grid-cols-2 gap-6'>
        {/* matriks a */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks A:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table
              className={`w-full table-fixed text-center transition duration-500 ease-in-out ${
                isActiveA
                  ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25'
                  : null
              }`}
            >
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
                      onFocus={handleFocusBlurMatrixA}
                      onBlur={handleFocusBlurMatrixA}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='A12'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixA}
                      onBlur={handleFocusBlurMatrixA}
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
                      onFocus={handleFocusBlurMatrixA}
                      onBlur={handleFocusBlurMatrixA}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='A22'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixA}
                      onBlur={handleFocusBlurMatrixA}
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
            <table
              className={`w-full table-fixed text-center transition duration-500 ease-in-out ${
                isActiveB
                  ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25'
                  : null
              }`}
            >
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
                      onFocus={handleFocusBlurMatrixB}
                      onBlur={handleFocusBlurMatrixB}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='B12'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixB}
                      onBlur={handleFocusBlurMatrixB}
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
                      onFocus={handleFocusBlurMatrixB}
                      onBlur={handleFocusBlurMatrixB}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='B22'
                      className='w-full text-center font-semibold outline-none py-1 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixB}
                      onBlur={handleFocusBlurMatrixB}
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
            <table
              className={`w-full table-fixed text-center transition duration-500 ease-in-out ${
                isActiveC
                  ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25'
                  : null
              }`}
            >
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
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='C12'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
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
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='C22'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
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
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[3,2]'
                      name='C32'
                      className='w-full text-center font-semibold outline-none p-2 tracking-wide'
                      required
                      onFocus={handleFocusBlurMatrixC}
                      onBlur={handleFocusBlurMatrixC}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* panggil component Button */}
      <Button handleReset={handleReset} />
    </form>
  )
}
