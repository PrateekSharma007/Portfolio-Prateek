import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import profile_img from '../../assets/pp2.jpeg'
import './Hero.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function downloadResume() {
  // Replace 'resume.pdf' with the path to your resume file
  const resumeUrl = 'https://drive.google.com/file/d/1uoZAjWd8oEoYa2uKHA5Ozm2NvkZ4yvQp/view?usp=drive_link';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}






const Hero = () => {
  const [text] = useTypewriter({
    words : ["GenAI" , "MERN STACK" , "GenAI/MERN Developer"] ,
    loops : {},
    typeSpeed: 250,
    
  })
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      {/* <h1><span>I'm Prateek Sharma</span> GenAI/MERN stack developer based in India.</h1> */}

      <h1><span>I'm Prateek Sharma</span> <span> {text}</span> <span style= {{color : "red"}}><Cursor cursorStyle="" /> </span> based in India.</h1>


      <p>I am a  developer from Delhi, India with experience in working in the Field of AI and Web Developement.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-connect"><a href="https://drive.google.com/file/d/1uoZAjWd8oEoYa2uKHA5Ozm2NvkZ4yvQp/view?usp=drive_link" style={{ textDecoration: 'none' }}>My resume</a></div>
      </div>
      <div className='justify-center gap-4 text-6xl gap-2'>
        <a href="https://www.linkedin.com/in/prateeksh007/"><FaLinkedin style={{ marginRight: '5px',fontSize: '2em' }} /></a>
        <a href="https://github.com/PrateekSharma007"><FaGithub style={{ marginRight: '5px', fontSize: '2em' }} /></a>
        <a href="https://twitter.com/ssts3535"><FaSquareXTwitter style={{ marginRight: '  5px', fontSize: '2em' }} /></a>
        <a href="https://www.instagram.com/"><FaInstagram style={{ marginRight: '5px', fontSize: '2em' }} /></a>
        
      </div>
    </div>
  )
}

export default Hero
