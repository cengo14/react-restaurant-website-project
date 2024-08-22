import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

const Contact = () => {
  return (
    <div className="contact py-5">
      <div
        className="leftSide mx-5 "
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightside mx-5 mt-5">
        <h1>Bizimle İletişime Geç</h1>
        <form id="contact-form">
          <label className="form-label" htmlFor="name">
            Adınız ve Soyadınız
          </label>
          <input className="form-control" name="name" type="text" />
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" name="email" type="email" />
          <label className="form-label" htmlFor="name">
            Mesajınız
          </label>
          <textarea
            className="form-control"
            name="message"
            id=""
            placeholder="Mesajınız"
          ></textarea>
          <button className="btn btn-success" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
