import React from 'react'
import WhatsApp from '../../../assets/whatsapp.png'
import Email from '../../../assets/Email.png'
import Pin from '../../../assets/PinLarge.png'
import Instagram from '../../../assets/Instagram.png'
import Facebook from '../../../assets/Facebook.png'
import Twitter from '../../../assets/Twitter.png'


function ContactUs() {
    return (
            <div className="contact-container">
                <h1>Contact Us</h1>        
                <section className="contact-section">
                    <img src = {WhatsApp} alt="whatsapp"/>
                    <div classname="info">         
                    <a href="https://api.whatsapp.com/send?phone=97335617635&text=Hello%20Garden%20of%20Knowledge">  
                        <p>WhatsApp: </p>
                        <p>+973 3561 7635</p>
                    </a>       
                    </div>
                </section>
                <section className="contact-section">
                    <img src = {Email} alt="email"/> 
                    <div classname="info"> 
                    <a href="mailto:speakout.info.bh@gmail.com">
                        <p>Email: </p>
                        <p>speakout.info.bh@gmail.com</p>
                        </a>    
                    </div>
                </section>               
                <section className="contact-section">
                    <img src ={Pin} alt="address"/> 
                    <div classname="info">
                    <a href="https://goo.gl/maps/8RGxc7WnJPwaapKL7">
                        <p>Street Address:</p> 
                        <p>Rd No 3949</p>
                        <p>Bani Jamra, Bahrain</p>
                    </a>    
                    </div>
                </section>
               
                <section className="contact-section">
                
                    <img src ={Instagram} alt="Instagram" /> 
                    <div >
                    <a href="https://www.instagram.com/the_garden_of_knowledge/">
                        <p>Instagram: </p>
                        <p>the_garden_of_knowledge</p>
                        </a>
                    </div>
                
                </section>
                <section className="contact-section">
                    <img src ={Facebook} alt="Facebook"/> 
                    <div classname="info">
                    <a href="https://www.facebook.com/speakoutinfobh/">
                    
                        <p>Facebook:</p>
                        <p>speakoutinfobh</p>
                    </a>
                    </div>
                </section>
                <section className="contact-section">
                    <img src ={Twitter} alt="Twitter" /> 
                    <div classname="info">
                    <a href="https://twitter.com/speakoutbh">
                        <p>Twitter:</p>
                        <p>speakoutbh</p>
                    </a>    
                    </div>
                </section>
            </div>
    )
}

export default ContactUs;