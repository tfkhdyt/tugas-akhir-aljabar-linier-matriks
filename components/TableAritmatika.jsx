export default function TableAritmatika ({ setMatrix }) {
  return (
    <form>
      <div className='grid grid-cols-1 gap-6'>
        {/* matriks a */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks A:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='group hover:ring-2 hover:ring-blue-300 w-full table-fixed text-center transition duration-500'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='A11'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='A12'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
                {/* baris dua */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,1]'
                      name='A21'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='A22'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* matriks b */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks B:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='group hover:ring-2 hover:ring-blue-300 w-full table-fixed text-center transition duration-500'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='B11'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='B12'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
                {/* baris dua */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,1]'
                      name='B21'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='B22'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* matriks c */}
        <div>
          <p className='font-semibold text-gray-600 text-left mb-3'>
            Masukkan matriks C:
          </p>
          <div className='w-full transition duration-500 ease-in-out'>
            <table className='group hover:ring-2 hover:ring-blue-300 w-full table-fixed text-center transition duration-500'>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* baris satu */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,1]'
                      name='C11'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[1,2]'
                      name='C12'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
                {/* baris dua */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,1]'
                      name='C21'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[2,2]'
                      name='C22'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
                {/* baris tiga */}
                <tr className='divide-x divide-gray-200'>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[3,1]'
                      name='C31'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                  <td className='p-2'>
                    <input
                      type='number'
                      placeholder='[3,2]'
                      name='C32'
                      className='w-full text-center font-semibold outline-none p-2 tracking-widest'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  )
}
