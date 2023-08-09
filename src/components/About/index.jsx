import React from 'react';
import pic from '../../assets/small/portraits/pic.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
      <div className="profile-img my-5">
        <img
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
            }}
            src={pic}
            alt="A Picture of Yours Truly"
          />
        </div>
        <p>
          Hi! I'm Yoshi Cea, 20 year old Canadian programmer and writer.
        </p>
        <p>
          I am a student at the University of Toronto, enrolled in their Full-Stack Web Development bootcamp. I've been adept to computers ever since I started using them,
          and I've been coming up with stories since I could comprehend speech. I've worked in construction before, and have experience using Priva to manage employees, schedules,
          and production in a greenhouse or packhouse evironment.
        </p>
      </div>
    </section>
  );
}

export default About;
