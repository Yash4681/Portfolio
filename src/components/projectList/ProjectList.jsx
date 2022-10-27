import React from 'react';
import "./projectList.css";
import Project from "../project/Project";
import products from "../../data";

const ProjectList = () => {
  return (
    <div className='pl' id='projects'>
        <div className='pl-text'>
            <h1 className='pl-title'>My Projects</h1>
            <p className='pl-desc'>
                Some of the projects that i have build.
            </p>

        </div>
        <div className='pl-list'>
          {products.map(item => (
            <Project link={item.link} img={item.img} key={item.id} cont={item.desc}/>
          ))}          
            
        </div>
        <div className='pl-text'>
          <p className=''>
            More projects on <a href='https:/www.github.com/yash4681' target="blank">Github.</a>
          </p>
        </div>
    </div>
  )
}

export default ProjectList