import { useContext } from 'react'

import { CramerContext } from '../config'
import { Provider, Node } from '@nteract/mathjax'

export default function Hasil () {
  const { result } = useContext(CramerContext)
  return (
    <div className='w-auto h-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'>
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='overflow-x-auto'>
        <div className='text-gray-600 '>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <div className='text-xs'>
              <Node>
                {result.matrix +
                  result.matrix1 +
                  result.matrix2 +
                  result.matrix3}
              </Node>
            </div>
            <div className='text-xl'>
              <Node>{result.hasil}</Node>
            </div>
          </Provider>
        </div>
      </div>
    </div>
  )
}
