"use client"
import ReadMe from '../../../README.md';
import Link from "next/link";
import Image from 'next/image';
import me from '../../../public/me.jpg'

export default function About() {
  return (
    <article>
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

      <Image className="meImg" src={me} alt="me" />

      <ReadMe />

    </article>
  )
}

