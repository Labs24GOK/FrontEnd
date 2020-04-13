import React from 'react';

import sectionsABC from "../../../assets/course_structure_sectionsABC.png";
import sessions from "../../../assets/course_structure_sessions.png";

function CourseStructure() {

    return (
        <>
            <h1>Course Structure</h1>
            
            <section>
                <div className="two-column">
                    <div className="two-column-left">
                        <h3>Placement Test</h3>
                        <p>We ask all students to take a placement test before they register. The test has two oral and written sections and the results are approved for six months.</p>
                        <p>Based on the test results, the student will be placed at the appropriate level. Takes into account age and ability to complete the level efficiently.</p>
                    </div>
                    <div className="two-column-right">
                        <h3>Progress</h3>
                        <p>Learning is a wonderful. We encourage life long learning by inspiring our students to be the best versions of themselves. Everyone can reach their goal when the team working with them believes in them.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-even">Success</h2>
                <p>At the end of each section, the student will submit a final exam and based on the results of the exam is determined the appropriate procedure results are as follows:</p>
                
                <div className="two-column">
                    <div className="two-column-left">
                        <h3>Successful and Above</h3>
                        <p>The student will continue at the same level but the next section, unless in the third section of the course in this case the student will go to the next level.</p>
                    </div>
                    <div className="two-column-right">
                        <h3>Failure</h3>
                        <p>The student must repeat the section where he failed.</p>
                    </div>
                </div>

                <p>* In case the student excels in his current level with the recommendation of the teacher may take the student to the next level.</p>
            </section>

            <section>
                <h2 className="section-odd">Schedules</h2>
                <p>Where possible we will try to acommodate your needs when issuing schedules. However, this may not always be possible considering levels and other students who are already scheduled for the same group.</p>

                <h3>Overall Course Structure</h3>

                <section>
                    <h4>What does a level look like?</h4>
                    <p>Each level is 9 months long (one academic year).</p>
                    <img src={sectionsABC} className="level-flowchart" alt="Flowchart showing that sections A, B, and C are each 3 months long." />
                    <p>Each level is divided into 3 sections (A, B, and C) that are each 3 months long.</p>
                </section>

                <section>
                    <h4>What does a section look like?</h4>
                    <p>A section consists of 24 classes.</p>
                    <p>A student will receive a progress report at the end of every 8 classes (3 progress reports in total).</p>
                    <img src={sessions} className="section-flowchart" alt="Flowchart showing division of each section into 8 classes each, with progress reports after each one" />
                </section>

                <section>
                    <h4>What does a class look like?</h4>
                    <p>Each class is 90 minutes long.</p>
                    <p>The first class of each section will begin with a pretest to verify the skill level of the student.</p>
                    <p>For secondary and intermediate students, the last class of each section will include a final exam to verify that the student is eligible to continue on to the next section.</p>
                </section>

            </section>                
        </>
    )
}

export default CourseStructure;