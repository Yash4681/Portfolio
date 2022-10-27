import React from 'react';
import "./edu.css";
import Educ from "../../img/edu.png";

const Edu = () => {
  return (
    <div className='e'>
        <div className='e-wrapper'>
            <div className='e-left'>
                <h1 className='e-title'>My Education</h1>
                <h3>B.E Computer Science and Engineering</h3>
                <h4>Rajiv Gandhi College of Engineering and Research</h4>
                <p>2019 - present</p>
                <br />
                <h3>12th</h3>
                <h4>Shri Mathuradas Mohata College of Science</h4>
                <p>2018-2019</p>
            </div>
            <div className='e-right'>
                <div className='e-card bg'></div>
                <div className='e-card'>
                    <img src={Educ} alt="" className='e-img'/>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Edu