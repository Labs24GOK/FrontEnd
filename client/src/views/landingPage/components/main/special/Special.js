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
            <h3>Native English Teachers</h3>
            <p>Native speakers will help you reach your language goal with curriculum from Cambridge University Press.</p>
          </div>
          <div>
            <img src={kids} alt="Kids watering flowers in a flowerbed" />
            <h3>Learning is Fun</h3>
            <p>Learning a new language should be fun. Speak Out utilizes real-world tasks like ordering food at a cafe to help students learn in a hands-on way..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Special;