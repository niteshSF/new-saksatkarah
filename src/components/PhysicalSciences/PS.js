import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ps.css";
import ps_image_bg from "../../assets/physical-sciences/ps.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const PS = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <img
          src={ps_image_bg}
          alt="mathematics background "
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
          href="/Physical_Sciences/Cosmology&Astronomy_Page"
          className="ps-ca-a"
        >
          <img
            src={require("../../assets/physical-sciences/ps_c&a.png")}
            alt="Go to Page"
            className="ps-ca-logo"
          />
        </a>

        <a href="/Physical_Sciences/Physics_Page" className="ps-phy-a">
          <img
            src={require("../../assets/physical-sciences/ps_phy.png")}
            alt="Go to Page"
            className="ps-phy-logo"
          />
        </a>

        <a href="/Physical_Sciences/Chemistry_Page" className="ps-chem-a">
          <img
            src={require("../../assets/physical-sciences/ps_chem.png")}
            alt="Go to Page"
            className="ps-chem-logo"
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
        onClick={() => navigate("/mathematics")}
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
        onClick={() => navigate("/Earth_Environmental_Sciences")}
      >
         Next →
      </button>

<Search_For_8 />

    </main>
  );
};

export default PS;
