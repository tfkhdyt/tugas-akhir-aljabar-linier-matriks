import { useRouter } from 'next/router'

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div>
      {(router.pathname != '/404') ? (<Navbar />) : null}
      {children}
      {(router.pathname != '/404') ? (<Footer />) : null}
    </div>
  )
}
