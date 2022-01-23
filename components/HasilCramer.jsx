// import module
import { Provider, Node } from '@nteract/mathjax'
import { useContext } from 'react'
import { motion } from 'framer-motion'

// import config
import { CramerContext } from '../config'

// export component Hasil
export default function Hasil() {
  // ambil variabel result dari context
  const { result } = useContext(CramerContext)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', delay: 1 }}
      className='w-auto h-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'
    >
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='overflow-x-auto'>
        <div className='text-gray-600 '>
          {/* set konfigurasi untuk MathJax */}
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none',
            }}
          >
            {/* tampilkan output */}
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
    </motion.div>
  )
}
