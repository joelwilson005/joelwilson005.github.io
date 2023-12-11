import React from "react";
import ContactForm from "./ContactForm";
import spacer4 from "../img/spacer4.svg";
import contactImage from "../img/undraw_contact_us_re_4qqt.svg";

const Contact = () => {
  return (
    <>
      <div
        className="spacer"
        style={{ backgroundImage: `url(${spacer4})` }}
      ></div>
      <div className="grid grid-cols-1 p-20 md:grid-cols-2 bg-section1">
        <div>
          {" "}
          <h2 className="pt-10 mb-10 text-2xl tracking-normal text-text font-body">
           Feel free to reach out
          </h2>
          <ContactForm />
        </div>
        <div>
          <img src={contactImage} alt="contact" className="hidden w-full h-full md:block" />{" "}
        </div>
      </div>
    </>
  );
};

export default Contact;
