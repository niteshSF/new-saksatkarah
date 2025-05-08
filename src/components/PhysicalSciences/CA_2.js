import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/physical-sciences/ca_p_1.jpg";
import imageSrc2 from "../../assets/physical-sciences/ca_p_2.jpg";
import imageSrc3 from "../../assets/physical-sciences/ca_p_3.jpg";
import imageSrc4 from "../../assets/physical-sciences/ca_p_4.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const CA_2 = () => {
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
  const openModal1 = () => {
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

  // ----------------------- 4th Image Zoom in/our -----------------------------
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [zoomed4, setZoomed4] = useState(false);

  const [transformOrigin4, setTransformOrigin4] = useState("center center");

  useEffect(() => {
    if (isModalOpen4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen4]);

  const handleImageClick4 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin4(`${percentX}% ${percentY}%`);
    setZoomed4((prev) => !prev);
  };

  const openModal4 = () => {
    setIsModalOpen4(true);
    setZoomed4(false);
  };
  const closeModal4 = () => {
    setIsModalOpen4(false);
    setZoomed4(false);
  };

  return (
    <div>
      <div className="head-section">
        <h1>खगोलशाास्त्रं - Cosmology & Astronomy</h1>

        <Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Physical_Sciences")}
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
                          href="https://archive.org/details/The_Aryabhatiya_of_Aryabhata_Clark_1930"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The_Aryabhatiya_of_Aryabhata_Clark_1930 By Aryabhata,
                          Clark
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/cu_pub720/page/n13/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Surya-Siddhanta By Ebenezer Burgess
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/siddhanta-shiromani-of-bhaskaracharya-ganitadhyaya-girija-prasad-dwivedi/page/n9/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Siddhanta Shiromani Of Bhaskaracharya Ganitadhyaya
                          Girija Prasad Dwivedi
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
                          href="https://srsarma.in/catalogue/docs/A_Descriptive_Catalogue_of_Indian_Astronomical_%20Instruments_Abridged_Version.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          A Descriptive Catalogue of Indian Astronomical
                          Instruments – Abridged Version
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dn790009.ca.archive.org/0/items/KeralaSchoolOfAstronomy/Kerala%20School%20of%20Astronomy.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          A History of the Kerala School of Hindu Astronomy Book
                          by K. V. Sarma
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
          onClick={() => navigate("/Physical_Sciences/Physics_Content")}
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
            <section className={`alge-left-section ${
              isFooterVisible ? "adjusted-up" : ""
            }`}>
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
                        href="/Physical_Sciences"
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
                        Physical Sciences
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
                        href="/Physical_Sciences/Cosmology&Astronomy_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Cosmology Astronomy
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
                          href="#The Roots of Cosmology in Vedic Literature"
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
                          The Roots of Cosmology in Vedic Literature
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Mathematical Precision in Ancient Astronomy"
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
                          Mathematical Precision in Ancient Astronomy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Cosmological Narratives and Sacred Geometry"
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
                          Cosmological Narratives and Sacred Geometry
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Astronomical Instruments and Observatories"
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
                          Astronomical Instruments and Observatories
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Influence on Global Astronomy"
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
                          Influence on Global Astronomy
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
                        href="/Physical_Sciences/Physics_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Physics
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Physical_Sciences/Chemistry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Chemistry
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
              Cosmology (Brahmāṇḍa Vijñānam) and Astronomy (Jyotiṣam) were not
              just separate disciplines in ancient Bhārat but deeply
              intertwined, reflecting a unique synthesis of scientific
              observation and spiritual insight. The ancient sages of Bhārat did
              not just observe the stars and planets; they perceived the cosmos
              as a vast, interconnected system where the physical and
              metaphysical realms coexisted. This holistic approach to
              understanding the universe, unique to ancient Bhārat, is evident
              in the rich tradition of cosmological and astronomical thought
              that flourished, influencing science, philosophy, art, and
              religion.
            </p>

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
                <h3 id="The Roots of Cosmology in Vedic Literature">
                  The Roots of Cosmology in Vedic Literature
                </h3>
                <p>
                  The earliest references to cosmology in Bhārat can be found in
                  the Vedic texts, particularly the Ṛgveda and Atharvaveda.
                  These texts contain hymns that explore the universe's origins,
                  the nature of existence, and the cosmic order. One of the most
                  famous hymns, the Nāṣadīya Sūkta (Ṛgveda 10.129), ponders the
                  creation of the universe, suggesting that even the gods might
                  not fully comprehend its origins. This hymn reflects a deep
                  sense of mystery and reverence for the cosmos, highlighting
                  the ancient Bhāratīya view that the universe is a complex,
                  multifaceted entity beyond human comprehension (Ṛgveda,
                  10.129). The concept of cyclical time, where the universe
                  undergoes continuous cycles of creation, preservation, and
                  destruction, is central to Vedic cosmology. This idea of
                  cyclical time influenced the development of calendars and
                  astronomical models in ancient Bhārat. The Yajurveda describes
                  the movements of celestial bodies and their influence on the
                  earth, emphasizing the interconnectedness of all things
                  (Yajurveda, 17.81).
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc1}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal1}
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

                
              </div>

              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="Mathematical Precision in Ancient Astronomy">
                  Mathematical Precision in Ancient Astronomy
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  Ancient Bhāratīya astronomers pioneered mathematical
                  techniques to calculate celestial phenomena precisely. Texts
                  like the Sūrya Siddhānta, Āryabhaṭīya, and Brāhma-Sphuṭa
                  Siddhānta showcase Bhārat’s advanced understanding of
                  planetary positions, eclipses, and other cosmic events. The
                  development of trigonometry, particularly the use of sine and
                  cosine functions by astronomers like Āryabhaṭa and
                  Varāhamihira, was instrumental in these calculations.
                  Āryabhaṭa's Āryabhaṭīya, composed in 499 CE, introduced
                  innovations such as an accurate approximation of π (pi) and
                  the notion of diurnal rotation of the earth, where the earth
                  rotates on its axis (Āryabhaṭīya, 3.7).
                </p>
                <p>
                  There were a series of developments carried on by Brahmagupta,
                  Bhāskarācārya and others culminating in the model of planetary
                  motion proposed around 1500 CE by the Kerala savant Nīlakantha
                  according to which all the planets (Mercury, Venus, Mars,
                  Jupiter and Saturn) go around the Sun in eccentric orbits and
                  the Sun itself goes around the earth similarly. Such a model
                  was later proposed by Tycho Brahe in Europe in the 1580s.
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
                <h3 id="Cosmological Narratives and Sacred Geometry">
                  Cosmological Narratives and Sacred Geometry
                </h3>
                <p>
                  In addition to their scientific achievements, ancient
                  Bhāratīya cosmologists developed rich narratives to explain
                  the structure and dynamics of the universe. The concept of
                  Mount Meru as the centre of the universe, around which all
                  celestial bodies revolve, is a central theme in Bhāratīya
                  cosmology. This idea influenced the design of sacred spaces,
                  particularly temples, where the layout often mirrored the
                  cosmic order.
                </p>
                <p>
                  Sacred geometry, represented in symbols like the Śrī Yantra,
                  reflects the belief that the universe is ordered and
                  harmonious. The Śrī Yantra, with its intricate patterns of
                  interlocking triangles, represents the balance of cosmic
                  forces and the unity of the physical and spiritual realms.
                  This integration of geometry with cosmology underscores the
                  holistic approach of ancient Bhāratīya scholars, who saw no
                  distinction between the material and spiritual aspects of
                  existence.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
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
                  src={imageSrc4}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal4}
                />
                <br />
              </div>

              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="Astronomical Instruments and Observatories">
                  Astronomical Instruments and Observatories
                </h3>
                <p>
                  The development of sophisticated instruments and observatories
                  facilitated the advancement of astronomy in ancient Bhārat.
                  The Jantar Mantar in Jaipur, built by Mahārāja Jai Siṅgh II in
                  the 18th century, is one of the most famous examples of
                  ancient Bhāratīya observatories. This site contains a
                  collection of architecturally huge astronomical instruments
                  which were used to observe celestial bodies and calculate time
                  with great precision.
                </p>
                <p>
                  Even before the construction of such observatories, ancient
                  Bhāratīya astronomers used more straightforward tools like the
                  Gnomon (Śaṅku) to measure the altitude of the sun and other
                  celestial bodies. The Armillary Sphere and other Yantras were
                  also used to track the movements of stars and planets,
                  allowing astronomers to create accurate celestial maps.
                </p>
              </div>
            </div>

            {isModalOpen4 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal4}
              >
                <img
                  src={imageSrc4}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick4(e);
                  }}
                  style={{
                    transform: `scale(${zoomed4 ? 2 : 1})`,
                    transformOrigin: transformOrigin4,
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
              <h3 id="Influence on Global Astronomy">
                Influence on Global Astronomy{" "}
              </h3>
              <p>
                The knowledge and techniques developed by ancient Bhāratīya
                astronomers profoundly impacted global astronomy. The
                translation of Bhāratīya astronomical texts into Arabic and
                later into Latin facilitated the spread of this knowledge to the
                Islamic world and Europe. The works of Bhāratīya scholars like
                Brahmagupta and Āryabhaṭa not only influenced the development of
                astronomy in the Middle East but also played a significant role
                in the Renaissance in Europe, shaping the course of global
                science.
              </p>
              <p>
                The cosmology and astronomy of ancient Bhārat represent a
                remarkable blend of scientific inquiry and spiritual insight.
                The achievements of ancient Bhāratīya astronomers, from the
                development of trigonometry to the creation of sacred
                geometrical patterns, testify to their holistic approach. This
                approach, which seamlessly integrates the physical and
                metaphysical aspects of the universe, offers valuable insights
                into the nature of existence and the interconnectedness of all
                things and continues to inspire and captivate, reminding us of
                the profound wisdom and creativity of the Bhāratīya
                civilization.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/physical-sciences/ca_ref.jpg")}
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

export default CA_2;

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
