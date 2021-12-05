import { useContext } from 'react'
import { Provider, Node } from '@nteract/mathjax'

import { MatrixContext } from './MatrixContext'

export const Hasil = () => {
  const { matrix } = useContext(MatrixContext)
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm hover:shadow-lg p-6 flex flex-col'>
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