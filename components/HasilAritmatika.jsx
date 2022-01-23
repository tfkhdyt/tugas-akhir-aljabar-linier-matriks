// import module
import { Provider, Node } from '@nteract/mathjax'
import { useContext } from 'react'
import { motion } from 'framer-motion'

// import config
import { AritmatikaContext } from '../config'

// export component Hasil
export default function Hasil() {
  // ambil variabel result dari context
  const { result } = useContext(AritmatikaContext)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', delay: 0.5 }}
      className='w-auto h-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'
    >
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='md:mt-14 overflow-x-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'linear' }}
          className='text-gray-600 text-xs lg:text-base'
        >
          {/* set konfigurasi untuk MathJax */}
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none',
            }}
          >
            {/* tampilkan output */}
            <Node>{result.a + result.b + result.c}</Node>
          </Provider>
        </motion.div>
      </div>
    </motion.div>
  )
}
