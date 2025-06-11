import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/health-life-sciences/va_p_1.jpg";
import imageSrc2 from "../../assets/health-life-sciences/va_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const VA_2 = () => {
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
        <h1>पशु-आयुर्वेदः - Veterinary Āyurveda</h1>

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
                          href="https://archive.org/details/chetansinhzala25695_gmail_20180819/page/19/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         शालिहोत्रम(shalihotram)
By Shalihotra Rushi


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.345317"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Hastyayurveda
By Muni, Palakapya


                        </a>
                      </li>
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
                          href="https://archive.org/details/in.ernet.dli.2015.190672"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Ancient Indian Tradition And Mythology
By Prof.j.l.shastri


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/sim_indian-journal-of-animal-sciences_1994_64_contents"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Indian Journal of Animal Sciences 
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
          onClick={() => navigate("/Health_Life_Sciences/Food_Science_Content")}
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
                          href="#Historical Context"
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
                          Historical Context
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Cattle Characteristics"
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
                          Cattle Characteristics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Role of Other Animals"
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
                          The Role of Other Animals
                        </a>
                      </li>

                      <li>
                        <a
                          href="#General Traits of Creatures"
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
                          General Traits of Creatures
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Wisdom of Kauṭilya's Arthaśāstra"
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
                          The Wisdom of Kauṭilya's Arthaśāstra
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
              Paśu-Āyurveda, an ancient Bhāratīya science, meticulously studied
              the physical traits of animals with a view to determine their
              auspiciousness or inauspiciousness. Rooted in texts like the Bṛhat
              Saṁhitā by Varāhamihira and Kautilya's Arthaśāstra, this practice
              reflects the deep belief that animals could influence human
              prosperity. This belief influenced the breeding and selection of
              animals and their treatment. Animals were not merely for survival;
              they were symbols of fortune directly linked to the well-being of
              their owners. A farmer, for instance, would choose a bull with
              specific physical traits for breeding, believing it would bring
              prosperity to his herd, highlighting the close relationship
              between humans and animals in ancient Bhārat.
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
                <h3 id="Historical Context">Historical Context</h3>
                <p>
                  In ancient Bhārat, animals were not just valued, but they were
                  revered. Their characteristics were closely observed and
                  recorded, reflecting the deep respect and awe that ancient
                  Bhāratīyas held for the natural world. Domesticated animals
                  like cows, horses, dogs, and goats were not just practical
                  tools; they were symbols of fortune, and the belief that
                  certain physical traits could bring good fortune or misfortune
                  was central to the study of Paśu Lakṣaṇam. This science was
                  more than a set of guidelines; it embodied the deep connection
                  between humans and the natural world, where every creature was
                  a part of the cosmic order.
                </p>
                <br/>

                <h3 id="Cattle Characteristics">Cattle Characteristics</h3>
                <p>
                  Cattle, especially cows and bulls, were central in the study
                  of Paśu-Āyurveda. The Bṛhat Āyurveda Saṁhitā details the
                  auspicious and inauspicious traits in these animals. For
                  example, bulls with large, hanging testicles, tawny or
                  dark-red coloration, and visible veins on their breasts were
                  considered auspicious and believed to bring prosperity and
                  strength. These traits were seen as symbols of fertility and
                  wealth. Conversely, cows with specific dental configurations
                  or physical deformities were deemed inauspicious, potentially
                  bringing misfortune.
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
                <br/>
              <h3 id="The Role of Other Animals">The Role of Other Animals</h3>
              <p>
                Dogs, horses, elephants, tortoises, and birds like cocks and
                hens also played significant roles in Paśu-Āyurveda. According
                to the Bṛhat Saṁhitā, auspicious dogs had traits like four legs
                with five nails each and a lion-like gait. Horses with long
                necks and broad rumps were considered favorable, while
                dark-colored horses were seen as inauspicious. Elephants held a
                special place; those with red lower lips and well-formed tusks
                were symbols of prosperity, particularly for kings, as they were
                believed to bring success in battles and governance.
              </p>
              <br/>
              <h3 id="General Traits of Creatures">
                General Traits of Creatures
              </h3>
              <p>
                The Bṛhat Saṁhitā categorizes general traits for male, female,
                and neuter animals. Males are characterized by strength and
                courage, symbolized by high shoulders and deep sounds. Females
                are noted for their harmony and melodious voices, with small
                faces and feet. Neuter animals exhibited a mix of these traits.
                This categorization extends beyond physical characteristics,
                reflecting more profound philosophical beliefs about the nature
                and roles of different beings in the cosmic order.
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
              <h3 id="The Wisdom of Kauṭilya's Arthaśāstra">
                The Wisdom of Kauṭilya's Arthaśāstra
              </h3>
              <p>
                Kautilya's Arthaśāstra, being a practical guide for governance,
                complements the Bṛhat Saṁhitā by offering practical guidelines
                for animal management. It classified elephants based on their
                regional origins, with Kalinga elephants considered the finest.
                The text also provided detailed classifications for cattle and
                oxen based on age, milk production, and suitability for work,
                offering a comprehensive guide for good animal husbandry. Like
                many other texts from ancient Bhārat, the Arthaśāstra
                demonstrates an advanced understanding of animal science and its
                integration into daily life and governance. Such meticulous
                attention to detail in selecting and caring for animals
                highlights the ancient Bhāratīyas' deep respect for the natural
                world and their belief in the symbiotic relationship between
                humans and animals. This holistic approach ensured that animals
                were not merely seen as tools for labor or symbols of wealth but
                as integral beings that contributed to the prosperity and
                harmony of society.
              </p>
              <p>
                One lesser-known fact about Paśu Lakṣaṇam is its application in
                royal courts, where astrologers and advisors used this science
                to select the best horses and elephants for the king's army.
                These advisors were astrologers and animal science experts who
                could interpret animals' auspicious and inauspicious traits. It
                is said that King Vikramāditya, under whom Varāhamihira served,
                would only mount a horse after consulting his astrologers about
                its traits, ensuring that every detail aligned with the
                predictions of success and prosperity.
              </p>
              <p>
                Another fascinating aspect is the inclusion of mythological
                creatures in these texts. For example, descriptions of
                Garuda-like birds or Nandi-like bulls are often found, where
                physical traits were exaggerated to embody divine qualities.
                Paśu-Āyurveda illustrates the profound connection between humans
                and animals in ancient Bhārat. This ancient science, as detailed
                in the comprehensive and profound Bṛhat Saṁhitā and the
                Arthaśāstra, reveals the respect and care that ancient
                Bhāratīyas had for their domesticated animals, blending
                practical knowledge with profound spiritual beliefs. Today,
                revisiting these ancient texts enriches our understanding of
                history and offers timeless wisdom that can inspire more
                harmonious relationships with the natural world.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/health-life-sciences/va_ref.jpg")}
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

export default VA_2;

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
