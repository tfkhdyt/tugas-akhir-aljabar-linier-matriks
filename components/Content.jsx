export default function Content ({ content }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch w-full transition-all duration-500 ease-in-out'>
      {content}
    </div>
  )
}
