"use client"
import ReadMe from '../../../README.md';
import Link from "next/link";
import Image from 'next/image';
import me from '../../../public/me.jpg'

export default function About() {
  return (
    <>
      <nav>
        <Link href="/">
          Wrote
        </Link>
        <Link href="/about" className='active'>
          About
        </Link>
        <Link href="/stuff">
          Stuff
        </Link>
      </nav>

      <p><Image className="meImg" src={me} alt="me" /></p>


      <h3>Stuff about Greg</h3>
      
      <ReadMe /> 

      <Link href="https://greg-johns.vercel.app/">
        Greg Johns
      </Link>
    </>
  )
}
