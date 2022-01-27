// export component Form
export default function Form({ content }) {
  return (
    <div className='flex w-auto flex-col rounded-lg bg-blue-50 p-6 shadow-md transition duration-500 ease-in-out hover:bg-blue-100 hover:shadow-lg'>
      {/* tampilkan variabel content dari props */}
      {content}
    </div>
  )
}
