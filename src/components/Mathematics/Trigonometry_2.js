import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/mathematics/t_p_1.jpg";
import imageSrc2 from "../../assets/mathematics/t_p_2.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Trigonometry_2 = () => {
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
        <h1>त्रिकोणमितिः - Trigonometry</h1>

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
                          href="https://dn790007.ca.archive.org/0/items/Bibliotheca_Indica_Series/SiddhantaSiromaniEnglishTranslationFasc1-LancelotWilkinsonBapudevaSastri1861bis.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Siddhānta Śiromaṇi of Bhāskarācārya translated by Lancelot Wilkinson (1842)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.181816"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Surya Siddhanta
By Wilkinson, Lancelot

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
                          href="https://archive.org/details/ancient-indian-mathematics-and-vedha-l.v.gurjar/page/7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Ancient Indian Mathematics and Vedha - L.V. Gurjar
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/isbn_9780817646943"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ancient Indian leaps into mathematics
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
          onClick={() => navigate("/mathematics/Calculus_Content")}
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
                          href="#The Vedic Origins of Trigonometry"
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
                          The Vedic Origins of Trigonometry{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Bhāskara I and the Sine Approximation Formula"
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
                          Bhāskara I and the Sine Approximation Formula{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Āryabhaṭa and the Advancement of Trigonometry"
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
                          Āryabhaṭa and the Advancement of Trigonometry{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Varāhamihira and the Integration of Astronomy and Trigonometry"
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
                          Varāhamihira and the Integration of Astronomy and
                          Trigonometry{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Legacy of Bhāskarācārya"
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
                          The Legacy of Bhāskarācārya{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Transmission of Bhāratīya Trigonometry to the West"
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
                          The Transmission of Bhāratīya Trigonometry to the West{" "}
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
              Trigonometry, a branch of mathematics that studies the
              relationships between the angles and sides of triangles, or
              equivalently the arcs and associated chords in a circle, has deep
              roots in the ancient world, particularly in Bhārata. The
              contributions of Bhāratīya mathematicians to trigonometry are
              monumental and have laid the foundation for many modern
              mathematical concepts. The ancient scholars of Bhārata understood
              the practical applications of trigonometry and developed
              sophisticated theories that continue to influence mathematical
              thought today, demonstrating the relevance and usefulness of this
              field.
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
                <h3 id="The Vedic Origins of Trigonometry">
                  The Vedic Origins of Trigonometry{" "}
                </h3>
                <p>
                  The origins of trigonometry in Bhārata can be traced back to
                  the Vedic period. The Śulbasūtras, a collection of texts from
                  around 800 BCE, provide some of the earliest known references
                  to geometric and trigonometric concepts. These texts,
                  attributed to sages like Baudhāyana and Āpastamba, primarily
                  focus on constructing altars and the precise measurements
                  required for Vedic rituals. The famous Pythagorean theorem—the
                  Baudhāyana theorem in Bhārata—appears in these texts centuries
                  before Pythagoras. This theorem was to play a major role in
                  the development of trigonometry in India.
                </p>
                <br />

                <h3 id="Bhāskara I and the Sine Approximation Formula">
                  Bhāskara I and the Sine Approximation Formula{" "}
                </h3>
                <p>
                  Another luminary in the field of trigonometry was Bhāskara I
                  (7th century CE), a follower of Āryabhaṭa. Bhāskara I is
                  credited with providing a highly accurate approximation
                  formula for sine as a ratio of two quadratic functions of the
                  angle, which became widely used in subsequent calculations. He
                  also wrote extensive commentaries on Āryabhaṭa's works,
                  further expanding the understanding and application of
                  trigonometry in Bhārata.
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
                <h3 id="Āryabhaṭa and the Advancement of Trigonometry">
                  Āryabhaṭa and the Advancement of Trigonometry{" "}
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  One of the most celebrated figures in the history of
                  trigonometry is Āryabhaṭa, whose work, the Āryabhaṭīya, marks
                  a significant advancement in Bhāratīya mathematics. Āryabhaṭa
                  introduced the concept of sine (ardhajyā in Sanskrit), which
                  is fundamental to trigonometry. He was the first to tabulate
                  the values of sine functions at intervals of 3.75 degrees, a
                  practice later adopted by mathematicians in the Islamic world
                  and Europe.
                </p>

                <p>
                  In addition to sine, Āryabhaṭa's work also touches upon the
                  concept of cosine (known as koṭijyā in Sanskrit), and he used
                  these trigonometric functions to solve astronomical problems.
                  Based on his trigonometry, Āryabhaṭa presented, for the first
                  time in the history of astronomy, many of the formulae used in
                  spherical astronomy for computing the length of the day,
                  determination of time from shadows, etc. His methods for
                  calculating the positions of planets and predicting eclipses
                  were remarkably accurate for their time—a testimony to the
                  impressive achievements of ancient Bhāratīya mathematicians.
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

            <div style={{ minWidth: "300px", padding: "0.5rem" }}></div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Varāhamihira and the Integration of Astronomy and Trigonometry">
                Varāhamihira and the Integration of Astronomy and Trigonometry{" "}
              </h3>
              <p>
                Varāhamihira (505–587 CE), another towering figure in Bhāratīya
                astronomy and mathematics, made significant contributions to
                trigonometry through his work Pañcasiddhāntikā. This treatise
                synthesizes knowledge from five earlier astronomical texts
                (known as Siddhāntas) and integrates trigonometry into studying
                celestial bodies. Varāhamihira used trigonometric methods to
                improve the accuracy of astronomical observations and
                calculations, including the prediction of eclipses and the
                determination of planetary positions. Varāhamihira's work
                reflects the profound understanding that ancient Bhāratīya
                mathematicians had of the practical applications of trigonometry
                in astronomy—a field deeply intertwined with mathematics in
                ancient Bhārata.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Legacy of Bhāskarācārya">
                The Legacy of Bhāskarācārya{" "}
              </h3>
              <p>
                Bhāskarācārya, also known as Bhāskara II (1114–1185 CE), was one
                of the great mathematicians and astronomers of Bhārata in the
                early medieval period. His work Siddhāntaśiromaṇi became the
                canonical textbook for mathematical astronomy, building on the
                foundations laid by his predecessors. Bhāskarācārya's work goes
                beyond trigonometry and solving algebraic equations. He
                introduced the notion of instantaneous velocity and other
                concepts which suggest a development towards calculus.
                Bhāskarācārya's influence extended far beyond his time, with his
                works being studied and revered by mathematicians in Bhārata and
                the Islamic world for centuries.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Transmission of Bhāratīya Trigonometry to the West">
                The Transmission of Bhāratīya Trigonometry to the West{" "}
              </h3>
              <p>
                The knowledge of trigonometry developed in ancient Bhārata
                eventually spread to other parts of the world, mainly through
                the work of Islamic scholars during the medieval period. These
                scholars translated Bhāratīya mathematical texts into Arabic,
                and the concepts of sine, cosine, and other trigonometric
                functions were introduced to Europe through these translations.
                The works of Āryabhaṭa, Bhāskara I, and Bhāskarācārya were
                instrumental in shaping the development of trigonometry in the
                Western world, highlighting the global influence of Bhāratīya
                trigonometry. The Bhāratīya approach to trigonometry,
                characterized by its rigorous methods and practical
                applications, laid the groundwork for the mathematical
                advancements that followed in the Renaissance and beyond. The
                transmission of this knowledge is a testimony to the enduring
                impact of ancient Bhārata's mathematical traditions, which
                continue to inspire the study of mathematics today.
              </p>
            </div>

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

export default Trigonometry_2;

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
