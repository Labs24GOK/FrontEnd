import React from 'react';
import './ageGroups.scss';

function AgeGroups() {

  return (
    <section className="age-groups">
      <div className="flex">
        <div className="kindergarten">
          <div>
            <h3>Kindergarten</h3>
            <p>Students will play vocabulary, grammar and literacy word games.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="primary">
          <div>
            <h3>Primary School</h3>
            <p>Primary level children are very good language learners, being naturally sociable, inquisitive and enthusiastic.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="secondary">
          <div>
            <h3>Middle and<br />Secondary School</h3>
            <p>Students in this age range become very successful language learners. They have increased ability to analyze and learn, and are more used to learning in general and greater independence.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgeGroups;