import "./index.scss";
import { Link } from "react-router-dom";
import Typewriter from "../AnimatedLetters/index";

const typeWriter = ["web-developer", "programmer", "astrophile"];
const Home = () => {
  return (
    <>
      <div className="container home-page">
        {/* div for animated texts */}
        <div className="text-zone">
          <h1>
          <div className="target">
              <span >Hi,</span>
              <br />
              <span >
                I'm <span className="glitch-text">Nikhil</span>
              </span><br />
              I'm a <span className="typewriter-holder ">
                <Typewriter data={typeWriter} />
                <span className="blink">|</span>
              </span>
              <br />   
              </div>      
      
          <p>Currently enrolled in B.Sc. Computer Science at Lassonde School of Engineering, York University. Learning technologies and tools such as <span className="coding">Python, Java, JavaScript, HTML </span>and <span className="coding">CSS</span>. Aspiring to delve deeper into Full Stack technologies and the world of Data Science.</p>
          </h1>
          <a
            href="https://1drv.ms/b/s!AlaMY3YFkkIqiB7XgZXfv_JIg-t1?e=vACP7H"
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
