import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/yc-sciences/psy_p_1.jpg";
import imageSrc2 from "../../assets/yc-sciences/psy_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Psy_2 = () => {
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
        <h1>
          {" "}
          मनोविज्ञानं तथा मन्त्राणां प्रभावः - Psychology & Effect of Mantras
        </h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Yoga_Cognitive_Sciences")}
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
                          href="https://archive.org/details/MandukyaUpanishadKarikaWithShankaraBhashya-SwamiNikhilananda"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Mandukya Upanishad & Karika with Shankara Bhashya - Swami Nikhilananda
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/IeDs_the-sharada-tilaka-tantram-with-notes-and-translations-by-many-scholars-shri-gar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Sharada Tilaka Tantram With Notes And Translations By Many Scholars ( Shri Garib Das Oriental Series) Shri Satguru Publications, Delhi
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
                          href="https://archive.org/details/HinduPsychologySoureBookOfAncientIndianPsychologyKuppuswamyB"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Hindu Psychology Soure Book Of Ancient Indian Psychology Kuppuswamy B.
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/super-science-of-gayatri-pandit-shriram-sharma-acharya"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Super Science Of Gayatri | How to Do Gayatri Mantra Jap & Sadhana by Pandit Shriram Sharma Acharya
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
                        href="/Yoga_Cognitive_Sciences"
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
                        Yoga & Cognitive Sciences
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
                        href="/Yoga_Cognitive_Sciences/Yoga_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Yoga
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Yoga_Cognitive_Sciences/Cognitive_Sciences_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Cognitive Sciences
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Yoga_Cognitive_Sciences/Psychology_Mantras_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Psychology & Effect of Mantras
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
                          href="#The Nature of Mantras and Their Psychological Significance"
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
                          The Nature of Mantras and Their Psychological
                          Significance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Science of Sound and Cognitive Transformation"
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
                          The Science of Sound and Cognitive Transformation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Power of the Gāyatrī Mantra"
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
                          The Power of the Gāyatrī Mantra
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Mantras and Mental Health: Ancient Practices and Modern Relevance"
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
                          Mantras and Mental Health: Ancient Practices and
                          Modern Relevance
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Role of Mantras in Enhancing Cognitive Function"
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
                          The Role of Mantras in Enhancing Cognitive Function
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
              In ancient Bharat, the profound understanding of sound's power and
              its impact on the human psyche was deeply ingrained in the fabric
              of daily life. The chanting of mantras, sacred sounds, or
              syllables was believed to influence the mind, body, and spirit.
              The psychological and spiritual effects of mantras are profound,
              and their practice is rooted in a tradition that goes back
              thousands of years. This understanding of sound's power reflects
              the advanced knowledge of psychology in ancient Bharat, where the
              mind was seen as a powerful tool that could be harnessed and
              transformed through focused intention and sound.
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
                <h3 id="The Nature of Mantras and Their Psychological Significance">
                  The Nature of Mantras and Their Psychological Significance
                </h3>
                <p>
                  Mantras are considered to be more than words; they are
                  vibrational sounds that resonate with specific frequencies,
                  aligning the mind and body with higher states of
                  consciousness. The ancient texts, including the Vedas and
                  Upanisads, describe mantras as tools for mental focus,
                  spiritual growth, and healing. The Gayatrī Mantra, one of the
                  most revered in Hindu tradition, is said to have the power to
                  purify the mind and awaken the intellect. The chanting of this
                  mantra is believed to bring clarity and wisdom, demonstrating
                  the ancient understanding of how sound can influence cognitive
                  processes.
                </p>
                <p>
                  The psychological effects of mantras are closely tied to the
                  concept of Nāda Brahman, the idea that the universe is created
                  from sound. This belief underscores the importance of sound in
                  shaping reality and consciousness. The rhythmic chanting of
                  mantras is thought to regulate the breath and calm the mind,
                  leading to a state of dhyāna (meditation). This practice
                  aligns the conscious mind with the subconscious, facilitating
                  deep psychological and spiritual healing.
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
                <h3 id="The Science of Sound and Cognitive Transformation">
                  The Science of Sound and Cognitive Transformation
                </h3>
                <p>
                  The ancient ṛṣis of Bharat recognized that sound, mainly when
                  structured as mantras, could alter mental states and emotional
                  responses. Repeating mantras is believed to create neural
                  pathways that enhance focus, reduce stress, and promote
                  overall mental well-being. Modern neuroscience has begun to
                  explore these effects, revealing that sound's rhythmic
                  repetition can alter brainwave patterns, leading to relaxation
                  and heightened awareness. A fascinating aspect of mantra
                  chanting that is now being delved into, is its ability to
                  synchronize the left and right hemispheres of the brain,
                  promoting a balanced and integrated thought process.
                </p>

                <h3 id="The Power of the Gāyatrī Mantra">
                The Power of the Gāyatrī Mantra
              </h3>
              <p>
                One of the most celebrated stories illustrating the power of
                mantras comes from the life of Sage Viśvāmitra, the revered ṛṣi
                who is credited with revealing the Gayatrī Mantra to the world.
                According to the legend, Viśvāmitra, through intense meditation
                and chanting of the Gayatrī, was able to transcend the
                limitations of the physical world and attain profound spiritual
                insight. This mantra became well-known as a powerful tool for
                self-realization and was incorporated into the daily rituals of
                countless devotees across Bhārata. The story of Viśvāmitra
                underscores the belief that mantras, when chanted with pure
                intention and focus, can lead to astonishing mental and
                spiritual transformation.
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
              <h3 id="Mantras and Mental Health: Ancient Practices and Modern Relevance">
                Mantras and Mental Health: Ancient Practices and Modern
                Relevance
              </h3>
              <p>
                The use of mantras as a therapeutic tool in ancient Bharat is
                well-documented in texts like the Atharvaveda, which contains
                numerous hymns and chants for healing. These mantras were
                believed to cleanse the mind of negative thoughts and emotions,
                restore balance, and promote mental clarity. The practice of
                chanting mantras was prescribed for those suffering from
                anxiety, depression, or other mental disturbances, reflecting an
                advanced understanding of the link between sound, thought, and
                emotional well-being.
              </p>
              <p>
                In modern times, the therapeutic potential of mantras is gaining
                recognition in psychology and mental health. The repetitive
                nature of mantra chanting has been shown to reduce symptoms of
                anxiety and depression, lower blood pressure, and improve
                overall mental resilience. This alignment with ancient practices
                highlights the timeless relevance of mantras in promoting
                psychological well-being, offering hope and reassurance to those
                seeking effective mental health solutions.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Role of Mantras in Enhancing Cognitive Function">
                The Role of Mantras in Enhancing Cognitive Function
              </h3>
              <p>
                Mantras were not only used for spiritual purposes but also for
                enhancing cognitive abilities. The Vedic tradition emphasizes
                the role of sound in developing memory, concentration, and
                intellectual acuity. The recitation of mantras, especially
                during the early morning hours, was believed to sharpen the
                intellect and improve learning abilities. This practice was
                particularly emphasized in educating young students, who were
                taught to chant mantras to enhance their cognitive functions and
                retain knowledge more effectively.
              </p>
              <p>
                The concept of Japa, the repetition of a mantra, is another
                example of how ancient Bharat understood the connection between
                sound and cognitive enhancement. By repeating a mantra, the
                practitioner trains the mind to focus, reducing mental
                distractions and increasing the ability to concentrate. This
                practice not only aids in spiritual growth but also has
                practical applications in improving mental clarity and cognitive
                performance, empowering individuals with the knowledge of how to
                enhance their cognitive abilities.
              </p>
              
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/yc-sciences/psy_ref.jpg")}
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

export default Psy_2;

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
