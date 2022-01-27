// import module
import { det, round } from 'mathjs'
import { useContext, useEffect, useRef } from 'react'

// import context
import { CramerContext } from '../config'

// import components
import Button from './Button'
import ResetDialog from './ResetDialog'

// component InputForm
const InputForm = () => {
  const input = []
  for (let i = 0; i < 3; i++) {
    input.push(
      <div className='justify-arounx flex w-full items-center text-xs font-semibold text-gray-600 lg:text-base'>
        <input
          type='number'
          className='mr-2 w-10 rounded-sm px-2 py-2 text-center font-semibold outline-none transition duration-500 ease-in-out focus:shadow-lg focus:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 lg:w-16 lg:px-2'
          name={`_${i + 1}x`}
        />
        <span>x +</span>
        <input
          type='number'
          className='mx-2 w-10 rounded-sm px-2 py-2 text-center font-semibold outline-none transition duration-500 ease-in-out focus:shadow-lg focus:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 lg:w-16 lg:px-2'
          name={`_${i + 1}y`}
        />
        <span>y +</span>
        <input
          type='number'
          className='mx-2 w-10 rounded-sm px-2 py-2 text-center font-semibold outline-none transition duration-500 ease-in-out focus:shadow-lg focus:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 lg:w-16 lg:px-2'
          name={`_${i + 1}z`}
        />
        <span>z =</span>
        <input
          type='number'
          className='ml-2 w-10 rounded-sm px-2 py-2 text-center font-semibold outline-none transition duration-500 ease-in-out focus:shadow-lg focus:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 lg:w-16 lg:px-2'
          name={`_${i + 1}h`}
          required
        />
      </div>
    )
  }
  return <div className='flex flex-col space-y-6'>{input}</div>
}

// export component TableCramer
export default function TableCramer() {
  // state persamaan dan hasil
  const {
    persamaan1,
    setPersamaan1,
    persamaan2,
    setPersamaan2,
    persamaan3,
    setPersamaan3,
    setResult,
  } = useContext(CramerContext)
  // reference untuk form
  const form = useRef()

  // function untuk handle submit event
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = e.target
    // input data persamaan ke state
    setPersamaan1({
      x: data._1x.value || 0,
      y: data._1y.value || 0,
      z: data._1z.value || 0,
      hasil: data._1h.value || 0,
    })
    setPersamaan2({
      x: data._2x.value || 0,
      y: data._2y.value || 0,
      z: data._2z.value || 0,
      hasil: data._2h.value || 0,
    })
    setPersamaan3({
      x: data._3x.value || 0,
      y: data._3y.value || 0,
      z: data._3z.value || 0,
      hasil: data._3h.value || 0,
    })
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
      // menghitung determinan untuk setiap matriks
      const detMatrix = round(
        det([
          [persamaan1.x, persamaan1.y, persamaan1.z],
          [persamaan2.x, persamaan2.y, persamaan2.z],
          [persamaan3.x, persamaan3.y, persamaan3.z],
        ])
      )
      const detMatrix1 = round(
        det([
          [persamaan1.hasil, persamaan1.y, persamaan1.z],
          [persamaan2.hasil, persamaan2.y, persamaan2.z],
          [persamaan3.hasil, persamaan3.y, persamaan3.z],
        ])
      )
      const detMatrix2 = round(
        det([
          [persamaan1.x, persamaan1.hasil, persamaan1.z],
          [persamaan2.x, persamaan2.hasil, persamaan2.z],
          [persamaan3.x, persamaan3.hasil, persamaan3.z],
        ])
      )
      const detMatrix3 = round(
        det([
          [persamaan1.x, persamaan1.y, persamaan1.hasil],
          [persamaan2.x, persamaan2.y, persamaan2.hasil],
          [persamaan3.x, persamaan3.y, persamaan3.hasil],
        ])
      )

      // menghitung nilai x, y, dan z
      const x = round(detMatrix1 / detMatrix)
      const y = round(detMatrix2 / detMatrix)
      const z = round(detMatrix3 / detMatrix)

      // variabel untuk menyimpan hasil
      const tex = {
        matrix: null,
        matrix1: null,
        matrix2: null,
        matrix3: null,
        hasil: null,
      }

      // ubah hasil menjadi string yang dimengerti mathjax
      tex.matrix = String.raw`\begin{align}
        D & = \begin{bmatrix}
          ${persamaan1.x} && ${persamaan1.y} && ${persamaan1.z} \\
          ${persamaan2.x} && ${persamaan2.y} && ${persamaan2.z} \\
          ${persamaan3.x} && ${persamaan3.y} && ${persamaan3.z}
      \end{bmatrix} = ${detMatrix} \\ \\ `

      tex.matrix1 = String.raw`
        D_{x} & = \begin{bmatrix}
          ${persamaan1.hasil} && ${persamaan1.y} && ${persamaan1.z} \\
          ${persamaan2.hasil} && ${persamaan2.y} && ${persamaan2.z} \\
          ${persamaan3.hasil} && ${persamaan3.y} && ${persamaan3.z}
      \end{bmatrix} = ${detMatrix1} \\ \\`

      tex.matrix2 = String.raw`
        D_{y} & = \begin{bmatrix}
          ${persamaan1.x} && ${persamaan1.hasil} && ${persamaan1.z} \\
          ${persamaan2.x} && ${persamaan2.hasil} && ${persamaan2.z} \\
          ${persamaan3.x} && ${persamaan3.hasil} && ${persamaan3.z}
      \end{bmatrix} = ${detMatrix2} \\ \\`

      tex.matrix3 = String.raw`
        D_{z} & = \begin{bmatrix}
          ${persamaan1.x} && ${persamaan1.y} && ${persamaan1.hasil} \\
          ${persamaan2.x} && ${persamaan2.y} && ${persamaan2.hasil} \\
          ${persamaan3.x} && ${persamaan3.y} && ${persamaan3.hasil}
      \end{bmatrix} = ${detMatrix3}
      \end{align}\\ \\`

      tex.hasil = String.raw`
        x = ${x},\ y = ${y},\  z = ${z}
      `
      setResult(tex)
    }
  }, [persamaan1, persamaan2, persamaan3])

  // tampilan component TableCramer
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className='flex flex-col space-y-4'>
        <div>
          {/* panggil component InputForm */}
          <InputForm />
        </div>
      </div>
      <Button handleReset={handleReset} />
    </form>
  )
}
