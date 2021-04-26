import React from "react";
import "./Project_card.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import Fade from "react-reveal/Fade";

function Project_card({ name = "", description = "", url = "", git = "" }) {
  const color_arr = ["#BFA834", "#D98E32", "#F27649"];
  const random = Math.floor(Math.random() * 3);
  return (
    <Fade left>
      <div className="main_box" style={{ borderColor: color_arr[random] }}>
        <div className="name_" style={{ color: color_arr[random] }}>
          {name}
        </div>

        <div>{description}</div>
        <div className="content">
          <a
            href={git}
            data-title="Show in Github"
            className="gitLink"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          {url === "" ? (
            <div></div>
          ) : (
            <a className="url" href={url} target="_blank" rel="noreferrer">
              <div>Open Live Webpage</div>
              <LanguageIcon />
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default Project_card;
