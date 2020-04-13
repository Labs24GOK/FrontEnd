import React from 'react'
import WhatsApp from '../../assets/whatsapp.png'
import Email from '../../assets/Email.png'
import Pin from '../../assets/PinLarge.png'
import Instagram from '../../assets/Instagram.png'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'


function ContactUs() {
    return (
        <div>         
            <div className="content">             
                <h1>Contact Us</h1>        
                <section className="contact-section">
                    <img src = {WhatsApp} alt="whatsapp"/>
                    <div classname="info">              
                        <p>WhatsApp: </p>
                        <p>+973 3561 7635</p>
                    </div>
                </section>
                <section className="contact-section">
                    <img src = {Email} alt="email"/> 
                    <div classname="info"> 
                        <p>Email: </p>
                        <p>speakout.info.bh@gmail.com</p>
                    </div>
                </section>               
                <section className="contact-section">
                    <img src ={Pin} alt="address"/> 
                    <div classname="info">
                        <p>Street Address:</p> 
                        <p>Rd No 3949</p>
                        <p>Bani Jamra, Bahrain</p>
                    </div>
                </section>

                <section className="contact-section">
                    <img src ={Instagram} alt="Instagram" /> 
                    <div classname="info">
                        <p>Instagram: </p>
                        <p>the_garden_of_knowledge</p>
                    </div>
                </section>
                <section className="contact-section">
                    <img src ={Facebook} alt="Facebook"/> 
                    <div classname="info">
                        <p>Facebook:</p>
                        <p>speakoutinfobh</p>
                    </div>
                </section>
                <section className="contact-section">
                    <img src ={Twitter} alt="Twitter" /> 
                    <div classname="info">
                        <p>Twitter:</p>
                        <p>speakoutbh</p>
                    </div>
                </section>
            </div>      
        </div>
    )
}

export default ContactUs;