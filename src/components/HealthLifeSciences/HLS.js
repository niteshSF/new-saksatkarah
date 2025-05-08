import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";import "./hls.css";
import hls_image_bg from "../../assets/health-life-sciences/hls_bg.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const HLS = () => {
  const navigate = useNavigate();

  return (
    <main>
      
      <div>
        <img
          src={hls_image_bg}
          alt="cls background "
          // className="bos-math-image"

          style={{
            position: "absolute",
            top: "0",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />

        <a href="/Health_Life_Sciences/Ayurveda_Page" className="hls-ayu-a">
          <img
            src={require("../../assets/health-life-sciences/ayu.png")}
            alt="Go to Page"
            className="hls-ayu-logo"
          />
        </a>

        <a href="/Health_Life_Sciences/Botany_Page" className="hls-bot-a">
          <img
            src={require("../../assets/health-life-sciences/bot.png")}
            alt="Go to Page"
            className="hls-bot-logo"
          />
        </a>
        
        <a href="/Health_Life_Sciences/Horticulture_Floriculture_Page" className="hls-hf-a">
          <img
            src={require("../../assets/health-life-sciences/hf.png")}
            alt="Go to Page"
            className="hls-hf-logo"
          />
        </a>

        <a href="/Health_Life_Sciences/Veterinary_Ayurveda_Page" className="hls-va-a">
          <img
            src={require("../../assets/health-life-sciences/va.png")}
            alt="Go to Page"
            className="hls-va-logo"
          />
        </a>

        <a href="/Health_Life_Sciences/Food_Science_Page" className="hls-fs-a">
          <img
            src={require("../../assets/health-life-sciences/fs.png")}
            alt="Go to Page"
            className="hls-fs-logo"
          />
        </a>
        <a href="/Health_Life_Sciences/Science_of_Pulse_Page" className="hls-sop-a">
          <img
            src={require("../../assets/health-life-sciences/sop.png")}
            alt="Go to Page"
            className="hls-sop-logo"
          />
        </a>

<Search_For_8 />


      </div>
      <button
        style={{
          position: "absolute",
          top: "2.1rem",
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
        onClick={() => navigate("/Computational_Language_Sciences")}
      >
        ← Back
      </button>

      <button
                    style={{
                      position: "fixed",
                      top: "2.1rem",
                      right: "10rem",
                      padding: "3px 8px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "20px",
                      backgroundColor: "hsl(0, 12%, 78%)",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <a href="/bbb" style={{ color: "black" }}>
                      <IoHomeSharp />
                    </a>
                  </button>

      <button
        style={{
          position: "absolute",
          top: "2.1rem",
          right: "2.4rem",
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
        onClick={() => navigate("/Technological_Sciences")}
      >
         Next →
      </button>



    </main>
  );
};

export default HLS;
