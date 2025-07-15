"use client"
import Link from "next/link";
import Image from 'next/image';
import me from '../../../public/me.jpg'

export default function About() {
  return (
    <>
      <nav>
        <Link href='/'>
          Wrote
        </Link>
        <Link href='/about' className='active'>
          About
        </Link>
        <Link href='/stuff'>
          Stuff
        </Link>
      </nav>

      <p><Image className='meImg' src={me} alt='me' /></p>

      <div>
        <h3>Stuff about Greg</h3>
        <p>
          This is the personal website of Greg Johns. I work as a senior software engineer for CBRE and have a background in art and visual design. 
          I&apos;ve been building stuff on the web for over 20 years and have kept a personal site for about as long.
        </p>
        <p>
          This is that site. My online collection of selected projects, writings and other random stuff. One of the first things that attracted me to the web oh so long ago where all the personal web sites one could find online. 
          Even before they where called blogs, maintaining a online personal presence on this world wide web gave me a place for self expression and the gratification that comes with writing.
        </p>
        <p>
          Something about myself is that I am a passionate life long learner, tinkerer and builder of stuff. Most virtual some real, some useful some not so much but all stuff. 
          I&apos;ve worked for mom & pop shops to big corp America. First as a user experience designer and later as a software engineer. 
          Aside from work I have a beautiful wife and daughter, two cats and a dog.
        </p>
      </div>
    </>
  )
}
