import React from 'react';
import "./project.css";

const Project = ({img, link, cont}) => {
  return (
    <div className='p'>
    <div className='p-box'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target="blank" rel='noreferrer'>
        <img src={img} className='p-img'></img>
      </a>
    </div>
    <div className='p-desc'>
    {cont}
    </div>
    </div>
  )
}

export default Project