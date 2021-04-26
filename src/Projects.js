import React from "react";
import "./Projects.css";
import ProjectCard from "./Project_card";

function Projects() {
  return (
    <div className="main_">
      <div className="project_">Projects</div>
      <div>
        <ProjectCard
          name="Target Tree"
          description="Platform that provides you a learning path. Build in MERN stack."
          url="https://targettree.tech"
          git="https://github.com/subhadippal66/Career-Helper"
        />
        <ProjectCard
          name="Post It"
          description="Lets you to post and upload images about a place, you recently visited.
          You can also review and comment on someone’s post."
          url="https://serene-peak-59857.herokuapp.com"
          git="https://github.com/subhadippal66/Post-it"
        />
        <ProjectCard
          name="3D Render Showcase"
          description="3d art showcasing website built using React."
          url="https://render-showcase.web.app/"
          git="https://github.com/subhadippal66/3d-render-showcase"
        />
        <ProjectCard
          name="Trailer Player"
          description="React app that Shows a list of latest movies/tv shows and play trailer."
          url="https://trailerplayer.web.app/"
          git="https://github.com/subhadippal66/trailer-player"
        />
        <ProjectCard
          name="Excel Viewer on web"
          description="Upload an excel file and view it in any web browser, anytime anywhere."
          url="https://excel-viewer.herokuapp.com"
          git="https://github.com/subhadippal66/excel-viewer"
        />
      </div>
    </div>
  );
}

export default Projects;
