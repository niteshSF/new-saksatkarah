import React from "react";
import "../styles/header_footer.css";
import "../styles/contact.css";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/dst.png";
import image2 from "../assets/sf.png";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav className="navbar_bbb">
          <div className="logo-container_bbb">
            <a href="/" className="logo-link_bbb">
              <span className="site-name_bbb">
                <img
                  src={require("../assets/name.png")}
                  alt="Go to Page"
                  className="name-image"
                />
              </span>
            </a>
          </div>

          <ul
            className="nav-links_bbb"
            style={{
              position: "fixed",
              top: "10px",
              right: "20px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <li>
              <a href="/introduction">Introduction</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/EditorialBoard">Editorial Board</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "190px", 
            marginTop: "170px",
            flexWrap: "wrap", 
          }}
        >

          <a
            href="https://dst.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image1}
              alt="First"
              className="dst-image"
            />
          </a>

          
          <a
            href="https://samskritifoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image2}
              alt="Second"
              style={{ width: "300px", height: "auto", cursor: "pointer" }}
               className="sf-image"
            />
          </a>
        </div> */}

        <div>
          {/* Row 1: Image Left, Content Right */}
          <div className="row-1">
            <a
              href="https://dst.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image1} alt="DST" />
            </a>
            <div className="content-1">
              <h3> Department of Science & Technology </h3>
              <p>
                Department of Science & Technology, Technology Bhavan, New
                Mehrauli Road,
                <br />
                New Delhi-110 016.
                <br />
                Telephone: +91 11 26590215
              </p>
            </div>
          </div>

          {/* Row 2: Content Left, Image Right */}
          <div className="row-2">
            {/* Content on the left */}
            <div className="content-2">
              <h3>Samskriti Foundation</h3>

              <div className="tables-container">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Administrative Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        No. 1283/1, 3rd Cross, Krishnamurthypuram, <br /> Mysuru
                        – 570004, <br /> Karnataka
                      </td>
                    </tr>

                    <tr>
                      <td>Phone : <br/> 0821-4289674</td>
                    </tr>
                  </tbody>
                </table>

                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Academic Research Centre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Sri Vivekollasini Sabha, <br /> Raja Street, <br />
                        Melkote – 571431, <br /> Mandya District, Karnataka,
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Phone : <br /> +91-9900161271 <br /> 08236-200164{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
              <p style={{textAlign:"center"}}> 
             <strong> Email </strong> : info@samskritifoundation.org
              </p>
            </div>

            {/* Image on the right */}
            <a
              href="https://samskritifoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image2} alt="Samskriti Foundation" />
            </a>
          </div>

          <button
            style={{
              position: "fixed",
              top: "8.1rem",
              left: "1rem",
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
      </main>

      {/* <footer className="footer1">
        <div className="footer-content1">
          <p>
            &copy; {new Date().getFullYear()} Samskriti Foundation, Mysore.
            <br /> All rights reserved.
          </p>

          <ul className="footer-links1">
            <li>
              <a
                href="https://samskritifoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@samskrti.foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube />
              </a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};
export default Contact;
