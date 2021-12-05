import { useState, useContext, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { inv, matrix, round, det, map } from 'mathjs'
import Fraction from 'fraction.js'

import { MatrixContext } from './MatrixContext'

const MySwal = withReactContent(Swal)

export const Table = () => {
  const [_matrix, setMatrix] = useState()
  const [result, setResult] = useState()
  const { setGlobalMatrix } = useContext(MatrixContext)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form)
    // form.blur()
    const data = e.target
    // console.log(e.target._11.value)
    setMatrix([
      [data._11.value, data._12.value, data._13.value],
      [data._21.value, data._22.value, data._23.value],
      [data._31.value, data._32.value, data._33.value]
    ])
  }

  const handleReset = (e) => {
    e.preventDefault()
    // form.blur()
    MySwal.fire({
      title: 'Apakah kamu yakin ingin me-reset matriks?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#60A5FA',
      confirmButtonText: (
        <span className='flex flex-row'>
          <span>Yakin dong</span>
        </span>
      ),
      cancelButtonColor: '#F87171',
      cancelButtonText: (
        <span className='flex flex-row'>
          <span>Gak jadi deh</span>
        </span>
      )
    }).then((result) => {
      if (result.isConfirmed) {
        setResult()
        form.current.reset()
        MySwal.fire('Matriks berhasil di-reset!', '', 'success')
      }
    })
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
      // console.log(det(_matrix))
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
        }).then(() => form.current.reset())
      } else if ([-1, 1].includes(round(det(_matrix)))) {
        invMat = round(inv(matrix(_matrix)).valueOf())
      } else {
        invMat = map(inv(matrix(_matrix)).valueOf(), (x) =>
          Fraction(x).toFraction(true)
        )
      }
      const pecahan = map(invMat, (e) => {
        // console.log(e)
        if (e == -0) return 0 // eslint-disable-line
        if (!e.toString().includes('/')) return e
        if (['/', ' ', '-'].every((el) => e.includes(el))) {
          // e = e.slice(1).split('/')
          e = e.slice(1).split('/').join(' ').split(' ')
          // console.log(e)
          return String.raw`
            -${e[0]}\frac{${e[1]}}{${e[2]}}
          `
        }
        if (['/', ' '].every((el) => e.includes(el))) {
          // e = e.slice(1).split('/')
          e = e.split('/').join(' ').split(' ')
          return String.raw`
            ${e[0]}\frac{${e[1]}}{${e[2]}}
          `
        }
        if (['/', '-'].every((el) => e.includes(el))) {
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
      setGlobalMatrix(result)
    }
  }, [result])

  return (
    <form onSubmit={handleSubmit} ref={form}>
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
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z'
              clipRule='evenodd'
            />
          </svg>
          <span className='mx-0.5'>Hitung</span>
        </button>
        <button
          className='bg-red-400 px-2 py-2 text-white mt-5 rounded-md hover:bg-red-500 hover:shadow-md font-semibold flex flex-row items-center justify-between'
          onClick={handleReset}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
          <span className='mx-1'>Reset</span>
        </button>
      </div>
    </form>
  )
}
