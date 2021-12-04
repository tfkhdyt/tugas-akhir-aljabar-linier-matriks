// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
import { Provider, Node } from '@nteract/mathjax'

const Table = () => {
  return (
    <form>
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
        className='bg-blue-400 px-4 py-2 text-white mt-5 rounded-md hover:bg-blue-500 hover:shadow-md font-semibold'
      >
        Hitung
      </button>
    </form>
  )
}

const Form = () => {
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 flex flex-col transition duration-500 ease-in-out'>
      <div>
        <p className='font-semibold text-gray-600 text-left mb-3'>
          Masukkan matriks 3x3:
        </p>
      </div>
      <Table />
    </div>
  )
}

const Hasil = () => {
  const tex = String.raw`\begin{bmatrix}6 & 9 \\4 & 2 \end{bmatrix} + \begin{bmatrix}1 & 2 \\2 & 3 \end{bmatrix} = \ ?`
  return (
    <div>
      <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 transition duration-500 ease-in-out'>
        <p className='text-xl font-semibold mb-4 text-gray-800'>Hasil</p>
        <p className='text-center text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{tex}</Node>
          </Provider>
        </p>
      </div>
    </div>
  )
}

export const Content = (props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch w-full'>
      <Form />
      <Hasil />
    </div>
  )
}
