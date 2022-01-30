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
      className='flex h-fit w-auto flex-col rounded-lg bg-blue-50 p-6 shadow-md transition duration-500 hover:bg-blue-100 hover:shadow-lg'
    >
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='overflow-x-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'linear' }}
          className='text-xs text-gray-600 lg:text-base'
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
