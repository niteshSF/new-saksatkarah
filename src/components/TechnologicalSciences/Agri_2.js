import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/technology-science/agri_p_1.jpg";
import imageSrc2 from "../../assets/technology-science/agri_p_2.jpg";
import imageSrc3 from "../../assets/technology-science/agri_p_3.jpg";
import imageSrc4 from "../../assets/technology-science/agri_p_4.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Agri_2 = () => {
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);

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
        <h1>कृषिविज्ञानम् - Agriculture</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Technological_Sciences")}
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
                          href="https://archive.org/details/in.gov.ignca.900"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Kautilya’S Arthasastra
By Shamasastry, R.


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/vrikshaayurvedaatreatiseonplantsciencesircarn.n.romasarkarsatgurupublications_48_v/page/n17/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                        Vriksha Ayurveda A Treatise On Plant Science Sircar N. N. Roma Sarkar
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ia801304.us.archive.org/25/items/Bibliotheca_Indica_Series/KrishiParasara-GirijaPrasannaMajumdarScBanerji1960bis.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          KrishiParasara-GirijaPrasannaMajumdarScBanerji1960
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
                          href="https://archive.org/details/HistoryAgricultureIndia1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          History Agriculture India 1
By M. S. Randhawa


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.62133"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Agriculture And Agriculturists In Ancient India(1932)
By  Gangopadhyay, Radharaman


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
          onClick={() =>
            navigate("/Technological_Sciences/Water_Management_Content")
          }
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
                        href="/Technological_Sciences"
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
                        Technological Sciences
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
                        href="/Technological_Sciences/Agriculture_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Agriculture
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
                          href="#Agricultural Practices in Vedic Literature"
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
                          Agricultural Practices in Vedic Literature
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Technological Innovations"
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
                          Technological Innovations
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Water Management"
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
                          Water Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Integration of Agriculture with Religious and Cultural Practices"
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
                          Integration of Agriculture with Religious and Cultural
                          Practices
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Animal Husbandry and Agriculture"
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
                          Animal Husbandry and Agriculture
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
                        href="/Technological_Sciences/Water_Management_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Water Management
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Technological_Sciences/Metallurgy_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Metallurgy
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Technological_Sciences/Civil_Engineering_Architecture_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Civil Engineering & Architecture
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Technological_Sciences/Mechanical_Engineering_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Mechanical Engineering
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Technological_Sciences/Textile_Engineering_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Textile Engineering
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Technological_Sciences/Gemmology_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Gemmology
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
              Agriculture, known as kṛṣivijñānam in ancient Bhārata, was more
              than just a means of sustenance—it was the cornerstone of the
              civilization itself. The ancient Bhāratīya society recognized
              agriculture as a sacred duty and revered it as a profound
              connection between the land and the people. This bond ensured the
              entire community's well-being. This reverence for agriculture is
              evident in the texts, practices, and innovations that emerged
              during this period.
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
                <br/>
                <h3 id="Agricultural Practices in Vedic Literature">
                  Agricultural Practices in Vedic Literature
                </h3>
                <p>
                  The Vedic period, a pivotal era in the history of ancient
                  Bhārata, laid the foundation for its agriculture. The Ṛgveda
                  and Atharvaveda, sacred texts of this period, contain numerous
                  references to agricultural practices, including ploughs, the
                  importance of rainfall, and the significance of various crops.
                  The Yajurveda provides detailed descriptions of agricultural
                  tools, seasonal sowing, and the types of crops suitable for
                  different seasons. The texts emphasize the role of divine
                  forces in ensuring a good harvest, with prayers and rituals
                  performed to invoke deities like Indra, Parjanya, and Varuṇa
                  for timely rains and protection of crops (Taittirīya Saṁhitā,
                  1.1.3).
                </p>
                <p>
                  The Taittirīya Saṁhitā mentions crop rotation and the
                  importance of maintaining soil fertility. The text outlines
                  specific crops to be sown each season, a practice that ensured
                  a steady food supply and helped preserve the soil's health.
                  This knowledge reflects a deep understanding of sustainable
                  farming practices, a foresight that is admirable and still
                  relevant today.
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
                <br/>
                <h3 id="Technological Innovations">
                  Technological Innovations
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  Ancient Bhārata was home to several technological innovations
                  in agriculture, many of which were documented in texts like
                  the Kṛṣiparāśara and Vṛkṣāyurveda. The Kṛṣiparāśara, authored
                  by Mahārṣi Parāśara, is a seminal work that provides
                  comprehensive guidelines on farming activities. It covers
                  everything from ploughing and sowing to water management and
                  plant protection. The text also highlights the importance of
                  personally supervising agricultural operations, ensuring
                  quality and efficiency in farming.
                </p>
                <p>
                  One of the most remarkable innovations was the development of
                  kūṇapajāla, the world's first fermented liquid fertilizer,
                  mentioned in the Vṛkṣāyurveda by Sūr̥pāla. This organic
                  fertilizer, made from animal waste and other natural
                  ingredients, nourished crops and protected them from diseases.
                  Fermentation of the ingredients releases nutrients in a form
                  that plants could easily absorb. This practice not only
                  improved crop yields but also maintained ecological balance,
                  showcasing the ingenuity of ancient Bhāratīya farmers in using
                  sustainable agricultural methods.
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
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "nowrap", // Ensures single row
                alignItems: "stretch", // Makes both items align to tallest
              }}
            >
              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                <h3 id="Water Management">Water Management</h3>
                <p>
                  Water management was another area where ancient Bhārata
                  excelled. The construction of reservoirs, step wells, and
                  sophisticated irrigation systems ensured a consistent water
                  supply for agriculture. The Matsya Purāṇa praises the merit of
                  constructing ponds and reservoirs, equating the act to the
                  birth of ten sons, highlighting the importance of water
                  conservation in ancient Bhārata.
                </p>
                <p>
                  The Śatapatha Brāhmaṇa provides insights into the early
                  methods of water management, describing the construction of
                  dams and channels to control water flow. These techniques were
                  effective in irrigation and preventing floods and soil
                  erosion. The Vṛkṣāyurveda further elaborates on the methods of
                  locating underground water sources using natural indicators
                  like the presence of certain plants, reflecting a deep
                  understanding of hydrology.
                </p>
<br/>
                <h3 id="Integration of Agriculture with Religious and Cultural Practices">
                  Integration of Agriculture with Religious and Cultural
                  Practices
                </h3>
                <p>
                  Agriculture in ancient Bhārata was closely linked with
                  religious and cultural practices. Planting and nurturing trees
                  was considered a pious duty, with the Matsya Purāṇa stating
                  that planting a tree is equivalent to having ten sons. This
                  belief in the sacredness of agriculture is also evident in
                  rituals like muṣṭigrahaṇa (the collection of the first handful
                  of grains) and navānna (the celebration of the first harvest).
                  These practices were expressions of gratitude to the divine
                  and reinforced the social and cultural importance of
                  agriculture in Bhārata.
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
                  src={imageSrc4}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal4}
                />
                
              </div>

              <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                
              <h3 id="Animal Husbandry and Agriculture">
                Animal Husbandry and Agriculture
              </h3>
              <p>
                The relationship between agriculture and animal husbandry was a
                practical necessity and a vital aspect of ancient Bhārata's
                farming practices. Bulls for ploughing, cows for milk and
                manure, and other animals for various agricultural tasks were
                integral to farming. The Kṛṣiparāśara emphasizes the importance
                of maintaining healthy livestock, providing detailed
                instructions on the care and management of cattle. Using
                pañcagavya—a mixture of cow dung, urine, milk, curd, and ghee—as
                a fertilizer and a plant protection agent was another innovative
                practice highlighting the interconnectedness of agriculture and
                animal husbandry in ancient Bhārata.
              </p>
              <p>
                One notable agricultural invention from Vedic times was the
                introduction of the iron plough, or lohapṛṣṭha, as mentioned in
                the Taittirīya Saṁhitā. This tool revolutionized farming
                practices by allowing deeper ploughing, which turned over the
                soil more effectively and brought nutrient-rich layers to the
                surface. The iron plough significantly increased crop yields and
                allowed farmers to cultivate more challenging terrains. This
                innovation marked a significant advancement in ancient Bhārata's
                agricultural techniques, showcasing the early adoption of metal
                tools to enhance farming productivity. The iron plough's impact
                was profound, laying the groundwork for the prosperous
                agricultural systems sustaining civilization for centuries. By
                integrating this agrarian innovation with the advanced practices
                already in place, the ancient Bhāratīya farmers demonstrated
                their ingenuity and resourcefulness, ensuring their methods were
                practical and sustainable.
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

           
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/technology-science/agri_ref.jpg")}
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

export default Agri_2;

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
