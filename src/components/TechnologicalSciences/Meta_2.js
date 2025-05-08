import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/technology-science/meta_p_1.jpg";
import imageSrc2 from "../../assets/technology-science/meta_p_2.jpg";
import imageSrc3 from "../../assets/technology-science/meta_p_3.jpg";
import imageSrc4 from "../../assets/technology-science/meta_p_4.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";


const Meta_2 = () => {
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
        <h1>धातुशास्त्रम् - Metallurgy</h1>

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
                          href="https://archive.org/details/Brihatsamhita"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Brihat Samhita of Varaha Mihira
By Varaha Mihira


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/rasa-ratna-samucchaya-of-vagbhatacharya-shankar-lal-hari-shankar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa Ratna Samucchaya Of Vagbhatacharya Shankar Lal Hari Shankar
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/copy-of-copy-of-text-book-of-rasashasthra"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Text Book Of Rasashasthra
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
                          href="https://archive.org/details/in.ernet.dli.2015.275360/page/n1/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Mining And Metallurgy
By K.t. Shah


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.gov.ignca.9512"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Iron in ancient India
By Neogi, Panchanan


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
            navigate(
              "/Technological_Sciences/Civil_Engineering_Architecture_Content"
            )
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
                          href="#The Vedic Era and Early Metallurgy"
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
                          The Vedic Era and Early Metallurgy
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Zinc Smelting and Distillation"
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
                          Zinc Smelting and Distillation
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Iron and Steel Production"
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
                          Iron and Steel Production
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Alloys and Medicinal Use of Metals"
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
                          Alloys and Medicinal Use of Metals
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Legacy and Influence"
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
                          Legacy and Influence
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
              Metallurgy in ancient Bhārata was both a local affair and a global
              influence that enlightened the world. The subcontinent's rich
              history in metallurgy, dating back to the early Vedic period, was
              unparalleled. The advanced knowledge and techniques used, from the
              extraction and processing of metals to the creation of alloys and
              their diverse applications, made significant contributions that
              reverberated within their society and worldwide.
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
                <br />
                <h3 id="The Vedic Era and Early Metallurgy">
                  The Vedic Era and Early Metallurgy
                </h3>
                <p>
                  The earliest references to metallurgy in Bhārata can be traced
                  back to the Vedas, particularly the Ṛgveda and Atharvaveda.
                  The Ṛgveda mentions the use of Ayas, which could refer to
                  metal, especially iron. The term Ayas was used in various
                  contexts to describe different types of metals, indicating the
                  presence of metallurgy during this period. The Atharvaveda
                  also references black metal (likely iron) and red metal
                  (likely copper), further indicating the advanced knowledge of
                  metallurgy in ancient Bhārata.
                </p>
                <br />
                <h3 id="Zinc Smelting and Distillation">
                  Zinc Smelting and Distillation
                </h3>
                <p>
                  Ancient Bhāratīya metallurgists were also pioneers in the
                  production of zinc. Zinc is a complex metal to smelt because
                  it vaporizes at the temperature required for extraction.
                  However, Bhāratīya metallurgists developed a unique method of
                  downward distillation, as described in the Rasaratnākara by
                  the alchemist Nāgārjuna. This method involved heating zinc ore
                  in a retort with an extended and bent neck, allowing the zinc
                  vapor to condense and solidify. Evidence of extensive zinc
                  production has been found in the Zawar area of Rajasthan,
                  where several ancient furnaces have been excavated.
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
              </div>

              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="Iron and Steel Production">
                  Iron and Steel Production
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  One of the most remarkable achievements of ancient Bhāratīya
                  metallurgy was the production of high-quality iron and steel.
                  The famous Iron Pillar of Delhi, which has withstood corrosion
                  for over 1500 years, is a testimony to the advanced
                  metallurgical skills of ancient Bhāratīyas. This pillar,
                  believed to have been erected during the Gupta period around
                  400–500 AD, is a monument to the corrosion-resistant iron
                  produced by Bhāratīya metallurgists. The 7.32 meters tall and
                  over 6-ton-heavy pillar is a striking example of the
                  durability of ancient Bhāratīya metallurgical products, a feat
                  that continues to astound modern metallurgists. The fact that
                  it has not rusted despite being exposed to the elements for
                  centuries is a testimony to the advanced knowledge and
                  techniques of ancient Bhāratīya metallurgists.
                </p>
                <p>
                  Another significant achievement was the production of
                  high-carbon steel, known as Wootz steel. Wootz steel, produced
                  in southern Bhārata, was highly valued for its durability and
                  sharpness. It was exported to Europe, China, and the Middle
                  East, where it was used to make the legendary Damascus swords.
                  The process involved carburizing wrought iron in a sealed
                  crucible to increase its carbon content, resulting in steel
                  with unique properties, such as its distinctive wave-like
                  patterns and superior strength.
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
                <br />
                <br />
                <h3 id="Alloys and Medicinal Use of Metals">
                  Alloys and Medicinal Use of Metals
                </h3>
                <p>
                  Ancient Bhāratīya metallurgists also excelled in the knowledge
                  of alloy production, demonstrating their impressive skill and
                  precision. Alloys such as bronze (a mixture of copper and tin)
                  and brass (a blend of copper and zinc) were commonly used.
                  Producing these alloys required precise control of the
                  proportions of the constituent metals, a feat that ancient
                  Bhāratīya metallurgists mastered.
                </p>
                <p>
                  Metals were also used in Āyurvedic medicine. Texts like the
                  Rasa Ratna Samuccaya detail use metals such as gold, silver,
                  copper, and mercury in various medicinal preparations. For
                  example, gold was believed to have rejuvenating properties,
                  while copper was used for its antimicrobial effects. The use
                  of metal-based medicines in Āyurveda reflects the deep
                  understanding of metals' properties and their effects on the
                  human body.
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
                <h3 id="Legacy and Influence">Legacy and Influence</h3>
                <p>
                  The influence of ancient Bhāratīya metallurgy extended beyond
                  the subcontinent. Bhāratīya steel and iron were highly sought
                  after, and the techniques developed by Bhāratīya metallurgists
                  influenced metalworking in other parts of the world. The
                  export of Wootz steel created high-quality steel in Europe
                  during the Industrial Revolution. The unique properties of
                  Wootz steel, such as its distinctive wave-like patterns and
                  superior strength, made it highly valued in Europe and the
                  Middle East, to manufacture various sophisticated tools and
                  instruments which required high-quality steel. This export of
                  Wootz steel contributed to developing high-quality steel in
                  Europe and testified to the global influence of ancient
                  Bhāratīya metallurgy.
                </p>
                <p>
                  The legacy of ancient Bhāratīya metallurgy is also evident in
                  the numerous artifacts and structures that have survived. From
                  the Iron Pillar of Delhi to the countless bronze sculptures
                  and tools found in archaeological sites, these relics testify
                  to the skill and ingenuity of ancient Bhāratīya metallurgists.
                  The enduring impact of ancient Bhāratīya metallurgy is also
                  seen in the continued use of metal-based medicines in
                  Āyurveda, which reflects the deep understanding of metals'
                  properties and their effects on the human body. Metallurgy in
                  ancient Bhārata was a highly advanced and sophisticated field.
                  Bhāratīya metallurgists' contributions to producing iron,
                  steel, zinc, and alloys were unparalleled in the ancient
                  world. Their techniques and knowledge shaped the development
                  of metallurgy in Bhārata and continued to inspire and inform
                  modern metallurgical practices, highlighting the enduring
                  impact of this remarkable achievement.
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
              src={require("../../assets/technology-science/meta_ref.jpg")}
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

export default Meta_2;

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
