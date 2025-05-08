import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/yc-sciences/cs_p_1.jpg";
import imageSrc2 from "../../assets/yc-sciences/cs_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const CS_2 = () => {
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
        <h1>प्रात्यक्षिक विज्ञानम् - Cognitive Sciences</h1>

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
                          href="https://archive.org/details/in.ernet.dli.2015.282411/page/n13/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Upanisads Part I
By Srisa Chandra Vasu


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/upanishads01ml"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Upanishads
By Müller, F. Max (Friedrich Max)


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.gov.ignca.279"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Srimad Bhagavad Gita (Sanskrit, Hindi and English)
By Kaushik, Ashok


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
                          href="https://archive.org/details/the-complete-works-of-swami-vivekananda-9-volumes/page/n19/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Complete Works Of Swami Vivekananda ( 9 Volumes)
By VivekaVani


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.460154"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Indian Psychology, Volume 1, Cognition
By Jadunath Sinha


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
            navigate("/Yoga_Cognitive_Sciences/Psychology_Mantras_Content")
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
                          href="#The Concept of the Mind in Vedic and Upaniṣadic Thought"
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
                          The Concept of the Mind in Vedic and Upaniṣadic
                          Thought
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sāṅkhya and Yoga: The Duality of Mind and Matter"
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
                          Sāṅkhya and Yoga: The Duality of Mind and Matter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Power of Memory: Smṛti and Anusmṛti"
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
                          The Power of Memory: Smṛti and Anusmṛti
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Cognitive Techniques in Meditation and Mindfulness"
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
                          Cognitive Techniques in Meditation and Mindfulness
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Neuroplasticity and Ancient Bhārat's Understanding of the Brain"
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
                          Neuroplasticity and Ancient Bhārat's Understanding of
                          the Brain
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
              The cognitive sciences, concerned with understanding the mind and
              its processes, have deep roots in ancient Bhārat. The sages and
              scholars of ancient Bhārat, who lived during the Vedic and
              Upaniṣadic periods, delved into the complexities of human
              consciousness, perception, memory, and cognition. They recorded
              their insights in ancient texts such as the R̥gveda, the
              Br̥hadāraṇyaka Upaniṣad, and the Yoga Sūtras and practiced
              techniques like Dhyāna and Vipassana. These texts and practices
              reveal a sophisticated understanding of the mind that continues to
              influence modern psychology, philosophy, and neuroscience.
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
                <h3 id="The Concept of the Mind in Vedic and Upaniṣadic Thought">
                  The Concept of the Mind in Vedic and Upaniṣadic Thought
                </h3>
                <p>
                  In the Vedic period, the mind (Manas) was a bridge between the
                  physical and spiritual worlds. The R̥gveda and other Vedic
                  texts describe the mind as a powerful tool that, when properly
                  harnessed, can lead to self-realization and liberation
                  (Mokṣa). The mind was not merely a faculty for thinking and
                  perceiving but also a reflection of the soul's state.
                </p>
                <p>
                  The Upaniṣads, which mark the philosophical evolution of Vedic
                  thought, further explore the nature of the mind. The
                  Br̥hadāraṇyaka Upaniṣad and the Chāndogya Upaniṣad discuss the
                  mind's role in perception and memory. They propose that the
                  mind is influenced by the senses but it also has the power to
                  transcend sensory experiences through meditation and
                  contemplation. The concept of Māyā — the illusion or veil that
                  clouds human perception—is central to understanding how the
                  mind can be both a source of knowledge and delusion.
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
                <h3 id="Sāṅkhya and Yoga: The Duality of Mind and Matter">
                  Sāṅkhya and Yoga: The Duality of Mind and Matter
                </h3>
                <p>
                  The Sankhya philosophy, one of the six classical schools of
                  Bhāratīya philosophy, presents a dualistic view of reality,
                  dividing existence into Prakṛti (matter) and Purusha
                  (consciousness). According to Sankhya, the mind is part of
                  Prakṛti and is influenced by the three Gunas — Sattva
                  (purity), Rajas (activity), and Tamas (inertia). These Gunas
                  shape an individual's thoughts, emotions, and behaviour.
                </p>
                <p>
                  Yoga, as expounded by Patañjali in the Yoga Sūtras, builds on
                  Sankhya's understanding of the mind. Patañjali outlines an
                  eightfold path (Aṣṭāṅga Yoga) to gain mastery over the mind
                  and senses, culminating in Samādhi, a state of perfect mental
                  clarity and unity with the divine. The practice of Pratyāhāra
                  (withdrawal of the senses) and Dhyāna (meditation) in Yoga is
                  aimed at transcending the limitations of the mind, allowing
                  the practitioner to experience higher states of consciousness
                  and cognitive functions.
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
              <h3 id="The Power of Memory: Smṛti and Anusmṛti">
                The Power of Memory: Smṛti and Anusmṛti
              </h3>
              <p>
                In ancient Bhāratīya thought, memory (Smṛti) is the recollection
                of past events and a vital cognitive process that influences
                decision-making and moral judgment. The Mahābhārata and the
                Bhagavad Gītā emphasize the importance of Smṛti in maintaining
                Dharma and guiding one's actions. The concept of Anusmṛti, or
                deep recollection, refers to remembering one's true nature and
                purpose, which is essential for spiritual development.
              </p>
              <p>
                The Nyāya school of philosophy, which focuses on logic and
                epistemology, explores memory as a source of valid knowledge
                (Pramāṇa). According to Nyāya, memory is derived from previous
                experiences and perceptions and plays a crucial role in
                reasoning and inference. This advanced understanding of memory
                as an integral part of cognitive processes highlights the
                incisive nature of ancient Bhāratīya cognitive science.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Cognitive Techniques in Meditation and Mindfulness">
                Cognitive Techniques in Meditation and Mindfulness
              </h3>
              <p>
                Meditation and mindfulness, practices central to ancient
                Bhāratīya spiritual traditions, are also powerful tools for
                cognitive development. Techniques such as Dhyāna (focused
                meditation) and Vipassana (insightful meditation) are designed
                to sharpen the mind's focus, increase awareness, and foster deep
                introspection. These practices enhance cognitive abilities such
                as attention, concentration, and emotional regulation.
              </p>
              <p>
                A well-known story from the Mahābhārata involves Arjuna, who
                overcame his doubts and confusion before the great battle of
                Kurukshetra through deep meditation and guidance from Lord
                Kṛṣṇa. This cognitive clarity, achieved through meditation and
                devotion, enabled Arjuna to fulfill his Dharma, embodying the
                transformative power of focused thought and spiritual guidance.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Neuroplasticity and Ancient Bhārat's Understanding of the Brain">
                Neuroplasticity and Ancient Bhārat's Understanding of the Brain
              </h3>
              <p>
                Although the concept of neuroplasticity—the brain's ability to
                reorganize itself by forming new neural connections—is a
                relatively recent discovery, ancient Bhāratīya texts hint at
                understanding the mind's malleabili ty. The practice of Saṃskāra,
                or mental impressions generated by appropriate thoughts and
                actions, suggests that repeated thoughts and actions can create
                lasting changes in the mind. This aligns with the modern
                understanding that repetitive behaviours can rewire the brain,
                strengthening specific neural pathways.
              </p>
              <p>
                One such fascinating concept is the Manasa Prakṛti, discussed in
                the Chāndogya Upaniṣad. This concept describes how different
                mental practices can alter one's innate nature and lead to
                profound cognitive transformations. This understanding of mental
                conditioning through meditation and ethical conduct highlights
                the advanced cognitive theories in Vedic thought.
              </p>
              <p>
                The cognitive sciences in ancient Bhārat were closely connected
                with spiritual practices, reflecting a holistic approach to
                understanding the mind and its proclivities. The insights
                offered by ancient Bhāratīya philosophies, meditation practices,
                and ethical teachings provide a wealth of knowledge and have
                practical applications in modern cognitive science. For
                instance, the concept of Saṃskāra, or generation of mental
                impressions, aligns with the contemporary understanding that
                repeated thoughts and actions can create lasting changes in the
                mind. This concept, along with others, continues to resonate
                with and influence modern cognitive science, reflecting the
                lasting wisdom of Bhāratīya people.
              </p>
              
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/yc-sciences/cs_ref.jpg")}
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

export default CS_2;

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
