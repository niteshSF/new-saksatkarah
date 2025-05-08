import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/technology-science/gem_p_1.jpg";
import imageSrc2 from "../../assets/technology-science/gem_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Gem_2 = () => {
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
        <h1>रत्न-विज्ञानम् - Gemmology</h1>

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
                          href="https://archive.org/details/GarudaPuranaEnglishMotilal3VolumesIn1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Garuda Purana English Motilal 3 Volumes In 1
By J.L. Shastri


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
                          href="https://archive.org/details/in.ernet.dli.2015.538690/page/n5/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Ratna-parichay
By Vidyalankar, Harishchandar


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.62637"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Indian Gemmology
By Tank, Rajroop


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.62637"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
Indian Gemmology
By Tank, Rajroop


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
                          href="#The Spiritual and Cultural Significance of Gems"
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
                          The Spiritual and Cultural Significance of Gems
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Legendary Mines of Golconda"
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
                          The Legendary Mines of Golconda
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Ancient Texts on Gemmology"
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
                          Ancient Texts on Gemmology
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Fascinating Stories from Ancient Times"
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
                          Fascinating Stories from Ancient Times
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Craftsmanship of Ancient Bhārata"
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
                          The Craftsmanship of Ancient Bhārata
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Enduring Legacy of Ancient Bhāratiya Gemmology"
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
                          The Enduring Legacy of Ancient Bhāratiya Gemmology
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
              Ancient Bhārata was a land of unparalleled wealth and
              craftsmanship, where the art of gemmology reached its zenith. The
              study and use of gems, known as Ratnasāstra, were deeply
              intertwined with society's spiritual, cultural, and economic
              fabric. From the legendary mines of Golconda to the sophisticated
              techniques described in ancient texts, the knowledge and
              appreciation of gemstones in ancient Bhārata were profound. This
              tradition dates back thousands of years, inspiring and influencing
              gemmologists and jewellery designers worldwide.
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
                <h3 id="The Spiritual and Cultural Significance of Gems">
                  The Spiritual and Cultural Significance of Gems
                </h3>
                <p>
                  In ancient Bhārata, gemstones were not just ornaments; they
                  embodied cosmic power and spiritual energy. According to the
                  Atharvaveda, gems were believed to possess divine properties
                  that could protect the wearer from evil forces and bestow
                  blessings. Each gem was associated with specific deities and
                  astrological influences, making them integral to religious and
                  cultural practices. The Br̥hat Saṁhitā, a classical text by
                  Varāhamihira, provides detailed descriptions of various
                  gemstones, their qualities, and their effects on the human
                  body and mind, further deepening the spiritual and cultural
                  significance of gems in ancient Bhārata.
                </p>
<br/>
                <h3 id="The Legendary Mines of Golconda">
                  The Legendary Mines of Golconda
                </h3>
                <p>
                  The Golconda region, located in present-day Telangana, was one
                  of the most famous sources of diamonds in the ancient world.
                  The diamonds from these mines were known for their exceptional
                  quality and were highly prized by rulers and merchants from
                  across the globe. The Koh-i-Noor, one of the most famous
                  diamonds in history, is believed to have originated from the
                  Golconda mines. The wealth generated from these gems
                  contributed significantly to the prosperity of ancient
                  Bhārata, making it a centre of global trade in precious
                  stones.
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

              <h3 id="Ancient Texts on Gemmology">
                Ancient Texts on Gemmology
              </h3>
              <p>
                The knowledge of gemstones in ancient Bhārata was systematically
                recorded in various texts. Ratnasāstra, mentioned in the
                Arthasāstra by Kautilya, outlines the classification,
                identification, and valuation of different gemstones. The Agni
                Purāṇa and Śukranīti discuss the origin of various gems, their
                properties, and effects. These texts emphasize the importance of
                colour, clarity, and lustre in determining a gem's quality. For
                instance, rubies were valued for their deep red colour,
                symbolizing vitality and strength, while emeralds were prized
                for their vibrant green hue, representing fertility and growth.
              </p>
              <p>
                The Manasollāsa of King Somesvara, a 12th-century text, provides
                a comprehensive guide to gem cutting and polishing techniques.
                It describes how gems were shaped to enhance their natural
                beauty and how they were set into intricate designs in
                jewellery. The Rasaratnasamuccaya, another ancient treatise,
                details the medicinal uses of gems. Gems were believed to
                possess healing properties that could balance the body's doṣas
                (Vāta, Pitta, and Kapha) and promote overall well-being.
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
              <h3 id="Fascinating Stories from Ancient Times">
                Fascinating Stories from Ancient Times
              </h3>
              <p>
                One fascinating story from the Mahābhārata involves the
                Syamantaka gem, a powerful stone believed to bring prosperity
                and protection to its possessor. According to the legend,
                Sātrājit, a devotee of the Sun God, Sūrya, owned the gem. The
                Syamantaka was so powerful that it could produce large
                quantities of gold daily, symbolizing immense wealth and divine
                favour. However, it was also a source of conflict, as various
                kings and warriors fiercely contested its ownership. This story
                shows how gems in ancient Bhāratiya culture were valued not just
                as treasures but as sources of divine power and influence.
              </p>
              <p>
                Another intriguing tale is that of the Navaratna (nine gems), a
                concept deeply rooted in Bhāratiya astrology. Each of the nine
                gems — ruby, pearl, coral, emerald, topaz, diamond, sapphire,
                hessonite, and cat's eye — corresponds to a planet in the Hindu
                astrological system. Wearing these gems was believed to harness
                the planets' positive energies and mitigate their adverse
                effects. The Navaratna jewellery, often worn by royalty,
                displayed wealth and was believed to act as a protective
                talisman, ensuring the wearer's health, prosperity, and
                spiritual well-being. This concept of Navaratna is a unique
                aspect of Bhāratiya gemmology and astrology, reflecting the deep
                cultural and spiritual significance of gemstones in ancient
                Bhārata.
              </p>
            </div>
            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Craftsmanship of Ancient Bhārata">
                The Craftsmanship of Ancient Bhārata
              </h3>
              <p>
                Ancient Bhāratiya artisans were masters of their craft, with
                unparalleled gem cutting and setting expertise. They perfected
                the art of cabochon cutting, shaping gems with a smooth, rounded
                surface to enhance their natural lustre. This technique was
                favoured for gems like cat's eye and star sapphire, which
                exhibit optical phenomena such as chatoyancy (cat's eye effect)
                and asterism (star effect). The intricate designs and fine
                craftsmanship of ancient Bhāratiya jewellery, as described in
                the Sākṣātkāra (2019), continue to inspire and awe modern
                designers and jewellers.
              </p>
              <p>
                The techniques used by ancient Bhāratiya gem cutters were
                remarkably advanced. They employed abrasive wheels made of
                natural sandstone or synthetic materials like carborundum to
                shape hard stones like diamonds and sapphires. They were then
                polished to a high shine using fine abrasives such as Tripoli
                powder. The brilliance of Bhāratiya-cut gems was so renowned
                that they were highly sought after in royal courts worldwide,
                from the Middle East to Europe.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Enduring Legacy of Ancient Bhāratiya Gemmology">
                The Enduring Legacy of Ancient Bhāratiya Gemmology
              </h3>
              <p>
                The gemmological traditions of ancient Bhārata have left a
                lasting legacy that continues to influence modern practices. The
                ancient texts and techniques provide invaluable insights into
                the science and art of gem cutting, setting, and valuation. The
                spiritual and cultural significance of gems, deeply ingrained in
                the traditions of Bhārata, continues to resonate in the modern
                world.
              </p>
            </div>

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/technology-science/gem_ref.jpg")}
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

export default Gem_2;

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
