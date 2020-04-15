
import React from 'react'
import "./CourseOfferings.scss"
import teacher from "../../../assets/Victoria_teaching.jpg"


function CourseOfferings() {
    return (
            <>
                <h1>Course Offerings </h1>
                <img className="img" src = {teacher}></img>
                <section>
                    <h2 className="section-odd">Kindergarten</h2>
                        <h3>What We Offer</h3>
                            <p>Movement, stories, activities, discussions, games and crafts, all centered around their topic of the day.</p>
                        <h3>General English</h3>
                            <p>Learn general English through stories, songs and crafts.</p>
                        <h3>Jolly Phonics</h3>
                        <p>Jolly Phonics is a world leader in children's literacy that will have them reading in no time.</p>
                </section>
                <section>
                    <h2 className="section-even">Primary</h2>
                        <h3>What We Offer</h3>
                            <p>Primary school children have a high abiliy to learn because of their social tendency, curiosity and natural enthusiasm. We teach this age group through crafts, role plays and games.</p>
                        <h3>General English</h3>
                            <p>Kids Box by Cambridge University Press will delight young learners through all the activities, crafts, role plays and simulations while alwas focused on the topic.</p>
                        <h3>Public School and Exam Support</h3>
                            <p>The Garden of Knowledge hand picked government school teachers that adore what they do and have a superior knowledge of their subjects. We offer support in English, Arabic, maths and Science.</p>
                </section>
                <section>
                <h2 className="section-odd">Intermediate and Secondary</h2> 
                        <h3>What We Offer</h3>
                            <p>For this age group we offer more real life scenarios, encouraging our students to go out in the real world and apply what they have learnt.</p>
                        <h3>General English</h3>
                            <p>Through various activities, such as role plays, simulations, research projects and public speaking the  students will develop a great independence and confidence in their language abilities.</p>
                        <h3>Public School and Exam Support</h3>
                            <p>The Garden of Knowledge hand picked government school teachers that adore what they do and have a superior knowledge of their subjects. We offer support in English, Arabic, maths, chemistry, biology and physics. We also offer 'night before the exam' revision classes.</p>
                </section>     
            </>
    )
}

export default CourseOfferings;

