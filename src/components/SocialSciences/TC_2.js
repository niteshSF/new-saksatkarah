import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/social-science/tc_p_1.jpg";
import imageSrc2 from "../../assets/social-science/tc_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const TC_2 = () => {
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
        <h1>व्यापारः तथा वाणिज्यम् - Trade and Commerce</h1>

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
                          href="https://archive.org/details/in.ernet.dli.2015.429423/page/n3/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Trade And Commerce In Ancient India Ac 4720 (1968) By
                          Digital Library Of India
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dli.ernet.108174"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Trade and Trade Routtes In Ancient India By Chandra,
                          Moti
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.511978"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Economic History Of Ancient India By Das,santosh
                          Kumar
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
          onClick={() => navigate("/Social_Sciences/Political_Science_Content")}
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
                          href="#The Barter System and the Emergence of Currency"
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
                          The Barter System and the Emergence of Currency
                        </a>
                      </li>
                      <li>
                        <a
                          href="#International Trade Routes and Cultural Exchange"
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
                          International Trade Routes and Cultural Exchange
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Vedic References to Trade and Commerce"
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
                          Vedic References to Trade and Commerce
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Weights and Measures: Standardization in Trade"
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
                          Weights and Measures: Standardization in Trade
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Marketplaces and the Role of King"
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
                          Marketplaces and the Role of King
                        </a>
                      </li>

                      <li>
                        <a
                          href="#The Influence of Bhārat's Trade on the World"
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
                          The Influence of Bhārat's Trade on the World
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
              Ancient Bhārat, a global hub of trade and commerce, saw its
              products in high demand across Asia, Europe, and Africa. The
              intricate web of Bhārat's commercial activities was deeply
              interwoven with its spiritual, cultural, and economic fabric,
              creating a civilization that attained a high status both
              materially and morally.
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
                <h3 id="The Barter System and the Emergence of Currency">
                  The Barter System and the Emergence of Currency
                </h3>
                <p>
                  Initially, the barter system was the primary mode of trade in
                  Bhārat. However, as trade expanded and grew more complex, the
                  need for a standardized medium of exchange became evident. The
                  shift from barter to currency was initiated with the
                  introduction of metal coins. These coins streamlined trade by
                  offering a uniform measure of value, simplifying and securing
                  transactions.
                </p>
                <p>
                  Ancient texts like the Manusmṛti and the Arthaśāstra mention
                  the use of gold, silver, and copper coins in trade,
                  highlighting the sophistication of the economic system. The
                  Arthaśāstra, attributed to Kauṭilya, provides detailed
                  guidelines on coinage, taxation, and trade regulations,
                  demonstrating the advanced understanding of financial
                  principles in ancient Bhārat.
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
                <h3 id="International Trade Routes and Cultural Exchange">
                  International Trade Routes and Cultural Exchange
                </h3>
                <p>
                  Bhārat's strategic location and wealth of resources made it a
                  key player in international trade. The ancient Bhāratīyas were
                  master navigators, establishing maritime trade routes that
                  connected them with distant lands such as Egypt, Rome, China,
                  and Southeast Asia. The presence of Bhāratīya goods, including
                  spices, textiles, and precious stones, in these regions is
                  well-documented in Bhāratīya and foreign sources. This is also
                  substantiated by the huge number of coins from these regions
                  which have been found in various regions of India. The famous
                  Silk Road, a network of trade routes that connected the East
                  and the West, saw a significant contribution from Bhārat.
                  Bhāratīya merchants traded silk, spices, and gems for gold,
                  silver, and other luxury goods from the West. This exchange
                  was not merely material; it also facilitated the spread of
                  ideas, culture, and religion, with Buddhism being a notable
                  example that spread from Bhārat to East Asia.
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
              <h3 id="Vedic References to Trade and Commerce">
                Vedic References to Trade and Commerce
              </h3>
              <p>
                The Vedas, the oldest sacred texts of Bhārat, contain numerous
                references to trade and commerce. For instance, the Ṛgveda
                mentions using boats and ships for trade across rivers and seas,
                indicating the early development of maritime commerce. The
                Atharvaveda speaks of traders as vital members of society,
                emphasizing their role in the community's economic prosperity.
              </p>
              <p>
                The Vedic hymns also include prayers for the protection of
                traders, asking the gods to safeguard them from dangers such as
                robbers and wild animals during their journeys. This reflects
                the high regard in which traders were held and the recognition
                of their importance in sustaining the economy.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Weights and Measures: Standardization in Trade">
                Weights and Measures: Standardization in Trade
              </h3>
              <p>
                To ensure fair trade practices, ancient Bhārat developed
                standardized weights and measures. The Arthaśāstra details
                various units of measurement, such as the Suvarṇa (a unit of
                weight for gold) and the Māṣa (another unit for general goods).
                These standards were crucial for maintaining the integrity of
                trade, as they provided a consistent framework for exchanging
                goods.
              </p>
              <p>
                Standardized weights and measures facilitated international
                trade, allowing for accurate value assessment across different
                regions. This standardization reflects the advanced level of
                economic organization in ancient Bhārat, where fairness and
                transparency were essential components of trade.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Marketplaces and the Role of King">
                Marketplaces and the Role of King
              </h3>
              <p>
                The marketplaces, known as āpaṇas, were the heart of trade in
                ancient Bhārat. These bustling centres of commerce were
                meticulously organized, with specific areas designated for
                different types of goods. Emperors and local rulers played a
                significant role in regulating these markets, ensuring that
                traders followed the laws and that prices were fair.
              </p>
              <p>
                The Manusmṛti and the Arthaśāstra outline kings' duties in
                maintaining traders' welfare, including providing security,
                regulating prices, and punishing those who engaged in fraudulent
                practices. The protection and promotion of trade were seen as
                crucial responsibilities of a just ruler, further highlighting
                the importance of commerce in ancient Bhārat.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="The Influence of Bhārat's Trade on the World">
                The Influence of Bhārat's Trade on the World
              </h3>
              <p>
                Bhārat's influence on global trade extended beyond its borders.
                Bhāratīya goods were highly prized in international markets, and
                Bhāratīya traders established colonies in distant lands,
                spreading their culture and practices. For example, the
                influence of Bhāratīya textiles can be seen in the ancient
                fabrics found in Egypt. Bhāratīya spices became integral to
                culinary traditions in the Middle East and Europe.
              </p>
              <p>
                One fascinating story that illustrates Bhārat's global trade
                outreach is the tale of the Bhāratīya merchant who, during the
                Roman Empire, offered a gift of a large ruby to the Roman
                Emperor. The ruby, believed to have been sourced from the mines
                of Southern Bhārat, was so magnificent that it was said to bring
                good fortune to its owner. This story symbolizes the high regard
                for Bhāratīya goods and the impact of Bhārat's trade on world
                history.
              </p>
              <p>
                The trade and commerce practices of ancient Bhārat were a
                cornerstone of its civilization, reflecting a deep understanding
                of economic principles and a commitment to ethical trade. As we
                explore the rich history of Bhārat, we are reminded of the
                timeless wisdom and enduring legacy of its trade practices,
                which continue to influence and inspire modern commerce.
              </p>
            </div>

            <br />
            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/social-science/tc_ref.jpg")}
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

export default TC_2;

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
