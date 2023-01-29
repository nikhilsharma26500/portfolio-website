import "./index.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSLHD from "../../assets/images/CSHub-LHD.png";
import personal from "../../assets/images/personal-website.png";
import pokedex from "../../assets/images/pokedex.jpg";
import hangman from "../../assets/images/hangman-game.jpg";
import sorting from "../../assets/images/sorting-viz.png";

const Portfolio = () => {
  return (

      <div className="container portfoliow">
        <div className="row">
          <div className="col">
            <div className="card card1">
              <div className="card-body">
                <h5 className="card-title">Sorting Algorithm Visualizer</h5>
                <img src={sorting} alt="" />
                <br />
                <p className="card-text">
                  Created Bubble and Insertion sort visualizer.
                </p>
                <p className="card-subtext">Python, Pygame</p>
                <br />
                <a
                  href="https://github.com/nikhilsharma26500/Sorting-visualizer"
                  class="btn btn1 btn-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card1">
              <div className="card-body">
                <h5 className="card-title">Pokedex Discord Bot</h5>
                <img src={pokedex} alt="" /> <br />
                <p className="card-text">
                  Created Discord Bot that works as a Pokedex.
                </p>
                <p className="card-subtext">Python</p>
                <a
                  href="https://github.com/nikhilsharma26500/yuHacks-discord-bot-workshop-"
                  class="btn btn1 btn-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card1">
              <div className="card-body">
                <h5 className="card-title">Hangman Game</h5>
                <img src={hangman} alt="" />
                <p className="card-text">
                  Created CSHub Local Hacks Day 2023 website
                </p>
                <p className="card-subtext">Python</p>
                <a
                  href="https://github.com/nikhilsharma26500/hangman_game"
                  class="btn btn1 btn-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card card1">
              <div className="card-body">
                <h5 className="card-title">Personal Website</h5>
                <img src={personal} alt="" />
                <p className="card-text">
                  Created a personal website to showcase my portfolio
                </p>
                <p className="card-subtext">HTML, CSS, JavaScript, React.js</p>
                <a
                  href="https://github.com/nikhilsharma26500/portfolio-website"
                  class="btn btn1 btn-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                <a href="https://nikhilsharma.online/" class="btn btn2 btn-primary">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card1">
              <div className="card-body">
                <h5 className="card-title">CSHub Portfolio Website</h5>
                <img src={CSLHD} alt="" />
                <p className="card-text">
                  Created CSHub Local Hacks Day 2023 website
                </p>
                <p className="card-subtext">HTML, CSS, JavaScript, React.js</p>
                <a
                  href="https://github.com/nikhilsharma26500/CSHub-Local-Hack-Day-Website"
                  class="btn btn1 btn-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                <a href="https://cshublhd.tech/" class="btn btn2 btn-primary">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
