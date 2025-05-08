import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";import "./ts.css";
import ts_image_bg from "../../assets/technology-science/ts_bg.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const TS = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <img
          src={ts_image_bg}
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

        <a
          href="/Technological_Sciences/Agriculture_Page"
          className="ts-agri-a"
        >
          <img
            src={require("../../assets/technology-science/agri.png")}
            alt="Go to Page"
            className="ts-agri-logo"
          />
        </a>

        <a
          href="/Technological_Sciences/Water_Management_Page"
          className="ts-wm-a"
        >
          <img
            src={require("../../assets/technology-science/wm.png")}
            alt="Go to Page"
            className="ts-wm-logo"
          />
        </a>

        <a
          href="/Technological_Sciences/Metallurgy_Page"
          className="ts-meta-a"
        >
          <img
            src={require("../../assets/technology-science/meta.png")}
            alt="Go to Page"
            className="ts-meta-logo"
          />
        </a>

        <a
          href="/Technological_Sciences/Civil_Engineering_Architecture_Page"
          className="ts-cea-a"
        >
          <img
            src={require("../../assets/technology-science/cea.png")}
            alt="Go to Page"
            className="ts-cea-logo"
          />
        </a>

        <a
          href="/Technological_Sciences/Mechanical_Engineering_Page"
          className="ts-me-a"
        >
          <img
            src={require("../../assets/technology-science/me.png")}
            alt="Go to Page"
            className="ts-me-logo"
          />
        </a>
        <a
          href="/Technological_Sciences/Textile_Engineering_Page"
          className="ts-te-a"
        >
          <img
            src={require("../../assets/technology-science/te.png")}
            alt="Go to Page"
            className="ts-te-logo"
          />
        </a>



        <a
          href="/Technological_Sciences/Gemmology_Page"
          className="ts-gem-a"
        >
          <img
            src={require("../../assets/technology-science/gem.png")}
            alt="Go to Page"
            className="ts-gem-logo"
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
        onClick={() => navigate("/Health_Life_Sciences")}
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
        onClick={() => navigate("/mathematics")}
      >
         Next →
      </button>


<Search_For_8 />


    </main>
  );
};

export default TS;
