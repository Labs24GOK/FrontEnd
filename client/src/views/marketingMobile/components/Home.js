import React from 'react'
import teacher from '../../../assets/native-english-speaker.jpg'

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

                <div clssnam="why-flex">
                    <p>Qualified, passionate teachers, including native speaker teachers when learning a language.</p>

                    <img href={teacher} alt="A native english speaking woman"/>
                </div>

                <div>
                    <h3>Learning is Fun</h3>
                    <img href="" alt="placeholder"/>
                </div>
            </section>

            <section className=''>
                <h2>Affordability</h2>
                <p>Created with families in mind</p>
            </section>
            <section>
                <div>
                    <image href="" alt="kindergarten"/>
                    <h2>Kindergarten</h2>
                </div>

                <div>
                    <h2>Primary School</h2>
                    <image href="" alt="Primary School"/>
                </div>

                <div>
                    <image href="" alt="Middle School"/>
                    <h2>Middle School & Secondary School</h2>
                </div>

            </section>

            
        </div>
    )
}