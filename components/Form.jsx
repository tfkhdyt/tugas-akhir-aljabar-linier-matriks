// export component Form
export default function Form({ content }) {
  return (
    <div className='w-auto bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md hover:shadow-lg p-6 flex flex-col transition duration-500 ease-in-out'>
      {/* tampilkan variabel content dari props */}
      {content}
    </div>
  )
}
