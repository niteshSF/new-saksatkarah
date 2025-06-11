import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/ee-sciences/ee_p_1.jpg";
import imageSrc2 from "../../assets/ee-sciences/ee_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const EE_2 = () => {
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
        <h1>पयावरण-विज्ञानम् - Environment & Ecology</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Earth_Environmental_Sciences")}
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
                          href="https://archive.org/details/in.ernet.dli.2015.45856/page/n13/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Matsya Puranam
By Basu, B. D., Ed.


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
                          href="https://archive.org/details/puranicencyclopa00maniuoft/page/6/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Puranic encyclopaedia : a comprehensive dictionary with special reference to the epic and Puranic literature
By Mani, Vettam


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dharmaandecologyofhinducommunitiessustenanceandsustainabilitypankajjain_241_A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Dharma And Ecology Of Hindu Communities, Sustenance And Sustainability Pankaj Jain
By Mahesha Chanda


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
            navigate("/Earth_Environmental_Sciences/Forestry_Content")
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
                        href="/Earth_Environmental_Sciences"
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
                        Earth & Environmental Sciences
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
                        href="/Earth_Environmental_Sciences/Geology_Geography_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Geology & Geography
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Earth_Environmental_Sciences/Ecology_Environment_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Ecology & Environment
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
                          href="#The Vedic Perspective on Nature"
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
                          The Vedic Perspective on Nature
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Ecological Balance in Ancient Bhāratīya Practices"
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
                          Ecological Balance in Ancient Bhāratīya Practices
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Ancient Bhāratīya Views on Water Conservation"
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
                          Ancient Bhāratīya Views on Water Conservation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sustainable Living and the Concept of Dharma"
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
                          Sustainable Living and the Concept of Dharma
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Connection Between Ecology and Spirituality"
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
                          Connection Between Ecology and Spirituality
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
                        href="/Earth_Environmental_Sciences/Forestry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Forestry
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
              Ancient Bhārat's profound respect for nature, deeply rooted in its
              philosophical and spiritual traditions, is a thread that connects
              us to our rich cultural heritage. As reflected in the Vedas and
              Upaniṣads, this reverence emphasizes a harmonious relationship
              with the environment, providing timeless wisdom that remains
              relevant today.
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
                <h3 id="The Vedic Perspective on Nature">
                  The Vedic Perspective on Nature
                </h3>
                <p>
                  The Vedas consistently express a deep reverence for nature,
                  viewing the environment as an interconnected system where
                  every element plays a vital role. The Ṛgveda, one of the
                  oldest texts in the world, contains the Santimantra, which
                  invokes peace in the sky (dyauh), atmosphere (antarikṣa),
                  earth (pṛthivī), waters (apah), plants (osadhayah), and all
                  living beings. This mantra underscores the belief in the unity
                  of all life forms, making us feel connected and part of a
                  larger whole.
                </p>
                <p>
                  The concept of the Pañca Mahābhūtas, or the five outstanding
                  elements—earth (pṛthvī), water (jala), fire (agni), air
                  (vāyu), and space (ākāśa)—is central to the Vedic worldview.
                  These elements are considered the universe's fundamental
                  building blocks, and any imbalance among them was believed to
                  lead to environmental and societal disturbances. The Chāndogya
                  Upaniṣad elaborates on this by stating that everything in the
                  universe, including human beings, is composed of these
                  elements, and their harmony is crucial for sustaining life.
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
                <h3 id="Ecological Balance in Ancient Bhāratīya Practices">
                  Ecological Balance in Ancient Bhāratīya Practices
                </h3>
                <p>
                  Ancient Bhāratīya rituals were closely tied to the environment
                  and often aimed at maintaining ecological balance. The ritual
                  of Yajña, which involves offerings to the fire accompanied by
                  sacred chants, was believed to purify the atmosphere. The
                  Chāndogya Upaniṣad highlights that yajña purifies not only the
                  air but also contributes to the overall harmony of the natural
                  world. Trees, rivers, and animals were revered, and their
                  protection was considered a sacred duty, instilling a sense of
                  responsibility and commitment in us.
                </p>
                <p>
                  One of the most significant practices was the Agnihotra, a
                  Vedic ritual performed at sunrise and sunset. This ritual was
                  believed to purify the atmosphere, reduce pollutants, and
                  enhance air quality. The fire used in Agnihotra was thought to
                  generate subtle energies that positively impacted the
                  surrounding environment, promoting ecological balance. Today,
                  the practice is still performed in some parts of Bhārat,
                  highlighting its enduring relevance.
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
              <h3 id="Ancient Bhāratīya Views on Water Conservation">
                Ancient Bhāratīya Views on Water Conservation
              </h3>
              <p>
                Water, or Apah, is revered in the Vedic texts as the sustainer
                of life. The Taittirīya Saṃhitā describes the hydrological
                cycle, detailing how water rises from the earth to the sky,
                forms clouds, and returns as rain to sustain life. This
                understanding underscores the importance of water conservation
                in maintaining ecological balance. The Atharvaveda contains
                prayers for protecting waterways, acknowledging their role in
                sustaining life and ensuring the land's fertility.
              </p>
              <p>
                The sacred rivers of Bhārat, such as the Gaṅgā, Yamunā, and
                Sarasvatī, were vital for physical sustenance and central to
                spiritual practices. Rituals performed at these rivers, such as
                ablutions and offerings, were intended to keep the waters pure
                and potent. Water bodies were considered the lifeblood of the
                environment, and their preservation was critical for the land's
                prosperity.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Sustainable Living and the Concept of Dharma">
                Sustainable Living and the Concept of Dharma
              </h3>
              <p>
                Dharma, or righteous living, was central to the ancient
                Bhāratīya, emphasizing harmony with nature and the judicious use
                of resources. The Iśopaniṣad teaches that while humans have the
                right to use nature's resources, they must do so with restraint,
                with a spirit of renunciation and sacrifice, taking only what is
                necessary and leaving the rest for other beings. This principle
                of moderation is a timeless reminder of the importance of
                sustainable resource management.
              </p>
              <p>
                The Yajurveda advocates for sustainable living, urging people to
                consume resources in moderation and renunciation. The verse
                “tena tyaktena bhuñjīthah” (enjoy with renunciation) from the
                Yajurveda (Śukla Yajurveda, 40.1) encapsulates this idea,
                promoting a balanced approach to consumption that ensures the
                well-being of future generations.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Connection Between Ecology and Spirituality">
                Connection Between Ecology and Spirituality
              </h3>
              <p>
                The Bhagavad Gītā further underscores ancient Bhārat's deep
                connection between ecology and spirituality. Lord Kṛṣṇa's
                discourse on the cosmic order that governs the universe
                emphasizes the need for humans to live in harmony with this
                order, which includes respecting nature and maintaining the
                balance of the environment (Bhagavad Gītā, 3.14-16). Spiritual
                practices are incomplete without a commitment to environmental
                stewardship.
              </p>
              <p>
                The Vedas and Upaniṣads remain relevant today with their
                timeless wisdom on sustainable living and environmental care. We
                can draw on their guidance to tackle our ecological challenges
                by revisiting these ancient practices. The emphasis on balance
                and respect for nature in ancient Bhārat remains crucial for a
                sustainable future.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/ee-sciences/ee_ref.jpg")}
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

export default EE_2;

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
