//  import React from 'react'
//  import { MdMailOutline } from "react-icons/md";
//  import { BsTelephone } from "react-icons/bs";
//  import "../app/styles/contact.css";

//  const Contact = () => {
//    return (
//      <div id='contact' className='contact-container'>
//        <div className='contact-grid md:grid-cols-2'>
//         <div className='contact-space'>
//           <h2 className='contact-heading' data-aos="zoom -in-up">Get in touch</h2>
//           <p className='contact-text' data-aos="zoom-in-up">
//             Drop me a line, give me a call, or send me a message by submitting the form.
//           </p>
//           <div className='contact-flex' data-aos="zoom-in-up">
//               <MdMailOutline size={30}/> xyz@gmail.com
//           </div>

//           <div className='contact-flex' data-aos="'zoom-in-up">
//           <BsTelephone size={30} /> (021) 000-0000
//           </div>
//         </div>
//         <div className='contact-space'>
//           <div className='form' data-aos="zoom-in-up">
//             <label htmlFor="name">Name</label>
//             <input type="text" 
//             className='input-field'
//             id='name'/>
//           </div>

//           <div className='form' data-aos="zoom-in-up">
//             <label htmlFor="email">Email</label>
//             <input type='text' className='input-field'
//             id='email'/>
//           </div>
//           <div className='form' data-aos="zoom-in-up">
//             <label htmlFor="msg">Message</label>
//             <textarea 
//             className= 'textarea-field'
//             id='msg' rows={8}>
//             </textarea>  
//           </div> 
//           <button className='button' data-aos="zoom-in-up">Send</button>        
//         </div>
//        </div>
//      </div>
//    )
//  }
 
//  export default Contact


import React from "react";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../app/styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="contact-flex" data-aos="zoom-in-up">
            <MdMailOutline size={30} /> xyz@gmail.com
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={30} /> (021) 000-0000
          </div>
          {/* Social Media Links */}
          <div className="social-icons" data-aos="zoom-in-up">
            <a
              href="https://github.com/NoreenZubair213"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <div className="contact-space">
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="input-field" id="email" />
          </div>
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className="textarea-field" id="msg" rows={8}></textarea>
          </div>
          <button className="button" data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
