import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/social-science/ms_p_1.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const MS_2 = () => {
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
        <h1>युद्ध-विज्ञानम् - Military Science</h1>

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
                         Kautilya’S Arthasastra
By Shamasastry, R.

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
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.382701"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Vasista’s Dhanurveda Samhita
By Purnima Ray


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dli.ernet.496518"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Manasollasa Of King Somesvara
By King Somesvara; G.k.shrigondekar.baroda


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
                          href="https://archive.org/details/in.ernet.dli.2015.110150"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Military System In Ancient India
By Majumdar,bimal Kanti


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.512231"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          War In Ancient India
By Dikshitar,v.r.ramachandra


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dli.bengal.10689.21517"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         MILITARY HISTORY OF INDIA
By SARKAR, JADUNATH


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
                          href="#The Foundations of Military Science: Arthaśāstra"
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
                          The Foundations of Military Science: Arthaśāstra
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Ethics of War in the Mahābhārata"
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
                          Ethics of War in the Mahābhārata
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Technological Advancements in Warfare"
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
                          Technological Advancements in Warfare
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Strategic Insights from the Rāmāyaṇa"
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
                          Strategic Insights from the Rāmāyaṇa
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Integration of Spirituality and Warfare"
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
                          The Integration of Spirituality and Warfare
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
              Ancient Bhārat, a land of profound wisdom and unparalleled valour,
              was home to some of humanity's most sophisticated military
              strategies and technologies. The art of warfare, or Yuddhavidyā,
              was not just a physical endeavour but a profoundly spiritual and
              intellectual pursuit. It encompassed everything from strategic
              planning and ethical considerations to using advanced weaponry and
              innovative tactics. The military science of ancient Bhārat was
              rooted in the principles of Dharma, ensuring that warfare was
              conducted with righteousness, fairness, and a sense of duty
              towards the greater good.
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
                <h3 id="The Foundations of Military Science: Arthaśāstra">
                  The Foundations of Military Science: Arthaśāstra
                </h3>
                <p>
                  One of the most comprehensive treatises on military science
                  from ancient Bhārat is the Arthaśāstra, authored by Kauṭilya
                  (also known as Cāṇakya), the chief advisor to Emperor
                  Candragupta Maurya in the 4th century BCE. The Arthaśāstra is
                  a monumental work that covers a wide range of topics related
                  to statecraft, including military strategy, espionage, and
                  diplomacy. It provides detailed instructions on the
                  organization and training of armies, the use of spies, and the
                  conduct of warfare.
                </p>
                <p>
                  Kauṭilya's Arthaśāstra emphasizes the importance of
                  preparedness and strategic planning in warfare. It discusses
                  various types of warfare, including open warfare
                  (prakāśayuddha) and deceitful warfare (kūṭayuddha). It advises
                  rulers on the best tactics based on their enemies' strengths
                  and weaknesses (Arthaśāstra). The text also delves into the
                  ethical aspects of warfare, insisting that a ruler should only
                  engage in war after exhausting all other options and, even
                  then, adhere to the principles of Dharma.
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

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Ethics of War in the Mahābhārata">
                Ethics of War in the Mahābhārata
              </h3>
              <p>
                The Mahābhārata is a crucial source of military science in
                ancient Bhārat, offering a narrative of the Kurukṣetra war and
                valuable strategic and ethical teachings. Within it, the
                Bhagavad Gītā features a profound dialogue where Lord Kṛṣṇa
                guides Arjuna on duty, righteousness, and the moral complexities
                of warfare. Central to the Mahābhārata is the principle of
                Dharma in war: the epic contrasts the Kauravas' downfall, which
                was driven by adharma, with the Pāṇḍavas' victory which was
                rooted in righteousness. The text also underscores the
                importance of ethical conduct in battle, condemning attacks on
                unarmed or retreating foes and advocating restraint with
                destructive weapons (Mahābhārata, Bhīṣma Parva, 3.72). Both
                Arthaśāstra and Mahābhārata emphasise the ideal of dharmavijaya
                that the victorious king should honour the gods and deities and
                the customs of the defeated kingdom and install a ruler from its
                own royal family.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Technological Advancements in Warfare">
                Technological Advancements in Warfare
              </h3>
              <p>
                Ancient Bhārat was also known for its technological innovations
                in warfare. Chariots, elephants, and advanced weaponry such as
                the bow and arrow, swords, and maces were used daily in battles.
                One of the most remarkable texts of military technology is the
                Dhanurveda, a treatise on the science of archery attributed to
                Sage Vasiṣṭha. This text covers various aspects of warfare,
                including the training of the warrior, the selection of weapons,
                and the tactics to be employed in battle.
              </p>
              <p>
                The Dhanurveda also describes various arrows, including those
                tipped with fire and poison and protective armour made from
                leather and metal. The text emphasizes the importance of
                physical fitness, mental discipline, and spiritual strength in a
                warrior, reflecting the holistic approach to military science in
                ancient Bhārat.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Strategic Insights from the Rāmāyaṇa">
                Strategic Insights from the Rāmāyaṇa
              </h3>
              <p>
                The Rāmāyaṇa, another epic of ancient Bhārat, also provides
                valuable insights into military science. The story of Lord
                Rāma's battle against the demon king Rāvaṇa is a classic example
                of how strategic planning, moral integrity, and divine guidance
                can lead to victory against overwhelming odds.
              </p>
              <p>
                In the Rāmāyaṇa, Lord Rāma's approach to warfare is deeply
                rooted in the principles of Dharma. Before engaging in battle,
                Rāma seeks to avoid conflict by sending emissaries to negotiate
                peace with Rāvaṇa. When diplomacy fails, Rāma meticulously plans
                his campaign, considering the strengths and weaknesses of his
                army and the enemy. His alliance with the monkey king Sugrīva
                and the meticulous preparation of the monkey army, including the
                construction of the bridge to Laṅkā, are examples of strategic
                foresight and innovation.
              </p>
              <p>
                The Rāmāyaṇa also highlights the importance of leadership and
                the role of a king as a protector of Dharma. Rāma's commitment
                to righteousness, even in the face of personal suffering, is a
                model for ethical leadership in warfare. His victory over Rāvaṇa
                is a military triumph and a vindication of moral and ethical
                principles.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Integration of Spirituality and Warfare">
                The Integration of Spirituality and Warfare
              </h3>
              <p>
                One of the unique aspects of military science in ancient Bhārat
                is the integration of spirituality with warfare. Dharma Yuddha,
                or righteous war, was central to the ancient Bhāratīya approach
                to warfare. Warriors were trained in physical combat and
                spiritual practices like meditation and yoga, believed to
                enhance their mental clarity, focus, and moral integrity.
              </p>
              <p>
                The importance of mental and spiritual preparation in warfare is
                also evident in the Bhagavad Gītā, where Lord Kṛṣṇa advises
                Arjuna to focus on his warrior duty and fight without attachment
                to the results. He explains that this detachment is essential
                for maintaining clarity of mind and righteousness in action
                (Bhagavad Gītā, 2.47).
              </p>
              <p>
                The military science of ancient Bhārat, as reflected in texts
                like the Arthaśāstra, Mahābhārata, and Rāmāyaṇa, was a
                sophisticated and comprehensive system that integrated strategic
                planning, technological innovation, ethical conduct, and
                spiritual discipline. These texts provide valuable insights into
                the principles of leadership, the dynamics of warfare, and the
                importance of Dharma in the conduct of war. The legacy of
                Yuddhavidyā continues to inspire and guide modern military
                thought, reminding us of the timeless wisdom of ancient Bhārat
                and its enduring influence on the world of military science.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/social-science/ms_ref.jpg")}
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

export default MS_2;

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
