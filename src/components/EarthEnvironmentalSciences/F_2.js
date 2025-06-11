import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/ee-sciences/f_p_1.jpg";
import imageSrc2 from "../../assets/ee-sciences/f_p_2.jpg";
import { FaBars } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const F_2 = () => {
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
        <h1>वनशास्त्रम् - Forestry</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Earth_Environmental_Sciences")}
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
                          href="https://archive.org/details/dli.ernet.496519/page/n25/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Manasollasa Vol 1
By Gajanan K.shrigondekar


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
                          href="https://archive.org/details/in.ernet.dli.2015.502711/page/n11/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Forests Of India Vol.1
By Stebbing, E. P.

                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/DRHm_forestry-in-india-origins-and-early-developenents-by-dietrich-brandis-nataraj-publishers-dehrad/page/n5/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Forestry In India Origins And Early Developenents By Dietrich Brandis Nataraj Publishers Dehradun
By Nataraj Publishers Dehradun


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/indianforestreco02fore/page/n5/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          The Indian forest records
By  
Forest Research Institute (Dehra Dūn, India)

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
                        href="/Earth_Environmental_Sciences"
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
                        Earth & Environmental Sciences
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
                        href="/Earth_Environmental_Sciences/Geology_Geography_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Geology & Geography
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Earth_Environmental_Sciences/Ecology_Environment_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Ecology & Environment
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Earth_Environmental_Sciences/Forestry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Forestry
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
                          href="#Ancient Bhāratīya Understanding of Forestry"
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
                          Ancient Bhāratīya Understanding of Forestry
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Vṛkṣāyurveda: The Science of Trees"
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
                          Vṛkṣāyurveda: The Science of Trees
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Sacred Groves and Forest Conservation"
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
                          Sacred Groves and Forest Conservation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Modern Relevance of Ancient Forestry Practices"
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
                          Modern Relevance of Ancient Forestry Practices
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
              Forests have always been vital to Bhāratīya culture and heritage,
              profoundly revered and respected for millennia. Ancient texts,
              including the Vedas and Kautilya's Arthaśāstra, offer extensive
              knowledge of forest management and its significance. The ancient
              Bhāratīya civilization understood forests as resources and sacred
              spaces that needed protection and reverence.
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
                <h3 id="Ancient Bhāratīya Understanding of Forestry">
                  Ancient Bhāratīya Understanding of Forestry
                </h3>
                <p>
                  In ancient Bhārat, forests were more than just a collection of
                  trees; they were living entities that sustained life and were
                  crucial for maintaining the balance of nature. The R̥gveda
                  emphasizes the sacredness of various elements of nature,
                  including flowers, trees, and forests, underscoring the need
                  to preserve them. Living in harmony with the forest was
                  integral to the Bhāratīya way of life, with sages and scholars
                  often residing in forests to pursue spiritual and educational
                  activities. These forests, known as Tapovana, provided a
                  serene environment conducive to meditation and learning,
                  embodying the idea that nature and spirituality are deeply
                  interconnected.
                </p>
                <p>
                  Kautilya's Arthaśāstra is one of the earliest texts that
                  provides a detailed account of forest conservation. It
                  describes various types of forests and their purposes, such as
                  Tapovana (forests for ascetics), Mṛga-vana (animal
                  sanctuaries), and Nāga-vana (snake sanctuaries). These
                  classifications reveal a sophisticated understanding of
                  forestry that balances human needs with preserving wildlife
                  and natural resources. The text also outlines regulations for
                  using forest resources, reflecting a deep respect for nature
                  and the foresight to ensure that these resources are managed
                  sustainably for future generations.
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
                <h3 id="Vṛkṣāyurveda: The Science of Trees">
                  Vṛkṣāyurveda: The Science of Trees
                </h3>
                <p>
                  Vṛkṣāyurveda, an ancient Bhāratīya treatise on botany and
                  plant science, extensively deals with the care and
                  conservation of trees and forests. It outlines methods for
                  planting, nurturing, and protecting trees, reflecting the deep
                  ecological consciousness of the time. The text emphasizes the
                  role of trees in sustaining the environment and advocates for
                  their careful conservation to ensure environmental balance.
                </p>
                <p>
                  One of the significant contributions of Vṛkṣāyurveda is its
                  classification of flora into different categories based on
                  their utility and characteristics. For example, hardwood trees
                  like Śāla (Shorea robusta) and Arjuna (Terminalia arjuna) were
                  categorized for their durability and use in construction,
                  while medicinal plants were identified for their healing
                  properties. The text also discusses the importance of
                  tree-planting ceremonies, which were often conducted with
                  great reverence and included rituals to invoke the blessings
                  of deities for the successful growth of the trees.
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
              <h3 id="Sacred Groves and Forest Conservation">
                Sacred Groves and Forest Conservation
              </h3>
              <p>
                Ancient Bhārat had a tradition of maintaining sacred
                groves—patches of forests protected for religious and cultural
                reasons. These groves, sometimes known as Devarakadu, Devīvana
                or Tapovana, were considered the abodes of deities and were
                strictly protected from deforestation and exploitation.
                Protecting these sacred groves helped preserve biodiversity and
                conserve critical habitats for various species. Preserving these
                groves was often seen as a religious duty, ensuring the forests
                remained untouched and continued flourishing.
              </p>
              <p>
                The Atharvaveda also contains hymns that praise the forests and
                their components, highlighting their importance in maintaining
                ecological harmony. For instance, it mentions how different
                grasses and herbs should be treated respectfully, as they play a
                vital role in sustaining life.
              </p>
              <p>
                In ancient Bhārat, it was believed that the goddess of the
                forest, Vana Devī, resided within the sacred groves, ensuring
                the protection of all life. One tale tells of a village that
                prospered under her care, where the people lived in harmony with
                nature and performed rituals to honor her before gathering
                resources. When invaders attempted to cut down the grove's
                trees, the villagers fiercely resisted, believing that
                disturbing the grove would bring calamity. This story highlights
                the profound cultural principle of protecting nature as a sacred
                duty.
              </p>
            </div>

            <div style={{ minWidth: "300px", padding: "0.5rem" }}>
              <h3 id="Modern Relevance of Ancient Forestry Practices">
                Modern Relevance of Ancient Forestry Practices
              </h3>
              <p>
                The ancient Bhāratīya approach to forestry offers several
                lessons for modern conservation efforts. The concept of
                sustainable forest management, as outlined in the Arthaśāstra
                and Vṛkṣāyurveda, emphasizes balancing human needs with
                environmental preservation. This holistic approach, deeply
                rooted in the wisdom of the past, can be instrumental today as
                we face the challenges of deforestation and ecological
                degradation.
              </p>
              <p>
                Participatory forest management, a practice in which local
                communities are involved in forest conservation, has roots in
                ancient Bhāratīya practices. The idea of community-led
                conservation, seen in the maintenance of sacred groves and the
                role of villagers in forest protection, is a model that modern
                environmentalists advocate for its effectiveness in preserving
                natural resources. The involvement of local communities in
                forest management is not just an ancient practice but also a
                strategy that can empower people to take active roles in
                environmental conservation today.
              </p>
              <p>
                The ancient Bhāratīya understanding of forestry was deeply
                rooted in the belief that forests were sacred and vital for
                sustaining life. The practices and principles laid out in texts
                like the R̥gveda, Arthaśāstra, and Vṛkṣāyurveda provide a wealth
                of knowledge that remains relevant today. By revisiting these
                ancient practices, we can find guidance on managing our forests
                sustainably, ensuring they provide resources, shelter, and
                spiritual solace for future generations.
              </p>
            </div>


            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/ee-sciences/f_ref.jpg")}
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

export default F_2;

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
