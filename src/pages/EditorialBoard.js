import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bbb_header_footer.css";
import "../styles/bbb.css";
import Video from "../assets/eb_video.mp4";
import Audio from "../assets/eb_audio.mp3";

const Editorial_Board = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Audio that plays separately */}
      <audio autoPlay loop>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button
        style={{
          position: "absolute",
          top: "4.1rem",
          left: "2.4rem",
          padding: "8px 16px",
          backgroundColor: "#cec1c1",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgb(0, 26, 255)",
          transition: "background-color 0.3s ease",
        }}
        className="back-btn-8"
        onClick={() => navigate("/bbb")}
      >
        ← Back
      </button>
    </div>
  );
};

export default Editorial_Board;
