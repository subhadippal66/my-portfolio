import { Slider } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";
import TechStack from "./TechStack";

function App() {
  const [value, setValue] = useState(30);
  const [speedX, setspeedX] = useState(3);
  const [speedY, setspeedY] = useState(3);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSpeedXChange = (event, newValue) => {
    setspeedX(newValue);
  };
  const handleSpeedYChange = (event, newValue) => {
    setspeedY(newValue);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    function Circle(x, y, dx, dy, size, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.color = color;

      this.draw = function () {
        context.fillStyle = this.color;
        //context.strokeStyle = `rgba(${this.r},${this.g},${this.b},${0})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.shadowColor = this.color;
        context.shadowOffsetX = -this.dx;
        context.shadowOffsetY = -this.dy;
        context.shadowBlur = 10;
        //context.stroke();
        context.fill();
      };
      this.move = function () {
        if (this.x + this.size > window.innerWidth || this.x - this.size < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.size > window.innerHeight || this.y - this.size < 0) {
          this.dy = -this.dy;
        }
        // let distance = Math.sqrt(
        //   Math.pow(this.x - mousePos.x, 2) + Math.pow(this.y - mousePos.y, 2)
        // );

        //interactivity
        // if (distance < 150) {
        //   this.dx = -this.dx;
        //   this.dy = -this.dy;
        // }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      };
    }

    let circleArray = [];
    let colorArray = ["#F28322", "#F25116", "#8C230B", "#D96B52"];

    for (let i = 0; i < value; i++) {
      let size = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      let x =
        Math.floor(
          Math.random() * (window.innerWidth - 2 * size - 2 * size + 1)
        ) +
        (2 + size);
      let y =
        Math.floor(
          Math.random() * (window.innerHeight - 2 * size - 2 * size + 1)
        ) +
        (2 + size);
      let color = Math.floor(Math.random() * colorArray.length);
      circleArray.push(
        new Circle(x, y, speedX, speedY, size, colorArray[color])
      );
    }

    function animateCircle() {
      requestAnimationFrame(animateCircle);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      circleArray.map((e) => {
        return e.move();
      });
    }
    animateCircle();
  }, [value, speedX, speedY]);

  return (
    <div className="App">
      <canvas id="canvas1" ref={canvasRef} />
      <div className="uppertext">
        "The Background is under your control, You can change"
      </div>
      <div className="navControlBar">
        <div className="sliderArea">
          <div className="sliderName">
            No of Particles -{" "}
            <span style={{ color: "#D98E32", fontWeight: "600" }}>{value}</span>
          </div>
          <Slider
            style={{
              width: "200px",
              padding: "0px",
              margin: "0px",
              color: "#D98E32",
            }}
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={100}
            min={10}
          />
        </div>
        <div className="sliderArea">
          <div>
            Horizontal Speed of Particle -{" "}
            <span style={{ color: "#D98E32", fontWeight: "600" }}>
              {speedX}
            </span>
          </div>
          <Slider
            style={{
              width: "200px",
              padding: "0px",
              margin: "0px",
              color: "#D98E32",
            }}
            value={typeof speedX === "number" ? speedX : 0}
            onChange={handleSpeedXChange}
            aria-labelledby="input-slider"
            max={9}
            min={1}
          />
        </div>
        <div className="sliderArea">
          <div>
            Vertical Speed of Particle -{" "}
            <span style={{ color: "#D98E32", fontWeight: "600" }}>
              {speedY}
            </span>
          </div>
          <Slider
            style={{
              color: "#D98E32",
              width: "200px",
              padding: "0px",
              margin: "0px",
            }}
            value={typeof speedY === "number" ? speedY : 0}
            onChange={handleSpeedYChange}
            aria-labelledby="input-slider"
            max={9}
            min={1}
          />
        </div>
      </div>
      <Intro />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
