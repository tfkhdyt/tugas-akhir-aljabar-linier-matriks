// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'

const Form = () => {
  return (
    <div className='w-full bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 flex flex-col justify-center items-center transition duration-500 ease-in-out text-gray-600 text-justify'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )
}

const Hasil = () => {
  return (
    <div>
      <div className='w-full bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 transition duration-500 ease-in-out'>
        <p className='text-xl font-semibold mb-4 text-gray-800'>Hasil</p>
        <p className='text-justify text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export const Content = (props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <Form />
      <Hasil />
    </div>
  )
}
