import React from "react";
import "./TechStack.css";
import bootstrap from "./media/bootstrap.png";
import cpp from "./media/cpp.svg";
import css from "./media/css.svg";
import express from "./media/express.png";
import firebase from "./media/firebase.png";
import github from "./media/social/github.svg";
import heroku from "./media/heroku.svg";
import html from "./media/html.png";
import javascript from "./media/javascript.svg";
import mongo from "./media/mongo.png";
import postman from "./media/postman.png";
import nodejs from "./media/nodejs.svg";
import python from "./media/python.svg";
import react from "./media/react.svg";
import sql from "./media/sql.svg";
import tailwind from "./media/tailwind.svg";
import Fade from "react-reveal/Fade";

function TechStack() {
  return (
    <div className="tech">
      <div className="tech_stack">Tech Stack</div>
      <div className="iconArea">
        {/* <h2 id="demo14">14. Shine</h2> */}
        <div class="hover14 column">
          <div>
            <figure>
              <Fade bottom>
                <img src={cpp} />
              </Fade>
            </figure>
            <span>C++</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={python} />
              </Fade>
            </figure>
            <span>Python</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={javascript} />
              </Fade>
            </figure>
            <span>Javascript</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={html} />
              </Fade>
            </figure>
            <span>HTML</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={css} />
              </Fade>
            </figure>
            <span>CSS</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={react} />
              </Fade>
            </figure>
            <span>React</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={nodejs} />
              </Fade>
            </figure>
            <span>NodeJS</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={express} />
              </Fade>
            </figure>
            <span>Express</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={mongo} />
              </Fade>
            </figure>
            <span>MongoDB</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={sql} />
              </Fade>
            </figure>
            <span>SQL</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={firebase} />
              </Fade>
            </figure>
            <span>Firebase</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={heroku} />
              </Fade>
            </figure>
            <span>Heroku</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={tailwind} />
              </Fade>
            </figure>
            <span>TailwindCSS</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={bootstrap} />
              </Fade>
            </figure>
            <span>Bootstrap</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={postman} />
              </Fade>
            </figure>
            <span>Postman</span>
          </div>
          <div>
            <figure>
              <Fade bottom>
                <img src={github} />
              </Fade>
            </figure>
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
