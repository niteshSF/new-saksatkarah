import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/social-science/ps_p_1.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const PS_2 = () => {
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

  return (
    <div>
      <div className="head-section">
        <h1>राजनीतिशास्त्रम् - Political Science</h1>

        <Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Social_Sciences")}
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
                          Kautilya’S Arthasastra By Shamasastry, R.
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/menon-ramesh-the-complete-mahabharata-volume-1-12"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Complete Mahabharata Volume 1 to 12
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
                          href="https://archive.org/details/in.ernet.dli.2015.282598"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Political History Of Ancient India By Hemchandra
                          Raychaudhuri
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.228417"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Great Epics Of Ancient India By Dutt, Romesh C.
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
          onClick={() => navigate("/Social_Sciences/Military_Science_Content")}
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
            <section
              className={`alge-left-section ${
                isFooterVisible ? "adjusted-up" : ""
              }`}
            >
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
                        href="/Social_Sciences"
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
                        Social Sciences
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
                        href="/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Ancient Bhāratīya Jurisprudence
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Social_Sciences/Trade_and_Commerce_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Trade and Commerce
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Social_Sciences/Political_Science_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Political Science
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
                          href="#Arthaśāstra: The Cornerstone of Indian Political and Economic Thought"
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
                          Arthaśāstra: The Cornerstone of Indian Political and
                          Economic Thought
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Mahābhārata: Ethical Leadership and Statecraft"
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
                          The Mahābhārata: Ethical Leadership and Statecraft
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Rāmāyaṇa: Ideal Governance and Moral Authority"
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
                          The Rāmāyaṇa: Ideal Governance and Moral Authority
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Political Philosophy in the Dharmaśāstras"
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
                          Political Philosophy in the Dharmaśāstras
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
                        href="/Social_Sciences/Military_Science_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Military Science
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
              The political science of ancient Bhārat, with its profound wisdom
              and remarkable foresight that anticipated many modern principles,
              was a sophisticated discipline that guided rulers and
              administrators in governance and the administration of justice.
              The tenets of statecraft were deeply rooted in Dharma, the moral
              and ethical code that governed every aspect of life. The ancient
              texts that dealt with political science, such as the Arthaśāstra,
              Mahābhārata, and Rāmāyaṇa, provided comprehensive guidelines on
              leadership, governance, diplomacy, and warfare, reflecting the
              advanced understanding and wisdom of political science in ancient
              Bhārat.
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
                <h3 id="Arthaśāstra: The Cornerstone of Indian Political and Economic Thought">
                  Arthaśāstra: The Cornerstone of Indian Political and Economic
                  Thought
                </h3>
                <p>
                  One of ancient Bhārat's most influential texts in political
                  science is Kauṭilya's Arthaśāstra, composed around the 4th
                  century BCE. Kauṭilya, also known as Cāṇakya or Viṣṇugupta,
                  was not only the chief advisor to Emperor Candragupta Maurya,
                  the founder of the Maurya Empire, but also a renowned
                  political philosopher and economist. The Arthaśāstra is a
                  comprehensive and detailed treatise on statecraft, economic
                  policy, and military strategy, covering various aspects of
                  governance, including the duties of a king, the management of
                  the economy, the administration of justice, and the conduct of
                  foreign relations. Kauṭilya's Arthaśāstra emphasizes the
                  importance of a robust state led by a wise and virtuous ruler.
                  It outlines the qualities of an ideal king, such as wisdom,
                  courage, and self-discipline, and stresses the need for the
                  king to be well-versed in the science of politics
                  (Arthaśāstra, 1.5). The text also provides detailed
                  instructions on the organization of the government, the roles
                  and responsibilities of ministers, and the maintenance of law
                  and Dharma.
                </p>
                <p>
                  One of the critical contributions of the Arthaśāstra to
                  political science is its exposition of the maṇḍala theory, a
                  key element that underlies the dynamics of interstate
                  relations. According to this theory, a king must be aware of
                  the political landscape surrounding his kingdom, which
                  consists of allies, enemies, and neutral states. The
                  Arthaśāstra advises the ruler to adopt a pragmatic approach to
                  diplomacy, using strategies such as treaties, alliances, and
                  military force to achieve their objectives. This theory is
                  paramount as it provides a strategic framework for
                  understanding and managing interstate relations, a crucial
                  aspect of governance in ancient Bhārat (Arthaśāstra).
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

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Mahābhārata: Ethical Leadership and Statecraft">
                The Mahābhārata: Ethical Leadership and Statecraft
              </h3>
              <p>
                The Mahābhārata, one of the great Bhāratīya epics, provides
                valuable insights into political science and statecraft. Sage
                Vyāsa composed the epic, a narrative of the Kurukṣetra war and a
                rich source of Dharma, including moral and political teachings.
                The Bhagavad Gītā, a part of the Mahābhārata, is a dialogue
                between Lord Kṛṣṇa and the warrior prince Arjuna, offering
                profound lessons on duty, leadership, and ethics.
              </p>
              <p>
                In the Mahābhārata, the concept of Dharma plays a central role
                in governance and politics. The epic illustrates the
                consequences of adharma (unrighteousness) in leadership through
                the downfall of the Kauravas, who were driven by greed,
                ambition, and deceit. In contrast, the Pāṇḍavas, who upheld
                Dharma, ultimately emerged victorious, symbolizing the inspiring
                triumph of righteousness over evil. The Mahābhārata also
                emphasizes the importance of ethical leadership and the
                responsibilities of a king towards his subjects. The discourse
                between Bhīṣma and Yudhiṣṭhira in the Śānti Parva provides a
                detailed account of a king's duties, including the
                administration of justice, the protection of the weak, and the
                promotion of social welfare (Mahābhārata, Śānti Parva, 90.1).
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Rāmāyaṇa: Ideal Governance and Moral Authority">
                The Rāmāyaṇa: Ideal Governance and Moral Authority
              </h3>
              <p>
                The Rāmāyaṇa, another grand Bhāratīya epic composed by Sage
                Vālmīki, is a story of Lord Rāma, the ideal king, and his
                journey to uphold Dharma. The epic serves as a guide to
                righteous governance and the qualities of a perfect ruler. Rāma
                is portrayed as a king who is just, compassionate, and committed
                to the welfare of his subjects.
              </p>
              <p>
                The Rāmāyaṇa illustrates the concept of Rāmarājya, an ideal
                state where the ruler governs with moral authority and ensures
                the happiness and prosperity of his people. In Rāmarājya,
                justice prevails, and everyone is content. Rāma's adherence to
                Dharma, even in the face of personal suffering, exemplifies the
                ideal of selfless leadership. The epic also highlights the
                importance of consultation and collaboration in governance, as
                seen in Rāma's interactions with his ministers and advisors.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Political Philosophy in the Dharmaśāstras">
                Political Philosophy in the Dharmaśāstras
              </h3>
              <p>
                The Dharmaśāstras, ancient legal and moral texts, also
                contributed to the political philosophy of ancient Bhārat. These
                texts, including the Manusmṛti and the Yājñavalkya Smṛti,
                provided governance guidelines based on Dharma principles. They
                outlined the duties of a king, the administration of justice,
                and the maintenance of social order.
              </p>
              <p>
                The Manusmṛti, for example, emphasizes the king's responsibility
                to protect his subjects and uphold the principles of justice
                (Manusmṛti). It also provides a framework for the administration
                of justice, including the role of judges and the procedures for
                resolving disputes. The text stresses the importance of
                impartiality and fairness in the judicial process, reflecting
                ancient Bhārat's adherence to Dharma in its legal principles and
                procedures.
              </p>
              <p>
                The political science of ancient Bhārat, as reflected in texts
                like the Arthaśāstra, Mahābhārata, Rāmāyaṇa, and Dharmaśāstras,
                was a sophisticated and comprehensive system that guided rulers
                in governance, diplomacy, and the administration of justice.
                These texts provide valuable insights into leadership qualities,
                the importance of ethical governance, and the dynamics of
                interstate relations, and they continue to influence modern
                political science. The integration of moral and ethical
                considerations into the political philosophy of ancient Bhārat
                ensured that the pursuit of power was balanced with the need for
                justice and the welfare of the people. As we explore the rich
                legacy of ancient Bhārat's political philosophy, we gain a
                deeper appreciation for the timeless wisdom that should inspire
                modern governance and leadership.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/social-science/ps_ref.jpg")}
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

export default PS_2;

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
