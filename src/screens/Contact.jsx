import React from "react";
import { GeoAlt, Globe, Send, Telephone } from "react-bootstrap-icons";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <div className="flex justify-content-center align-items-center">
        <div className="text-center mb-5">
          <h2 className="heading-section" style={{ textAlign: "center" }}>
            Contact Us
          </h2>
        </div>
      </div>
      <div className=" flex align-content-center justify-content-center w-full">
        <div className="grid">
          <div className="col-5  flex align-items-stretch border-round-xs">
            <div className=" bg-primary w-100 p-md-5 p-4">
              <h3>Let's get in touch</h3>
              <p className="mb-4">
                We're open for any suggestion or just to have a chat
              </p>
              <div className=" w-100 grid align-items-center">
                <div className="icon col-2 flex align-items-center justify-content-center">
                  <GeoAlt />
                </div>
                <div className="text pl-3 col-10">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
              <div className=" w-100 grid align-items-center">
                <div className="icon col-2 flex align-items-center justify-content-center">
                  <Telephone />
                </div>
                <div className="text pl-3 col-10">
                  <p>
                    <span>Phone:</span> + 1235 2355 98
                  </p>
                </div>
              </div>
              <div className=" w-100 grid align-items-center">
                <div className="icon col-2 flex align-items-center justify-content-center">
                  <Send />
                </div>
                <div className="text pl-3 col-10">
                  <p>
                    <span>Email:</span>info@yoursite.com
                  </p>
                </div>
              </div>
              <div className=" w-100 grid align-items-center">
                <div className="icon col-2 flex align-items-center justify-content-center">
                  <Globe />
                </div>
                <div className="text pl-3 col-10">
                  <p>
                    <span>Website</span> yoursite.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7  order-md-last flex align-items-stretch border-round-xs">
            <div className="contact-wrap w-full p-md-5 p-4">
              <h3 className="mb-4">Get in touch</h3>
              <div id="form-message-warning" className="mb-4"></div>
              <div id="form-message-success" className="mb-4">
                Your message was sent, thank you!
              </div>
              <form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                noValidate
              >
                <div className="grid ">
                  <div className="col-6 ">
                    <div className="form-group w-full">
                      <label className="label" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="form-group w-full">
                      <label className="label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary bg-primary"
                  />
                  <div className="submitting"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
