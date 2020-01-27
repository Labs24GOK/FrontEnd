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
            <p>Students will play vocabulary, grammar and literacy word games.</p>
            <Link to="/course-structure/kindergarten" className="button">Learn More</Link>
          </div>
        </div>
        <div className="primary">
          <div>
            <h3>Primary School</h3>
            <p>Primary level children are very good language learners, being naturally sociable, inquisitive and enthusiastic.</p>
            <Link to="/course-structure/primary" className="button">Learn More</Link>
          </div>
        </div>
        <div className="secondary">
          <div>
            <h3>Middle and<br />Secondary School</h3>
            <p>Students in this age range become very successful language learners. They have increased ability to analyze and learn, and are more used to learning in general and greater independence.</p>
            <Link to="/course-structure/middle-and-secondary" className="button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgeGroups;