import React, { useState } from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [txt,setTxt] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        setName(e.target[0].value)
        setEmail(e.target[1].value)
        setTxt(e.target[2].value)
        
    }
  return (
    <section className='container'>
        <div className="form-container">
            <div className="top-btn">
            <Button text="VIA SUPPORT CALL" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
            </div>
            <div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMail fontSize="24px"/>}/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className="form-item">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name='email' />
                </div>
                <div className="form-item">
                    <label htmlFor="text">TEXT</label>
                    <textarea style={{padding:"20px"}} name='text' rows="8" />
                </div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button  text="SUBMIT"/>
                </div>
                <div>
                    {
                        name&&email&&txt?`Name: ${name} Email: ${email} Text: ${txt}` : ""
                    }
                </div>

            </form>
        </div>
        <div className="main-image">
            <img src="/images/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm