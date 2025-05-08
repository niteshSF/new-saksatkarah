import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/comp-lang-science/cm_p_1.jpg";
import imageSrc2 from "../../assets/comp-lang-science/cm_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const CM_2 = () => {
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
        <h1>स्मरणशक्ति-संवर्धन-विज्ञानम् - Combinatorics & Mnemonics</h1>

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
                          href="https://archive.org/details/chandassastrapingalacharyacommentaryofhalyudhayavisvanathasastriasiaticsociety1874/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Chandas Sastra Pingalacharya Commentary Of Halyudhaya
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/ganitakaumudinarayanpandited.padmakaradvivedivol1sampoornandms_510_h/page/n9/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Ganita Kaumudi Narayan Pandit Ed. Padmakara Dvivedi
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
                          href="https://archive.org/details/vedic-mathematics-bharati-krishna-tirth-ji-maharaj/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Vedic Mathematics by Bharati Krishna Tirtha
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
                          href="#The Role of Combinatorics in Vedic Mathematics"
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
                          The Role of Combinatorics in Vedic Mathematics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Mnemonics in Vedic Tradition"
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
                          Mnemonics in Vedic Tradition
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Power of Mantras as Mnemonics"
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
                          The Power of Mantras as Mnemonics
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Combinatorial Puzzles in Ancient Texts"
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
                          Combinatorial Puzzles in Ancient Texts
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
              The ancient scholars of Bhārat were not only masters of profound
              philosophical and spiritual knowledge but also pioneers in
              mathematical and cognitive sciences. Two fields that highlight
              their intellectual brilliance are combinatorics and mnemonics.
              These disciplines were deeply intertwined with the study and
              practice of Vedic rituals, mathematics, and language, showcasing
              the innovative methods developed by ancient Bhāratīyas to enhance
              memory and solve complex problems. The techniques they devised
              continue to influence modern mathematics and cognitive science,
              revealing the timeless wisdom of ancient Bhārat.
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
                <h3 id="The Role of Combinatorics in Vedic Mathematics">
                  The Role of Combinatorics in Vedic Mathematics
                </h3>
                <p>
                  Combinatorics, the branch of mathematics dealing with
                  enumeration, combinations, permutations, and arrangements of
                  objects, was an essential aspect of Vedic mathematics. Ancient
                  Bhāratīya mathematicians used combinatorial methods to solve
                  problems related to rituals, astronomy, and linguistics.
                </p>
                <p>
                  One of the earliest references to combinatorial techniques can
                  be found in the Chandaḥśāstra, attributed to the sage Piṅgala,
                  where the systematic arrangement of syllables in Vedic metres
                  was explored. The Chandaḥśāstra is considered the earliest
                  known work on prosody—the study of poetic meters and
                  versification. Piṅgala’s work introduces the concept of binary
                  numbers and the method of enumerating metres using
                  combinatorial principles.
                </p>
                <p>
                  The Meruprastāra, described by Piṅgala and explained further
                  by his commentator Halāyudha, is a tabular figure showing the
                  number of possible variations for metres of different lengths.
                  This same structure was independently rediscovered by Blaise
                  Pascal in the 17th century and is now known globally as
                  Pascal’s Triangle. Piṅgala’s work demonstrates the deep
                  understanding of combinatorial mathematics in ancient Bhārat
                  and its application in preserving and organizing vast bodies
                  of Vedic knowledge.
                </p>
                <p>
                  Another significant application of combinatorics is found in
                  the arrangement of Vedic rituals, known as Kṛtya. The
                  Yajurveda, one of the four Vedas, provides detailed
                  instructions for performing complex rituals, often involving
                  multiple priests and intricate sequences of actions. The
                  successful execution of these rituals required a precise
                  understanding of permutations and combinations to ensure that
                  every possible arrangement of actions was considered, leading
                  to correct performance.
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
                <h3 id="Mnemonics in Vedic Tradition">
                  Mnemonics in Vedic Tradition
                </h3>
                <p>
                  The oral tradition of Vedic recitation is one of the most
                  remarkable achievements of ancient Bhārat, and mnemonics
                  played a crucial role in preserving this vast body of
                  knowledge. The Vedas, composed in an era before writing was
                  prevalent, were passed down orally through generations.
                  Priests and scholars developed sophisticated mnemonic devices
                  to ensure these texts were memorized accurately and
                  transmitted without error.
                </p>
                <p>
                  One of the most well-known mnemonic techniques in the Vedic
                  tradition is the use of Prakṛti and Vikṛti recitations.
                  Prakṛti refers to the straightforward recitation of Vedic
                  hymns, while Vikṛti involves reciting the same hymns in
                  various permutations—such as reversing the order of words or
                  syllables—to reinforce memory. This ensured that reciters
                  could recall the hymns in any order, preserving the integrity
                  of the text.
                </p>
                <p>
                  Another important mnemonic device was the Kaṭapayādi system, a
                  code that converts Sanskrit syllables into numbers. This
                  system, used as early as the 7th century CE in Haridatta’s
                  Grahacāraṇibandha, enabled astronomers and mathematicians to
                  encode mathematical formulae and astronomical data,
                  facilitating easy memorization and transmission of complex
                  information. It is a prime example of how ancient Bhāratīya
                  scholars combined linguistic and mathematical insights to
                  develop effective mnemonic tools.
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
              <h3 id="The Power of Mantras as Mnemonics">
                The Power of Mantras as Mnemonics
              </h3>
              <p>
                Mantras—sacred chants repeated during spiritual practice—also
                served as powerful mnemonic tools in ancient Bhārat. The
                repetitive nature of mantra chanting helped individuals
                internalize complex philosophical ideas and spiritual teachings.
                Specific syllables in mantras were believed to have cognitive
                and spiritual benefits, enhancing the practitioner’s memory,
                focus, and meditative capacity.
              </p>
            </div>
            <br />

            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 id="Combinatorial Puzzles in Ancient Texts">
                Combinatorial Puzzles in Ancient Texts
              </h3>
              <p>
                The application of combinatorial mathematics was not limited to
                rituals and mnemonics—it extended to intellectual puzzles and
                games. The Ankapāśa chapter of Līlāvatī, the famous mathematical
                treatise by Bhāskara II, contains several problems involving
                combinatorial reasoning. These puzzles were not just academic
                exercises but were used to train students in logical thinking
                and problem-solving.
              </p>
              <p>
                For instance, one problem in the Līlāvatī asks how many ways a
                set of beads can be arranged on a string—a classic combinatorial
                problem involving permutations. Such problems were designed to
                challenge the intellect while imparting practical mathematical
                principles.
              </p>
              <p>
                The study of combinatorics and mnemonics in ancient Bhārat
                reveals a rich tradition of intellectual inquiry and innovation.
                The scholars of Bhārat developed advanced mathematical and
                mnemonic techniques to solve intricate problems, preserve sacred
                knowledge, and enhance cognitive faculties. Rooted in the Vedic
                tradition, these practices demonstrate the profound connection
                between mathematics, language, ritual, and spirituality in
                ancient Bhārat—a legacy that continues to inspire modern science
                and learning.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/comp-lang-science/cm_ref.jpg")}
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

export default CM_2;

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
