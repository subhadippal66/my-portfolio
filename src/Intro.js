import React from "react";

import Fade from "react-reveal/Fade";
import TextTransition, { presets } from "react-text-transition";
import "./Intro.css";

const TEXTS = [
  "hi there",
  "नमस्ते",
  // "নমস্কার",
  "नमस्कारः",
  // "வணக்கம்!",
  // "నమస్కారం",
];

function Intro() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="main">
      <Fade bottom>
        <div className="typospace">
          <div className="hey">
            <TextTransition
              className="gretting"
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
            <div>, I am</div>
          </div>
          <div className="name">Subhadip Pal</div>
          <div className="college">
            National Institute of Technology, Jamshedpur
          </div>
          <div>Coder | Web Developer | 3D Artist | Photographer</div>
        </div>
      </Fade>
    </div>
  );
}

export default Intro;
