import React from 'react';
import { Link } from "react-router-dom";
import './affordability.scss';

function Affordability() {

  return (
    <section className="affordability">
      <div className="wrap">
        <div className="flex">
          <div></div>
          <div>
            <h2>Affordability</h2>
            <p>In association with the Bani Jamra Charity, Speak Out brings quality, affordable language learning to the community.</p>
            <Link to="/registration-information" className="button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Affordability;