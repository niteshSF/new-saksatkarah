import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/health-life-sciences/fs_p_1.jpg";
import imageSrc2 from "../../assets/health-life-sciences/fs_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const FS_2 = () => {
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
        <h1>आहार-विज्ञानम् - Food Science</h1>

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
                          href="https://archive.org/details/in.ernet.dli.2015.312333"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Bhojanakutuhala
By Sastri,.mahadeva K.s.


                        </a>
                      </li>
                     
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
                          href="https://archive.org/details/TheCompleteAyurvedicCookbook/page/n21/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Complete Ayurvedic Cookbook
By Jay D. Mulder


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/textbookoffoodsc0000khad/page/4/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Textbook of Food Science and Technology
By Khader, Vijaya


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/dli.ernet.103355"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Food and Drinks In Ancient India: From Earliest Times To B.c. 1200 A.d.
By Om Prakash


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dli.ministry.04666"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Nari vijnana: an exposition of the pulse
By Gupta, Kaviraj Dhurmo Dass Sen


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
            navigate("/Health_Life_Sciences/Science_of_Pulse_Content")
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
                          href="#The Spiritual Essence of Food"
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
                          The Spiritual Essence of Food
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Dietary Guidelines for Health and Wisdom"
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
                          Dietary Guidelines for Health and Wisdom
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Science of Cooking"
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
                          The Science of Cooking
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Ancient Practices and Modern Revival"
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
                          Ancient Practices and Modern Revival
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Cultural and Spiritual Significance of Food Rituals"
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
                          Cultural and Spiritual Significance of Food Rituals
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
              Food, a central aspect of human culture, has always been more than
              sustenance. In ancient Bhārat, food practices were intricately
              tied to spiritual, mental, and physical well-being, as reflected
              in the teachings of sacred texts such as the Bhagavad Gītā and
              various Upaniṣads. These ancient practices offer relevant
              insights, providing potential solutions to modern food-related
              diseases and reminding us of their timeless relevance.
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
                <h3 id="The Spiritual Essence of Food">
                  The Spiritual Essence of Food
                </h3>
                <p>
                  The Bhagavad Gītā categorizes food into three types based on
                  the qualities they impart to the consumer: Sattvic (pure),
                  Rajasic (stimulating), and Tamasic (dull) (Gītā 17.7-10).
                  Sattvic foods, including fresh fruits, vegetables, and whole
                  grains, promote clarity, longevity, and strength, making them
                  ideal for those seeking a balanced and fulfilling life.
                  Rajasic foods, characterized by sharp and stimulating flavors
                  such as spicy and salty foods, are believed to induce
                  restlessness and passion, leading to emotional instability.
                  Tamasic foods, often stale or overly processed, are thought to
                  cause dullness of the body and mind, resulting in lethargy and
                  ignorance. In the Taittirīya Upaniṣad, food is revered as
                  Brahman, the ultimate reality, emphasizing its spiritual
                  significance as a divine force that nourishes both body and
                  soul (Taittirīya Upaniṣad, 2.1). This holistic view of food as
                  sacred underscores the deep connection between our diet and
                  overall well-being.
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
                <br/>
                <h3 id="Dietary Guidelines for Health and Wisdom">
                  Dietary Guidelines for Health and Wisdom
                </h3>
                <p>
                  Āyurveda, Bhārat’s ancient system of medicine, provides
                  practical dietary guidelines to maintain the balance of the
                  three doṣas—Vāta, Pitta, and Kapha—the fundamental substances
                  governing physiological functions. These guidelines empower
                  individuals to make informed choices about their diet,
                  promoting health and wisdom. The practicality of these
                  guidelines ensures that individuals are not just eating but
                  eating wisely, developing a sense of empowerment and control
                  over their health.
                </p>
                <p>
                  Vedānta Deśika, in his Ahāra Niyamam, elaborates on the
                  spiritual dimensions of food, advising those on the path to
                  wisdom to avoid certain foods that are considered spiritually
                  and physically detrimental, such as onions, garlic, and foods
                  that generate excess heat or are difficult to digest (Ahāra
                  Niyamam). These guidelines align with modern nutritional
                  advice, demonstrating that ancient wisdom remains equally
                  relevant today.
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
              <h3 id="The Science of Cooking">The Science of Cooking</h3>
              <p>
                Ancient Bhārat emphasized the use of copper, cast iron, and
                steel utensils, which are being revived today for their health
                benefits. Unlike some of the modern cookware, copper and iron
                utensils used traditionally are known for preserving the
                nutritional value of food and avoiding the leaching of harmful
                chemicals. In addition, the Caraka Saṁhitā emphasizes the
                importance of cooking methods in enhancing food's digestive
                qualities. It details how specific cooking techniques, like slow
                cooking and use of particular spices, can improve food's
                medicinal properties, making it easier to digest and assimilate.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Ancient Practices and Modern Revival">
                Ancient Practices and Modern Revival
              </h3>
              <p>
                In recent years, there has been a significant resurgence in
                adopting ancient food practices, driven by a growing awareness
                of the connection between diet and health. One such practice is
                the occasional fasting recommended in Āyurveda, now recognized
                for its benefits in promoting digestion, detoxification, and
                mental well-being. This ancient practice is being increasingly
                seen as a way to counteract the effects of modern lifestyles,
                which often lead to overconsumption and related health issues.
              </p>
              <p>
                Another ancient practice gaining popularity is the use of ghee
                (clarified butter), highly regarded in Āyurvedic texts for its
                nourishing and medicinal properties. Modern science has begun to
                validate the benefits of ghee, such as its role in improving
                digestion, boosting immunity, and even aiding in weight
                management when consumed in moderation. The revival of ghee in
                contemporary diets reflects a return to natural, time-tested
                remedies that align with the principles of Āyurveda.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Cultural and Spiritual Significance of Food Rituals">
                Cultural and Spiritual Significance of Food Rituals
              </h3>
              <p>
                Food in ancient Bhārat was a means of survival and a medium for
                expressing gratitude to the divine. Rituals like Annaprāśana,
                the first feeding ceremony of a child, were imbued with deep
                spiritual significance, symbolizing the child's connection to
                the earth and the divine. Food offerings to deities, known as
                Naivedya, were believed to sanctify the food, making it Prasādaṁ
                - blessed food that nourishes the body and the soul.
              </p>
              <p>
                The ritualistic food offering before consumption emphasizes
                mindfulness and gratitude, concepts gaining traction in modern
                wellness practices. This ancient tradition teaches us to view
                food as fuel and a gift that sustains life, deserving respect
                and conscious consumption.
              </p>
              <p>
                The ancient Bhāratīya approach to food, as documented in texts
                like the Bhagavad Gītā, Upaniṣads, and Caraka Saṁhitā,
                transcends mere sustenance, aiming to achieve a harmonious
                balance between the body, mind, and spirit. These practices,
                rooted in deep spiritual and scientific understanding, are
                increasingly recognized for their relevance in modern times. By
                revisiting and integrating these ancient principles into our
                daily lives, we can work towards achieving a more balanced,
                healthy, and fulfilling existence.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/health-life-sciences/fs_ref.jpg")}
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

export default FS_2;

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
