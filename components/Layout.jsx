import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
