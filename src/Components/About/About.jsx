import React from 'react'
import profile_img from '../../assets/pp1.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './About.css'


const About = () => {
  return (
    
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Generative AI Developer currently gaining valuable experience as a GenAI Intern at Mindzkonnected. With a strong foundation in Data Structures and Algorithms (DSA), I excel in crafting efficient and innovative solutions to complex problems. My expertise extends to Full Stack Development, where I leverage my skills to create robust and user-friendly applications. I am dedicated to pushing the boundaries of AI technology and contributing to impactful projects that shape the future.</p>
                <p>My passion for development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>LLM</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>NLP</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node.js</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>5</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr /> */}
        {/* <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
