import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/physical-sciences/phy_p_1.jpg";
import imageSrc2 from "../../assets/physical-sciences/phy_p_2.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Phy_2 = () => {
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

  return (
    <div>
      <div className="head-section">
        <h1>भौतशास्त्रम् - Physics</h1>

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
                    <span className="ml-2">▶</span>
                  </button>
                  {activeSubmenu === "primary" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="https://ia800101.us.archive.org/12/items/thevaiasesikasut00kanauoft/thevaiasesikasut00kanauoft.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Vaisesika sutras of Kanada. Translated by Nandalal Sinha
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.282415/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                        The Vaisesika Philosophy 1917 by London Royal Asiatic Society
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
                    <span className="ml-2">▶</span>
                  </button>
                  {activeSubmenu === "secondary" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.201767/page/n1/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Nyaya Theory Of Knowledge
                          By S C Chatterjee
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/thephysicsofvaisheshika"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Physics of Vaiśeṣika by Dr. C.S.R. Prabhu (2014)
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.139727"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Philosophy Of Nyaya Vaisesika 
                          By Shastri,nath
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
          onClick={() => navigate("/Physical_Sciences/Chemistry_Content")}
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
                          href="#Atomic Theory: The Concept of Paramāṇu"
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
                          Atomic Theory: The Concept of Paramāṇu{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sāṅkhya and Vaiśeṣika: Schools of Thought"
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
                          Sāṅkhya and Vaiśeṣika: Schools of Thought{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sāpekṣavāda: Early Ideas of Relativity and Interconnectedness"
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
                          Sāpekṣavāda: Early Ideas of Relativity and
                          Interconnectedness
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Influence on the West"
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
                          The Influence on the West
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Cosmology and the Nature of Motion"
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
                          Cosmology and the Nature of Motion
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Gravity and Elasticity"
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
                          Gravity and Elasticity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sound"
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
                          Sound
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
              Ancient Bharat was a land of profound wisdom, where science and
              philosophy entwined seamlessly. Among the various fields, the
              study of physics, known as bhautavidyā, revealed astonishing
              insights that are as sophisticated as some of the modern
              scientific discoveries. The ancient ṛṣis and scholars, with their
              unwavering pioneering spirit and dedication to knowledge, explored
              the material world and ventured into understanding the invisible
              forces that govern the universe.
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
                <h3 id="Atomic Theory: The Concept of Paramāṇu">
                  Atomic Theory: The Concept of Paramāṇu
                </h3>
                <p>
                  Before the West contemplated atomic theory, Bhāratīya sages
                  around 600 BCE already spoke of paramāṇu—the smallest,
                  indivisible unit of matter. Derived from parama (ultimate) and
                  aṇu (atom), this concept laid the groundwork for understanding
                  atomic theories. The idea that everything is made up of tiny
                  particles that could not be further divided was
                  groundbreaking. Even more fascinating is the suggestion that
                  these particles held within them immense energy, foreshadowing
                  the modern understanding of atomic energy.
                </p>
                <br />
                <h3 id="Sāṅkhya and Vaiśeṣika: Schools of Thought">
                  Sāṅkhya and Vaiśeṣika: Schools of Thought
                </h3>
                <p>
                  The Sāṅkhya and Vaiśeṣika schools, emerging around the 6th and
                  5th centuries BCE, were pivotal in advancing the study of
                  light and atomic particles. Kaṇāda, a prominent philosopher,
                  detailed how atoms (paramāṇus) combine to form matter and how
                  different reactions occur under various conditions—ideas that
                  pervade modern chemistry. He even discussed how heat could
                  cause changes in matter, like fruit ripening, which aligns
                  closely with contemporary chemical explanations. This was an
                  impressively early scientific approach, long before the advent
                  of modern laboratories, demonstrating their foresight and
                  understanding.
                </p>
              </div>
              <div style={{ flex: "0.5", minWidth: "300px", textAlign: "left" }}>
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
                <h3 id="Sāpekṣavāda: Early Ideas of Relativity and Interconnectedness">
                  Sāpekṣavāda: Early Ideas of Relativity and Interconnectedness
                </h3>
                <p>
                  The concept of relativity was not new to ancient Bhāratīya
                  philosophers. Sāpekṣavāda, or the theory of relativity,
                  suggested that an object's properties and behaviour depend on
                  its surroundings and conditions. This was a remarkable
                  insight, considering that Einstein's theory of relativity came
                  thousands of years later. Ancient thinkers understood that
                  nothing exists in isolation; everything is interconnected – a
                  notion that continues to be central to modern bhautavidyā and
                  philosophy, fostering a sense of unity with their profound
                  understanding.
                </p>
                <br />
                <h3 id="The Influence on the West">
                  The Influence on the West
                </h3>
                <p>
                  Bhāratīya ideas did not stay confined to Bharat. Greek
                  philosophers likely encountered these concepts after Alexander
                  the Great's invasion in 330 BCE. The sudden appearance of
                  atomic theory in Greek philosophy suggests that Bhāratīya
                  wisdom may have shaped Western thought. This exchange of ideas
                  across cultures is a testimony to the universality of
                  transmission of knowledge.
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
              <h3 id="Cosmology and the Nature of Motion">
                Cosmology and the Nature of Motion
              </h3>
              <p>
                Ancient Bhāratīya cosmology presented a dynamic universe where
                everything undergoes cycles of creation and destruction, except
                for the divine. This holistic view was categorized into
                ādhyātmika (spiritual), ādhidaivika (divine), and ādhibhautika
                (physical). The concept of motion was central, as described in
                the Vaiśeṣika Sūtra, which explained how objects move, interact,
                and change states. For instance, the text noted that objects
                move upward due to external effort and described how a compass
                needle points north due to invisible forces (Vaiśeṣika Sūtra).
                This reflects a sophisticated understanding of forces and
                principles of mechanics in bhautavidyā.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Gravity and Elasticity">Gravity and Elasticity</h3>
              <p>
                Bhāratīya texts also delved into heaviness, known as gurutva,
                and elasticity, or sthitisthāpakatā. The idea of mass as an
                inherent property of matter, causing objects to fall to the
                earth which attracts them, is a remarkable anticipation of later
                ideas of gravitation. Similarly, elasticity—an object's ability
                to return to its original shape after deformation—was discussed
                long before it became a staple in modern bhautavidyā.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Sound">Sound</h3>
              <p>
                One intriguing concept from ancient Bhāratīya bhautavidyā is the
                idea of śabda, or sound, as a form of energy that can influence
                matter. According to the Nāṭyaśāstra and other texts, sound
                vibrations were believed to shape the material world, aligning
                with modern sound waves and resonance ideas. The story of sage
                Viśvāmitra, who harnessed the power of sacred sounds (mantras)
                to create a parallel universe, illustrates the profound
                understanding of sound as a potent force. This highlights how
                ancient Bhāratīya exploration into reality saw sound as a
                fundamental force shaping existence.
              </p>
              <p>
                The scientific achievements of ancient Bharat are not just
                evidence of the intellectual brilliance of its scholars but also
                a living legacy that continues to shape our understanding of the
                world. From atomic theory to early concepts of relativity and
                inter-connectedness, these contributions laid the foundation for
                many scientific principles. The insights of Bhāratīya
                philosophers left a legacy that inspires scientists today,
                reminding us of the enduring significance of ancient Bharat’s
                wisdom.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/physical-sciences/phy_ref.jpg")}
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

export default Phy_2;

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
