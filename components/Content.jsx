// export component Content
export default function Content({ content }) {
  return (
    <div className='grid w-full grid-cols-1 gap-8 transition-all duration-500 ease-in-out md:grid-cols-2'>
      {/* tampilkan variabel content dari props */}
      {content}
    </div>
  )
}
