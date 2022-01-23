// import module
import { Provider, Node } from '@nteract/mathjax'
import { useContext } from 'react'
import { motion } from 'framer-motion'

// import config
import { MatrixContext } from '../config'

// export component Hasil
export default function Hasil() {
  // ambil variabel matrix dari context
  const { matrix } = useContext(MatrixContext)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', delay: 0.5 }}
      className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500'
    >
      <p className='text-xl font-semibold text-gray-800'>Hasil</p>
      <div className='overflow-x-auto'>
        <p className='text-sm lg:text-base text-gray-600'>
          {/* set konfigurasi untuk MathJax */}
          <Provider
            options={{
              showMathMenu: false,
              messageStyle: 'none',
            }}
          >
            {/* tampilkan output */}
            <Node>{matrix.original + matrix.inverse}</Node>
          </Provider>
        </p>
      </div>
    </motion.div>
  )
}
