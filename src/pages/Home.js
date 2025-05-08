import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import backgroundImage from "../assets/front_page.png";
import btn from "../assets/enter_btn.png";
import rec_1 from "../assets/rec.png";
import Audio from '../assets/eb_audio.mp3';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
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
            src={backgroundImage}
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

         {/* Audio that plays separately */}
         <audio autoPlay loop>
                <source src={Audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>

{/* ----------- DST --------------- */}
        <button
          onClick={() => window.open("https://dst.gov.in/", "_blank")}
          style={{
            position: "fixed",
            bottom: "4vh",
            left: "37.5vw",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            objectFit: "contain",
            opacity: 0,
          }}
         
        >
          <img
            src={rec_1}
            alt="btn"
            style={{
              height: "80px",
              width: "150px",
            }}
          />
        </button>

{/* ---------------- SF -------------------- */}
        <button
          onClick={() => window.open("https://samskritifoundation.org/", "_blank")}
          style={{
            position: "fixed",
            bottom: "4vh",
            right: "27.5vw",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            objectFit: "contain",
            opacity: 0,
          }}
          // className="home_enter_btn"
        >
          <img
            src={rec_1}
            alt="btn"
            style={{
              height: "80px",
              width: "150px",
            }}
          />
        </button>        

{/* ---------- enter btn -------------- */}
        <button
          onClick={() => navigate("/introduction")}
          style={{
            position: "absolute",
            bottom: "22.4vh",
            right: "10vw",
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            objectFit: "contain",
          }}
          className="home_enter_btn"
        >
          <img
            src={btn}
            alt="btn"
            style={{
              height: "90px",
              width: "auto",
            }}
          />
        </button>
      </main>
    </div>
  );
};

export default Home;
