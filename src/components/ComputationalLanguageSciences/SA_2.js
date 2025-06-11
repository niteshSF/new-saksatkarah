import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/comp-lang-science/sa_p_1.jpg";
import imageSrc2 from "../../assets/comp-lang-science/sa_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const SA_2 = () => {
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
        <h1>शब्दार्थ-विश्लेषणम् - Semantic Analysis</h1>

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
                          href="https://archive.org/details/Vakyapadiya/page/n15/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Vakyapadiya
By Bhartrihari


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/vqlK_vaiyakarana-siddhanta-kaumudi-purvardha-with-tattva-bodhini-bala-manorama-commen"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                       Vaiyakarana Siddhanta Kaumudi Purvardha With Tattva Bodhini, Bala Manorama Commentaries Ed. By Pt. Guru Prasad Shastri Kashi 1940 Rajasthan Sanskrit College
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
                          href="https://archive.org/details/Kalasamuddesa?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Kālasamuddeśa of Bhartṛhari's Vākyapadīya (together with Helārāja's commentary translated from the Sanskrit for the first time)
By Peri Sarveswara Sharma


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/kunjunni_raja_indian_theories_of_meaning/page/n5/mode/2up?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Indian theories of meaning
By Adyar Library


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
            navigate("/Computational_Language_Sciences/Encryption_Content")
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
                          href="#The Vedas and the Birth of Semantic Inquiry"
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
                          The Vedas and the Birth of Semantic Inquiry
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Pāṇini’s Aṣṭādhyāyī: A Masterpiece of Linguistic Precision"
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
                          Pāṇini’s Aṣṭādhyāyī: A Masterpiece of Linguistic
                          Precision
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Semantic Analysis in the Darśanas"
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
                          Semantic Analysis in the Darśanas
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Story: The Semantic Power of Mantras"
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
                          Story: The Semantic Power of Mantras
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Legacy of Semantic Analysis in Modern Times"
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
                          The Legacy of Semantic Analysis in Modern Times
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
              In the rich and diverse milieu of ancient Bharat, language was not
              merely a tool for communication but a potent instrument for
              comprehending the world, the self, and the divine. The ancient
              scholars of Bharat, with their profound exploration of language,
              established the groundwork for the modern discipline of semantic
              analysis—a unique branch of linguistics that delves into the
              essence of meaning.
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
                <h3 id="The Vedas and the Birth of Semantic Inquiry">
                  The Vedas and the Birth of Semantic Inquiry
                </h3>
                <p>
                  The Vedic texts, among the oldest known scriptures in human
                  history, are a treasure trove of linguistic insights. The
                  Ṛgveda, composed over 3000 years ago, is a collection of hymns
                  and a profound exploration of sound, meaning, and the power of
                  words. The ancient ṛṣis (sages) who composed these texts were
                  acutely aware of the significance of language in shaping human
                  consciousness. They believed that the universe was born from
                  sound—Nāda Brahman—and that words, when used with precision
                  and intention, could influence the fabric of reality.
                </p>
                <p>
                  In the Vedic tradition, the concept of Śabda (sound) is
                  central to understanding the relationship between language and
                  meaning. The Prātiśākhyas and Nirukta, ancient treatises on
                  phonetics and etymology, respectively, delve into the nuances
                  of how words carry meaning and how their correct pronunciation
                  and usage are essential for conveying the intended message.
                  The Nirukta of Yāska is one of the earliest known works
                  dedicated to semantics, systematically analyzing the meanings
                  of Vedic words and their contexts.
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
                <h3 id="Pāṇini’s Aṣṭādhyāyī: A Masterpiece of Linguistic Precision">
                  Pāṇini’s Aṣṭādhyāyī: A Masterpiece of Linguistic Precision
                </h3>
                <p>
                  One of the most remarkable contributions to the field of
                  linguistics from ancient Bharat is Pāṇini’s Aṣṭādhyāyī, a
                  comprehensive treatise on Sanskrit grammar. Composed around
                  the 5th century BCE, this work is a grammatical compendium and
                  a profound exploration of semantics and syntax. Pāṇini’s
                  Aṣṭādhyāyī meticulously categorizes words and their meanings,
                  providing rules for their usage in different contexts. His
                  work is a testimony to the precision and dedication with which
                  ancient Bhāratīya scholars approached language, and its
                  legacy.
                </p>
                <p>
                  The concept of sphoṭa found frequently in grammatical texts,
                  the idea that meaning is not conveyed by individual phonemes
                  but by the overall structure of a word or sentence, is a
                  significant contribution to semantic theory. This concept
                  highlights the ancient understanding that language is more
                  than just a collection of sounds; it is a dynamic system where
                  meaning emerges from word relationships. The sphoṭa theory,
                  which suggests that meaning is perceived in a flash, has also
                  been adopted in modern cognitive linguistics, where the
                  holistic processing of language is emphasized.
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

            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 id="Semantic Analysis in the Darśanas">
                Semantic Analysis in the Darśanas
              </h3>
              <p>
                The ancient Bhāratīya philosophical systems, known as Darśanas,
                also significantly contributed to semantic analysis. The Nyāya
                and Mīmāṃsā schools, in particular, developed intricate theories
                of meaning, reference, and interpretation. The Nyāya Sūtras of
                Gautama, a foundational text of the Nyāya school, discusses the
                relationship between words, objects, and meaning. It explores
                how words refer to objects in the world and how meaning is
                derived through cognition. The Mīmāṃsā school, which is focused
                on interpreting the Vedic texts, developed a sophisticated
                theory of śabda as a means of knowledge. Mīmāṃsā scholars argued
                that the Vedas are eternal and infallible, and their words carry
                intrinsic meaning. This led to hermeneutics, or the theory of
                interpretation, within the Bhāratīya tradition. The Mīmāṃsā
                scholars meticulously analyzed the semantics of Vedic
                injunctions, exploring how different word combinations and
                sentence structures could alter the meaning of a text.
              </p>
            </div>
            <br />

            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 id="Story: The Semantic Power of Mantras">
                Story: The Semantic Power of Mantras
              </h3>
              <p>
                A well-known story from the Mahābhārata illustrates the
                transformative power of words. During the great battle of
                Kurukṣetra, Arjuna hesitates to fight, overwhelmed by the moral
                dilemma of battling his kin. Lord Kṛṣṇa, his charioteer, then
                delivers the Bhagavad Gītā, a text rich with semantic layers and
                meanings. Each verse of the Gītā is a nuanced exploration of
                duty, righteousness, and the nature of the self. The words
                spoken by Kṛṣṇa are not just instructions but are imbued with
                deep philosophical meanings that transform Arjuna’s
                understanding and resolve. This story underscores the ancient
                belief in the power of language to convey complex and
                transformative ideas.
              </p>
              <p>
                The Bhagavad Gītā is an excellent example of how semantic
                analysis was applied in ancient Bharat, where the choice of
                words, their order, and their deeper meanings were carefully
                considered to convey profound truths.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Legacy of Semantic Analysis in Modern Times">
                The Legacy of Semantic Analysis in Modern Times
              </h3>
              <p>
                The semantic theories formulated by ancient Bhāratīya scholars
                continue to shape modern linguistic thought. Concepts like
                sphoṭa have been adopted into contemporary theories of meaning
                and cognition. The work of ancient grammarians like Pāṇini laid
                the foundation for structural linguistics, and their insights
                into the nature of language are still pertinent today. Moreover,
                these ancient semantic theories are not merely historical
                curiosities but offer valuable perspectives for developing
                artificial intelligence and natural language processing
                technologies.
              </p>
              <p>
                In contemporary times, the study of semantics has expanded to
                include computational linguistics, where ancient insights into
                language processing are finding new applications. The precision
                and depth of ancient Bhāratīya semantic theories offer valuable
                perspectives for developing artificial intelligence and natural
                language processing technologies.
              </p>
              <p>
                The semantic analysis and linguistic innovations of ancient
                Bharat reveal a civilization deeply engaged with the nature of
                language and meaning. From the Vedas to Pāṇini’s Aṣṭādhyāyī and
                the philosophical discourses of the Darśanas, ancient Indian
                scholars laid the foundations for a sophisticated understanding
                of semantics.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/comp-lang-science/sa_ref.jpg")}
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

export default SA_2;

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
