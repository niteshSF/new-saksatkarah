import React from "react";
import "../styles/header_footer.css";
import "../styles/intro.css";
import { useNavigate } from "react-router-dom";
import introduction_image from "../assets/intro.png";
import btn from "../assets/enter_btn.png";
import Audio from "../assets/eb_audio.mp3";

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Audio that plays separately */}
      <audio autoPlay loop>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <main>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={introduction_image}
            alt="Background"
            style={{
              position: "absolute",
              top: "0",
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
        </div>
        <button
          onClick={() => navigate("/bbb")}
          style={{
            position: "absolute",
            bottom: "4vh",
            right: "10vw",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            objectFit: "contain",
          }}
          className="intro_enter_btn"
        >
          <img
            src={btn}
            alt="btn"
            style={{
              height: "85px",
              width: "auto",
            }}
          />
        </button>
      </main>
    </div>
  );
};
export default Introduction;
