import "./index.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const refForm = useRef();

  //using generics in case an event is given as an input
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_NlT1v1rPg3gZYa2_7",
        refForm.current,
        "user_NlT1v1rPg3gZYa2_7"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false); //to reload the page so that the form is reset
        },
        () => {
          alert("Failed to send the message, try again!");
        }
      );
  };
  return (
    <>
      <div className="container contact-pagae">
        <div className="text-zone">
          <h1>
            <br /> Contact me <br />
          </h1>
          <p>Please feel free to reach out to me!</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}></form>
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
        <div className="map-wrap">
            <MapContainer center={[43.6532, -79.3832]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> {/* Map Component */}
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
