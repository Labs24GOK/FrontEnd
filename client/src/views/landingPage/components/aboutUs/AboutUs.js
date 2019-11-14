import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./aboutUs.scss";
import Garden from "../../../../assets/Garden.png";

function AboutUs(props) {
  return (
    <div className="about-us">
      <header>
        <h1>SpeakOut</h1>
      </header>
      <div className="body">
        <div className="body-left">
          <h2>Our Vision</h2>
          <p>
            Making nationwide interactive language learning a possibility for
            all.
          </p>
          <h2>Our Mission</h2>
          <p>
            We provide the highest standards of language learning, adapting to
            people's wants and needs. Our students will have a measurable
            output, both in the center and at school or work.
          </p>
          <img src={Garden} />
        </div>
        <div className="body-right">
          <h2>About Us</h2>
          <p>
            In association with the Bani Jamra Charity, Speak Out brings
            quality, affordable language learning to the community. Native
            speakers will help you reach your language goal with curriculum from
            Cambridge University Press.
          </p>
          <p>
            In the multinational world that we live in, a firm grasp of English
            is a must regardless of your age or occupation. That's where we come
            in!
          </p>
          <p>
            Our native language teachers are here to help you achieve your goals
            through fun, interactive classes to appeal to all learning styles.
          </p>
          <p>
            Here we'll outline exactly why we believe you should choose us when
            it comes to teaching your child English. We hope this information
            helps you to understand the courses we have available, how we work
            and what you can expect as our student. If there are any further
            questions, please do not hesitate to get in touch.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

const AboutUsWithRouter = withRouter(AboutUs);

export default AboutUsWithRouter;