import Geometry_front_page from "../../assets/mathematics/geometry_front_page.png";
import btn from "../../assets/explore_alge.png";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Geometry_1 = () => {
  const navigate = useNavigate();
  return (
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
          src={Geometry_front_page}
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
        onClick={() => navigate("/mathematics/Geometry_Content")}
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "8vw",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          objectFit: "contain",
        }}
        className="all_math_explore_btn"
      >
        <img
          src={btn}
          alt="btn"
          style={{
            height: "5vh",
            width: "auto",
          }}
        />
      </button>

      <button
        style={{
          position: "absolute",
          top: "3rem",
          left: "7rem",
          padding: "8px 16px",
          backgroundColor: "#cec1c1",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgb(0, 26, 255)",
          transition: "background-color 0.3s ease",
        }}
        className="alge-back-btn"
        onClick={() => navigate("/mathematics")}
      >
        ← Back
      </button>

      <button
        style={{
          position: "fixed",
          top: "3rem",
          right: "15rem",
          padding: "4px 8px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "20px",
          backgroundColor: "black",
          transition: "background-color 0.3s ease",
        }}
        className="alge_home"
      >
        <a href="/bbb" style={{ color: "white" }}>
          <IoHomeSharp />
        </a>
      </button>

      <button
        style={{
          position: "absolute",
          top: "3rem",
          right: "7rem",
          padding: "8px 16px",
          backgroundColor: "#cec1c1",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgb(0, 26, 255)",
          transition: "background-color 0.3s ease",
        }}
        className="alge-next-btn"
        onClick={() => navigate("/mathematics/Trigonometry_Page")}
      >
        Next →
      </button>
    </main>
  );
};

export default Geometry_1;
