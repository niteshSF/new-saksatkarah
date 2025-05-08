import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/mathematics/g_p_1.jpg";
import imageSrc2 from "../../assets/mathematics/g_p_2.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Geometry_2 = () => {
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
        <h1>ज्यामिति - Geometry</h1>

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
                          href="https://archive.org/details/dqmv_the-sulba-sutra-texts-on-the-vedic-geometry-the-baudhyana-apastamaba-katyayana-a/page/n23/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Sulba Sutra( Texts On The Vedic Geometry The
                          Baudhyana Apastamaba Katyayana And Manava Sulba
                          Sutras) Ed By Swami Satya Prakash Saraswati 1979
                          Allhabad Swadhyaya Samstha
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/Patiganita"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Pāṭīgaṇita by Śrīdhara
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
                          href="https://archive.org/details/geometry-in-ancient-and-medieval-india-t.-a.-sarasvati-amma/page/14/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Geometry in Ancient and Medieval India - T. A.
                          Sarasvati Amma
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/geometry-in-ancient-and-medieval-india-t.-a.-sarasvati-amma/page/14/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Science Of The Sulba: A Study In Early Hindu
                          Geometry By Datta, Bibhutibhusan
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

        <button
          className="next-button"
          onClick={() => navigate("/mathematics/Trigonometry_Content")}
        >
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
                          href="#The Śulbasūtras: The Bedrock of Geometry"
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
                          The Śulbasūtras: The Bedrock of Geometry
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Geometry and Vedic Rituals"
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
                          Geometry and Vedic Rituals{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Practical Applications of Geometry"
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
                          Practical Applications of Geometry{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Legacy of Bhāratīya Geometry"
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
                          The Legacy of Bhāratīya Geometry{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Stories of Geometric Brilliance"
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
                          Stories of Geometric Brilliance{" "}
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
              Geometry, known as Śulbavidyā in ancient Bhārata, holds a
              significant place in the mathematical traditions of the
              subcontinent. Rooted in Vedic culture's spiritual and ritualistic
              practices, the study of geometry in ancient Bhārata was a pursuit
              of intellectual curiosity and a vital component of religious life
              and architectural precision. The ancient sages of Bhārata used
              their advanced understanding of geometry to construct altars,
              temples, and other sacred spaces, water reservoirs, and
              well-laid-out cities, ensuring they were in perfect harmony with
              the cosmic order. The foundational texts of geometry, the
              Śulbasūtras, provide us with awe-inspiring insights into the
              advanced understanding of shapes, sizes, and spatial relationships
              that ancient Bhāratīya scholars possessed.
            </p>

            {/* <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="The Śulbasūtras: The Bedrock of Geometry">
                  The Śulbasūtras: The Bedrock of Geometry
                </h3>
                <p>
                  The Śulbasūtras are ancient Bhāratīya texts that primarily
                  deal with constructing altars (vedis) for performing Vedic
                  rituals. These texts, attributed to various sages such as
                  Baudhāyana, Āpastamba, and Kātyāyana, date back to around 800
                  BCE to 200 BCE. The term śulba means “cord,” referring to the
                  rope used for measuring and constructing geometric shapes. The
                  Śulbasūtras are among the earliest known texts to discuss
                  geometric principles systematically and are often considered
                  the precursors to Euclidean geometry.
                </p>
                <p>
                  One of the most notable contributions from the Śulbasūtras is
                  the Baudhāyana theorem, essentially an early statement of the
                  Pythagorean theorem. Baudhāyana stated that “the diagonal of a
                  rectangle produces both the areas which the two sides of the
                  rectangle produce separately.” In other words, the square of
                  the diagonal of a rectangle is the sum of the squares of its
                  two sides. This theorem was crucial for constructing right
                  angles in Vedic altars and is a testimony to the advanced
                  mathematical knowledge of ancient Bhārata.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc1}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal}
                />
              </div>
            </div> */}

{/* ================================================================================= */}

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
    <h3 id="The Śulbasūtras: The Bedrock of Geometry">
      The Śulbasūtras: The Bedrock of Geometry
    </h3>

    <p>
                  The Śulbasūtras are ancient Bhāratīya texts that primarily
                  deal with constructing altars (vedis) for performing Vedic
                  rituals. These texts, attributed to various sages such as
                  Baudhāyana, Āpastamba, and Kātyāyana, date back to around 800
                  BCE to 200 BCE. The term śulba means “cord,” referring to the
                  rope used for measuring and constructing geometric shapes. The
                  Śulbasūtras are among the earliest known texts to discuss
                  geometric principles systematically and are often considered
                  the precursors to Euclidean geometry.
                </p>
                <p>
                  One of the most notable contributions from the Śulbasūtras is
                  the Baudhāyana theorem, essentially an early statement of the
                  Pythagorean theorem. Baudhāyana stated that “the diagonal of a
                  rectangle produces both the areas which the two sides of the
                  rectangle produce separately.” In other words, the square of
                  the diagonal of a rectangle is the sum of the squares of its
                  two sides. This theorem was crucial for constructing right
                  angles in Vedic altars and is a testimony to the advanced
                  mathematical knowledge of ancient Bhārata.
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

{/* ================================================================================ */}

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
                <h3 id="Geometry and Vedic Rituals">
                  Geometry and Vedic Rituals{" "}
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  The connection between geometry and Vedic rituals is deeply
                  intertwined. The construction of altars, which were of various
                  shapes like squares, rectangles, trapeziums, and circles,
                  required meticulous and precise geometric calculations. The
                  altars were designed to represent the cosmos, and their
                  dimensions had to adhere strictly to Vedic specifications to
                  ensure the effectiveness of the rituals performed upon them.
                  For instance, the agnicayana, or the fire altar, was often
                  built as a falcon in flight, symbolizing the sacred Garuḍa.
                  The measurements and proportions had to be exact, as any
                  deviation was believed to disrupt the cosmic balance. The
                  Śulbasūtras describe in detail how to construct these altars,
                  including geometric transformations such as converting a
                  square into a circle of equal area, a problem that would
                  fascinate mathematicians for centuries. The texts also mention
                  the concept of prācīpradeśa, which involves aligning the altar
                  to the cardinal directions, further emphasizing the importance
                  of geometry in maintaining cosmic harmony.
                </p>

                {/* </div> */}
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
              <h3 id="Practical Applications of Geometry">
                Practical Applications of Geometry
              </h3>
              <p>
                Geometry in ancient Bhārata extended beyond religious practices,
                playing a crucial role in everyday life, particularly in
                architecture and town planning. The cities of Mohenjo-daro and
                Harappā, dating back to 2500 BCE, showcase the application of
                geometric principles in urban planning, with grid-like streets
                and well-organized drainage systems, demonstrating advanced
                knowledge long before similar developments elsewhere. The
                geometric precision is also evident in the design of temples
                like Khajurāho, Bṛhadīśvarar, and the Sun Temple at Konārka, all
                of which were constructed using the principles of Vāstuśāstra,
                where the vāstupuruṣamaṇḍala, a sacred geometric diagram,
                ensured that each structure was in harmony with cosmic
                principles.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Legacy of Bhāratīya Geometry">
                The Legacy of Bhāratīya Geometry
              </h3>
              <p>
                The legacy of ancient Bhāratīya geometry extends beyond its
                historical contributions, leaving an indelible mark on the
                global mathematical landscape. The concept of zero, the decimal
                system, and the use of negative numbers, all cornerstones of
                modern mathematics, originated in ancient Bhārata. The
                Śulbasūtras and other mathematical texts from this era laid the
                groundwork for later developments in algebra, trigonometry, and
                calculus. Moreover, the influence of Bhāratīya geometry can also
                be seen in other cultures. Through trade, conquests, and
                scholarly exchanges, the mathematical knowledge of Bhārata
                spread to Persia, the Islamic world, and eventually to Europe,
                where it contributed to the Renaissance and the Scientific
                Revolution. The transmission of Bhāratīya mathematical ideas,
                including geometry-related ones, was crucial in global
                mathematics development.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Stories of Geometric Brilliance">
                Stories of Geometric Brilliance
              </h3>
              <p>
                One of the most intriguing stories of geometric brilliance from
                ancient Bhārata is that of Āryabhaṭa, whose Āryabhaṭīya contains
                several references to geometric concepts, including the
                calculation of the areas of planar figures. Āryabhaṭa's
                approximation of the value of π (pi) was remarkably accurate,
                and his contributions to trigonometry were ground-breaking.
                Varāhamihira discusses various geometric principles and their
                applications in astronomy, reflecting the advanced state of
                geometric knowledge in ancient Bhārata and its integration with
                other scientific disciplines. From Vedic altars to majestic
                temples, geometric principles have been woven through Bhārata’s
                cultural fabric. Ancient Bhāratīya mathematicians' profound
                understanding of geometry continues to inspire and shape global
                mathematical thought, underscoring the legacy of this remarkable
                civilization.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/mathematics/g_ref.jpg")}
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

export default Geometry_2;

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
