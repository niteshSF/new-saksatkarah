import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ees.css";
import ees_image_bg from "../../assets/ee-sciences/ees_bg.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const EES_main = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <img
          src={ees_image_bg}
          alt="ees background "
          style={{
            position: "absolute",
            top: "0",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />

        <a
          href="/Earth_Environmental_Sciences/Geology_Geography_Page"
          className="ees-gg-a"
        >
          <img
            src={require("../../assets/ee-sciences/gg.png")}
            alt="Go to Page"
            className="ees-gg-logo"
          />
        </a>

        <a
          href="/Earth_Environmental_Sciences/Ecology_Environment_Page"
          className="ees-ee-a"
        >
          <img
            src={require("../../assets/ee-sciences/ee.png")}
            alt="Go to Page"
            className="ees-ee-logo"
          />
        </a>

        <a
          href="/Earth_Environmental_Sciences/Forestry_Page"
          className="ees-for-a"
        >
          <img
            src={require("../../assets/ee-sciences/forestry.png")}
            alt="Go to Page"
            className="ees-for-logo"
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
        onClick={() => navigate("/Physical_Sciences")}
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
        onClick={() => navigate("/Social_Sciences")}
      >
        Next →
      </button>

      <Search_For_8 />
    </main>
  );
};

export default EES_main;
