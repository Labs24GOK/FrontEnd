import React from 'react';
import './special.scss';
import teacher from '../../../../../assets/native-english-speaker.jpg';
import kids from '../../../../../assets/kids-watering-a-flowerbed.jpg';

function Special() {

  return (
    <section className="special">
      <div className="wrap">
        <h2>Why We're Special</h2>
        <div className="flex">
          <div>
            <img src={teacher} alt="A native english speaking woman" />
            <h3>Learn From the Best</h3>
            <p>Learning a language? We only have native speaking teachers. Maths? Only teachers who are passionate at making maths understandable. The bottom line is, only professionals who love what they do and care about both the journey and the outcome.</p>
          </div>
          <div>
            <img src={kids} alt="Kids watering flowers in a flowerbed" />
            <h3>Learning is Fun</h3>
            <p>Learning is a wonderful. We encourage life long learning by inspiring our students to be the best versions of themselves. Everyone can reach their goal when the team working with them believes in them.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Special;