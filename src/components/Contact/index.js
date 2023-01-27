import "./index.scss";
import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const refForm = useRef();

  //using generics in case an event is given as an input
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_YeJhZkgb", refForm.current, "your-token")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone row">
          <h1>
            <br /> Contact me <br />
          </h1>
          <p>Please feel free to reach out to me!</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nikhil Sharma,
          <br />
          Canada,
          <br />
          11 Arboretum Ln, North York, ON M3J 2S5 <br />
          Toronto <br />
          <span>nikhilsharma26500@outlook.com</span>
        </div>
        <div className="map-wrap row">
          <MapContainer center={[43.6532, -79.3832]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{" "}
            {/* Map Component */}
            <Marker position={[43.6532, -79.3832]}>
              <Popup>Nikhil's abode, you are all welcome :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
