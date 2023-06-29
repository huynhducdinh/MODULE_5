import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <h1 className="text-center mt-5">Vietnam's COVID Information</h1>
       <Link href="/components/covidEpidemicInformation" className="btn btn-success" style={{marginLeft:"45%"}}>Get All</Link>

    </>
  )
}
