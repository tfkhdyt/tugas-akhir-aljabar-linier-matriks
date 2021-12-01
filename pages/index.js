import Head from 'next/head'
import Data from '../config'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Data.judul}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  )
}
