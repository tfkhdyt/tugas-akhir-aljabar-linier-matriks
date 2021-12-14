import { useState, useContext, useRef, useEffect } from 'react'
import { inv, matrix, round, det, map } from 'mathjs'
import Fraction from 'fraction.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { MatrixContext } from '../config'
import Button from './Button'
import ResetDialog from './ResetDialog'

const MySwal = withReactContent(Swal)

export default function Table () {
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
    ResetDialog(setResult, form)
  }

  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false
    else {
      const original = String.raw`\begin{align}
        A & = \begin{bmatrix}
          ${_matrix[0][0]} & ${_matrix[0][1]} & ${_matrix[0][2]} \\
          ${_matrix[1][0]} & ${_matrix[1][1]} & ${_matrix[1][2]} \\
          ${_matrix[2][0]} & ${_matrix[2][1]} & ${_matrix[2][2]}
        \end{bmatrix} \\ \\
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
          A^{-1} & = \begin{bmatrix}
            ${pecahan[0][0]} & ${pecahan[0][1]} & ${pecahan[0][2]} \\
            ${pecahan[1][0]} & ${pecahan[1][1]} & ${pecahan[1][2]} \\
            ${pecahan[2][0]} & ${pecahan[2][1]} & ${pecahan[2][2]}
          \end{bmatrix}
          \end{align}
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
      <div className='w-full transition duration-500 ease-in-out'>
        <table className='hover:ring-2 hover:ring-blue-500 transition duration-500 ease-in-out rounded-sm hover:shadow-lg hover:shadow-blue-500/25 w-full table-fixed text-center'>
          <tbody className='bg-white divide-y divide-gray-200'>
            {/* baris satu */}
            <tr className='divide-x divide-gray-200'>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,1]'
                  name='_11'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,2]'
                  name='_12'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[1,3]'
                  name='_13'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
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
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[2,2]'
                  name='_22'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[2,3]'
                  name='_23'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
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
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[3,2]'
                  name='_32'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
              <td className='p-2'>
                <input
                  type='number'
                  placeholder='[3,3]'
                  name='_33'
                  className='w-full text-center font-semibold outline-none py-2 tracking-wide'
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button handleReset={handleReset} />
    </form>
  )
}
