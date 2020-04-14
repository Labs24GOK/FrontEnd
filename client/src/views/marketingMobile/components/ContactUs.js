import React from 'react'
import WhatsApp from '../../../assets/whatsapp.png'
import Email from '../../../assets/email-peacock.png'
import Pin from '../../../assets/pin-peacock.png'
import Instagram from '../../../assets/instagram-peacock.png'
import Facebook from '../../../assets/facebook-peacock.png'
import Twitter from '../../../assets/twitter-peacock.png'
import phone from '../../../assets/phone-peacock.png'


function ContactUs() {
    return (
            <div className="contact-container">
                <h1>Contact Us</h1>        
                <section className="contact-section">
                    <img src = {WhatsApp} alt="whatsapp"/>
                    <div classname="info">         
                    <a href="https://api.whatsapp.com/send?phone=97335617635&text=Hello,%20Garden%20of%20Knowledge,%20I%20was%20browsing%20your%20website.%20I%20am%20interested%20in%20your%20course." target="_blank" rel="noopener noreferrer" >  
                        <p>WhatsApp: </p> 
                        <p>+973 3561 7635</p>
                    </a>       
                    </div>
                </section>

                <section className="contact-section">
                <img src = {phone} alt="phone"/>
                <div className="info">
                    <a href="tel:+973 3561 7635">
                    <p>Telephone:</p>
                    <p>+973 3561 7635</p>
                    </a>
                </div>

                </section>



                <section className="contact-section">
                    <img src = {Email} alt="email"/> 
                    <div classname="info"> 
                    <a href="mailto:speakout.info.bh@gmail.com?subject=Hello&body=Hello%20Garden%20of%20Knowledge,%0D%0A%0D%0AI%20was%20browsing%20your%20website.%20I%20would%20like%20more%20information.">
                        <p>Email: </p>
                        <p>speakout.info.bh@gmail.com</p>
                        </a>    
                    </div>
                </section>               
                <section className="contact-section">
                    <img src ={Pin} alt="address"/> 
                    <div classname="info">
                    <a href="https://goo.gl/maps/iJX8iSdev6ohXKVc8" target="_blank" rel="noopener noreferrer" >
                        <p>Street Address:</p> 
                        <address>Rd No 3949<br/>
                        Bani Jamra, Bahrain</address>
                    </a>    
                    </div>
                </section>
               
                <section className="contact-section">
                
                    <img src ={Instagram} alt="Instagram" /> 
                    <div >
                    <a href="https://www.instagram.com/the_garden_of_knowledge/" target="_blank" rel="noopener noreferrer" >
                        <p>Instagram: </p>
                        <p>the_garden_of_knowledge</p>
                        </a>
                    </div>
                
                </section>
                <section className="contact-section">
                    <img src ={Facebook} alt="Facebook"/> 
                    <div classname="info">
                    <a href="https://www.facebook.com/speakoutinfobh/" target="_blank" >
                    
                        <p>Facebook:</p>
                        <p>speakoutinfobh</p>
                    </a>
                    </div>
                </section>
                <section className="contact-section">
                    <img src ={Twitter} alt="Twitter" /> 
                    <div classname="info">
                    <a href="https://twitter.com/speakoutbh" target="_blank" rel="noopener noreferrer" >
                        <p>Twitter:</p>
                        <p>speakoutbh</p>
                    </a>    
                    </div>
                </section>
            </div>
    )
}

export default ContactUs;
