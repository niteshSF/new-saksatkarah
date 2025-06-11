import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/mathematics/mas_p_1.jpg";
import imageSrc2 from "../../assets/mathematics/mas_p_2.jpg";
import imageSrc3 from "../../assets/mathematics/mas_p_3.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const MinAS_2 = () => {
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

  // -------------- 3st Image Zoom in/our ----------------------------------
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [zoomed3, setZoomed3] = useState(false);

  const [transformOrigin3, setTransformOrigin3] = useState("center center");

  useEffect(() => {
    if (isModalOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen3]);

  const handleImageClick3 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin3(`${percentX}% ${percentY}%`);
    setZoomed3((prev) => !prev);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
    setZoomed3(false);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
    setZoomed3(false);
  };

  return (
    <div>
      <div className="head-section">
        <h1> Mathematics in Alaṅkāra Śāstra </h1>

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
                          href="https://archive.org/details/onbakshalimanusc00hoeruoft"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Bakhshali Manuscript
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/Aryabhatiya1976"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Āryabhaṭīya by Āryabhaṭa
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/RangacaryaTheGanitaSaraSangrahaOfMahavira1912"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Gaṇitasārasaṅgraha by Mahāvīra
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/Bijaganita"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Bījagaṇita by Bhāskara II
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
                          href="https://archive.org/details/history-of-hindu-mathematics-1-bibhutibhusan-datta-avadesh-narayan-singh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          A History of Hindu Mathematics
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/wg372"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ancient Indian Mathematics And Veda
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

        <button className="next-button" onClick={() => navigate("/bbb")}>
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
                          href="#The Mathematical Foundation of Alaṅkāra Śāstra"
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
                          The Mathematical Foundation of Alaṅkāra Śāstra
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Geometry in Poetic Structures"
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
                          Geometry in Poetic Structures
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Combinatorics in Alaṅkāra Śāstra"
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
                          Combinatorics in Alaṅkāra Śāstra
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Golden Ratio in Art and Literature"
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
                          The Golden Ratio in Art and Literature
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Stories of Mathematical Brilliance in Poetry"
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
                          Stories of Mathematical Brilliance in Poetry
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
              Alaṅkāra Śāstra, the ancient Bhāratīya treatise on poetics and
              aesthetics, is a profound example of how mathematics was
              intricately woven into the fabric of language and literature in
              ancient Bhārata. This discipline, which explores the principles of
              ornamentation in poetry, prose, and drama, reflects Bhāratīya
              scholars' deep understanding of mathematical concepts. The use of
              numbers, patterns, and ratios in Alaṅkāra Śāstra showcases the
              intellectual brilliance of ancient Bhārata's scholars, who
              seamlessly integrated the precision of mathematics with the beauty
              of literary expression.
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
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "nowrap", // Ensures single row
                alignItems: "stretch", // Makes both items align to tallest
              }}
            >
              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                <h3 id="The Mathematical Foundation of Alaṅkāra Śāstra">
                  The Mathematical Foundation of Alaṅkāra Śāstra
                </h3>
                <p>
                  Alaṅkāra Śāstra, attributed to ancient scholars such as
                  Bhāmaha, Daṇḍin, and Vāmana, categorizes various figures of
                  speech (alaṅkāras) that enhance the aesthetic appeal of
                  literary works. These alaṅkāras are deeply rooted in
                  mathematical structures that govern rhythm, symmetry, and
                  proportion in language. Using syllabic meters (chandas) in
                  Sanskrit poetry is a prime example of how mathematical
                  precision was employed to create harmony and balance in
                  literary compositions.
                </p>
                <p>
                  The concept of chandas, which refers to the metrical structure
                  of verses, is based on the arrangement of syllables in
                  specific patterns. The Ṛgveda, one of the oldest Vedic texts,
                  employs complex metrical forms like the Gāyatrī, Anuṣṭubh, and
                  Triṣṭubh based on precise syllabic counts and arrangements.
                  These meters follow mathematical rules that ensure rhythmic
                  consistency, making the verses pleasing to the ear and more
                  accessible to memorize. Specific meters were believed to
                  invoke divine forces, underscoring the spiritual significance
                  of mathematics in literary expression, and inviting us to
                  explore this unique connection.
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
                <br />
              </div>

              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                <br />
                <br />

                <h3 id="Geometry in Poetic Structures">
                  Geometry in Poetic Structures
                </h3>
                <p>
                  The use of mathematical patterns in Alaṅkāra Śāstra is evident
                  in the construction of poetic forms that follow symmetrical
                  patterns. One of the most fascinating examples is the
                  Citra-kāvya, a form of poetry where the verses are arranged in
                  geometric shapes such as squares, circles, and lotus patterns.
                  Combined with the auditory rhythm of the verses, these visual
                  patterns create a multi-sensory experience that exemplifies
                  the mathematical genius of ancient Bhāratīya poets, leaving us
                  deeply engaged and appreciative of their artistic skills.
                </p>
                <p>
                  The creation of Citra-kāvya required literary skills and a
                  deep understanding of geometry. The poets meticulously
                  calculated the placement of syllables to form perfect
                  geometric shapes, ensuring that the verses could be read in
                  multiple directions while maintaining their meaning and
                  rhythm. This intricate interplay of language and geometry
                  reflects the holistic approach of ancient Bhāratīya scholars,
                  who saw mathematics as an integral part of the artistic
                  process.
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
                <br />
                <h3 id="Combinatorics in Alaṅkāra Śāstra">
                  Combinatorics in Alaṅkāra Śāstra
                </h3>
                <p>
                  The concept of combinatorics, which deals with the arrangement
                  and combination of elements in a set, is another mathematical
                  principle that finds application in Alaṅkāra Śāstra. One
                  notable example is the yamaka alaṅkāra, a figure of speech
                  that involves repeating words or syllables in different
                  arrangements to create multiple meanings.
                </p>
                <p>
                  Creating yamaka verses required poets to explore all possible
                  permutations of syllables, ensuring that each arrangement
                  produced a coherent and meaningful line. This process is akin
                  to solving a combinatorial problem, where the poet must
                  consider all possible combinations to achieve the desired
                  effect. This process's intellectual rigor and meticulousness
                  highlight the depth of thought and precision that underpin
                  ancient Bhāratīya poets' creative endeavours, leaving us in
                  awe of their mathematical brilliance.
                </p>
              </div>
              <div style={{ flex: "0.5", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc3}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal3}
                />
              </div>
            </div>

            {isModalOpen3 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal3}
              >
                <img
                  src={imageSrc3}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick3(e);
                  }}
                  style={{
                    transform: `scale(${zoomed3 ? 2 : 1})`,
                    transformOrigin: transformOrigin3,
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
              <h3 id="The Golden Ratio in Art and Literature">
                The Golden Ratio in Art and Literature
              </h3>
              <p>
                The concept of the golden ratio, a mathematical principle known
                for its aesthetic appeal, is believed to also be present in
                Alaṅkāra Śāstra. This ratio, approximately 1.618:1, is believed
                to represent the most harmonious proportions in art and nature.
                In ancient Bhāratīya literature, the golden ratio can be
                observed in the structure of narratives, where the division of a
                story into parts follows proportions that create a sense of
                balance and harmony. For example, the division of a play into
                acts or the arrangement of verses in a poem often adheres to
                principles that resonate with the golden ratio. This subtle use
                of mathematical harmony in literary composition enhances the
                aesthetic experience for the reader or audience, reflecting the
                deep understanding of mathematical beauty in ancient Bhāratīya
                culture.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Stories of Mathematical Brilliance in Poetry">
                Stories of Mathematical Brilliance in Poetry
              </h3>
              <p>
                One fascinating story that illustrates the mathematical prowess
                of ancient Bhāratīya poets is that of Kālidāsa, one of the
                greatest Sanskrit poets and dramatists, Kālidāsa. While
                composing his famous work Meghadūta, Kālidāsa meticulously
                counted the syllables in each verse to ensure that the rhythm
                and meter adhered to precise mathematical standards. The result
                was a work that captivated audiences with its emotional depth
                and impressed scholars with its precision.
              </p>
              <p>
                Another example is Bhāmaha's work, credited with developing the
                śleṣa alaṅkāra (double entendre), where a single verse could be
                interpreted in multiple ways depending on the arrangement of
                syllables and words. This required a keen mathematical mind to
                consider all possible permutations and meanings. The
                intellectual challenge of such verses was highly valued in
                ancient Bhārata, where poetry combined artistic creativity with
                mathematical precision.
              </p>
              <p>
                The integration of mathematics into Alaṅkāra Śāstra demonstrates
                the holistic approach of ancient Bhārata’s scholars, who saw no
                boundaries between the sciences and the arts. The use of
                mathematical principles in poetry reflects the deep respect for
                patterns and harmony that shaped the intellectual culture of the
                time.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/mathematics/mas_ref.jpg")}
              alt="Descriptive Alt Text"
              className="a-ref-image"
            />
            <br></br>
            <br></br>
            <br />
          </section>
        </div>
      </main>

      <footer className="footer1">
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

export default MinAS_2;

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
