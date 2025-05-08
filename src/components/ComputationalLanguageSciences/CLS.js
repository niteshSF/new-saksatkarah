import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cls.css";
import cls_image_bg from "../../assets/comp-lang-science/cls_bg.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const CLS = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <img
          src={cls_image_bg}
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
          href="/Computational_Language_Sciences/Linguistics_Page"
          className="cls-lin-a"
        >
          <img
            src={require("../../assets/comp-lang-science/lin.png")}
            alt="Go to Page"
            className="cls-lin-logo"
          />
        </a>

        <a
          href="/Computational_Language_Sciences/Semantic_Analysis_Page"
          className="cls-sa-a"
        >
          <img
            src={require("../../assets/comp-lang-science/sa.png")}
            alt="Go to Page"
            className="cls-sa-logo"
          />
        </a>

        <a
          href="/Computational_Language_Sciences/Encryption_Page"
          className="cls-e-a"
        >
          <img
            src={require("../../assets/comp-lang-science/e.png")}
            alt="Go to Page"
            className="cls-e-logo"
          />
        </a>

        <a
          href="/Computational_Language_Sciences/Combinatorics_Mnemonics_Page"
          className="cls-cm-a"
        >
          <img
            src={require("../../assets/comp-lang-science/cm.png")}
            alt="Go to Page"
            className="cls-cm-logo"
          />
        </a>
      </div>

      <Search_For_8/>
      
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
        onClick={() => navigate("/Yoga_Cognitive_Sciences")}
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
        onClick={() => navigate("/Health_Life_Sciences")}
      >
         Next →
      </button>


    </main>
  );
};

export default CLS;
