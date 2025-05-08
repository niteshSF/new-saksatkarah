import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/yc-sciences/y_p_1.jpg";
import imageSrc2 from "../../assets/yc-sciences/y_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Y_2 = () => {
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
        <h1>योगः - Yoga</h1>

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
                          href="https://archive.org/details/PatanjaliYogaSutraBySwamiVivekananda"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Patanjali Yoga Sutra By Swami Vivekananda
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
                          href="https://archive.org/details/dfjl_2-100-asanas-yoga-books-yoga-books/page/n9/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          2, 100 Asanas Yoga Books Yoga Books By Yoga Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/inside-the-patanjali-yoga-sutras"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Inside The Patanjali Yoga Sutras By JAGANATH CARRERA
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/TheYogaUpanishads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Yoga Upanishads by Srinivasa Ayyangar G
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
            navigate("/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content")
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
                          href="#The Origins of Yoga"
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
                          The Origins of Yoga
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Practice of Āsanas"
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
                          The Practice of Āsanas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Prāṇāyāma: The Control of Breath"
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
                          Prāṇāyāma: The Control of Breath
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Spiritual Journey: Dhyāna and Samādhi"
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
                          The Spiritual Journey: Dhyāna and Samādhi
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Yoga and Āyurveda: A Holistic Approach"
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
                          Yoga and Āyurveda: A Holistic Approach
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
              Yoga, a profound gift from ancient Bhārat to the world, is a
              comprehensive system of well-being that integrates the body, mind,
              and the ātman. It is much more than a physical practice, deeply
              rooted in the rich spiritual and philosophical traditions of
              Bhārat. For thousands of years, it has been practiced to achieve
              spiritual enlightenment, mental clarity, and physical health. The
              ancient sages of Bhārat, through deep meditation and
              contemplation, developed Yoga as a path to inner peace and
              ultimate truth.
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
                alignItems: "flex-start",
                gap: "3rem",
                padding: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="The Origins of Yoga">The Origins of Yoga</h3>
                <p>
                  The origins of Yoga are steeped in antiquity, with references
                  found in the Vedas, the oldest sacred texts of Bhārat. The
                  R̥gveda, dating back to around 1500 BCE, mentions the practice
                  of meditation, which is a fundamental aspect of Yoga. However,
                  it is in the Upaniṣads, particularly the Chāndogya Upaniṣad
                  and the Kāṭha Upaniṣad, where the philosophical underpinnings
                  of Yoga are more explicitly discussed. These texts introduce
                  the concept of the self (Ātman) and its union with the
                  universal spirit (Brahman), which is the goal of Yoga.
                </p>
                <p>
                  The Yoga Sūtras of Patañjali, compiled around 400 BCE, are
                  considered the foundational text of classical Yoga.
                  Patañjali's Sūtras outline the eightfold path of Yoga, known
                  as Aṣṭāṅga Yoga, which includes ethical disciplines,
                  restraints and observances that one has to follow (Yama and
                  Niyama), controlled physical postures (Āsana), breath control
                  (Prāṇāyāma), sensory withdrawal (Pratyāhāra), concentration
                  (Dharāṇa), meditation (Dhyāna), and ultimately, liberation
                  (Samādhi). These principles guide practitioners towards
                  achieving a balanced life, free from suffering and connected
                  to the divine.
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
                <h3 id="The Practice of Āsanas">The Practice of Āsanas</h3>
                <p>
                  The controlled physical postures, or Āsanas, are perhaps the
                  most well-known aspect of Yoga in the modern world. However,
                  in ancient Bhārat, Āsanas were more than just exercises; they
                  were seen to prepare the body for meditation by promoting
                  physical strength, flexibility, and balance. The Haṭha Yoga
                  Pradīpika, a classical text on Haṭha Yoga, describes various
                  Āsanas designed to purify the body and make it a fit vessel
                  for the spiritual journey.
                </p>
                <p>
                  One of the most famous Āsanas is the Padmāsana (Lotus Pose),
                  traditionally used for meditation. This pose, a symbolic
                  representation of a lotus, signifies purity and spiritual
                  awakening. Another important Āsana is the Śīrṣāsana
                  (Headstand), often referred to as the “king of Āsanas” due to
                  its profound benefits for physical and mental health. When
                  practiced with mindfulness and breath awareness, these
                  postures help align the body with the mind and spirit.
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
              <h3 id="Prāṇāyāma: The Control of Breath">
                Prāṇāyāma: The Control of Breath
              </h3>
              <p>
                Prāṇāyāma, or breath control, is another critical component of
                Yoga. In the Yoga Sūtras, Patañjali emphasizes the importance of
                controlling the breath to calm the mind and prepare it for
                meditation. The practice of Prāṇāyāma involves various
                techniques, such as Nādī Śodhana (alternate nostril breathing)
                and Kapālabhāti (skull-shining breath), which are designed to
                cleanse the body's energy channels and enhance vitality.
              </p>
              <p>
                A well-known story from ancient Bhārat illustrates the power of
                Prāṇāyāma. The sage Viśvāmitra, through deep Prāṇāyāma practice,
                is said to have gained control over his life force and performed
                incredible feats of strength and endurance. This story
                highlights the belief in ancient Bhārat that mastering Prāṇāyāma
                could lead to extraordinary physical and spiritual capabilities.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Spiritual Journey: Dhyāna and Samādhi">
                The Spiritual Journey: Dhyāna and Samādhi
              </h3>
              <p>
                Meditation, or Dhyāna, is the core of Yoga practice. Ancient
                sages believed that through meditation, one could transcend
                physical and mental limitations and experience the true nature
                of the self. The ultimate goal of meditation is to achieve
                Samādhi, a state of complete absorption in the divine, where the
                individual self merges with the universal consciousness.
              </p>
              <p>
                The Bhagavad Gītā, another seminal text of ancient Bhārat,
                describes Dhyāna as a means to attain self-realization. In the
                sixth chapter, Lord Kṛṣṇa teaches Arjuna the importance of
                controlling the mind through meditation, so that the mind will
                be still like a candle flame which is undisturbed by wind. This
                metaphor beautifully captures the essence of meditation as a
                practice of inner stillness and unwavering focus.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Yoga and Āyurveda: A Holistic Approach">
                Yoga and Āyurveda: A Holistic Approach
              </h3>
              <p>
                In ancient Bhārat, Yoga was closely linked with Āyurveda, the
                traditional system of medicine. Both systems emphasize
                maintaining balance and harmony within the body and mind.
                Āyurveda provides the dietary and lifestyle guidelines that
                support Yoga practice, while Yoga offers the physical and mental
                exercises that enhance the effects of Ayurvedic treatments. This
                holistic approach ensures comprehensive well-being for the
                individual.
              </p>
              <p>
                The Rāsāyana therapies in Āyurveda, which focus on rejuvenation
                and longevity, often include Yoga practices to enhance their
                effectiveness. For example, the combination of specific Āsanas,
                Prāṇāyāma, and herbal treatments is recommended to promote
                longevity and prevent disease. This holistic approach reflects
                the deep integration of Yoga and Āyurveda in ancient Bhārat's
                wellness traditions.
              </p>
              <p>
                In addition to promoting health, this integration of Yoga and
                Āyurveda also served as a means of purification of the senses,
                mind, and intellect, helping individuals achieve higher states
                of consciousness.
              </p>
              <p>
                The wisdom in these ancient practices provided physical benefits
                and guided practitioners toward a more enlightened and
                harmonious way of life. With its profound spiritual, mental, and
                physical practices, Yoga is one of the most remarkable legacies
                of ancient Bhārat. Its emphasis on balance, self-discipline, and
                inner peace resonates with people worldwide. As we investigate
                Yoga's rich history, we are reminded of the timeless wisdom of
                ancient Bhārat and its enduring influence on global well-being,
                a testimony to the region's rich cultural heritage.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/yc-sciences/y_ref.jpg")}
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

export default Y_2;

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
