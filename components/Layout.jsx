import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
