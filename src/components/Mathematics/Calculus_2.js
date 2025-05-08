import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/mathematics/c_p_1.jpg";
import imageSrc2 from "../../assets/mathematics/c_p_2.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Calculus_2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  // ==================== footer shows, left section goes slightly up ===================================
    
    const footerRef = useRef();
    const [isFooterVisible, setIsFooterVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
  
      if (footerRef.current) {
        observer.observe(footerRef.current);
      }
  
      return () => {
        if (footerRef.current) {
          observer.unobserve(footerRef.current);
        }
      };
    }, []);

  // ------------------------ heighlight when we click from searh bar ------------------------------------------------------------------

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.substring(1));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Highlight the element temporarily
        element.style.transition = "background-color 0.5s ease";
        element.style.backgroundColor = "#ffff99"; // light yellow highlight

        // Remove the highlight after 2 seconds
        setTimeout(() => {
          element.style.backgroundColor = "transparent";
        }, 2000);
      }
    }
  }, [location]);

  // -------------------------  further reading -------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSubmenuToggle = (menu) => {
    setActiveSubmenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -------------- 1st Image Zoom in/our ----------------------------------
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [zoomed1, setZoomed1] = useState(false);

  const [transformOrigin1, setTransformOrigin1] = useState("center center");

  useEffect(() => {
    if (isModalOpen1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen1]);

  const handleImageClick1 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin1(`${percentX}% ${percentY}%`);
    setZoomed1((prev) => !prev);
  };
  const openModal = () => {
    setIsModalOpen1(true);
    setZoomed1(false);
  };
  const closeModal1 = () => {
    setIsModalOpen1(false);
    setZoomed1(false);
  };

  // ----------------------- 2nd Image Zoom in/our -----------------------------
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [zoomed2, setZoomed2] = useState(false);

  const [transformOrigin2, setTransformOrigin2] = useState("center center");

  useEffect(() => {
    if (isModalOpen2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen2]);

  const handleImageClick2 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin2(`${percentX}% ${percentY}%`);
    setZoomed2((prev) => !prev);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
    setZoomed2(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
    setZoomed2(false);
  };

  return (
    <div>
      <div className="head-section">
        <h1>चलन-मापक-गणितम् - Calculus</h1>

        <Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/mathematics")}
        >
          ← Back
        </button>

        <button className="inside-alge-home-btn">
          <a href="/bbb" style={{ color: "black" }}>
            <IoHomeSharp />
          </a>
        </button>

        {/* ----------------------------- further reading ------------------------------------------------ */}

        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="further-reading-btn">
            Further Reading ↓
          </button>

          {isOpen && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">

                <li className="dropdown-item">
                  <button
                    onClick={() => handleSubmenuToggle("primary")}
                    className="dropdown-button"
                  >
                    Primary Sources
                    <span className="ml-2">◀</span>
                  </button>
                  {activeSubmenu === "primary" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="https://ia801807.us.archive.org/1/items/TantraSangrahaOfNilakantha/Tantra-Sangraha-of-Nilakantha_text.pdf?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Tantrasangraha by Neelakanta Somayaji
                        </a>
                      </li>
                      
                    </ul>
                  )}
                </li>

                {/* Secondary Sources with left submenu */}
                <li className="dropdown-item">
                  <button
                    onClick={() => handleSubmenuToggle("secondary")}
                    className="dropdown-button"
                  >
                    Secondary Sources
                    <span className="ml-2">◀</span>
                  </button>
                  {activeSubmenu === "secondary" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="https://archive.org/details/ganitayuktibhasarationalesmathematicalastronomyjyeshthadevavolume1sarmak.v._473_S"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ganita Yukti Bhasa ( Rationales Mathematical
                          Astronomy) Jyeshthadeva Volume 1 Sarma K. V. By Prabhu
                          Ganesh
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://iks.iitgn.ac.in/wp-content/uploads/2016/02/Development-of-Calculus-in-India-K-Ramasubramanian-MD-Srinivas-2010.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Development of Calculus in India K. Ramasubramanian and M. D. Srinivas
                        </a>
                      </li> 

<li>
                        <a
                          href="https://archive.org/details/srinivas2019"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Untapped Wealth Of Manuscripts On Indian Astronomy And Mathematics
                          By M. D. Srinivas
                        </a>
                      </li>

                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ----------------------------------------------------------------------- */}

        <button className="next-button" onClick={() => navigate("/mathematics/Mathematics_in_Alaṅkāra_Śāstra_Content")}>
          Next →
        </button>
      </div>
      <div className="below-heading-image">
        <img
          src={require("../../assets/design.png")}
          alt="Descriptive Alt Text"
        />
      </div>

      <main>
        <div className={`main-content-full ${isCollapsed ? "collapsed" : ""}`}>
          {!isCollapsed && (
            <section 
            // className="alge-left-section"
            className={`alge-left-section ${
              isFooterVisible ? "adjusted-up" : ""
            }`}
            >
              <button
                onClick={() => setIsCollapsed(true)}
                className="toggle-button"
                style={{ position: "absolute", left: "20px", top: "0px" }}
              >
                {/* Hide Contents */}
                {/* <LiaToggleOnSolid /> */}
                <FaBars />
              </button>
              <br />
              <div style={{ marginTop: "-2rem" }}>
                <h3 style={{ textAlign: "center", marginLeft: "2.5rem" }}>
                  {" "}
                  Table of Contents
                </h3>
                <ul
                  style={{
                    textAlign: "left",
                    padding: "-211rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  {/* ============================ 1st ====================================================== */}

                  <li
                    style={{
                      listStyle: "initial",
                      display: "flex",
                      // justifyContent: "left",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // alignItems: "start",
                      padding: "0rem 0",
                    }}
                  >
                    <li>
                      <a
                        href="/mathematics"
                        style={{
                          textDecoration: "none",
                          color: "#333",
                          flexGrow: 1,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Mathematics
                      </a>
                    </li>
                  </li>

                  <ul
                    style={{
                      marginLeft: "3rem",
                      marginTop: "-0.4rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <li>
                      <a
                        href="/mathematics/Algebra_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Algebra
                      </a>
                    </li>

                    <li>
                      <a
                        href="/mathematics/Geometry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Geometry
                      </a>
                    </li>

                    <li>
                      <a
                        href="/mathematics/Trigonometry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Trigonometry
                      </a>
                    </li>

                    <li>
                      <a
                        href="/mathematics/Calculus_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Calculus
                      </a>
                    </li>

                    {/* ================================================================== */}

                    <ul
                      style={{
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <li>
                        <a
                          href="#The Concept of Infinitesimals: Early Traces in Vedic Literature"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          The Concept of Infinitesimals: Early Traces in Vedic
                          Literature{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Āryabhaṭa's Contributions: Series and Approximation Techniques"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          Āryabhaṭa's Contributions: Series and Approximation
                          Techniques{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Bhāskarācārya and the Early Foundations of Differentiation"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          Bhāskarācārya and the Early Foundations of
                          Differentiation{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Kerala School of Mathematics: The Pioneers of Calculus"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          Kerala School of Mathematics: The Pioneers of Calculus{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Legacy and Influence on Global Mathematics"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          The Legacy and Influence on Global Mathematics{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#References from Ancient Texts"
                          style={{
                            textDecoration: "none",
                            color: "#333",
                            display: "block",
                            margin: "1rem 0",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style =
                              "color:#000dff;text-decoration:underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style = "color:#333;text-decoration:none")
                          }
                        >
                          References from Ancient Texts{" "}
                        </a>
                      </li>
                    </ul>

                    {/* ====================================================================== */}

                    <li>
                      <a
                        href="/mathematics/Mathematics_in_Alaṅkāra_Śāstra_Content"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Mathematics in Alaṅkāra Śāstra
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
          )}

          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="toggle-button"
              style={{ position: "fixed", left: "10px", top: "120px" }}
            >
              <FaBars />
            </button>
          )}

          {/* Right Column */}

          <section className="alge-mid-section">
            <p
              style={{
                marginTop: "9rem",
                minWidth: "300px",
                padding: "0.5rem",
              }}
            >
              Calculus, a branch of mathematics that deals with the study of
              continuous change and motion, has often been attributed to Western
              mathematicians like Isaac Newton and Gottfried Wilhelm Leibniz.
              However, the seeds of calculus were sown in ancient Bhārata long
              before these scholars. The profound contributions of Bhāratīya
              mathematicians in the fields of infinitesimals, series, and
              derivatives reflect a sophisticated understanding of concepts that
              form the bedrock of modern calculus. These advancements are not
              merely footnotes in history but significant achievements that
              continue to inspire the global mathematical community.
            </p>

            <div
              style={{
                display: "flex",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "nowrap", // Ensures single row
                alignItems: "stretch", // Makes both items align to tallest
              }}
            >
              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                <h3 id="The Concept of Infinitesimals: Early Traces in Vedic Literature">
                  The Concept of Infinitesimals: Early Traces in Vedic
                  Literature{" "}
                </h3>
                <p>
                  The origins of calculus in Bhārata can be traced back to the
                  Vedic period, when the concept of infinitesimals was deeply
                  rooted in philosophical discussions and mathematical
                  practices. The notions of pūrṇa, ananta (the infinite), and
                  aṇu, kṣudra (the infinitesimally small), were explored in the
                  Upaniṣads and other Vedic texts. These discussions laid the
                  groundwork for later mathematical developments that would
                  delve into small quantities that could be considered
                  negligible yet integral to understanding continuous change. In
                  particular, the Īśāvāsya Upaniṣad hints at the concept of
                  infinitesimal by stating, “pūrṇam adaḥ, pūrṇam idam; pūrṇāt
                  pūrṇam udacyate, pūrṇasya pūrṇam ādāya, pūrṇam evāvaśiṣyate.”
                  This philosophical statement reflects the idea of
                  infinitesimal contributions adding up to a whole, a concept
                  central to the development of calculus.
                </p>
              </div>
              <div style={{ flex: "0.5", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc1}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal}
                />
              </div>
            </div>

            {isModalOpen1 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal1}
              >
                <img
                  src={imageSrc1}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick1(e);
                  }}
                  style={{
                    transform: `scale(${zoomed1 ? 2 : 1})`,
                    transformOrigin: transformOrigin1,
                    transition: "transform 0.3s ease",
                    cursor: "zoom-in",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
            )}

            <br />

            <div
              style={{
                display: "flex",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "nowrap", // Ensures single row
                alignItems: "stretch", // Makes both items align to tallest
              }}
            >
              <div style={{ flex: "0.5", minWidth: "300px", textAlign: "right" }}>
                <img
                  src={imageSrc2}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal2}
                />
              </div>

              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                <h3 id="Āryabhaṭa's Contributions: Series and Approximation Techniques">
                  Āryabhaṭa's Contributions: Series and Approximation Techniques{" "}
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  One of the earliest references to concepts akin to calculus is
                  found in the works of Āryabhaṭa (476 CE). His text, the
                  Āryabhaṭīya, introduces the idea of second-order sine
                  differences being proportional to the sine value, which he
                  used in his calculations of sine values. Āryabhaṭa's
                  approximation techniques demonstrate an understanding of
                  principles that would later be formalized as calculus by the
                  scholars of the Kerala School.
                </p>

                <h3 id="Bhāskarācārya and the Early Foundations of Differentiation">
                  Bhāskarācārya and the Early Foundations of Differentiation{" "}
                </h3>
                <p>
                  Bhāskarācārya (1114–1185 CE), also known as Bhāskara II, is
                  among the most prominent mathematicians of ancient Bhārata who
                  made significant strides in the development of calculus. In
                  his magnum opus, the Siddhāntaśiromaṇi, he delves into the
                  concept of instantaneous rates of change, which is a
                  fundamental principle of differentiation. One of his key
                  contributions was the madhyama-haraṇa, a method for
                  calculating the mean or average of a function. This method is
                  strikingly similar to the modern concept of the derivative,
                  where the slope of a tangent line to a curve is determined by
                  calculating the rate of change at a particular point. His
                  understanding of this idea is evident in his accurate
                  calculations of planetary motion and his solutions to complex
                  algebraic equations.
                </p>
              </div>
            </div>

            {isModalOpen2 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal2}
              >
                <img
                  src={imageSrc2}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick2(e);
                  }}
                  style={{
                    transform: `scale(${zoomed2 ? 2 : 1})`,
                    transformOrigin: transformOrigin2,
                    transition: "transform 0.3s ease",
                    cursor: "zoom-in",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
            )}

           

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Kerala School of Mathematics: The Pioneers of Calculus">
                Kerala School of Mathematics: The Pioneers of Calculus{" "}
              </h3>
              <p>
                The Kerala School of Mathematics, flourishing between the 14th
                and 16th centuries, is now credited with some of the most
                advanced work in calculus two centuries before the European
                Renaissance. Scholars like Mādhava of Saṅgamagrāma, Parameśvara,
                Nīlakaṇṭha Somayājī, and Jyeṣṭhadeva made groundbreaking
                contributions that included the development of infinite series
                expansions for trigonometric functions and early forms of
                differentiation and integration. Mādhava’s work on the series
                expansion for sine and cosine functions, now known as the
                Mādhava–Newton series, predated similar work by European
                mathematicians. He developed a series for π (pi) that converged
                rapidly, and his methods for calculating the length of an arc
                using infinitesimal slices closely resemble the principles of
                integration. Jyeṣṭhadeva’s Yuktibhāṣā, a comprehensive text,
                further elucidates the calculus-like techniques developed by the
                Kerala School and is regarded as one of the earliest known
                textbooks of calculus.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Legacy and Influence on Global Mathematics">
                The Legacy and Influence on Global Mathematics{" "}
              </h3>
              <p>
                It has been suggested that the knowledge developed in ancient
                Bhārata significantly influenced global mathematics, with
                Bhāratīya scholars’ insights being transmitted to Europe during
                the Renaissance. The Kerala School may have played a pivotal
                role in this transmission, laying the groundwork for future
                mathematical breakthroughs. These contributions underscore the
                intellectual legacy of Bhārata and highlight its enduring impact
                on the global history of mathematics.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/mathematics/c_ref.jpg")}
              alt="Descriptive Alt Text"
              className="a-ref-image"
            />
            <br></br>
            <br></br>
            <br />
          </section>
        </div>
      </main>

      <footer ref={footerRef} className="footer1">
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
      </footer>
    </div>
  );
};

export default Calculus_2;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
};
