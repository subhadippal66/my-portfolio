import React from "react";
import "./Footer.css";
import github from "./media/social/github.svg";
import insta from "./media/social/insta.svg";
import linkedin from "./media/social/linkedin.svg";
import twitter from "./media/social/twitter.svg";
import gmail from "./media/social/gmail.svg";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">Contact me</div>
      <div>
        <div class="hover15 column_">
          <div>
            <a
              className="link_footer"
              href="https://github.com/subhadippal66"
              target="_blank"
              rel="noreferrer"
            >
              <figure id="foot">
                <Fade bottom>
                  <img src={github} style={{ width: "70px", height: "70px" }} />
                </Fade>
              </figure>
            </a>
            <span className="fade_text">Github</span>
          </div>
          <div>
            <a
              className="link_footer"
              href="https://www.linkedin.com/in/subhadip-pal-287a10184/"
              target="_blank"
              rel="noreferrer"
            >
              <figure id="foot">
                <Fade bottom>
                  <img
                    src={linkedin}
                    style={{ width: "70px", height: "70px" }}
                  />
                </Fade>
              </figure>
            </a>
            <span className="fade_text">Linkedin</span>
          </div>
          <div>
            <a
              className="link_footer"
              href="https://www.instagram.com/subhadippal66/"
              target="_blank"
              rel="noreferrer"
            >
              <figure id="foot">
                <Fade bottom>
                  <img src={insta} style={{ width: "70px", height: "70px" }} />
                </Fade>
              </figure>
            </a>
            <span className="fade_text">Instagram</span>
          </div>
          <div>
            <a
              className="link_footer"
              href="https://twitter.com/subhadippal66"
              target="_blank"
              rel="noreferrer"
            >
              <figure id="foot">
                <Fade bottom>
                  <img
                    src={twitter}
                    style={{ width: "70px", height: "70px" }}
                  />
                </Fade>
              </figure>
            </a>
            <span className="fade_text">Twitter</span>
          </div>
          <div>
            <a
              className="link_footer"
              href="mailto:subhadippal66@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <figure id="foot">
                <Fade bottom>
                  <img src={gmail} style={{ width: "70px", height: "70px" }} />
                </Fade>
              </figure>
            </a>
            <span className="fade_text">Gmail</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", color: "#ecf3f9" }}>
        Made By Subhadip Pal ©️ 2021
      </div>
    </div>
  );
}

export default Footer;
