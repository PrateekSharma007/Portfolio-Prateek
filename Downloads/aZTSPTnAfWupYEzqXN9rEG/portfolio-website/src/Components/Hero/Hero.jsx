import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Prateek Photo 2.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Prateek Sharma,</span> GenAI/MERN stack developer based in India.</h1>
      <p>I am a  developer from Delhi, India with experience in working in the Field of AI and Web Developement.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
