import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/technology-science/wm_p_1.jpg";
import imageSrc2 from "../../assets/technology-science/wm_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const WM_2 = () => {
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

  return (
    <div>
      <div className="head-section">
        <h1>जल-निर्वाहशास्त्रम् - Water Management</h1>

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
                          href="https://archive.org/details/hydrologic-knowledge-in-ancient-india-final"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Hydrologic Knowledge In Ancient India Final
By National Institute of Hydrology (NIH)


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.513990/page/n3/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Lectures On The Ancient System Of Irrigation In Bengal
By Willcocks, William, Sir


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/irrigationworks00buckgoog/page/n12/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Irrigation Works of India
By Robert Burton Buckley




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
          onClick={() => navigate("/Technological_Sciences/Metallurgy_Content")}
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
                          href="#The Vedic Perspective on Water"
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
                          The Vedic Perspective on Water
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Ingenious Stepwells: Vāv and Baoli"
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
                          The Ingenious Stepwells: Vāv and Baoli
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Tank Irrigation Systems: Sustainability at Its Best"
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
                          Tank Irrigation Systems: Sustainability at Its Best
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Kallaṇai Dam: An Ancient Marvel"
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
                          The Kallaṇai Dam: An Ancient Marvel
                        </a>
                      </li>

                      
                      <li>
                        <a
                          href="#The Ghats of Vārāṇasī: Sacred Water Management"
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
                          The Ghats of Vārāṇasī: Sacred Water Management
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Modern Relevance of Ancient Practices"
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
                          Modern Relevance of Ancient Practices
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
              Water management in ancient Bhārat was a remarkable blend of
              ingenuity, sustainability, and a deep respect for natural
              resources, deeply rooted in the spiritual fabric of the society.
              The ancient Bhāratīyas understood that water was a vital resource
              for survival and a sacred element that needed to be conserved and
              managed wisely. Their innovations in water management, guided by
              spiritual beliefs, have left a legacy that continues to inspire
              modern engineers and environmentalists.
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
                <h3 id="The Vedic Perspective on Water">
                  The Vedic Perspective on Water
                </h3>
                <p>
                  In Vedic literature, water (Āpah) is considered one of the
                  fundamental elements of life and is revered for its purifying
                  and life-sustaining properties. The Ṛgveda frequently mentions
                  the significance of water, with hymns dedicated to the deities
                  of rivers and rain, reflecting the deep connection between
                  water and spirituality in ancient Bhārat. The Taittirīya
                  Saṃhitā outlines the hydrological cycle, describing how water
                  rises from the earth to the sky, forms clouds, and returns as
                  rain, sustaining life on earth. This understanding underscores
                  the importance of water conservation and the need to maintain
                  ecological balance.
                </p>

                <h3 id="The Ingenious Stepwells: Vāv and Baoli">
                  The Ingenious Stepwells: Vāv and Baoli
                </h3>
                <p>
                  Stepwells, or Vāv in Gujarati and Baoli in Hindi, are some of
                  the most ingenious water management techniques developed in
                  ancient Bhārat. These structures, designed to access and store
                  groundwater, were particularly prevalent in the arid regions
                  of Gujarat and Rajasthan. Stepwells were functional and also
                  served as social and cultural hubs where people gathered for
                  various rituals and ceremonies.
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
                <h3 id="Tank Irrigation Systems: Sustainability at Its Best">
                  Tank Irrigation Systems: Sustainability at Its Best
                </h3>
                <p>
                  Tank irrigation systems were another significant aspect of
                  water management in ancient Bhārat. These systems involved
                  constructing large tanks or reservoirs to collect and store
                  rainwater for irrigation during dry periods. Tank irrigation
                  was widespread in southern Bhārat, particularly in Karnataka
                  and Tamil Nadu.
                </p>
                <p>
                  One remarkable example is the Ananta Sāgara tank, built during
                  the reign of the Chola dynasty. With its carefully constructed
                  bunds and sluice gates, this massive tank could store vast
                  amounts of water, ensuring a reliable supply for agricultural
                  purposes. The tank was connected to a network of smaller tanks
                  and canals, creating an efficient and sustainable irrigation
                  system that supported the local economy and ensured food
                  security.
                </p>
                <p>
                  In the eighteenth century, the old Mysore state, with an area
                  of around 29,500 square miles, had more than 38,000 tanks,
                  known as Keres. Referring to these, Major Sankey, one of the
                  first British engineers of the erstwhile Mysore state, noted:
                </p>
                <p>
                  "To such an extent has the principle of storage been followed
                  that it would now require some ingenuity to discover a site
                  within this great area suitable for a new tank. While
                  restorations are of course feasible, any absolutely new work
                  of this description would, within this area, be almost
                  certainly found to cut off the supply of another lower down
                  the same basin."
                </p>
                <p>
                  The construction of these tanks involved sophisticated
                  engineering techniques, including the precise calculation of
                  catchment areas, the design of spillways to prevent overflow,
                  and the construction of embankments to withstand the pressure
                  of stored water. The success of these systems was not just in
                  their design but also in their management, which involved the
                  local community in maintaining and distributing water
                  resources equitably.
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
              <h3 id="The Kallaṇai Dam: An Ancient Marvel">
                The Kallaṇai Dam: An Ancient Marvel
              </h3>
              <p>
                The Kallaṇai Dam, built by the Chola King Karikala around the
                2nd century CE, is one of the oldest and most enduring examples
                of hydraulic engineering in Bhārat. Located on the Kaveri river
                in Tamil Nadu, this dam was constructed to divert water for
                irrigation, ensuring a stable food supply for the region. Built
                from massive stone blocks, the dam is still in use today — a
                testimony to the durability and effectiveness of ancient
                Bhāratīya engineering.
              </p>
              <p>
                The Kallaṇai Dam's design is particularly noteworthy for its use
                of natural materials and its ability to manage water flow
                without causing significant environmental disruption. The
                construction involved carefully placing large stones to create a
                barrier that redirected the river's flow into canals, irrigating
                the surrounding agricultural lands. This method reflects the
                ancient Bhāratīya engineers' deep understanding of the natural
                environment and their ability to work harmoniously with it.
              </p>
            </div>

            
            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Ghats of Vārāṇasī: Sacred Water Management">
                The Ghats of Vārāṇasī: Sacred Water Management
              </h3>
              <p>
                The ghats of Vārāṇasī, the ancient city on the banks of the
                Gaṅgā river, are another example of water management deeply
                intertwined with spirituality. The ghats, a series of steps
                leading down to the river, were constructed not only for access
                to water for daily use but also for religious rituals, including
                bathing, cremation, and offerings to the river goddess.
              </p>
              <p>
                The ghats' design and construction reflect the Gaṅgā’s
                importance in Hindu culture, where the river is considered a
                living deity. The ghats were engineered to withstand the river's
                seasonal fluctuations, ensuring they remained functional
                throughout the year. The most famous of these is the
                Daśāśvamedha Ghat, where it is believed that Lord Brahmā
                performed a great sacrifice, and the Maṇikarṇikā Ghat, one of
                the most sacred places for cremation in Hindu tradition.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Modern Relevance of Ancient Practices">
                Modern Relevance of Ancient Practices
              </h3>
              <p>
                The water management practices of ancient Bhārat offer valuable
                lessons for today's environmental challenges. The sustainability
                principles, community involvement, and respect for natural
                resources that underpinned these ancient systems are incredibly
                relevant even now. Modern engineers and policymakers can learn
                from these innovative approaches to create systems that are
                effective and harmonious with nature, offering insights into
                potential solutions for today’s environmental issues.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/technology-science/wm_ref.jpg")}
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

export default WM_2;

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
