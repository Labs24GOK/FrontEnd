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
                <section>
                <img src = {WhatsApp} alt="whatsapp"/> WhatsApp 
                +973 3561 7635
                </section>

                <section>
                <img src = {Email} alt="email"/> Email: 
                speakout.info.bh@gmail.com
                </section>
                
                <section>
                <img src ={Pin} alt="address"/> Street Address 
                Rd No 3949
                Bani Jamra, Bahrain

                </section>

                <section>
                <img src ={Instagram} alt="Instagram" /> Instagram: 
                the_garden_of_knowledge
                </section>

                <section>
                <img src ={Facebook} alt="Facebook"/> Facebook:
                speakoutinfobh
                </section>

                <section>
                <img src ={Twitter} alt="Twitter" /> Twitter:
                speakoutbh
                </section>

            </div>
            
        </div>
    )
}

export default ContactUs;