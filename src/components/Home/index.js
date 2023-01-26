import "./index.scss";
import { Link } from "react-router-dom";
import Typewriter from "../AnimatedLetters/index";

const typeWriter = ["web-developer", "Tech enthusiast", "student"];
const Home = () => {
  return (
    <>
      <div className="container row-md home-page">
        {/* div for animated texts */}
        <div className="text-zone">
          <h1>
            <div className="row">
              <span className="col">Hi,</span>
              <br />
              <span className="col">
                I'm <span className="glitch-text">Nikhil</span>
              </span>
              <br />
              I'm a
              <span className="typewriter-holder col-lg-3">
                <Typewriter data={typeWriter} />
                <span className="blink">|</span>
              </span>
            </div>
          </h1>
          <a
            href="https://1drv.ms/b/s!AlaMY3YFkkIqh32HvrQnyZR9_HWH?e=uebCHK"
            target="_blank"
          >
            <button className="flat-button">RESUME</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
