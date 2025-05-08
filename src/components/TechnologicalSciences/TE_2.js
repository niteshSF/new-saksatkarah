import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/technology-science/te_p_1.jpg";
import imageSrc2 from "../../assets/technology-science/te_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const TE_2 = () => {
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
        <h1>वस्त्र-तन्त्रज्ञानम् - Textile Engineering</h1>

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
                          href="https://archive.org/details/dli.ministry.25981"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Indian tie-dyed fabrics
By Buhler, Alfred; Fischer, Eberhard; Nabholz, Marie-Louise


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.239333"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Ancient And Medieval Dyes
By Leggett William F.


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.461927"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Indian Cotton Textile Industry
By Thakkar, N. H.


                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         
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
          onClick={() => navigate("/Technological_Sciences/Gemmology_Content")}
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
                          href="#The Vedic Foundations: Textile and Spirituality"
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
                          The Vedic Foundations: Textile and Spirituality
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Loom of Dharma: Weaving as a Sacred Duty"
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
                          The Loom of Dharma: Weaving as a Sacred Duty
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Glory of Silk: Kauśeya in Ancient Bhārat"
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
                          The Glory of Silk: Kauśeya in Ancient Bhārat
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Story of Sāvitrī: Weaving as a Metaphor for Life"
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
                          Story of Sāvitrī: Weaving as a Metaphor for Life
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Vedic Tradition of Natural Dyes"
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
                          The Vedic Tradition of Natural Dyes
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
              Weaving and textile production in ancient Bharat represents a
              remarkable fusion of art, culture, and spiritual wisdom. Far from
              being merely functional, these crafts were steeped in symbolism,
              tradition, and a deep understanding of nature's cycles. The
              evolution of textiles in Bharat testified to the country's
              ingenuity and people's ability to harmonize the practical with the
              sacred.
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
                <h3 id="The Vedic Foundations: Textile and Spirituality">
                  The Vedic Foundations: Textile and Spirituality
                </h3>
                <p>
                  In the Vedic period, textiles were not just commodities but
                  were seen as sacred items that held profound spiritual
                  significance. The Rgveda, one of the oldest known texts,
                  references the art of weaving in its hymns. The weaving was
                  metaphorically associated with the creation of the universe,
                  where the loom symbolized the cosmic order, and the threads
                  represented the interwoven fabric of life. The goddess
                  Sarasvati, who is believed to have been often depicted with a
                  loom, was believed to inspire creativity and knowledge, making
                  her the divine patroness of weavers and artisans.
                </p>
                <p>
                  The Vedic scriptures also mention specific types of garments,
                  such as the “Vasas” (garments made of wool or cotton) and
                  “Kauseya” (silk). These textiles were integral to Vedic
                  rituals, where priests donned specific garments for different
                  ceremonies to align with cosmic energies. The fabric's colour
                  also played a significant role; for instance, white garments
                  symbolized purity and were worn during spiritual rituals. Red
                  garments were used in marriage ceremonies, symbolizing
                  fertility and prosperity (Taittirīya Brahmana, 3.10.11).
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
                <h3 id="The Loom of Dharma: Weaving as a Sacred Duty">
                  The Loom of Dharma: Weaving as a Sacred Duty
                </h3>
                <p>
                  The concept of Dharma (righteous duty) extended into the craft
                  of weaving. Weaving was considered a sacred duty, and artisans
                  believed they were upholding cosmic order through their work.
                  The Mahabharata mentions the divine weaver Visvakarman, the
                  architect of the gods, who wove the fabric of the universe
                  with threads of light and sound. This divine association
                  elevated the status of weavers in society, making their craft
                  not just a livelihood but a form of devotion.
                </p>
                <p>
                  One of the most revered texts, the Rgveda, even describes the
                  rhythmic process of weaving as analogous to the chanting of
                  Vedic hymns. The weaver's loom, with its warp and weft, was
                  seen as a physical manifestation of the sacred mantras, and
                  each weave was considered a prayer offered to the gods. The
                  Upanishads further elaborate on this symbolism, where the
                  threads of the loom are compared to the prāṇa (life force)
                  that sustains all living beings (Brhadaranyaka Upanishad,
                  3.6.2).
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
              <h3 id="The Glory of Silk: Kauśeya in Ancient Bhārat">
                The Glory of Silk: Kauśeya in Ancient Bhārat
              </h3>
              <p>
                Silk, known as Kauseya, held a place of great prestige in
                ancient Bharat. The production of silk is believed to have begun
                during the Vedic period, with references to silk garments found
                in the Rgveda and later in the Arthashastra. The luxurious
                fabric was often used in royal attire and religious ceremonies,
                symbolizing wealth, and spiritual purity.
              </p>
              <p>
                The Arthashastra, attributed to Kautilya, provides detailed
                accounts of the silk trade, including the management of silk
                farms, the process of silk weaving, and the regulation of silk
                trade routes. Silk garments were valued for their aesthetic
                appeal and ability to confer blessings upon the wearer. Kings
                and queens would wear silk robes during important rituals and
                ceremonies, believing that the fabric's divine origins would
                bring them closer to the gods (Kautilya, Arthashastra, 2.17).
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Story of Sāvitrī: Weaving as a Metaphor for Life">
                Story of Sāvitrī: Weaving as a Metaphor for Life
              </h3>
              <p>
                A famous story from the Mahabharata is that of Savitri, a
                princess known for her unwavering devotion and intelligence.
                When her husband, Satyavan, was destined to die within a year of
                their marriage, Savitri wove every day, praying for his life.
                Each thread she wove was imbued with her devotion, and her
                creation grew more beautiful each day. When the god of death,
                Yama, came to claim her husband, Savitri's devotion and the
                sacred cloth she had woven persuaded Yama to grant Satyavan a
                longer life.
              </p>
              <p>
                This story illustrates how weaving was seen not merely as a
                craft but as a spiritual practice. Each thread represented the
                values of devotion, duty, and perseverance. The loom was more
                than a tool; it was a bridge between the human and the divine,
                with each weave echoing the moral fabric of life itself.
              </p>
            </div>
            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Vedic Tradition of Natural Dyes">
                The Vedic Tradition of Natural Dyes
              </h3>
              <p>
                Using natural dyes was not just a practical necessity but an
                integral part of textile production in ancient Bharat, with
                plants, minerals, and insects providing vibrant colors. The
                Atharvaveda mentions using Haridra (turmeric) and Manjistha
                (madder root) to dye cloth in shades of yellow and red,
                respectively. The extraction of indigo dye from the Indigofera
                tinctoria plant was another significant achievement, with Bharat
                becoming a primary exporter of indigo-dyed textiles, known as
                nīla-vastra.
              </p>
              <p>
                The process of dyeing was also imbued with ritualistic
                significance. Before dyeing, the fabric would be washed in
                sacred rivers, and prayers would be offered to ensure the
                success of the dyeing process. The Chola dynasty, known for its
                patronage of the arts, was particularly famous for its richly
                dyed silks and cotton, often decorated with gold threads.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/technology-science/te_ref.jpg")}
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

export default TE_2;

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
