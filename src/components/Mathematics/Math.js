import React from "react";
import { useNavigate } from "react-router-dom";
import "./math.css";
import maths_image_bg from "../../assets/mathematics/maths.jpg";
import Search_For_8 from "../Search_For_8";
import { IoHomeSharp } from "react-icons/io5";

const Math = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* <button
        className="next-button"
        onClick={() => navigate("/branches_of_sciences")}
      >
        Next →
      </button> */}
      {/* <h1 style={{ textAlign: "center" }}>Mathematics</h1> */}
      {/* <p style={{ textAlign: "center" }}>inside the Calculus page</p> */}

      <div>
        <img
          src={maths_image_bg}
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

        <a href="/mathematics/Algebra_Page" className="math-alge-a">
          <img
            src={require("../../assets/mathematics/math_algebra.png")}
            alt="Go to Page"
            className="math-alge-logo"
          />
        </a>

        <a href="/mathematics/Geometry_Page" className="math-geo-a">
          <img
            src={require("../../assets/mathematics/math_geometry.png")}
            alt="Go to Page"
            className="math-geo-logo"
          />
        </a>

        <a href="/mathematics/Trigonometry_Page" className="math-tri-a">
          <img
            src={require("../../assets/mathematics/math_trigonometry.png")}
            alt="Go to Page"
            className="math-tri-logo"
          />
        </a>

        <a href="/mathematics/Calculus_Page" className="math-calc-a">
          <img
            src={require("../../assets/mathematics/math_calculus.png")}
            alt="Go to Page"
            className="math-calc-logo"
          />
        </a>
      </div>

      <Search_For_8 />

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
        onClick={() => navigate("/Technological_Sciences")}
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
        // className="alge_home"
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
        onClick={() => navigate("/Physical_Sciences")}
      >
        Next →
      </button>
    </main>
  );
};

export default Math;
