import { useState } from 'react'

import { MatrixContext } from './MatrixContext' // eslint-disable-line
import { Form } from './Form'
import { Hasil } from './Hasil'

export const Content = (props) => {
  const [matrix, setGlobalMatrix] = useState()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch w-full transition-all duration-500 ease-in-out'>
      <MatrixContext.Provider value={{ matrix, setGlobalMatrix }}>
        <Form />
        {matrix ? <Hasil /> : null}
      </MatrixContext.Provider>
    </div>
  )
}
