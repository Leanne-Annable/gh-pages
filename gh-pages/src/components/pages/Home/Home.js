import React from "react";
import "./Home.css";
import image from "../../Images/Me-cold.jpg"

function Home() {
  return (
    <div className="home">
      <br/>
      <div>
      <h1>Hi, I'm Leanne!</h1>
      </div>
      <br/>
      <div>
      <img className="card-img-top portrait" src={image} alt="me" />
      </div>
      <br/>
      {/* Home page:

This should be a welcome landing page that contains:

Your Name - Done

A headshot of you (or an avatar)

Your brand statement - Done

Some indication that this is your portfolio site - Done */}
      <div>
      <p className="brandStatement">
        "As a driven and focused individual with a passion for learning, I am excited to pursue a career in coding. <br />
        Despite only starting a few months ago, <br />
        I have already developed a strong foundation in HTML, CSS, JavaScript, jQuery, React, and Node.js,
        allowing me to create a variety of web applications.<br />
        My ability to adapt quickly to new challenges and eagerness to learn new skills enables me to excel in a fast-paced environment. <br />
        As I embark on this new career path, I am committed to delivering high-quality work that reflects my passion and dedication to the field."
      </p>
      </div>
    </div>
  );
}

export default Home;
