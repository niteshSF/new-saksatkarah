import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc2 from "../../assets/mathematics/a_p_1.jpg";
import imageSrc1 from "../../assets/mathematics/a_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Algebra_2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
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
    <>
<div>

      <div className="head-section">
        <h1>बीजगणितम् - Bījagaṇitam - Algebra</h1>

        <Search_For_All_Content />

{/* <div> */}
    
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
                          href="https://archive.org/details/algebrawitharith00brahuoft/page/n5/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Algebra, with Arithmetic and mensuration, from the
                          Sanscrit of Brahmagupta and Bháscara. Translated by
                          Henry Thomas Colebrooke
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/bijaganitaoralge00bhas/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Bija ganita, or, The algebra of the Hindus By
                          Bhaskaracarya, b. 1114; Strachey, Edward, Sir,
                          1812-1901
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/Brahmasphutasiddhanta_Vol_1/page/n11/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Brahmagupta's Brāhmasphuṭasiddhānta VOL I (Also
                          Brahmasphutasiddhanta Brahmasphuta-siddhanta)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/UQXV_lilavati-of-bhaskaracharya-by-krishnaji-shankara-patwardhan-somashekhara-amrita-/page/n27/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Lilavati Of Bhaskaracharya By Krishnaji Shankara
                          Patwardhan, Somashekhara Amrita Naimpally And Shyam
                          Lal Singh Motilal Banarasi Dass Publishers Pvt. Ltd.,
                          Delhi
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/Aryabhatiya1976/Aryabhatiya%20v1%201976/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Aryabhatiya of Aryabhata: 3 volumes By K. V. Sarma and
                          K. S. Shukla
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.33644/page/n13/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Bakhshali Manuscript Vol. 1 By Kay, G. R.
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/RangacaryaTheGanitaSaraSangrahaOfMahavira1912/page/n13/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Ganita Sara Sangraha Of Mahavira 1912
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
                          href="https://archive.org/details/the-history-of-ancient-indian-mathematics/page/4/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The History Of Ancient Indian Mathematics By
                          C.N.Srinivasiengar
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.56827"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          History Of Hindu Mathematics A Source Book, Part 2:
                          Algebra By Singh, Avadhesh Narayan
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/mathematicsasknowntothevedicsamhitaspanditm.d.satgurupublications_530_R"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Mathematics As Known To The Vedic Samhitas Pandit M.
                          D. Sat Guru Publications By Oviya Srivastava
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
          onClick={() => navigate("/mathematics/Geometry_Content")}
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
                        href="/mathematics/Algebra_Page"
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
                          href="#The Origins and Evolution of Algebra"
                          // href="/mathematics/Algebra_Content#The%20Origins%20and%20Evolution%20of%20Algebra"
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
                          The Origins and Evolution of Algebra
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Contributions of Āryabhaṭa and Bhāskarācārya"
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
                          Contributions of Āryabhaṭa and Bhāskarācārya
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Algebra and Its Cultural Significance"
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
                          Algebra and Its Cultural Significance
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
                          References from Ancient Texts
                        </a>
                      </li>
                    </ul>

                    {/* ====================================================================== */}

                    <li>
                      <a
                        href="/mathematics/Geometry_Page "
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
              {/* Show Contents */}
              {/* <LiaToggleOffSolid /> */}
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
              Algebra, as a branch of mathematics, finds its roots deeply
              embedded in the ancient knowledge systems of Bhārata. The
              Bhāratīya subcontinent, renowned for its rich heritage in various
              sciences, has been a cradle for the development of algebraic
              thought long before its versions emerged in the western world. The
              contributions of ancient Bhāratīya mathematicians to the field of
              algebra are profound and testify to the intellectual prowess and
              innovative spirit that characterized ancient Bhārata. Not only is
              this deep connection with mathematical thought evident, but it
              also enlightens us about the advanced mathematical understanding
              that permeated Bhāratīya culture from its earliest stages, as seen
              in the Vedic texts where numerical patterns and sophisticated
              calculations were employed in rituals and cosmology.
            </p>

            {/* <a
            href="#origins"
            style={{ display: "block", margin: "1rem 0", color: "#0056d2" }}
          >
            The Origins and Evolution of Algebra
          </a> */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="The Origins and Evolution of Algebra">
                  The Origins and Evolution of Algebra
                </h3>
                <p>
                  The word “algebra” is derived from the Arabic term al-jabr,
                  which was introduced to the Western world through the works of
                  the ninth century Persian mathematician Al-Khwārizmī. However,
                  the foundational concepts of algebra can be traced back to
                  ancient Bhārata, where it was known as Bījagaṇita (literally,
                  “computation with seeds”). This term beautifully captures the
                  essence of algebra, where symbols and equations are used to
                  solve problems that are not immediately apparent, much like
                  seeds that contain the potential for growth into something
                  more significant. The term Bījagaṇita signifies the practical
                  application of algebra in multiple domains, and reflects
                  algebra's cultural and philosophical significance in ancient
                  Bhārata.
                </p>
                <p>
                  Ancient Bhārata’s approach to algebra was both practical and
                  theoretical, demonstrating the mathematicians' deep
                  understanding of the subject. The earliest use of what we
                  today refer to as algebraic identities can be found in the
                  Śulbasūtras, which are part of the Kalpasūtra texts and dealt
                  with geometric constructions of vedis (altars) for religious
                  rituals. While primarily focussed on geometry, these texts
                  also hinted at the understanding of linear and quadratic
                  equations, laying the groundwork for later algebraic
                  developments.
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
                alignItems: "flex-start",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "wrap", // this makes it responsive
              }}
            >
              <div style={{ flex: "1", minWidth: "300px", textAlign: "right" }}>
                <img
                  src={imageSrc2}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal2}
                />
                <br />

                <p>
                  One of the most significant figures in the history of algebra
                  is Bhāskarācārya, also known as Bhāskara II. Bījagaṇita, which
                  he authored, is one of the best-known treatises on algebra. He
                  discusses the general cakravāla method for solving
                  indeterminate equations of the second degree. This method is
                  indeed more optimal than the methods discovered much later by
                  Euler and Lagrange in Europe in the 18th century.
                </p>
              </div>

              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="Contributions of Āryabhaṭa and Bhāskarācārya">
                  Contributions of Āryabhaṭa and Bhāskarācārya
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  The great mathematician Āryabhaṭa had already laid the
                  foundation for algebraic thought in his work Āryabhaṭīya.
                  Āryabhaṭa's contributions include introducing the sine
                  function, and the demonstration of a variety of different
                  problems which have relevance in algebra, geometry,
                  arithmetic, astronomy, and several other fields. His
                  innovative approaches demonstrate a deep understanding of the
                  underlying principles, and are believed to have been key in
                  inspiring generations to come.
                </p>
                <p>
                  The algebraic techniques developed in ancient Bhārata were not
                  confined to abstract theory but were applied to solve
                  real-world problems. One critical technique discussed by
                  Āryabhaṭa was kuttaka, a method for solving indeterminate
                  equations, particularly those of the form ax + by = c, where
                  a, b are given integers and we have to solve for x, y taking
                  integral values. This technique, which is developed further in
                  works like Bhāskarācārya's Bījagaṇita, showcases the advanced
                  level of mathematical thinking in ancient Bhārata. The kuttaka
                  method was later adapted and refined by other mathematicians,
                  including Brahmagupta, who expanded on it in his
                  Brāhmasphuṭasiddhānta.
                </p>
                <p>
                  Brahmagupta was indeed a towering figure in Bhāratīya
                  mathematics. Brahmagupta was the pioneer who introduced
                  “varṇas” (syllables like “ya”, “ka”, etc.) for unknowns or
                  variables, like we use the symbols x, y, etc. in algebra
                  today. He made significant contributions to algebra through
                  his work on quadratic equations, rules for arithmetic
                  operations involving unknowns, rules for arithmetic operations
                  involving zero, and the concept of negative numbers. His
                  methods for solving quadratic equations were particularly
                  influential, and his work was later translated into Arabic,
                  influencing the development of algebra in the Islamic world.
                  Brahmagupta also discussed indeterminate equations of second
                  degree (vargaprakṛti) and discovered the principle of bhāvanā
                  or composition relating solutions of this equation.
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
              <h3 id="Algebra and Its Cultural Significance">
                Algebra and Its Cultural Significance{" "}
              </h3>
              <p>
                Algebra in ancient Bhārata was not just a mathematical
                discipline but a part of the people's cultural and spiritual
                life. The mathematical texts were often written in verse, making
                them accessible and easy to memorize. Most of the well-known
                mathematical formulae, equations, results and procedures were
                conveyed through such verses. This poetic approach to
                mathematics reflects the broader Bhāratīya tradition of
                integrating knowledge with art and culture, which continues to
                influence our lives today, connecting us to our rich heritage
                and inspiring us with the innovative spirit of our ancestors.
              </p>
              <p>
                The importance of algebra in ancient Bhārata can also be seen in
                its application to various fields, including astronomy,
                architecture, and commerce. Algebraic principles made the
                precise calculations required to construct temples and other
                architectural marvels possible. Similarly, the complex
                astronomical models developed by Bhāratīya astronomers relied
                heavily on algebraic methods, demonstrating this mathematical
                discipline's real-world impact and relevance and inspiring us
                with the applications of algebra in our daily lives.
              </p>
            </div>
            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/mathematics/a_ref.jpg")}
              alt="Descriptive Alt Text"
              className="a-ref-image"
            />
            <br></br>
            <br></br>
            <br />
          </section>
        </div>

        {/* ===================================================================================== */}
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
    </>
  );
};

export default Algebra_2;

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
