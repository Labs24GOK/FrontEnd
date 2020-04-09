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
            <p>From its conception, the Garden of Knowledge was about standing shoulder to shoulder with local comminities. As such we have made our rates one of the lowest.</p>
            <Link to="/registration-information" className="button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Affordability;