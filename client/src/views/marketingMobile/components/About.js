import React from 'react';

function About() {

    return (
        <>
            <h1>About Us</h1>
            
            <section>
                <h2 className="section-odd">About Us</h2>

                <div className="two-column">
                    <div className="two-column-left">
                        <h3>Our Vision</h3>
                        <p>Making nationwide interactive language learning a possibility for all.</p>
                    </div>
                    <div className="two-column-right">
                        <h3>Our Mission</h3>
                        <p>We provide the highest standards of language learning, adapting to people's wants and needs. Our students will have a measurable output, both in the center and at school or work.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-even">About Us</h2>
                <p>The Garden of Knowledge founded originally as a charity program in 2014, has always had the local comminity at heart. We have a passion for providing the highest standards to students and parents, and a positive, productive work environment for our staff.</p>
            </section>
        </>
    )
}

export default About;