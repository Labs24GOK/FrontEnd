import React, { useEffect } from "react";
import "./courseStructure.scss";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';
import { withRouter } from "react-router";


function CourseStructure(props) {

  useEffect(() => {
    props.toggle();
  }, [])

  return (
    <>
      <div className="course-structure">
          <div className="body">
            <div className="body-left">
            <div className="placement">
              <h2>Initial Placement Tests</h2>
              <p>
                We ask all students to take a placement test before they
                register. The test has two oral and written sections and the
                results are approved for six months.
              </p>
              <p>
                Based on the test results, the student will be placed at the
                appropriate level. Takes into account age and ability to
                complete the level efficiently.
              </p>
            </div>
            <div className="progress">
              <h2>Progress</h2>
              <p>
                To track student progress, what students are doing in the class
                as well as their homework will be considered. A continuous
                assessment system is followed to reach the desired learning
                objectives and they are required to complete schedule tasks
                regularly throughout the course with short tests.
              </p>
            </div>
            <div className="success">
              <h2>Success</h2>
              <p>
                At the end of each section, the student will submit a final exam
                and based on the results of the exam is determined the
                appropriate procedure results are as follows:
              </p>
              <div className="results">
                <h4>Successful and Above</h4>
                <p>
                  The student will continue at the same level but the next
                  section, unless in the third section of the course in this
                  case the student will go to the next level.
                </p>
                <h4>Failure</h4>
                <p>The student must repeat the section where he failed.</p>
                <p className="footnote">
                  * In Case the student excels in his current level with the
                  recommendation of the teacher may take the student to the next
                  level.
                </p>
              </div>
            </div>
          </div>
          <div className="body-right">
            <div className="schedules">
              <h2>Schedules</h2>
              <p>
                Where possible we will try to acommodate your needs when issuing
                schedules. However, this may not always be possible considering
                levels and other students who are already scheduled for the same
                group.
              </p>
            </div>
            <div className="structure">
              <h2>Overall Course Structure</h2>
              <p>
                Each level consists of 3 sections, and each section contains 3
                courses, each consisting of 8 classes.
              </p>
              <div className="stages">
                <h2>Stage A</h2>
                <p>Session 1 - Report</p>
                <p>Session 2 - Report</p>
                <p>Session 3 - Report, final exam certificate, new stage</p>
                <h2>Stage B</h2>
                <p>Session 1 - Report</p>
                <p>Session 2 - Report</p>
                <p>Session 3 - Report, final exam certificate, new stage</p>
                <h2>Stage C</h2>
                <p>Session 1 - Report</p>
                <p>Session 2 - Report</p>
                <p>Session 3 - Report, final exam certificate, new stage</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(CourseStructure)
)