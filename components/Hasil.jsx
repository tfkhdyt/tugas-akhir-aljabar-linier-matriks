import { useContext } from 'react'
import { Provider, Node } from '@nteract/mathjax'

import { Context } from '../config'

export default function Hasil () {
  const { matrix } = useContext(Context)
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 flex flex-col transition duration-500'>
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div>
        <p className='text-left text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{matrix.original}</Node>
            <Node>{matrix.inverse}</Node>
          </Provider>
        </p>
      </div>
    </div>
  )
}
