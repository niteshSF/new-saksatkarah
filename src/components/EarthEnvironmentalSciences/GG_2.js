import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/ee-sciences/gg_p_1.jpg";
import imageSrc2 from "../../assets/ee-sciences/gg_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const GG_2 = () => {
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

  // ----------------------------------------------------------------------------------------------

  // useEffect(() => {
  //   let lastScrollTop = 0;
  //   const left = document.querySelector(".alge-left-section");
  //   const handleScroll = () => {
  //     const currentScroll =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     if (currentScroll > lastScrollTop) {
  //       // Scrolling down
  //       left.style.transform = "translateY(-20px)";
  //     } else {
  //       // Scrolling up
  //       left.style.transform = "translateY(0)";
  //     }

  //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
        <h1>भूविज्ञानम् - Geology & Geography</h1>

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
                          href="https://archive.org/details/b30094409_0003/page/n3/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Agnipurana : a collection of Hindu mythology and traditions,
By Mitra, Rājendralāla, Raja,


                        </a>
                      </li> 

<li>
                        <a
                          href="https://archive.org/details/vishnu-purana-sanskrit-english-ocr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Vishnu Purana English Translation with Sanskrit Text
                          By Veda Vyasa
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
                          href="https://archive.org/details/in.gov.ignca.73689/page/n11/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Geography of the Puranas
By Ali, S.M.


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/cu31924023029485/page/n17/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The ancient geography of India
By Cunningham, Alexander, Sir, 1814-1893


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
              "/Earth_Environmental_Sciences/Ecology_Environment_Content"
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
                          href="#Varāhamihira's Compilation and Contributions"
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
                          Varāhamihira's Compilation and Contributions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Mineral Wealth and Metallurgical Marvels"
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
                          Mineral Wealth and Metallurgical Marvels
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Cosmic Egg: Brahmāṇḍa and the Universe"
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
                          The Cosmic Egg: Brahmāṇḍa and the Universe
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sacred Land and Sustainable Agriculture"
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
                          Sacred Land and Sustainable Agriculture
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
              Ancient Bhāratiya geographical and geological knowledge, a
              profound blend of science and spirituality, was deeply ingrained
              in its culture and philosophy. The subcontinent, known as
              Jambudvīpa in ancient books such as the Rāmāyaṇa and Mahābhārata,
              was not just a geographical entity but a sacred expanse surrounded
              by oceans from the snow-capped Himalayas in the north to the
              sun-drenched southern point. This image of Jambudvīpa, or 'island
              of the rose apple tree,' fundamental in Hindu, Buddhist, and Jain
              cosmologies, symbolizes the Earth as a hallowed zone where human
              civilization thrives under divine care. The idea that Bhārata was
              a blessed land, where each river, mountain, and forest had its
              guardian deity, permeates these ancient texts, instilling a deep
              reverence for nature and inspiring us to respect and protect our
              environment.
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
                <h3 id="Varāhamihira's Compilation and Contributions">
                  Varāhamihira's Compilation and Contributions
                </h3>
                <p>
                  In the 6th century, Varāhamihira, who is believed to have been
                  a courtier of King Vikramāditya, compiled much of the
                  available knowledge on a variety of subjects in a book aptly
                  named Brhat Saṁhitā (meaning 'large compilation'). This
                  treatise is a treasure trove of ancient Bhāratiya knowledge,
                  spanning a wide range from astrology to architecture.
                  Varāhamihira's classification of the Bhāratiya subcontinent
                  into four seismic zones, Vāyavya (north-west), Agneya
                  (south-east), Aindra (east), and Varuṇa (west), each with
                  distinct characteristics, remarkably aligns with modern
                  seismic classifications, especially the vulnerable Himalayan
                  belt. This is known to have been taken from more ancient
                  sources such as those of sages Parāśara and Garga, whose works
                  are not available at present. Varāhamihira also described a
                  connection between seismic activities and planetary
                  alignments, particularly those involving Jupiter, Saturn, and
                  Mars. This holistic perspective, where celestial events
                  influenced terrestrial phenomena, showcases the deep
                  integration of ancient Bhāratiya science with spirituality and
                  astrology, enlightening us about the comprehensive nature of
                  their knowledge.
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
                <h3 id="Mineral Wealth and Metallurgical Marvels">
                  Mineral Wealth and Metallurgical Marvels
                </h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  The mineral wealth of ancient Bhārata was legendary,
                  attracting traders from as far as Rome and China. The
                  Arthashāstra, attributed to the brilliant strategist Kautilya
                  (Cāṇakya), is a comprehensive guide to governance that
                  includes detailed instructions on mining and metallurgy.
                  Ancient Bhāratiyas were master metallurgists, as evidenced by
                  the rust-free Iron Pillar of Delhi, demonstrating their
                  unparalleled skill. This pillar, which has stood the test for
                  over 1,600 years, is made from iron that has defied rust — a
                  feat that modern metallurgists still marvel at. The texts
                  Mayāmāta and Viṣṇupurāṇa provide detailed classifications of
                  rocks, advising on their best uses in construction, from
                  temples to fortifications.
                </p>

                <h3 id="The Cosmic Egg: Brahmāṇḍa and the Universe">
                The Cosmic Egg: Brahmāṇḍa and the Universe
              </h3>
              <p>
                Ancient Bhāratiya cosmology is a profound blend of science and
                spirituality. The universe, or Brahmāṇḍa, is described in the
                Vāyu Purāṇa and Brahmāṇḍa Purāṇa as a cosmic egg — a concept
                that resonates with modern astronomical theories about the
                universe's origin. The layers of the Brahmāṇḍa represent the
                earth, atmosphere, and heavens, with the sun (Sūrya) at its
                centre, governing all life. These texts reveal a sophisticated
                understanding of planetary movements, celestial cycles, and
                their effects on Earthly life. The spherical shape of the Earth,
                known as 'Bhūgola' in ancient Bhāratiya texts, was a term used
                to describe the Earth's round shape, a concept well understood
                by ancient Bhāratiya scholars.
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
              <h3 id="Sacred Land and Sustainable Agriculture">
                Sacred Land and Sustainable Agriculture
              </h3>
              <p>
                The land in ancient Bhārata was seen as sacred, with each region
                imbued with divine qualities. Texts like the Vṛkṣāyurveda, a
                treatise on the science of plant life, and Kṛṣi Parāśara, a
                comprehensive guide to agriculture, categorize land into three
                types: Sāttvika (pure), Rājasa (active), and Tāmasa (inert).
                Based on fertility and mineral content, this classification
                guided farmers in choosing the best crops for their land,
                ensuring sustainable agricultural practices. The wisdom in these
                texts extends to the understanding of soil health, crop
                rotation, and organic farming — practices that are once again
                gaining recognition in modern times. The geological knowledge of
                the time also contributed to these practices. For example, the
                ancient Bhāratiyas understood that the fertile lands of the
                Ganges basin were formed through sedimentation, making them
                ideal for agriculture. At the same time, the rocky terrains of
                the Deccan plateau were suited for different crops and mining
                activities.
              </p>
              <p>
                The length and breadth of concepts described in these texts are
                relevant even today and guide our efforts towards a sustainable
                and fruitful future.
              </p>
            </div>

            
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/ee-sciences/gg_ref.jpg")}
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

export default GG_2;

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
