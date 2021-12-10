import { useContext } from 'react'

import { MatrixContext } from '../config'
import { Provider, Node } from '@nteract/mathjax'

export default function Hasil () {
  const { matrix } = useContext(MatrixContext)
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'>
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='overflow-x-auto'>
        <p className='text-sm lg:text-base text-gray-600'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{matrix.original + matrix.inverse}</Node>
          </Provider>
        </p>
      </div>
    </div>
  )
}
