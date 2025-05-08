import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/social-science/abj_p_1.jpg";
import imageSrc2 from "../../assets/social-science/abj_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const ABJ_2 = () => {

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
        <h1>धर्मशास्त्रम् - Ancient Bhāratīya Jurisprudence</h1>

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
                          href="https://archive.org/details/dli.ernet.476505"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         The Baudhayana-dharmasutra
By Sastri M.m.a. Chinnaswami


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.400388"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Apastamba Dharama Sutra
By Shri Haradatta Misra


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/manusmriti-ed-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Manusmriti
By George Bühler


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
                          href="https://archive.org/details/history_of_dharmashastra_five_volumes_p_v_kane"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         History of Dharmashastra Vol. I - Vol. V
By P. V. Kane


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
            navigate("/Social_Sciences/Trade_and_Commerce_Content")
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
                          href="#The Foundation of Dharma"
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
                          The Foundation of Dharma
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Structure of the Dharmaśāstras"
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
                          The Structure of the Dharmaśāstras
                        </a>
                      </li>
                      <li>
                        <a
                          href="#The Role of Kings in Ancient Jurisprudence"
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
                          The Role of Kings in Ancient Jurisprudence
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Women and the Dharmaśāstras"
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
                          Women and the Dharmaśāstras
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Legacy of the Dharmaśāstras"
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
                          The Legacy of the Dharmaśāstras
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
              Ancient Bhārat was a land where law, morality, and spirituality
              were deeply intertwined. The Dharmaśāstras, ancient Bhāratīya
              texts that served as the foundational legal and ethical
              guidelines, were much more than mere legal codes; they were a
              comprehensive framework for leading a righteous life, harmonizing
              individual actions with the cosmic order. These texts, written in
              Sanskrit, encapsulate the essence of Bhāratīya jurisprudence and
              have shaped the legal and moral fabric of Bhāratīya society for
              millennia.
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
                <h3 id="The Foundation of Dharma">The Foundation of Dharma</h3>
                <p>
                  At the heart of ancient Bhāratīya jurisprudence is Dharma,
                  often translated as “duty” or “righteousness,” but it
                  encompasses much more. Dharma refers to the moral law
                  governing individual conduct and the order that sustains the
                  universe. The Dharmaśāstras elaborate on how Dharma applies to
                  various aspects of life, including personal ethics, social
                  responsibilities, and legal duties.
                </p>
                <p>
                  The Manusmṛti, one of the most well-known Dharmaśāstras,
                  provides a detailed account of the duties and responsibilities
                  of individuals according to their varṇa (social class) and
                  āśrama (stage of life). It outlines the roles and duties of
                  kings, priests, warriors, and commoners, emphasizing the
                  importance of maintaining social harmony through adherence to
                  one's Dharma. This text, along with others like the
                  Yājñavalkya Smṛti and the Nārada Smṛti, forms the backbone of
                  ancient Bhāratīya legal thought.
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
                <h3 id="The Structure of the Dharmaśāstras">
                  The Structure of the Dharmaśāstras
                </h3>
                <p>
                  The Dharmaśāstras are divided into sections that deal with
                  various aspects of life, including ācāra (conduct), vyavahāra
                  (legal procedure), and prāyaścitta (penance). The ācāra
                  section deals with daily rituals, social customs, and personal
                  conduct, while vyavahāra provides guidelines for resolving
                  disputes and administering justice. The prāyaścitta section
                  prescribes atonements for sins and wrongdoings, reflecting the
                  belief in the possibility of redemption and the restoration of
                  moral order.
                </p>
                <p>
                  The Yājñavalkya Smṛti, for instance, is notable for its
                  detailed treatment of legal procedures. It discusses the roles
                  of judges, the presentation of evidence, and the importance of
                  impartiality in administering justice. The Nārada Smṛti is
                  also renowned for its emphasis on vyavahāra and provides a
                  more practical approach to legal issues, focusing on resolving
                  disputes through arbitration and mediation rather than strict
                  legalism.
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
              <h3 id="The Role of Kings in Ancient Jurisprudence">
                The Role of Kings in Ancient Jurisprudence
              </h3>
              <p>
                In ancient Bhārat, the king was not just a ruler but also the
                upholder of Dharma. The king's primary duty was to protect his
                subjects and ensure justice was administered. The Manusmṛti and
                the Arthaśāstra, attributed to Kauṭilya, emphasize the king's
                responsibility to maintain law and order. The king was expected
                to be well-versed in the Dharmaśāstras and to consult with
                learned Brāhmaṇas and legal experts when making decisions.
              </p>
              <p>
                One fascinating story that highlights the king's role in
                upholding Dharma is that of King Hariścandra, renowned for his
                unwavering commitment to truth and justice. According to legend,
                Hariścandra was tested by the sage Viśvāmitra, who subjected him
                to severe trials, including losing his kingdom, wealth, and
                family. Despite these hardships, Hariścandra remained steadfast
                in his duty, refusing to abandon the path of righteousness. His
                story provides robust evidence of the ideal of a just ruler who
                upholds Dharma even in the face of personal loss.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Women and the Dharmaśāstras">
                Women and the Dharmaśāstras
              </h3>
              <p>
                The position of women in ancient Bhāratīya Dharmaśāstras is
                noteworthy for the recognition of their significant roles in
                society. The Dharmaśāstras prescribe specific duties and rights
                for women, often emphasizing their roles as daughters, wives,
                and mothers while acknowledging their intellectual and spiritual
                contributions. The Manusmṛti, for example, asserts that women
                should be protected and respected, reflecting the high regard
                for them and their well-being in society. Other texts like the
                Bṛhaspati Smṛti recognize the importance of women in maintaining
                the social fabric and grant them certain legal rights,
                particularly in matters of inheritance and property. The
                Mānāsollāsa, a 12th-century text by King Someśvara III, provides
                evidence of women's active participation in the legal system
                particularly in the administration of temples and religious
                institutions.
              </p>
              <p>
                Furthermore, the ancient texts also celebrate women like Gārgī,
                a revered philosopher who participated in intellectual debates
                with sages like Yājñavalkya, thus showcasing their esteemed
                position in Vedic society. Women like Maitreyī and Lopāmudrā are
                remembered for their wisdom and contributions to philosophical
                thought, reflecting the deep respect accorded to them for their
                intellectual capabilities. These examples illustrate that women
                in ancient Bhārat were integral to the social and familial
                structure and played significant roles in spiritual,
                philosophical, and economic spheres, embodying the true essence
                of Dharma.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Legacy of the Dharmaśāstras">
                The Legacy of the Dharmaśāstras
              </h3>
              <p>
                The Dharmaśāstras have had a lasting impact on Bhāratīya society
                and its legal systems. Even with the advent of British colonial
                rule, when Western legal principles were introduced, the basic
                principles of the Dharmaśāstras continued to be widely respected
                and followed in society. These principles therefore influenced
                personal laws, particularly in marriage, inheritance, and family
                laws, as codified by the British, and the Hindu Code Bills,
                passed in Independent India in the mid-20th century.
              </p>
              <p>
                The Dharmaśāstras also laid the foundation for the concept of
                justice in ancient Bhārat, where Dharma was seen as the ultimate
                law that transcended human-made statutes. This idea of justice
                as an expression of cosmic order is still relevant today,
                reminding us of the need to align our legal systems with ethical
                and moral principles.
              </p>
              <p>
                The ancient Bhāratīya jurisprudence embodied in the
                Dharmaśāstras is a testament to the depth and sophistication of
                Bhārat's legal and moral philosophy. These texts offer a rich
                spectrum of guidelines and principles that governed individuals'
                lives and shaped the broader social and cosmic order.
                Emphasizing Dharma, the Dharmaśāstras continue to inspire and
                guide, reflecting the timeless wisdom of ancient Bhārat.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/social-science/abj_ref.jpg")}
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

export default ABJ_2;

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
