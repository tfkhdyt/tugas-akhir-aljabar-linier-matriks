import { useContext } from 'react'

import { AritmatikaContext } from '../config'
import { Provider, Node } from '@nteract/mathjax'

export default function Hasil () {
  const { result } = useContext(AritmatikaContext)
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'>
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div>
        <p className='text-gray-600 text-xs'>
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none'
            }}
          >
            <Node>{result.a + result.b + result.c}</Node>
          </Provider>
        </p>
      </div>
    </div>
  )
}
