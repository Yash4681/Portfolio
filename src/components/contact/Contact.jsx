import React, { useContext, useRef, useState } from 'react';
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_9j84d7q', 'template_12yqoko', formRef.current, 'tv-3BqjM7p3r6TEmo')
          .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className='c' id='contact'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Contact Me</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img src={phone} className='c-icon' ></img>
                        8208 3955 03
                    </div>
                    <div className='c-info-item'>
                        <img src={email} className='c-icon' ></img>
                        yashmanglekar0@gmail.com
                    </div>
                    <div className='c-info-item'>
                        <img src={address} className='c-icon' ></img>
                        505, New Nandanvan lay out, Nagpur, 440009.
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                   Get in touch with Me! 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                    <br />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                    <br />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} row="10" placeholder='Message' name="message" />
                    <button>Submit</button>
                    {done && "Thank You..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact