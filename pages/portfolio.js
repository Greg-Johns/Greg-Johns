import React from 'react'
import Link from 'gatsby-link'
import '../css/styles.css'
import '../css/carousel.css'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import vz_fios_mm0 from './img/vz_fios_mm0.jpg'
import vz_fios_mm1 from './img/vz_fios_mm1.jpg'
import vz_fios_mm2 from './img/vz_fios_mm2.jpg'
import vz_fios_mm3 from './img/vz_fios_mm3.jpg'
import vz_fios_mm4 from './img/vz_fios_mm4.jpg'
import vz_fios_mm5 from './img/vz_fios_mm5.jpg'
import vz_fios_rem1 from './img/vz_fios_rem1.jpg'
import vz_fios_rem2 from './img/vz_fios_rem2.jpg'
import vz_fios_rem3 from './img/vz_fios_rem3.jpg'
import vz_fios_rem4 from './img/vz_fios_rem4.jpg'
import vz_fios_fb1 from './img/vz_fios_fb1.jpg'
import vz_fios_fb2 from './img/vz_fios_fb2.jpg'
import vz_fios_fb3 from './img/vz_fios_fb3.jpg'
import vz_cx1 from './img/vz_cx1.gif'
import vz_cx2 from './img/vz_cx2.gif'
import vz_cx3 from './img/vz_cx3.gif'
import vz_x1 from './img/vz_x1.jpg'
import vz_x2 from './img/vz_x2.jpg'
import vz_x3 from './img/vz_x3.jpg'
import vz_x4 from './img/vz_x4.jpg'
import vz_x5 from './img/vz_x5.jpg'
import vz_x6 from './img/vz_x6.jpg'

import zix1 from './img/zix1.gif'
import zix2 from './img/zix2.gif'

import ey1 from './img/ey1.gif'
import ey2 from './img/ey2.gif'
import ey3 from './img/ey3.gif'
import ey4 from './img/ey4.gif'
import ey5 from './img/ey5.gif'

import te1 from './img/te1.gif'
import te2 from './img/te2.gif'
import te3 from './img/te3.gif'

import creole1 from './img/creole1.gif'
import creole2 from './img/creole2.gif'
import creole3 from './img/creole3.gif'

import s1 from './img/s1.gif'
import s2 from './img/s2.gif'
import s3 from './img/s3.gif'
import s4 from './img/s4.gif'
import s5 from './img/s5.gif'

import Footer from '../components/Footer'
import { Carousel } from 'react-responsive-carousel';

const breakerBreaker = {
  clear: 'both'
}

class BlogPortfolio extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div className='mainGrid'>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Link to='/'>
          <header className='portfolio'>GREG JOHNS</header>
        </Link>

        <nav>~
          <Link to='/'>Blog</Link>-
          <Link to='/about/'>About</Link>-
          <Link className='active'>Portfolio</Link>~
        </nav>
        <article>
          <p className='intro'>With over two decades of experience innovating in the digital media industries. I have managed and consulted for corporations of all shapes and sizes, developed a variety of pioneering online services, B2B systems, SAAS systems, and hold 9 patents. I've helped small business owners and big CEO's take their idea from the back of napkin or multi-page business requirement document to their online dream. I've worked with stakeholders to shake out ideas, define information spaces, identify design patterns, understand their users and their data, wireframe mockups, prototype, test, iterate, build teams, build processes, build users and realize their next new thing. I even alternate between electric and manual toothbrush every other night because I think it makes my teeth cleaner.</p>

            <p>For those currious about my thoughts and approach to developing software or computers I have a few related blog posts you can read or skip over to my Github, NPM profiles. For those looking for more of the conceptual/design side of software the following are a few case studies of some of my UI/UX work.</p>

          <nav> 
            <a href='http://www.gregjohns.com/cv'>Online Resume</a>
          </nav>

          <h2 style={breakerBreaker}> ~ UI/UX ~ </h2>

          <h5>Verizon FiOS Media Manager</h5>
          <p>Screen shots showing integrations with Verizon's Media Manager desktop application with the FiOS TV system. This application let users manage personal media files from a home computer to be viewed through a FiOS TV set top box.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true'>
            <div><img src={vz_fios_mm0} /></div>
            <div><img src={vz_fios_mm1} /></div>
            <div><img src={vz_fios_mm2} /></div>
            <div><img src={vz_fios_mm3} /></div>
            <div><img src={vz_fios_mm4} /></div>
            <div><img src={vz_fios_mm5} /></div>
          </Carousel>

          <hr />
          <h5>Verizon FiOS Facebook Integration</h5>
          <p>Screen shots showing the user experience of sharing FiOS media with your Facebook feed and other social media platforms.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true' centerSlidePercentage={80}>
            <div><img src={vz_fios_fb1} /></div>
            <div><img src={vz_fios_fb2} /></div>
            <div><img src={vz_fios_fb3} /></div>
          </Carousel>
            
          <hr />
          <h5>Verizon Card Search</h5>
          <p>Screen comps. that illustrating a concept for browsing card style records using the up, down, left, right buttons (d-pad) on older style cell phones.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true' centerSlidePercentage={50}>
            <div><img src={vz_x1} /></div>
            <div><img src={vz_x2} /></div>
            <div><img src={vz_x3} /></div>
            <div><img src={vz_x4} /></div>
            <div><img src={vz_x5} /></div>
            <div><img src={vz_x6} /></div>
          </Carousel>
            
          <hr />
          <h5>Zix Corp.</h5>
          <p>Screen shots of Zix Corp's site redesign.</p>
            <div><img src={zix1} className='smImg' /></div>
            <div><img src={zix2} className='smImg' /></div>

          <hr />
          <h5>Ernst & Young</h5>
          <p>Screen shots of E&Y's new hire orientation site and Value management sites.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true' centerSlidePercentage={50}>
            <div><img src={ey1} /></div>
            <div><img src={ey2} /></div>
            <div><img src={ey3} /></div>
            <div><img src={ey4} /></div>
            <div><img src={ey5} /></div>
          </Carousel>

          <hr />
          <h5>Texas Electronics Inc.</h5>
          <p>Screen shots of Texas Electronic Inc. corporate site.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true' centerSlidePercentage={50}>
            <div><img src={te1} /></div>
            <div><img src={te2} /></div>
            <div><img src={te3} /></div>
          </Carousel>

          <hr />
          <h5>Various</h5>
          <p>A few more screen shots of older sites I've designed and developed for various companies earlier in my career.</p>
          <Carousel centerMode showStatus='false' showIndicators={false} emulateTouch='true' centerSlidePercentage={50}>
            <div><img src={s1} /></div>
            <div><img src={s2} /></div>
            <div><img src={s3} /></div>
            <div><img src={s4} /></div>
            <div><img src={s5} /></div>
            <div><img src={creole1} /></div>
            <div><img src={creole2} /></div>
            <div><img src={creole3} /></div>
          </Carousel>

        </article>
        <Footer />
      </div>
    )
  }
}

BlogPortfolio.propTypes = {
  route: React.PropTypes.object
}

export default BlogPortfolio
