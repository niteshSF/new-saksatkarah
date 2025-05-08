import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/header_footer.css";
import { FaLink } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import "../algebra.css";
import imageSrc1 from "../../assets/physical-sciences/chem_p_1.jpg";
import imageSrc2 from "../../assets/physical-sciences/chem_p_2.jpg";
import imageSrc3 from "../../assets/physical-sciences/chem_p_3.jpg";
import imageSrc4 from "../../assets/physical-sciences/chem_p_4.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import Search_For_All_Content from "../Search_For_All_Content";

const Chem_2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  

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
  const openModal1 = () => {
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

  // -------------- 3st Image Zoom in/our ----------------------------------
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [zoomed3, setZoomed3] = useState(false);

  const [transformOrigin3, setTransformOrigin3] = useState("center center");

  useEffect(() => {
    if (isModalOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen3]);

  const handleImageClick3 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin3(`${percentX}% ${percentY}%`);
    setZoomed3((prev) => !prev);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
    setZoomed3(false);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
    setZoomed3(false);
  };

  // ----------------------- 4th Image Zoom in/our -----------------------------
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [zoomed4, setZoomed4] = useState(false);

  const [transformOrigin4, setTransformOrigin4] = useState("center center");

  useEffect(() => {
    if (isModalOpen4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen4]);

  const handleImageClick4 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setTransformOrigin4(`${percentX}% ${percentY}%`);
    setZoomed4((prev) => !prev);
  };

  const openModal4 = () => {
    setIsModalOpen4(true);
    setZoomed4(false);
  };
  const closeModal4 = () => {
    setIsModalOpen4(false);
    setZoomed4(false);
  };

  return (
    <div>
      <div className="head-section">
        <h1>रसशास्त्रम् - Chemistry</h1>

<Search_For_All_Content />

        <button
          className="back-button"
          onClick={() => navigate("/Physical_Sciences")}
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
                          href="https://archive.org/details/Rasajalanidhi_201601"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa-jala-nidhi Or Ocean Of Indian Chemistry Vol 1
By Mookerjee, Bhudeb


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/dli.bengal.10689.20177"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa-jala-nidhi Or Ocean Of Indian Chemistry Vol 2
By Mookerjee, Bhudeb


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.532537"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Rasa-jala-nidhi Or Ocean Of Indian Chemistry Vol 3
By Mookerjee, Bhudeb


                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.108479"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa-jala-nidhi Or Ocean Of Indian Chemistry Vol 4
By Mookerjee, Bhudeb


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/dli.ernet.108480/page/n11/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa-jala-nidhi Or Ocean Of Indian Chemistry Vol 5
By Mookerjee, Bhudeb


                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/236566201rasendramangalam/page/n7/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasendra Mangala by Nāgārjuna Siddha
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/rasa-ratna-samucchaya-of-vagbhatacharya-shankar-lal-hari-shankar/page/n15/mode/2up"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Rasa Ratna Samucchaya Of Vagbhatacharya Shankar Lal Hari Shankar
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
                          href="http://eprints.nias.res.in/374/1/B8-2013%20Minerals%20and%20Metals%20Heritage%20of%20India.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                         Minerals and Metals Heritage of India
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://archive.org/details/IndianAlchemyOrRasayanaByS.Mahdihassan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Indian Alchemy Or Rasayana By S. Mahdihassan
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://archive.org/details/in.ernet.dli.2015.514187"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submenu-link"
                        >
                          Ocean Of Indian Chemistry And Alchemy
By Mookerji, Bhudeb, Comp.


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
                        href="/Physical_Sciences"
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
                        Physical Sciences
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
                        href="/Physical_Sciences/Cosmology&Astronomy_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Cosmology Astronomy
                      </a>
                    </li>

                    <li>
                      <a
                        href="/Physical_Sciences/Physics_Page "
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Physics
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Physical_Sciences/Chemistry_Page"
                        style={{ textDecoration: "none", color: "#333" }}
                        onMouseOver={(e) =>
                          (e.target.style =
                            "color:#000dff;text-decoration:underline")
                        }
                        onMouseOut={(e) =>
                          (e.target.style = "color:#333;text-decoration:none")
                        }
                      >
                        Chemistry
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
                          href="#Alchemy and Medicinal Chemistry"
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
                          Alchemy and Medicinal Chemistry
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Metallurgy"
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
                          Metallurgy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Technical Terms and Processes in Rasaśāstra"
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
                          Technical Terms and Processes in Rasaśāstra
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
              In ancient Bhārata, chemistry was not just a science but a
              remarkably sophisticated and practical discipline that encompassed
              a wide range of areas such as medicines, metallurgy, dyes,
              perfumes, and more. The ancient Bhāratīyas' expertise in these
              fields far surpassed that of their European counterparts of the
              same era, leaving behind a legacy of knowledge that continues to
              intrigue and inspire us today.
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
                <h3 id="Alchemy and Medicinal Chemistry">
                  Alchemy and Medicinal Chemistry
                </h3>
                <p>
                  An early form of chemistry, known as Rasaśāstra (रसशास्त्र),
                  was a prominent field in ancient Bhārata. It focused on the
                  transformation of materials and the preparation of medicinal
                  compounds. Rasavādīs, or chemists, developed highly refined
                  techniques and specialized instruments for chemical processes.
                  Texts such as the Rasārṇava and Rasaratnākara by Nāgārjuna
                  detailed procedures for purifying metals like gold, silver,
                  and mercury, and for preparing various medicinal formulations.
                  These works describe the purification of metals and the
                  preparation of bhasmas (calcined preparations). Nāgārjuna's
                  writings mention several yantras (instruments) such as Śilā
                  Yantra, Vaṁśa Yantra, and Tulā Yantra used in chemical
                  operations. The preparation of bhasmas involved complex
                  procedures like calcination and sublimation, aimed at creating
                  potent medicines that enhanced āyuḥ (longevity), ojas
                  (vitality), and cured various ailments.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc1}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal1}
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
                <h3 id="Metallurgy">Metallurgy</h3>
                {/* <div style={{ textAlign: "right", marginLeft: "30rem" }}> */}
                <p>
                  Ancient Bhāratīya metallurgy was remarkably advanced, with
                  significant contributions to the extraction, refinement, and
                  alloying of metals. Vedic literature and later texts such as
                  Kauṭilya’s Arthaśāstra provide detailed accounts of mining,
                  metal processing, and alloy techniques.
                </p>
                <p>
                  <strong> Extraction and Purification : </strong> Techniques
                  for extracting gold, silver, iron, copper, and zinc from ores
                  were well documented. Methods included smelting, casting, and
                  tempering. The extraction of zinc at Zawar in Rajasthan
                  predates similar techniques developed in Europe by centuries,
                  with evidence pointing to distillation-based refinement during
                  the early medieval period.
                </p>
                <p>
                  <strong> Aśoka Pillar and Mauryan Caves : </strong> The Aśoka
                  Pillar, known for its rust-resistant iron composition, and the
                  Mauryan caves of Bihar, known for their mirror-like polished
                  walls, stand as testaments to the metallurgical skills of
                  ancient Bhāratīya artisans. Their durability reflects the
                  quality and sophistication of the metallurgical processes
                  employed.
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
                <br/>
                <p>
                  <strong> Yantras : </strong> Instruments like Koṣṭhī
                  (furnaces), Bhastrikā (bellows), and Mūṣā (crucibles) played a
                  crucial role in smelting, forging, and alloying. The design
                  and application of these devices demonstrate a deep
                  understanding of practical metallurgical principles.
                </p>
                <h3 id="Technical Terms and Processes in Rasaśāstra">
                  Technical Terms and Processes in Rasaśāstra
                </h3>
                <p>
                  Several specialized terms and chemical processes were central
                  to ancient Bhāratīya chemistry :
                </p>
                <p>
                  <strong> Vajralepa and Vajra-Saṅghāta : </strong> Techniques
                  described in Varāhamihira’s Bṛhat Saṁhitā used for coating
                  materials to impart a metallic finish.
                </p>
                <p>
                  <strong> Kañcanīkaraṇa : </strong> Gold plating process.
                </p>
                <p>
                  <strong> Tāmralepa : </strong> Copper coating method, widely
                  used in the ornamentation of idols and temple architecture.
                </p>
                <p>
                  <strong> Bhasma : </strong> Calcined mineral or metallic
                  preparations used in medicine. Their preparation involves
                  multiple processes to ensure detoxification, purification, and
                  enhancement of therapeutic properties.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
                <br />
                <img
                  src={imageSrc3}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal3}
                />
              </div>
            </div>

            {isModalOpen3 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal3}
              >
                <img
                  src={imageSrc3}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick3(e);
                  }}
                  style={{
                    transform: `scale(${zoomed3 ? 2 : 1})`,
                    transformOrigin: transformOrigin3,
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
                  src={imageSrc4}
                  alt="Descriptive Alt Text"
                  className="a-p-1-image"
                  style={{ cursor: "pointer", maxWidth: "100%" }}
                  onClick={openModal4}
                />
                <br />
              </div>

              <div style={{ flex: "1", minWidth: "300px" }}>
                <h3 id="Key Processes in Bhasma Preparation">
                  Key Processes in Bhasma Preparation
                </h3>
                <p>
                  <strong> Svedana (Steaming) : </strong> A detoxification
                  process wherein substances are exposed to steam, often with
                  herbal decoctions, in a controlled environment to remove
                  impurities and increase therapeutic efficacy.
                </p>
                <p>
                  <strong> Mardana (Grinding) : </strong> This involves grinding
                  the material into a fine powder using Khalva Yantra (grinding
                  stone). It is often done repeatedly with herbal juices or
                  other liquids to increase bioavailability and potency.
                </p>
                <p>
                  <strong> Pātana (Sublimation) : </strong> A process where the
                  material is vaporized by heating and then condensed into
                  purified form. It helps eliminate toxic elements and
                  concentrates active compounds. Specialized apparatus made of
                  earthenware or metals are used in this process.
                </p>
                <p>
                  The scientific accomplishments of ancient Bhārata in chemistry
                  and metallurgy were both theoretical and applied. They laid
                  the foundations for several aspects of modern scientific
                  practices, especially in medicinal chemistry, metallurgical
                  engineering, and materials science. The systematic use of
                  instruments, terminologies, and methods in Rasaśāstra
                  continues to inspire researchers and scholars interested in
                  traditional knowledge systems and integrative science.
                </p>
              </div>
            </div>

            {isModalOpen4 && (
              <div
                style={{
                  ...styles.overlay,
                  overflow: "auto",
                  maxHeight: "100vh",
                }}
                onClick={closeModal4}
              >
                <img
                  src={imageSrc4}
                  alt="Zoomed"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick4(e);
                  }}
                  style={{
                    transform: `scale(${zoomed4 ? 2 : 1})`,
                    transformOrigin: transformOrigin4,
                    transition: "transform 0.3s ease",
                    cursor: "zoom-in",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
            )}

            <h3 id="References from Ancient Texts"></h3>
            <img
              src={require("../../assets/physical-sciences/chem_ref.jpg")}
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

export default Chem_2;

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
