import React from 'react'
import "./about.css";

const About = () => {
  return (
    <div className='a' id='about'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src='https://www.techstack.in/blog/wp-content/uploads/2021/04/web-developer.png' className='a-img'></img>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-desc'>
            I am a passionate frontend developer from india. A technology enthusiast keen to explore the depth of computer science.
            </p>
            <p className='a-desc'>
             Currently, I am exploring the field of web development. Enthusiastic about browsers, frontend tooling and side-projects. I am skilled in HTML, CSS, javaScript and currently learning MERN stack.
            </p>
            <p className='a-desc'>My <a href=''>LinkedIn</a> profile.</p>
        </div>
    </div>
  )
}

export default About