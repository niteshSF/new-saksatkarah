import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/health-life-sciences/sop_p_1.jpg";
import imageSrc2 from "../../assets/health-life-sciences/sop_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const SOP_2 = () => {
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
        <h1>नाडी-विज्ञानम् - Science of Pulse</h1>

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
                          href="https://archive.org/details/HagW_nadi-vigyan-of-maharshi-kanad-with-vidyotini-bhasha-tika-by-indradev-tripathi-chaukhambha/page/n1/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Nadi Vigyan Of Maharshi Kanad With Vidyotini Bhasha
                          Tika By Indradev Tripathi Chaukhambha by Chaukhambha
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
                          href="https://archive.org/details/in.ernet.dli.2015.102712/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Indian Science Of Pulse,vol.i
By Chatterjee,prabhakar


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/secretsofthepulseancientartofayurvedicpulsediagnosisvasantdattatraylad_431_T/page/n5/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Secrets Of The Pulse Ancient Art Of Ayurvedic Pulse Diagnosis Vasant Dattatray Lad
By Mahesha Chanda


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
                          href="#Historical Significance and Textual References"
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
                          Historical Significance and Textual References
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Methodology and Application"
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
                          Methodology and Application
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Modern Innovations and Relevance"
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
                          Modern Innovations and Relevance
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
              Nadī Vijnānam, the science of pulse diagnosis, is one of the most
              thoughtful and ancient techniques in traditional Bhāratīya
              medicine. It represents a holistic approach to understanding the
              body's physical, mental, and emotional states, by the means of the
              non-invasive art of pulse examination. This practice, known as
              Nadī Parīkṣā, allows an experienced Ayurvedic practitioner, or
              Vaidya, to diagnose imbalances in the body's doṣas — Vāta, Pitta,
              and Kapha — by analyzing the pulse at specific points on the
              wrist. Importantly, this is done with utmost care and
              consideration for the patient's comfort and well-being, making it
              a gentle and respectful process.
            </p>
            <p style={{ minWidth: "300px", padding: "0.5rem" }}>
              In ancient Bhārat, Nadī Parīkṣā was often seen as a sacred
              practice, passed down through generations of Vaidyas who were
              trained not just in the physical aspects of pulse diagnosis but
              also in its metaphysical dimensions. There are tales of legendary
              Vaidyas who could diagnose the most subtle imbalances simply by
              feeling the pulse, often revealing insights into the patient's
              life and health that extended beyond the physical realm. For
              instance, it is said that the great sage Agastya, one of the
              revered figures in Ayurveda, could discern the precise moment of a
              patient's doṣa imbalance and predict future health outcomes with
              remarkable accuracy, instilling a sense of confidence in the
              accuracy of Ayurvedic diagnosis. This profound understanding of
              the human body and the spiritual wisdom of the sages made Nadī
              Vijnāna not just a diagnostic tool but a path to holistic healing,
              where the mind, body, and soul were treated as one.
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
                <br />
                <h3 id="Historical Significance and Textual References">
                  Historical Significance and Textual References
                </h3>
                <p>
                  Nadī Parīkṣā is mentioned in several ancient Ayurvedic texts,
                  such as Śārṅgadhara Saṁhitā in the 13th century and later in
                  Bhāvaprakāśa by Śrī Bhāvamiśra in the 16th century. However,
                  it was during the 17th century through the text Yogarātnākara
                  that Nadī Parīkṣā gained widespread recognition, with 48
                  verses dedicated to this science. The Yogarātnākara detailed
                  the appropriate times for pulse examination, the rules for the
                  physician and patient, and the procedures to be followed
                  before and after the examination. In these texts, Nadī Parīkṣā
                  is not just seen as a diagnostic tool but as a gateway to
                  understanding the deeper aspects of a person's health,
                  including their mental and emotional states. The pulsation of
                  the pulse varies according to the time of day, correlating
                  with the dominance of specific doṣas—Kapha in the morning,
                  Pitta at midday, and Vāta in the evening. This understanding
                  is rooted in the Ayurvedic concepts pertaining to the
                  Śārṅgadhara Saṁhitā, 13th century; Bhāvaprakāśa, 16th century.
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
                <br />
                <h3 id="Methodology and Application">
                  Methodology and Application
                </h3>
                <p>
                  The process of Nadī Parīkṣā involves the Vaidya placing three
                  fingers—index, middle, and ring—on the radial artery of the
                  patient's wrist. Each finger corresponds to one of the three
                  doṣas: the index finger corresponds to Vāta, the middle finger
                  corresponds to Pitta, and the ring finger corresponds to
                  Kapha. By sensing the pulse at these points, the Vaidya can
                  determine the balance or imbalance of the doṣas, which is
                  crucial for diagnosing various ailments. The Vaidya's fingers
                  act as receptors, sensing the subtle variations in the pulse
                  that indicate the state of the doṣas.
                </p>
                <p>
                  This technique is susceptible, providing insights into
                  physical conditions, mental attitudes, subconscious patterns,
                  and even the karmic imprints (saṁskāras) that influence an
                  individual's health. Saṁskāras are the residual impressions
                  left on the mind and body by past experiences, and they can
                  influence an individual's health and well-being. The pulse
                  reflects the body's channels (Nāḍīs), which convey information
                  from every organ, tissue, and cell to the Vaidya's discerning
                  touch.
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
              <h3 id="Modern Innovations and Relevance">
                Modern Innovations and Relevance
              </h3>
              <p>
                While Nadī Parīkṣā has been practiced for centuries, modern
                technology is now being employed to preserve and advance this
                ancient wisdom. One such innovation is the Nadī Tāraṅginī, a
                device developed by Dr. Aniruddha Joshi, which uses hardware and
                AI-based software to replicate the traditional Nadī Parīkṣā
                process. This device records the pulse at the three doṣa points
                and provides data on the body's constitution, making Ayurvedic
                diagnosis more accessible in today's fast-paced world. This
                integration of ancient wisdom with contemporary innovation
                ensures that Ayurveda remains a relevant and respected science
                globally, offering hope for the future of holistic health
                practices.
              </p>
              <p>
                As patients begin to see Ayurveda not just as an alternative but
                as a sophisticated and effective system of medicine, the ancient
                science of Nadī Vijnānam is poised to make a significant impact
                on global health practices. Nadī Vijnānam, with its roots in
                ancient Ayurvedic texts, continues to offer invaluable insights
                into human health. The practice of Nadī Parīkṣā, while deeply
                traditional, is being revitalized through modern technology,
                ensuring its relevance for future generations. One such story
                that illustrates the profound impact of Nadī Vijnāna involves
                the renowned Vaidya, Rāvaṇa, author of the Rāvaṇa Saṁhitā. It is
                said that Rāvaṇa, known not only for his wisdom but also for his
                deep knowledge of Ayurveda, once saved a kingdom from an
                epidemic by diagnosing the root cause through Nadī Parīkṣā. He
                discerned that the epidemic was due to a collective doṣa
                imbalance among the people, aggravated by their environment and
                lifestyle. By prescribing specific dietary changes and rituals
                to restore balance, Rāvaṇa successfully curbed the spread of the
                disease, demonstrating the power of Nadī Vijnānam as a tool for
                public health. This story not only underscores the depth of
                ancient wisdom but also highlights the enduring relevance of
                Nadī Vijnānam in addressing contemporary health challenges. By
                combining ancient wisdom with contemporary innovation, Nadī
                Vijnānam is set to contribute significantly to the holistic
                understanding of health and wellness in the modern era.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/health-life-sciences/sop_ref.jpg")}
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

export default SOP_2;

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
