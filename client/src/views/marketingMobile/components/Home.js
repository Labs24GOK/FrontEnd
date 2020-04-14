import React from 'react'
import teacher from '../../../assets/native-english-speaker.jpg'
import kids from '../../../assets/Kindergarten.jpg'
import kindergarten from '../../../assets/teacher-and-students-illustration.png'
import primary from '../../../assets/Vector.jpg'
import secondary from '../../../assets/woman-and-man-interacting-illustration.png'

export default function Home() {

    return(
        <div className='home'>
            <div className='knowledge'>
                <h1>Knowledge For all</h1>
            </div>

            <div className="knowledge-buttons">
                <a>Register Now</a>
                <a> Learn More</a>
            </div>

            <section className='why-special'>
                <h2>Why we're special</h2>

                <h3>Learn from the best</h3>

                <div className="learn-from-best">
                    <p>Qualified, passionate teachers, including native speaker teachers when learning a language.</p>

                    <img src={teacher} alt="A native english speaking woman"/>
                </div>

                <div className="fun">
                    <h3>Learning is Fun</h3>
                    <div>
                        <img src={kids} alt="kids having fun while learning"/>
                    </div>
                        
                </div>
            </section>

            <section className="afford">
                <div className="afford-text">
                    <h2>Affordability</h2>
                    <p>Created with families in mind</p>
                 </div>
            </section>
            <section>
                <div className="kinder">
                <img src={kindergarten} alt="this it a picture"/>
                <h2>Kindergarten</h2>
                </div>
            </section>
            <section >
                <div className="kinder">
                <h2>Primary</h2>
                <img src={primary} alt="this it a picture"/>

                </div>
            </section>
            <section className="kinder">
                <img src={secondary} alt="this it a picture"/>
                <h2>Secondary & Middle School</h2>
            </section>

            
        </div>
    )
}