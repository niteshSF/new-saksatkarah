import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ycs.css";
import ycs_image_bg from "../../assets/yc-sciences/ycs_bg.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const YCS = () => {
  const navigate = useNavigate();


  return (
    <main>
      <div>
        <img
          src={ycs_image_bg}
          alt="ycs background "

          style={{
            position: "absolute",
            top: "0",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />

        <a href="/Yoga_Cognitive_Sciences/Yoga_Page" className="ycs-yoga-a">
          <img
            src={require("../../assets/yc-sciences/yoga.png")}
            alt="Go to Page"
            className="ycs-yoga-logo"
          />
        </a>

        <a href="/Yoga_Cognitive_Sciences/Cognitive_Sciences_Page" className="ycs-cs-a">
          <img
            src={require("../../assets/yc-sciences/cs.png")}
            alt="Go to Page"
            className="ycs-cs-logo"
          />
        </a>

        <a href="/Yoga_Cognitive_Sciences/Psychology_Mantras_Page" className="ycs-psy-a">
          <img
            src={require("../../assets/yc-sciences/psy.png")}
            alt="Go to Page"
            className="ycs-psy-logo"
          />
        </a>
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
        onClick={() => navigate("/Social_Sciences")}
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
        onClick={() => navigate("/Computational_Language_Sciences")}
      >
         Next →
      </button>

<Search_For_8 />

    </main>
  );
};

export default YCS;
