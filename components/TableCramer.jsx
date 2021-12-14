import { useContext, useEffect, useRef } from 'react'
import { det, round } from 'mathjs'

import Button from './Button'
import { CramerContext } from '../config'
import ResetDialog from './ResetDialog'

const InputForm = () => {
  const input = []
  for (let i = 0; i < 3; i++) {
    input.push(
      <div className='text-gray-600 font-semibold text-xs lg:text-base w-full flex justify-arounx items-center'>
        <input
          type='number'
          className='text-center font-semibold outline-none w-10 lg:w-16 mr-2 px-2 lg:px-2 py-2 focus:ring-2 focus:ring-blue-500 transition duration-500 ease-in-out rounded-sm focus:shadow-lg focus:shadow-blue-500/25'
          name={`_${i + 1}x`}
        />
        <span>x +</span>
        <input
          type='number'
          className='text-center font-semibold outline-none w-10 lg:w-16 mx-2 px-2 lg:px-2 py-2 focus:ring-2 focus:ring-blue-500 transition duration-500 ease-in-out rounded-sm focus:shadow-lg focus:shadow-blue-500/25'
          name={`_${i + 1}y`}
        />
        <span>y +</span>
        <input
          type='number'
          className='text-center font-semibold outline-none w-10 lg:w-16 mx-2 px-2 lg:px-2 py-2 focus:ring-2 focus:ring-blue-500 transition duration-500 ease-in-out rounded-sm focus:shadow-lg focus:shadow-blue-500/25'
          name={`_${i + 1}z`}
        />
        <span>z =</span>
        <input
          type='number'
          className='text-center font-semibold outline-none w-10 lg:w-16 ml-2 px-2 lg:px-2 py-2 focus:ring-2 focus:ring-blue-500 transition duration-500 ease-in-out rounded-sm focus:shadow-lg focus:shadow-blue-500/25'
          name={`_${i + 1}h`}
          required
        />
      </div>
    )
  }
  return <div className='flex flex-col space-y-6'>{input}</div>
}

export default function TableAritmatika () {
  const {
    persamaan1,
    setPersamaan1,
    persamaan2,
    setPersamaan2,
    persamaan3,
    setPersamaan3,
    setResult
  } = useContext(CramerContext)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = e.target
    setPersamaan1({
      x: data._1x.value || 0,
      y: data._1y.value || 0,
      z: data._1z.value || 0,
      hasil: data._1h.value || 0
    })
    setPersamaan2({
      x: data._2x.value || 0,
      y: data._2y.value || 0,
      z: data._2z.value || 0,
      hasil: data._2h.value || 0
    })
    setPersamaan3({
      x: data._3x.value || 0,
      y: data._3y.value || 0,
      z: data._3z.value || 0,
      hasil: data._3h.value || 0
    })
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
      console.log(
        `Persamaan 1: ${persamaan1.x}, ${persamaan1.y}, ${persamaan1.z}, ${persamaan1.hasil}`
      )
      console.log(
        `Persamaan 2: ${persamaan2.x}, ${persamaan2.y}, ${persamaan2.z}, ${persamaan2.hasil}`
      )
      console.log(
        `Persamaan 3: ${persamaan3.x}, ${persamaan3.y}, ${persamaan3.z}, ${persamaan3.hasil}`
      )
      const detMatrix = round(
        det([
          [persamaan1.x, persamaan1.y, persamaan1.z],
          [persamaan2.x, persamaan2.y, persamaan2.z],
          [persamaan3.x, persamaan3.y, persamaan3.z]
        ])
      )
      const detMatrix1 = round(
        det([
          [persamaan1.hasil, persamaan1.y, persamaan1.z],
          [persamaan2.hasil, persamaan2.y, persamaan2.z],
          [persamaan3.hasil, persamaan3.y, persamaan3.z]
        ])
      )
      const detMatrix2 = round(
        det([
          [persamaan1.x, persamaan1.hasil, persamaan1.z],
          [persamaan2.x, persamaan2.hasil, persamaan2.z],
          [persamaan3.x, persamaan3.hasil, persamaan3.z]
        ])
      )
      const detMatrix3 = round(
        det([
          [persamaan1.x, persamaan1.y, persamaan1.hasil],
          [persamaan2.x, persamaan2.y, persamaan2.hasil],
          [persamaan3.x, persamaan3.y, persamaan3.hasil]
        ])
      )
      console.log(`Determinan: ${detMatrix}`)
      console.log(`Determinan 1: ${detMatrix1}`)
      console.log(`Determinan 2: ${detMatrix2}`)
      console.log(`Determinan 3: ${detMatrix3}`)
      const x = round(detMatrix1 / detMatrix)
      const y = round(detMatrix2 / detMatrix)
      const z = round(detMatrix3 / detMatrix)
      console.log(`X: ${x}`)
      console.log(`Y: ${y}`)
      console.log(`Z: ${z}`)
      const tex = {
        matrix: null,
        matrix1: null,
        matrix2: null,
        matrix3: null,
        hasil: null
      }
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

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className='flex flex-col space-y-4'>
        <div>
          <InputForm />
        </div>
      </div>
      <Button handleReset={handleReset} />
    </form>
  )
}
