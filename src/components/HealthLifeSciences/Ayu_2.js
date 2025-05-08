import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/health-life-sciences/ayu_p_1.jpg";
import imageSrc2 from "../../assets/health-life-sciences/ayu_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Ayu_2 = () => {
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
        <h1>आयुर्वेदः - Āyurveda</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Health_Life_Sciences")}
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
                          href="https://archive.org/details/CharakaSamhitaTextWithEnglishTanslationP.V.Sharma?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                        Charaka Samhita Text With English Tanslation P. V. Sharma
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/susrutasamhita/Susrutasamhita%20v1%20sutra/?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Susrutasamhita with translation 
By Priya Vrat Sharma


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/Ashtanga.Hridaya.of.Vagbhata?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ashtanga Hridaya of Vagbhata - with 2 Commentaries [Sanskrit]
By Vagbhata


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/AstangaHrdayam.Eng?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Astanga Hrdayam (Eng)
By Dr. R. Vidyanath


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
                          href="https://archive.org/details/IntroductionToAyurvedaByChandrashekharThakkur"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                           Introduction To Ayurveda By Chandrashekhar Thakkur
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/ayurvedaencyclop00tirt"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Ayurveda encyclopedia
By Sada Shiva Tirtha


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/ancientindianmedicinekutumbhiap._234_i/page/n17/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ancient Indian Medicine 
By Durga Bains


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/vrikshaayurvedaatreatiseonplantsciencesircarn.n.romasarkarsatgurupublications_48_v/page/n17/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Vriksha Ayurveda A Treatise On Plant Science Sircar N. N. Roma Sarkar
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
          onClick={() => navigate("/Health_Life_Sciences/Botany_Content")}
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
                        href="/Health_Life_Sciences"
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
                        Health & Life Sciences
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
                        href="/Health_Life_Sciences/Ayurveda_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Ayurveda
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
                          href="#The Origins of Āyurveda"
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
                          The Origins of Āyurveda
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Concept of Doṣas"
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
                          The Concept of Doṣas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Herbal Medicine and Rasāyana"
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
                          Herbal Medicine and Rasāyana
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Surgery and Medical Innovation"
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
                          Surgery and Medical Innovation
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Spiritual Practices and Āyurveda"
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
                          Spiritual Practices and Āyurveda
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
                        href="/Health_Life_Sciences/Botany_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Botany
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Health_Life_Sciences/Horticulture_Floriculture_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Horticulture & Floriculture
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Health_Life_Sciences/Veterinary_Ayurveda_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Veterinary Ayurveda
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Health_Life_Sciences/Food_Science_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Food Sciences
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Health_Life_Sciences/Science_of_Pulse_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Science of Pulse
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
              Ayurveda, one of the oldest holistic healing systems in the world,
              is a living tradition which provides profound evidence of the
              wisdom and ingenuity of ancient Bhārata. Rooted in the Vedic
              tradition, Ayurveda, which translates to the “science of life,”
              offers a comprehensive approach to health and well-being. It
              integrates physical, mental, and spiritual practices, emphasizing
              the balance between body, mind, and spirit. With its deep
              understanding of human physiology, diet, herbal medicine, and
              spiritual practices, this ancient system, with its global
              influence, is a source of pride for our cultural heritage.
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
                <h3 id="The Origins of Āyurveda">The Origins of Āyurveda</h3>
                <p>
                  The origins of Ayurveda can be traced back to the Vedas,
                  particularly the Atharvaveda, which contains hymns and chants
                  related to health and disease. The source literature of
                  Ayurveda is derived from the works of the Bṛhat Trayī (Great
                  Triad) – Caraka, Suśruta, and Vāgbhaṭa. Their works Caraka
                  Saṃhitā, Suśruta Saṃhitā and Aṣṭāṅga Hṛdaya, composed sometime
                  between around 1500 BCE and 600 CE, provide detailed insights
                  into various aspects of medicine, surgery, anatomy, and
                  pharmacology. The Caraka Saṃhitā, attributed to the sage
                  Caraka, focuses on internal medicine and disease prevention.
                  It outlines the principles of diagnosis, treatment, and the
                  importance of diet and lifestyle in maintaining health. The
                  Suśruta Saṃhitā, attributed to the surgeon Suśruta, is a
                  pioneering text on surgery, detailing various surgical
                  procedures, including rhinoplasty, cataract surgery, and even
                  the practice of an early form of plastic surgery. The Aṣṭāṅga
                  Hṛdaya, written by Vāgbhaṭa, is a comprehensive guide to
                  Ayurvedic medicine, combining the teachings of Caraka, Suśruta
                  and several other authors, with a focus on the eight branches
                  of Ayurveda, including pediatrics, toxicology, and
                  rejuvenation therapy.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
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
                <h3 id="The Concept of Doṣas">The Concept of Doṣas</h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  Central to Ayurveda is the concept of doṣas, the three
                  fundamental substances that govern human physiology and are
                  related to the concept of the five mahābhūtas: Vāta (air and
                  ether), Pitta (fire and water), and Kapha (water and earth).
                  Each individual has a unique combination of these doṣas, known
                  as their prakṛti (constitution), which determines their
                  physical and mental characteristics. The balance of these
                  doṣas is crucial for maintaining health; any imbalance can
                  lead to disease. The ancient texts describe balancing the
                  doṣas through diet, lifestyle, and herbal remedies. For
                  example, a person with a predominance of Vāta might be advised
                  to eat warm, moist foods and engage in calming activities. At
                  the same time, someone with a Pitta imbalance might be
                  prescribed cooling foods and stress-reducing practices. This
                  personalized approach to healthcare is one of the most
                  remarkable aspects of Ayurveda, highlighting its focus on
                  treating the individual, rather than just the disease.
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
              <h3 id="Herbal Medicine and Rasāyana">
                Herbal Medicine and Rasāyana
              </h3>
              <p>
                Ayurveda is renowned for its extensive use of herbal medicine.
                Ancient Bhāratīya texts describe thousands of medicinal plants
                and their uses in treating various ailments. Herbs like Tulsi
                (Ocimum sanctum), and Nīma (Azadirachta indica) are still widely
                used in Ayurvedic practices today. One fascinating aspect of
                Ayurveda is the practical application of its principles. For
                instance, Rasāyana, or rejuvenation therapy, promotes longevity,
                enhances vitality, and prevents aging. These therapies involve
                using specific herbs, minerals, and dietary practices, making
                the ancient wisdom of Ayurveda directly applicable to our modern
                lives. The Caraka Saṃhitā emphasizes the importance of Rasāyana
                in maintaining health and extending life, suggesting that these
                therapies can help individuals live longer, healthier, and more
                fulfilling lives.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Surgery and Medical Innovation">
                Surgery and Medical Innovation
              </h3>
              <p>
                One of the most extraordinary contributions of Ayurveda is its
                advancements in surgery. The Suśruta Saṃhitā is particularly
                notable for its detailed accounts of surgical procedures.
                Suśruta, often referred to as the “father of surgery,” performed
                complex surgeries such as cataract removal, and lithotomy
                (removal of bladder stones). Another well-known example of
                surgery from Suśruta Saṃhitā is that of restoring the nose of
                persons who got it severed. Using a piece of the patient's cheek
                skin, Suśruta explains how to reconstruct the nose. This example
                illustrates the advanced level of medical knowledge in ancient
                Bhārata and the innovative spirit of its physicians.
              </p>
            </div>
            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Spiritual Practices and Āyurveda">
                Spiritual Practices and Āyurveda
              </h3>
              <p>
                In Ayurveda, health is not just the absence of disease but a
                state of complete physical, mental, and spiritual well-being.
                The practice of yoga, meditation, and prāṇāyāma (breath control)
                is integral to Ayurvedic treatment, reflecting its holistic
                approach to health. These practices help calm the mind, balance
                the doṣas, and enhance the body's natural healing abilities. A
                sāttvic lifestyle, which includes a balanced diet, regular
                exercise, meditation, and ethical living, is essential for
                maintaining harmony between the body and mind. This holistic
                approach reflects the deep connection between Ayurveda and the
                spiritual traditions of ancient Bhārata. Ayurveda's emphasis on
                balance, personalized care, and holistic well-being resonates
                with people worldwide. As we explore the rich history of
                Ayurveda, we are reminded of the timeless wisdom of ancient
                Bhārata and its enduring influence on modern healthcare.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/health-life-sciences/ayu_ref.jpg")}
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

export default Ayu_2;

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
