import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/comp-lang-science/lin_p_1.jpg";
import imageSrc2 from "../../assets/comp-lang-science/lin_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const LIN_2 = () => {
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
        <h1>भाषा-विज्ञानम् - Linguistics</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Computational_Language_Sciences")}
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
                          href="https://archive.org/details/in.ernet.dli.2015.22683"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Ashtadhyayi Of Panini
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/mahabhasya_of_patanjali_surendranath_dasgupta"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Mahabhasya of Patanjali (Ahnikas I-IV)


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.478526"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Nirukta Of Yaska
By Pr. Umashankar Sharma


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
                          href="https://archive.org/details/in.ernet.dli.2015.139567"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         A Study In The Dialectics Of Sphota
By Sastri,gaurinath


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/LinguisticAnalysisAndSomeIndianTraditionsGeorgeCardona"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Linguistic Analysis And Some Indian Traditions George Cardona
By javanesegraviton


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
              "/Computational_Language_Sciences/Semantic_Analysis_Content"
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
                        href="/Computational_Language_Sciences"
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
                        Computational Language Sciences
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
                        href="/Computational_Language_Sciences/Linguistics_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Linguistics
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
                          href="#Vedic Foundations of Linguistics"
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
                          Vedic Foundations of Linguistics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Yāska and the Early Study of Semantics"
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
                          Yāska and the Early Study of Semantics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Pāṇini's Contribution to Grammar"
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
                          Pāṇini's Contribution to Grammar
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Patañjali and the Mahābhāṣya"
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
                          Patañjali and the Mahābhāṣya
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Phonetics and the Prātiśākhya"
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
                          Phonetics and the Prātiśākhya
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Semantic Analysis in the Mīmāṃsā and Nyāya Schools"
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
                          Semantic Analysis in the Mīmāṃsā and Nyāya Schools
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
                        href="/Computational_Language_Sciences/Semantic_Analysis_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Semantic Analysis
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Computational_Language_Sciences/Encryption_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Encryption
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Computational_Language_Sciences/Combinatorics_Mnemonics_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Combinatorics Mnemonics
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
              Linguistics in ancient Bhārat is a subject that has fascinated
              scholars for centuries due to the depth and sophistication of its
              analysis. Unlike in many other ancient cultures, where language
              study primarily served practical needs, it evolved into a profound
              intellectual tradition in Bhārat. This tradition sought to unravel
              the complexities of language, not just as a medium of
              communication but as a fundamental element of human cognition,
              culture, and spirituality. The ancient Bhāratīya scholars, through
              their meticulous study and documentation, laid down some of the
              earliest and most comprehensive frameworks for understanding
              language, many of which continue to influence modern linguistic
              thought.
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
                <br/>
                
                <h3 id="Vedic Foundations of Linguistics">
                  Vedic Foundations of Linguistics
                </h3>
                <p>
                  The roots of Bhāratīya linguistics can be traced back to the
                  Vedic period, one of the earliest phases of Bhāratīya
                  civilization. During this time, language was more than just a
                  tool for communication; it was considered a sacred means to
                  connect with the divine. The Vedas, notably the Ṛgveda,
                  reflect this belief. The Ṛgveda, composed between 1500 and
                  1200 BCE, is a collection of meticulously preserved hymns
                  transmitted orally over generations. This required a precise
                  understanding of phonetics and articulation, as the efficacy
                  of these hymns was believed to depend on their exact
                  pronunciation. The text reveals an early awareness of the
                  significance of intonation, syllable length, and
                  pronunciation, which are essential components of what later
                  became the study of Śikṣā, or phonetics, in Bhāratīya
                  linguistics.
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
                <h3 id="Yāska and the Early Study of Semantics">
                  Yāska and the Early Study of Semantics
                </h3>
                <p>
                  A significant milestone in the history of Bhāratīya
                  linguistics is the work of Yāska around the 7th century BCE.
                  Yāska, who lived 'contribution, the Nirukta, is one of the
                  world's earliest known treatises on etymology and semantics.
                  Nirukta is essentially a commentary on the difficult words of
                  the Vedas, explaining their meanings and origins (Sarup,
                  1920). This work represents the earliest attempt in Bhārat to
                  systematically analyze the semantics of the language, making
                  it a cornerstone of Bhāratīya linguistic tradition. Yāska’s
                  analysis of words and their meanings provided a foundation for
                  subsequent scholars to explore the relationship between words
                  and their referents, a central concern in linguistics.
                </p>

                <h3 id="Pāṇini's Contribution to Grammar">
                Pāṇini's Contribution to Grammar
              </h3>
              <p>
                The most celebrated figure in ancient Bhāratīya linguistics is
                Pāṇini, who lived around the 4th century BCE. Pāṇini's
                Aṣṭādhyāyī work is a comprehensive and highly sophisticated
                treatise on Sanskrit grammar. Comprising nearly 4000 sūtras, or
                aphorisms, the Aṣṭādhyāyī meticulously describes the grammatical
                structure of Sanskrit, covering everything from phonetics to
                syntax. Pāṇini's work is remarkable not only for its
                thoroughness but also for its methodical approach. He employed a
                system of meta-rules and an algebraic notation to describe
                grammatical patterns, a method that has now been followed in
                modern linguistic theories. The Aṣṭādhyāyī is often considered
                one of the most outstanding achievements in linguistics, and its
                influence extends far beyond the Bhāratīya subcontinent.
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

            

            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 id="Patañjali and the Mahābhāṣya">
                Patañjali and the Mahābhāṣya
              </h3>
              <p>
                Following Pāṇini, the tradition of linguistic scholarship was
                carried forward by other eminent scholars, most notably
                Patañjali, who lived in the 2nd century BCE. Patañjali's
                Mahābhāṣya is an extensive commentary on Pāṇini's Aṣṭādhyāyī.
                While primarily a grammatical commentary, the Mahābhāṣya also
                delves into philosophical discussions about language. Patañjali
                asked questions about the nature of meaning, the relationship
                between words and their meanings, and the role of context in
                interpretation. His work highlights the interplay between
                linguistics and philosophy in ancient Bhārat, where language was
                seen as a system of rules and a reflection of deeper cognitive
                and metaphysical realities.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Phonetics and the Prātiśākhya">
                Phonetics and the Prātiśākhya
              </h3>
              <p>
                Phonetics and phonology were also areas of intense study in
                ancient Bhārat, with the development of texts dedicated to the
                precise articulation of sounds. The Prātiśākhyas, composed
                between 700 and 500 BCE, are among the earliest known texts on
                phonetics. These texts provide detailed guidelines on the
                pronunciation of Vedic texts, outlining the rules for phonetic
                changes that occur in different contexts. The Prātiśākhyas are
                invaluable for understanding the phonetic structure of Sanskrit
                and the meticulous care taken by ancient scholars to preserve
                the oral tradition of the Vedas.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Semantic Analysis in the Mīmāṃsā and Nyāya Schools">
                Semantic Analysis in the Mīmāṃsā and Nyāya Schools
              </h3>
              <p>
                The Mīmāṃsā and Nyāya schools of thought further developed the
                study of semantics and the philosophy of language. The Mīmāṃsā
                Sūtras, composed by Jaimini around the 3rd century BCE, focus on
                interpreting Vedic texts and developing a sophisticated theory
                of meaning. The Mīmāṃsā school argued that words have an
                inherent connection to their meanings, a concept that influenced
                later linguistic and philosophical debates. The Nyāya Sūtras,
                attributed to sage Gautama and dating to the 2nd century BCE,
                also contributed to language study. The Nyāya school, primarily
                concerned with logic and epistemology, explored the logical
                structure of language, the process of inference and the
                relationship between language and reality.
              </p>
              <p>
                In conclusion, linguistics in ancient Bharat was highly
                developed, with scholars making significant contributions to
                language study. Their work encompassed phonetics, grammar,
                semantics, and the philosophy of language, creating a rich
                intellectual tradition that continues to resonate also in modern
                linguistic theory. The ancient Bharatıya scholars laid the
                foundations for studying linguistics in Bharat. They made
                lasting contributions to global linguistic thought, influencing
                subsequent generations of scholars within and beyond the
                Bharatıya subcontinent.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/comp-lang-science/lin_ref.jpg")}
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

export default LIN_2;

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
