import React from "react";

const About = (props) => {
  return (
    <div classNameName="about-section" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>About us</h2>
      <p>
        Welcome to TextUtils! We are a platform that provides various text
        manipulation tools to help you with your text processing needs.
      </p>
      <p>
        Whether you need to format text, count words, or convert cases, we've
        got you covered. Our user-friendly interface makes it easy for you to
        perform these tasks effortlessly.
      </p>
      <p>
        Explore the features, toggle between light and dark mode, and make the
        most out of TextUtils to enhance your text editing experience.
      </p>

      {/* Dropdown Menu Example */}
      {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */}
    </div>
  );
};

export default About;
