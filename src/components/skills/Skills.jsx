import React from 'react';
import "./skills.css";
import HTML from "../../img/html.png";
import CSS from "../../img/css.png";
import JS from "../../img/javascript.png";
import R from "../../img/react.png";
import Node from "../../img/node.png";
import Java from "../../img/java.png";
import Jquery from "../../img/jquery.png";
import Bootstrap from "../../img/bootstrap.png";
import MySQL from "../../img/mysql.png";
import MongoDB from "../../img/mongodb.png";
import VScode from "../../img/vscode.png";
import sql from "../../img/sql.png";
import Express from "../../img/express.png";


const Skills = () => {
  return (
    <div className='s' id='skills'>
        <h1 className=''>My Skills</h1>
        <div className='s-wrapper'>
        <div className='s-left'>
            <h2 className='s-title'>Languages</h2>            
            <div className='s-img'>
            <img src={HTML} alt='' className='s-icon' />
            <img src={CSS} alt='' className='s-icon' />
            <img src={JS} alt='' className='s-icon' />
            <img src={Java} alt='' className='s-icon' />
            <img src={sql} alt='' className='s-icon' style={{borderRadius:"50%"}}/>
            </div>
        </div>
        <div className='s-right'>
            <h2 className='s-title'>Frameworks</h2>            
            <div className='s-img'>
            <img src={R} alt='' className='s-icon' />
            <img src={Node} alt='' className='s-icon' />
            <img src={Jquery} alt='' className='s-icon' />
            <img src={Bootstrap} alt='' className='s-icon' />
            <img src={Express} alt='' className='s-icon' />
            </div>
        </div>
        </div>
        <div className='s-tools'>
            <h1 className='s-title'>Tools</h1>
            <div className='s-img'>
                <img src={VScode} alt='' className='s-icon-t ' />
                <img src={MySQL} alt='' className='s-icon-t' />
                <img src={MongoDB} alt='' className='s-icon-t' />
            </div>
        </div>
    </div>
  )
}

export default Skills