import React from 'react';
import { Link } from "react-router-dom";
import './ageGroups.scss';

function AgeGroups() {

  return (
    <section className="age-groups">
      <div className="flex">
        <div className="kindergarten">
          <div>
            <h3>Kindergarten</h3>
            <Link to="/course-structure/kindergarten" className="button">Learn More</Link>
          </div>
        </div>
        <div className="primary">
          <div>
            <h3>Primary School</h3>
            <Link to="/course-structure/primary" className="button">Learn More</Link>
          </div>
        </div>
        <div className="secondary">
          <div>
            <h3>Intermediate and<br />Secondary School</h3>
            <Link to="/course-structure/middle-and-secondary" className="button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgeGroups;