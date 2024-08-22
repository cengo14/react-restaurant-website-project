import React from "react";
import BannerImage from "../assets/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="container aboutBottom">
        <h1 className="text-danger">Hakkımızda</h1>

        <p className=" fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          quaerat maiores ab magni nisi possimus error quos dolore, placeat nam
          unde expedita accusantium repudiandae obcaecati, nulla at, voluptas
          dicta culpa Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore neque sint illum voluptas soluta debitis possimus quis sunt
          earum, ipsa iste sequi, adipisci optio magni voluptatem nihil. Nobis,
          soluta repellat.
        </p>
      </div>
    </div>
  );
};

export default About;
