import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Search_For_8 = () => {
  const navigate = useNavigate();

  // =================== search ==========================================================

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false); // 👈 state to control search box
  const searchBoxRef = useRef(null);

  const topicsData = [
    {
      title: "Mathematics :",
      link: "/mathematics",
      headings: [
        {
          headingTitle: "Algebra",
          link: "/mathematics/Algebra_Page",
          subheadings: [
            {
              name: "The Origins and Evolution of Algebra",
              link: "/mathematics/Algebra_Content#The%20Origins%20and%20Evolution%20of%20Algebra",
            },
            {
              name: "Contributions of Āryabhaṭa and Bhāskarācārya",
              link: "/mathematics/Algebra_Content#Contributions%20of%20Āryabhaṭa%20and%20Bhāskarācārya",
            },
            {
              name: "Algebra and Its Cultural Significance",
              link: "/mathematics/Algebra_Content#Algebra%20and%20Its%20Cultural%20Significance",
            },
            {
              name: "References from Ancient Texts",
              link: "/mathematics/Algebra_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Geometry",
          link: "/mathematics/Geometry_Page",
          subheadings: [
            {
              name: "The Śulbasūtras: The Bedrock of Geometry",
              link: "/mathematics/Geometry_Content#The%20Śulbasūtras:%20The%20Bedrock%20of%20Geometry",
            },
            {
              name: "Geometry and Vedic Rituals",
              link: "/mathematics/Geometry_Content#Geometry%20and%20Vedic%20Rituals",
            },
            {
              name: "Practical Applications of Geometry",
              link: "/mathematics/Geometry_Content#Practical%20Applications%20of%20Geometry",
            },
            {
              name: "The Legacy of Bhāratīya Geometry",
              link: "/mathematics/Geometry_Content#The%20Legacy%20of%20Bhāratīya%20Geometry",
            },
            {
              name: "Stories of Geometric Brilliance",
              link: "/mathematics/Geometry_Content#Stories%20of%20Geometric%20Brilliance",
            },
            {
              name: "References from Ancient Texts",
              link: "/mathematics/Geometry_Content#Stories%20of%20Geometric%20Brilliance",
            },
          ],
        },
        {
          headingTitle: "Trigonometry",
          link: "/mathematics/Trigonometry_Page",
          subheadings: [
            {
              name: "The Vedic Origins of Trigonometry",
              link: "/mathematics/Trigonometry_Content#The%20Vedic%20Origins%20of%20Trigonometry",
            },
            {
              name: "Bhāskara I and the Sine Approximation Formula",
              link: "/mathematics/Trigonometry_Content#Bhāskara%20I%20and%20the%20Sine%20Approximation%20Formula",
            },
            {
              name: "Āryabhaṭa and the Advancement of Trigonometry",
              link: "/mathematics/Trigonometry_Content#Āryabhaṭa%20and%20the%20Advancement%20of%20Trigonometry",
            },
            {
              name: "Varāhamihira and the Integration of Astronomy and Trigonometry",
              link: "/mathematics/Trigonometry_Content#Varāhamihira%20and%20the%20Integration%20of%20Astronomy%20and%20Trigonometry",
            },
            {
              name: "The Legacy of Bhāskarācārya",
              link: "/mathematics/Trigonometry_Content#The%20Legacy%20of%20Bhāskarācārya",
            },
            {
              name: "The Transmission of Bhāratīya Trigonometry to the West",
              link: "/mathematics/Trigonometry_Content#The%20Transmission%20of%20Bhāratīya%20Trigonometry%20to%20the%20West",
            },
            {
              name: "References from Ancient Texts",
              link: "/mathematics/Trigonometry_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Calculus",
          link: "/mathematics/Calculus_Page",
          subheadings: [
            {
              name: "The Concept of Infinitesimals: Early Traces in Vedic Literature",
              link: "/mathematics/Calculus_Content#The%20Concept%20of%20Infinitesimals:%20Early%20Traces%20in%20Vedic%20Literature",
            },
            {
              name: "Āryabhaṭa's Contributions: Series and Approximation Techniques",
              link: "/mathematics/Calculus_Content#Āryabhaṭa's%20Contributions:%20Series%20and%20Approximation%20Techniques",
            },
            {
              name: "Bhāskarācārya and the Early Foundations of Differentiation",
              link: "/mathematics/Calculus_Content#Bhāskarācārya%20and%20the%20Early%20Foundations%20of%20Differentiation",
            },
            {
              name: "Kerala School of Mathematics: The Pioneers of Calculus",
              link: "/mathematics/Calculus_Content#Kerala%20School%20of%20Mathematics:%20The%20Pioneers%20of%20Calculus",
            },
            {
              name: "The Legacy and Influence on Global Mathematics",
              link: "/mathematics/Calculus_Content#The%20Legacy%20and%20Influence%20on%20Global%20Mathematics",
            },
            {
              name: "References from Ancient Texts",
              link: "/mathematics/Calculus_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Mathematics in Alaṅkāra Śāstra",
          link: "/mathematics/Mathematics_in_Alaṅkāra_Śāstra_Content",
        },
      ],
    },
    {
      title: "Physical Sciences : ",
      link: "/Physical_Sciences",
      headings: [
        {
          headingTitle: "Cosmology & Astronomy",
          link: "/Physical_Sciences/Cosmology&Astronomy_Page",
          subheadings: [
            {
              name: "The Roots of Cosmology in Vedic Literature",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#The%20Roots%20of%20Cosmology%20in%20Vedic%20Literature",
            },
            {
              name: "Mathematical Precision in Ancient Astronomy",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#Mathematical%20Precision%20in%20Ancient%20Astronomy",
            },
            {
              name: "Cosmological Narratives and Sacred Geometry",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#Cosmological%20Narratives%20and%20Sacred%20Geometry",
            },
            {
              name: "Astronomical Instruments and Observatories",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#Astronomical%20Instruments%20and%20Observatories",
            },
            {
              name: "Influence on Global Astronomy",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#Influence%20on%20Global%20Astronomy",
            },
            {
              name: "References from Ancient Texts",
              link: "/Physical_Sciences/Cosmology&Astronomy_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Physics",
          link: "/Physical_Sciences/Physics_Page",
          subheadings: [
            {
              name: "Atomic Theory: The Concept of Paramāṇu",
              link: "/Physical_Sciences/Physics_Content#Atomic%20Theory:%20The%20Concept%20of%20Paramāṇu",
            },
            {
              name: "Sāṅkhya and Vaiśeṣika: Schools of Thought",
              link: "/Physical_Sciences/Physics_Content#Sāṅkhya%20and%20Vaiśeṣika:%20Schools%20of%20Thought",
            },
            {
              name: "Sāpekṣavāda: Early Ideas of Relativity and Interconnectedness",
              link: "/Physical_Sciences/Physics_Content#Sāpekṣavāda:%20Early%20Ideas%20of%20Relativity%20and%20Interconnectedness",
            },
            {
              name: "The Influence on the West",
              link: "/Physical_Sciences/Physics_Content#The%20Influence%20on%20the%20West",
            },
            {
              name: "Cosmology and the Nature of Motion",
              link: "/Physical_Sciences/Physics_Content#Cosmology%20and%20the%20Nature%20of%20Motion",
            },
            {
              name: "Gravity and Elasticity",
              link: "/Physical_Sciences/Physics_Content#Gravity%20and%20Elasticity",
            },
            { name: "Sound", link: "/Physical_Sciences/Physics_Content#Sound" },
            {
              name: "References from Ancient Texts",
              link: "/Physical_Sciences/Physics_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Chemistry",
          link: "/Physical_Sciences/Chemistry_Page",
          subheadings: [
            {
              name: "Alchemy and Medicinal Chemistry",
              link: "/Physical_Sciences/Chemistry_Content#Alchemy%20and%20Medicinal%20Chemistry",
            },
            {
              name: "Metallurgy",
              link: "/Physical_Sciences/Chemistry_Content#Metallurgy",
            },
            {
              name: "Technical Terms and Processes in Rasaśāstra",
              link: "/Physical_Sciences/Chemistry_Content#Technical%20Terms%20and%20Processes%20in%20Rasaśāstra",
            },
            {
              name: "References from Ancient Texts",
              link: "/Physical_Sciences/Chemistry_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },
    {
      title: "Earth & Environmental Sciences : ",
      link: "/Earth_Environmental_Sciences",
      headings: [
        {
          headingTitle: "Geology & Geography",
          link: "/Earth_Environmental_Sciences/Geology_Geography_Page",
          subheadings: [
            {
              name: "Varāhamihira's Compilation and Contributions",
              link: "/Earth_Environmental_Sciences/Geology_Geography_Content#Varāhamihira's%20Compilation%20and%20Contributions",
            },
            {
              name: "Mineral Wealth and Metallurgical Marvels",
              link: "/Earth_Environmental_Sciences/Geology_Geography_Content#Mineral%20Wealth%20and%20Metallurgical%20Marvels",
            },
            {
              name: "The Cosmic Egg: Brahmāṇḍa and the Universe",
              link: "/Earth_Environmental_Sciences/Geology_Geography_Content#The%20Cosmic%20Egg:%20Brahmāṇḍa%20and%20the%20Universe",
            },
            {
              name: "Sacred Land and Sustainable Agriculture",
              link: "/Earth_Environmental_Sciences/Geology_Geography_Content#Sacred%20Land%20and%20Sustainable%20Agriculture",
            },
            {
              name: "References from Ancient Texts",
              link: "/Earth_Environmental_Sciences/Geology_Geography_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Environment & Ecology",
          link: "/Earth_Environmental_Sciences/Ecology_Environment_Page",
          subheadings: [
            {
              name: "The Vedic Perspective on Nature",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#The%20Vedic%20Perspective%20on%20Nature",
            },
            {
              name: "Ecological Balance in Ancient Bhāratīya Practices",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#Ecological%20Balance%20in%20Ancient%20Bhāratīya%20Practices",
            },
            {
              name: "Ancient Bhāratīya Views on Water Conservation",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#Ancient%20Bhāratīya%20Views%20on%20Water%20Conservation",
            },
            {
              name: "Sustainable Living and the Concept of Dharma",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#Sustainable%20Living%20and%20the%20Concept%20of%20Dharma",
            },
            {
              name: "Connection Between Ecology and Spirituality",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#Connection%20Between%20Ecology%20and%20Spirituality",
            },
            {
              name: "References from Ancient Texts",
              link: "/Earth_Environmental_Sciences/Ecology_Environment_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Forestry",
          link: "/Earth_Environmental_Sciences/Forestry_Page",
          subheadings: [
            {
              name: "Ancient Bhāratīya Understanding of Forestry",
              link: "/Earth_Environmental_Sciences/Forestry_Content#Ancient%20Bhāratīya%20Understanding%20of%20Forestry",
            },
            {
              name: "Vṛkṣāyurveda: The Science of Trees",
              link: "/Earth_Environmental_Sciences/Forestry_Content#Vṛkṣāyurveda:%20The%20Science%20of%20Trees",
            },
            {
              name: "Sacred Groves and Forest Conservation",
              link: "/Earth_Environmental_Sciences/Forestry_Content#Sacred%20Groves%20and%20Forest%20Conservation",
            },
            {
              name: "Modern Relevance of Ancient Forestry Practices",
              link: "/Earth_Environmental_Sciences/Forestry_Content#Modern%20Relevance%20of%20Ancient%20Forestry%20Practices",
            },
            {
              name: "References from Ancient Texts",
              link: "/Earth_Environmental_Sciences/Forestry_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },

    {
      title: "Social Sciences : ",
      link: "/Social_Sciences",
      headings: [
        {
          headingTitle: "Ancient Bhāratīya Jurisprudence",
          link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Page",
          subheadings: [
            {
              name: "The Foundation of Dharma",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#The%20Foundation%20of%20Dharma",
            },
            {
              name: "The Structure of the Dharmaśāstras",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#The%20Structure%20of%20the%20Dharmaśāstras",
            },
            {
              name: "The Role of Kings in Ancient Jurisprudence",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#The%20Role%20of%20Kings%20in%20Ancient%20Jurisprudence",
            },
            {
              name: "Women and the Dharmaśāstras",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#Women%20and%20the%20Dharmaśāstras",
            },
            {
              name: "The Legacy of the Dharmaśāstras",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#The%20Legacy%20of%20the%20Dharmaśāstras",
            },
            {
              name: "References from Ancient Texts",
              link: "/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Trade and Commerce",
          link: "/Social_Sciences/Trade_and_Commerce_Page",
          subheadings: [
            {
              name: "The Barter System and the Emergence of Currency",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#The%20Barter%20System%20and%20the%20Emergence%20of%20Currency",
            },
            {
              name: "International Trade Routes and Cultural Exchange",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#International%20Trade%20Routes%20and%20Cultural%20Exchange",
            },
            {
              name: "Vedic References to Trade and Commerce",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#Vedic%20References%20to%20Trade%20and%20Commerce",
            },
            {
              name: "Weights and Measures: Standardization in Trade",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#Weights%20and%20Measures:%20Standardization%20in%20Trade",
            },
            {
              name: "Marketplaces and the Role of King",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#Marketplaces%20and%20the%20Role%20of%20King",
            },
            {
              name: "The Influence of Bhārat's Trade on the World",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#The%20Influence%20of%20Bhārat's%20Trade%20on%20the%20World",
            },
            {
              name: "References from Ancient Texts",
              link: "/Trade_and_Commerce_Page/Trade_and_Commerce_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Political Science",
          link: "/Social_Sciences/Political_Science_Page",
          subheadings: [
            {
              name: "Arthaśāstra: The Cornerstone of Indian Political and Economic Thought",
              link: "/Political_Science_Page/Political_Science_Content#Arthaśāstra:%20The%20Cornerstone%20of%20Indian%20Political%20and%20Economic%20Thought",
            },
            {
              name: "The Mahābhārata: Ethical Leadership and Statecraft",
              link: "/Political_Science_Page/Political_Science_Content#The%20Mahābhārata:%20Ethical%20Leadership%20and%20Statecraft",
            },
            {
              name: "The Rāmāyaṇa: Ideal Governance and Moral Authority",
              link: "/Political_Science_Page/Political_Science_Content#The%20Rāmāyaṇa:%20Ideal%20Governance%20and%20Moral%20Authority",
            },
            {
              name: "Political Philosophy in the Dharmaśāstras",
              link: "/Political_Science_Page/Political_Science_Content#Political%20Philosophy%20in%20the%20Dharmaśāstras",
            },
            {
              name: "References from Ancient Texts",
              link: "/Political_Science_Page/Political_Science_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Military Science",
          link: "/Social_Sciences/Military_Science_Page",
          subheadings: [
            {
              name: "The Foundations of Military Science: Arthaśāstra",
              link: "/Military_Science_Page/Military_Science_Content#The%20Foundations%20of%20Military%20Science:%20Arthaśāstra",
            },
            {
              name: "Ethics of War in the Mahābhārata",
              link: "/Military_Science_Page/Military_Science_Content#Ethics%20of%20War%20in%20the%20Mahābhārata",
            },
            {
              name: "Technological Advancements in Warfare",
              link: "/Military_Science_Page/Technological Advancements in Warfare",
            },
            {
              name: "Strategic Insights from the Rāmāyaṇa",
              link: "/Military_Science_Page/Military_Science_Content#Strategic%20Insights%20from%20the%20Rāmāyaṇa",
            },
            {
              name: "The Integration of Spirituality and Warfare",
              link: "/Military_Science_Page/Military_Science_Content#The%20Integration%20of%20Spirituality%20and%20Warfare",
            },
            {
              name: "References from Ancient Texts",
              link: "/Military_Science_Page/Military_Science_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },

    {
      title: "Yoga & Cognitive Sciences : ",
      link: "/Yoga_Cognitive_Sciences",
      headings: [
        {
          headingTitle: "Yoga",
          link: "/Yoga_Cognitive_Sciences/Yoga_Page",
          subheadings: [
            {
              name: "The Origins of Yoga",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#The%20Origins%20of%20Yoga",
            },
            {
              name: "The Practice of Āsanas",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#The%20Practice%20of%20Āsanas",
            },
            {
              name: "Prāṇāyāma: The Control of Breath",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#Prāṇāyāma:%20The%20Control%20of%20Breath",
            },
            {
              name: "The Spiritual Journey: Dhyāna and Samādhi",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#The%20Spiritual%20Journey:%20Dhyāna%20and%20Samādhi",
            },
            {
              name: "Yoga and Āyurveda: A Holistic Approach",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#Yoga%20and%20Āyurveda:%20A%20Holistic%20Approach",
            },
            {
              name: "References from Ancient Texts",
              link: "/Yoga_Cognitive_Sciences/Yoga_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Cognitive Sciences",
          link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Page",
          subheadings: [
            {
              name: "The Concept of the Mind in Vedic and Upaniṣadic Thought",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#The%20Concept%20of%20the%20Mind%20in%20Vedic%20and%20Upaniṣadic%20Thought",
            },
            {
              name: "Sāṅkhya and Yoga: The Duality of Mind and Matter",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#Sāṅkhya%20and%20Yoga:%20The%20Duality%20of%20Mind%20and%20Matter",
            },
            {
              name: "The Power of Memory: Smṛti and Anusmṛti",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#The%20Power%20of%20Memory:%20Smṛti%20and%20Anusmṛti",
            },
            {
              name: "Cognitive Techniques in Meditation and Mindfulness",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#Cognitive%20Techniques%20in%20Meditation%20and%20Mindfulness",
            },
            {
              name: "Neuroplasticity and Ancient Bhārat's Understanding of the Brain",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#Neuroplasticity%20and%20Ancient%20Bhārat's%20Understanding%20of%20the%20Brain",
            },
            {
              name: "References from Ancient Texts",
              link: "/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Psychology & Effect of Mantras",
          link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Pag",
          subheadings: [
            {
              name: "The Nature of Mantras and Their Psychological Significance",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#The%20Nature%20of%20Mantras%20and%20Their%20Psychological%20Significance",
            },
            {
              name: "The Science of Sound and Cognitive Transformation",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#The%20Science%20of%20Sound%20and%20Cognitive%20Transformation",
            },
            {
              name: "The Power of the Gāyatrī Mantra",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#The%20Power%20of%20the%20Gāyatrī%20Mantra",
            },
            {
              name: "Mantras and Mental Health: Ancient Practices and Modern Relevance",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#Mantras%20and%20Mental%20Health:%20Ancient%20Practices%20and%20Modern%20Relevance",
            },
            {
              name: "The Role of Mantras in Enhancing Cognitive Function",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#The%20Role%20of%20Mantras%20in%20Enhancing%20Cognitive%20Function",
            },
            {
              name: "References from Ancient Texts",
              link: "/Yoga_Cognitive_Sciences/Psychology_Mantras_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },

    {
      title: "Computational & Language Sciences : ",
      link: "/Computational_Language_Sciences",
      headings: [
        {
          headingTitle: "Linguistics",
          link: "/Computational_Language_Sciences/Linguistics_Page",
          subheadings: [
            {
              name: "Vedic Foundations of Linguistics",
              link: "/Computational_Language_Sciences/Linguistics_Content#Vedic%20Foundations%20of%20Linguistics",
            },
            {
              name: "Yāska and the Early Study of Semantics",
              link: "/Computational_Language_Sciences/Linguistics_Content#Yāska%20and%20the%20Early%20Study%20of%20Semantics",
            },
            {
              name: "Pāṇini's Contribution to Grammar",
              link: "/Computational_Language_Sciences/Linguistics_Content#Pāṇini's%20Contribution%20to%20Grammar",
            },
            {
              name: "Patañjali and the Mahābhāṣya",
              link: "/Computational_Language_Sciences/Linguistics_Content#Patañjali%20and%20the%20Mahābhāṣya",
            },
            {
              name: "Phonetics and the Prātiśākhya",
              link: "/Computational_Language_Sciences/Linguistics_Content#Phonetics%20and%20the%20Prātiśākhya",
            },
            {
              name: "Semantic Analysis in the Mīmāṃsā and Nyāya Schools",
              link: "/Computational_Language_Sciences/Linguistics_Content#Semantic%20Analysis%20in%20the%20Mīmāṃsā%20and%20Nyāya%20Schools",
            },
            {
              name: "References from Ancient Texts",
              link: "/Computational_Language_Sciences/Linguistics_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Semantic Analysis",
          link: "/Computational_Language_Sciences/Semantic_Analysis_Page",
          subheadings: [
            {
              name: "The Vedas and the Birth of Semantic Inquiry",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#The%20Vedas%20and%20the%20Birth%20of%20Semantic%20Inquiry",
            },
            {
              name: "Pāṇini’s Aṣṭādhyāyī: A Masterpiece of Linguistic Precision",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#Pāṇini’s%20Aṣṭādhyāyī:%20A%20Masterpiece%20of%20Linguistic%20Precision",
            },
            {
              name: "Semantic Analysis in the Darśanas",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#Semantic%20Analysis%20in%20the%20Darśanas",
            },
            {
              name: "Story: The Semantic Power of Mantras",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#Story:%20The%20Semantic%20Power%20of%20Mantras",
            },
            {
              name: "The Legacy of Semantic Analysis in Modern Times",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#The%20Legacy%20of%20Semantic%20Analysis%20in%20Modern%20Times",
            },
            {
              name: "References from Ancient Texts",
              link: "/Computational_Language_Sciences/Semantic_Analysis_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Encryption",
          link: "/Computational_Language_Sciences/Encryption_Page",
          subheadings: [
            {
              name: "The Origins of Encryption in Ancient Texts",
              link: "/Computational_Language_Sciences/Encryption_Content#The%20Origins%20of%20Encryption%20in%20Ancient%20Texts",
            },
            {
              name: "Steganography and Hidden Messages",
              link: "/Computational_Language_Sciences/Encryption_Content#Steganography%20and%20Hidden%20Messages",
            },
            {
              name: "The Role of Mathematics in Encryption",
              link: "/Computational_Language_Sciences/Encryption_Content#The%20Role%20of%20Mathematics%20in%20Encryption",
            },
            {
              name: "The Impact of Encryption on Warfare and Diplomacy",
              link: "/Computational_Language_Sciences/Encryption_Content#The%20Impact%20of%20Encryption%20on%20Warfare%20and%20Diplomacy",
            },
            {
              name: "The Legacy of Encryption in Modern Times",
              link: "/Computational_Language_Sciences/Encryption_Content#The%20Legacy%20of%20Encryption%20in%20Modern%20Times",
            },
            {
              name: "References from Ancient Texts",
              link: "/Computational_Language_Sciences/Encryption_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Combinatorics & Mnemonics",
          link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Page",
          subheadings: [
            {
              name: "The Role of Combinatorics in Vedic Mathematics",
              link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Content#The%20Role%20of%20Combinatorics%20in%20Vedic%20Mathematics",
            },
            {
              name: "Mnemonics in Vedic Tradition",
              link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Content#Mnemonics%20in%20Vedic%20Tradition",
            },
            {
              name: "The Power of Mantras as Mnemonics",
              link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Content#The%20Power%20of%20Mantras%20as%20Mnemonics",
            },
            {
              name: "Combinatorial Puzzles in Ancient Texts",
              link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Content#Combinatorial%20Puzzles%20in%20Ancient%20Texts",
            },
            {
              name: "References from Ancient Texts",
              link: "/Computational_Language_Sciences/Combinatorics_Mnemonics_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },
    {
      title: "Health & Life Sciences : ",
      link: "/Health_Life_Sciences",
      headings: [
        {
          headingTitle: "Ayurveda",
          link: "/Health_Life_Sciences/Ayurveda_Page",
          subheadings: [
            {
              name: "The Origins of Āyurveda",
              link: "/Health_Life_Sciences/Ayurveda_Content#The%20Origins%20of%20Āyurveda",
            },
            {
              name: "The Concept of Doṣas",
              link: "/Health_Life_Sciences/Ayurveda_Content#The%20Concept%20of%20Doṣas",
            },
            {
              name: "Herbal Medicine and Rasāyana",
              link: "/Health_Life_Sciences/Ayurveda_Content#Herbal%20Medicine%20and%20Rasāyana",
            },
            {
              name: "Surgery and Medical Innovation",
              link: "/Health_Life_Sciences/Ayurveda_Content#Surgery%20and%20Medical%20Innovation",
            },
            {
              name: "Spiritual Practices and Āyurveda",
              link: "/Health_Life_Sciences/Ayurveda_Content#Spiritual%20Practices%20and%20Āyurveda",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Ayurveda_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Botany",
          link: "/Health_Life_Sciences/Botany_Page",
          subheadings: [
            {
              name: "Botany in Ancient Bhāratīya Texts",
              link: "/Health_Life_Sciences/Botany_Content#Botany%20in%20Ancient%20Bhāratīya%20Texts",
            },
            {
              name: "Vṛkṣāyurveda: The Ancient Science of Plant Life",
              link: "/Health_Life_Sciences/Botany_Content#Vṛkṣāyurveda:%20The%20Ancient%20Science%20of%20Plant%20Life",
            },
            {
              name: "Plant Movements and Consciousness",
              link: "/Health_Life_Sciences/Botany_Content#Plant%20Movements%20and%20Consciousness",
            },
            {
              name: "Genetics and Reproduction",
              link: "/Health_Life_Sciences/Botany_Content#Genetics%20and%20Reproduction",
            },
            {
              name: "Plant Medicine and Disease Management",
              link: "/Health_Life_Sciences/Botany_Content#Plant%20Medicine%20and%20Disease%20Management",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Botany_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Horticulture & Floriculture",
          link: "/Health_Life_Sciences/Horticulture_Floriculture_Page",
          subheadings: [
            {
              name: "Horticulture During the Vedic Period",
              link: "/Health_Life_Sciences/Horticulture_Floriculture_Content#Horticulture%20During%20the%20Vedic%20Period",
            },
            {
              name: "Ancient Horticulture Texts",
              link: "/Health_Life_Sciences/Horticulture_Floriculture_Content#Ancient%20Horticulture%20Texts",
            },
            {
              name: "Floriculture in Ancient Bhārat",
              link: "/Health_Life_Sciences/Horticulture_Floriculture_Content#Floriculture%20in%20Ancient%20Bhārat",
            },
            {
              name: "Conservation and Sustainability",
              link: "/Health_Life_Sciences/Horticulture_Floriculture_Content#Conservation%20and%20Sustainability",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Horticulture_Floriculture_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Veterinary Ayurveda",
          link: "/Health_Life_Sciences/Veterinary_Ayurveda_Page",
          subheadings: [
            {
              name: "Historical Context",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#Historical%20Context",
            },
            {
              name: "Cattle Characteristics",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#Cattle%20Characteristics",
            },
            {
              name: "The Role of Other Animals",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#The%20Role%20of%20Other%20Animals",
            },
            {
              name: "General Traits of Creatures",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#General%20Traits%20of%20Creatures",
            },
            {
              name: "The Wisdom of Kauṭilya's Arthaśāstra",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#The%20Wisdom%20of%20Kauṭilya's%20Arthaśāstra",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Veterinary_Ayurveda_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Food Science",
          link: "/Health_Life_Sciences/Food_Science_Page",
          subheadings: [
            {
              name: "The Spiritual Essence of Food",
              link: "/Health_Life_Sciences/Food_Science_Content#The%20Spiritual%20Essence%20of%20Food",
            },
            {
              name: "Dietary Guidelines for Health and Wisdom",
              link: "/Health_Life_Sciences/Food_Science_Content#Dietary%20Guidelines%20for%20Health%20and%20Wisdom",
            },
            {
              name: "The Science of Cooking",
              link: "/Health_Life_Sciences/Food_Science_Content#The%20Science%20of%20Cooking",
            },
            {
              name: "Ancient Practices and Modern Revival",
              link: "/Health_Life_Sciences/Food_Science_Content#Ancient%20Practices%20and%20Modern%20Revival",
            },
            {
              name: "Cultural and Spiritual Significance of Food Rituals",
              link: "/Health_Life_Sciences/Food_Science_Content#Cultural%20and%20Spiritual%20Significance%20of%20Food%20Rituals",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Food_Science_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Science of Pulse",
          link: "/Health_Life_Sciences/Science_of_Pulse_Page",
          subheadings: [
            {
              name: "Historical Significance and Textual References",
              link: "/Health_Life_Sciences/Science_of_Pulse_Content#Historical%20Significance%20and%20Textual%20References",
            },
            {
              name: "Methodology and Application",
              link: "/Health_Life_Sciences/Science_of_Pulse_Content#Methodology%20and%20Application",
            },
            {
              name: "Modern Innovations and Relevance",
              link: "/Health_Life_Sciences/Science_of_Pulse_Content#Modern%20Innovations%20and%20Relevance",
            },
            {
              name: "References from Ancient Texts",
              link: "/Health_Life_Sciences/Science_of_Pulse_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },
    {
      title: "Technological Sciences : ",
      link: "/Technological_Sciences",
      headings: [
        {
          headingTitle: "Agriculture",
          link: "/Technological_Sciences/Agriculture_Page",
          subheadings: [
            {
              name: "Agricultural Practices in Vedic Literature",
              link: "/Technological_Sciences/Agriculture_Content#Agricultural%20Practices%20in%20Vedic%20Literature",
            },
            {
              name: "Technological Innovations",
              link: "/Technological_Sciences/Agriculture_Content#Technological%20Innovations",
            },
            {
              name: "Water Management",
              link: "/Technological_Sciences/Agriculture_Content#Water%20Management",
            },
            {
              name: "Integration of Agriculture with Religious and Cultural Practices",
              link: "/Technological_Sciences/Agriculture_Content#Integration%20of%20Agriculture%20with%20Religious%20and%20Cultural%20Practices",
            },
            {
              name: "Animal Husbandry and Agriculture",
              link: "/Technological_Sciences/Agriculture_Content#Animal%20Husbandry%20and%20Agriculture",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Agriculture_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Water Management",
          link: "/Technological_Sciences/Water_Management_Page",
          subheadings: [
            {
              name: "The Vedic Perspective on Water",
              link: "/Technological_Sciences/Water_Management_Content#The%20Vedic%20Perspective%20on%20Water",
            },
            {
              name: "The Ingenious Stepwells: Vāv and Baoli",
              link: "/Technological_Sciences/Water_Management_Content#The%20Ingenious%20Stepwells:%20Vāv%20and%20Baoli",
            },
            {
              name: "Tank Irrigation Systems: Sustainability at Its Best",
              link: "/Technological_Sciences/Water_Management_Content#Tank%20Irrigation%20Systems:%20Sustainability%20at%20Its%20Best",
            },
            {
              name: "The Kallaṇai Dam: An Ancient Marvel",
              link: "/Technological_Sciences/ater_Management_Content#The%20Kallaṇai%20Dam:%20An%20Ancient%20Marvel",
            },
            {
              name: "The Ghats of Vārāṇasī: Sacred Water Management",
              link: "/Technological_Sciences/Water_Management_Content#The%20Ghats%20of%20Vārāṇasī:%20Sacred%20Water%20Management",
            },
            {
              name: "Modern Relevance of Ancient Practices",
              link: "/Technological_Sciences/Water_Management_Content#Modern%20Relevance%20of%20Ancient%20Practices",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Water_Management_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Metallurgy",
          link: "/Technological_Sciences/Metallurgy_Page",
          subheadings: [
            {
              name: "The Vedic Era and Early Metallurgy",
              link: "/Technological_Sciences/Metallurgy_Content#The%20Vedic%20Era%20and%20Early%20Metallurgy",
            },
            {
              name: "Zinc Smelting and Distillation",
              link: "/Technological_Sciences/Metallurgy_Content#Zinc%20Smelting%20and%20Distillation",
            },
            {
              name: "Iron and Steel Production",
              link: "/Technological_Sciences/Metallurgy_Content#Iron%20and%20Steel%20Production",
            },
            {
              name: "Alloys and Medicinal Use of Metals",
              link: "/Technological_Sciences/Metallurgy_Content#Alloys%20and%20Medicinal%20Use%20of%20Metals",
            },
            {
              name: "Legacy and Influence",
              link: "/Technological_Sciences/Metallurgy_Content#Legacy%20and%20Influence",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Metallurgy_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Civil Engineering & Architecture",
          link: "/Technological_Sciences/Civil_Engineering_Architecture_Page",
          subheadings: [
            {
              name: "The Science of Vāstu Śāstra",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#The%20Science%20of%20Vāstu%20Śāstra",
            },
            {
              name: "Stepwells: Engineering Marvels of Water Conservation",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#Stepwells:%20Engineering%20Marvels%20of%20Water%20Conservation",
            },
            {
              name: "Temple Architecture: A Journey into the Divine",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#Temple%20Architecture:%20A%20Journey%20into%20the%20Divine",
            },
            {
              name: "The Indus Valley Civilization: Urban Planning and Hydraulic Engineering",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#The%20Indus%20Valley%20Civilization:%20Urban%20Planning%20and%20Hydraulic%20Engineering",
            },
            {
              name: "The Stone Chariot of Hampi",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#The%20Stone%20Chariot%20of%20Hampi",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Civil_Engineering_Architecture_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Mechanical Engineering",
          link: "/Technological_Sciences/Mechanical_Engineering_Page",
          subheadings: [
            {
              name: "The Principle of Yantras",
              link: "/Technological_Sciences/Mechanical_Engineering_Content#The%20Principle%20of%20Yantras",
            },
            {
              name: "Hydraulic Engineering and Water Management",
              link: "/Technological_Sciences/Mechanical_Engineering_Content#Hydraulic%20Engineering%20and%20Water%20Management",
            },
            {
              name: "Metallurgy and Mechanical Engineering",
              link: "/Technological_Sciences/Mechanical_Engineering_Content#Metallurgy%20and%20Mechanical%20Engineering",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Mechanical_Engineering_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Textile Engineering",
          link: "/Technological_Sciences/Textile_Engineering_Page",
          subheadings: [
            {
              name: "The Vedic Foundations: Textile and Spirituality",
              link: "/Technological_Sciences/Textile_Engineering_Content#The%20Vedic%20Foundations:%20Textile%20and%20Spirituality",
            },
            {
              name: "The Loom of Dharma: Weaving as a Sacred Duty",
              link: "/Technological_Sciences/Textile_Engineering_Content#The%20Loom%20of%20Dharma:%20Weaving%20as%20a%20Sacred%20Duty",
            },
            {
              name: "The Glory of Silk: Kauśeya in Ancient Bhārat",
              link: "/Technological_Sciences/Textile_Engineering_Content#The%20Glory%20of%20Silk:%20Kauśeya%20in%20Ancient%20Bhārat",
            },
            {
              name: "Story of Sāvitrī: Weaving as a Metaphor for Life",
              link: "/Technological_Sciences/Textile_Engineering_Content#Story%20of%20Sāvitrī:%20Weaving%20as%20a%20Metaphor%20for%20Life",
            },
            {
              name: "The Vedic Tradition of Natural Dyes",
              link: "/Technological_Sciences/Textile_Engineering_Content#The%20Vedic%20Tradition%20of%20Natural%20Dyes",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Textile_Engineering_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
        {
          headingTitle: "Gemmology",
          link: "/Technological_Sciences/Gemmology_Page",
          subheadings: [
            {
              name: "The Spiritual and Cultural Significance of Gems",
              link: "/Technological_Sciences/Gemmology_Content#The%20Spiritual%20and%20Cultural%20Significance%20of%20Gems",
            },
            {
              name: "The Legendary Mines of Golconda",
              link: "/Technological_Sciences/Gemmology_Content#The%20Legendary%20Mines%20of%20Golconda",
            },
            {
              name: "Ancient Texts on Gemmology",
              link: "/Technological_Sciences/Gemmology_Content#Ancient%20Texts%20on%20Gemmology",
            },
            {
              name: "Fascinating Stories from Ancient Times",
              link: "/Technological_Sciences/Gemmology_Content#Fascinating%20Stories%20from%20Ancient%20Times",
            },
            {
              name: "The Craftsmanship of Ancient Bhārata",
              link: "/Technological_Sciences/Gemmology_Content#The%20Craftsmanship%20of%20Ancient%20Bhārata",
            },
            {
              name: "The Enduring Legacy of Ancient Bhāratiya Gemmology",
              link: "/Technological_Sciences/Gemmology_Content#The%20Enduring%20Legacy%20of%20Ancient%20Bhāratiya%20Gemmology",
            },
            {
              name: "References from Ancient Text",
              link: "/Technological_Sciences/Gemmology_Content#References%20from%20Ancient%20Texts",
            },
          ],
        },
      ],
    },
  ];

  const filteredTopics = topicsData
    .map((topic) => {
      const searchLower = searchTerm.toLowerCase();

      if (topic.title.toLowerCase().includes(searchLower)) {
        return topic;
      }

      const matchedHeadings = topic.headings
        .map((heading) => {
          if (heading.headingTitle.toLowerCase().includes(searchLower)) {
            return heading;
          }

          const matchedSubheadings = (heading.subheadings || []).filter((sub) =>
            sub.name.toLowerCase().includes(searchLower)
          );

          if (matchedSubheadings.length > 0) {
            return {
              ...heading,
              subheadings: matchedSubheadings, // <-- Only matched subheadings
            };
          }

          return null;
        })
        .filter((h) => h !== null);

      if (matchedHeadings.length > 0) {
        return {
          ...topic,
          headings: matchedHeadings,
        };
      }

      return null;
    })
    .filter((t) => t !== null);

  // =======================================================================================================

  const handleSubtopicClick = (link) => {
    navigate(link);
    setSearchTerm("");
    setShowSearchInput(false); // hide search input after navigation
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setShowSearchInput(false);
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ======================================================================================================
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

  return (
    <div>
      {/* ===================================================================================== */}

      {/* Search Icon and Input */}
      <div
      className="search-container-8"
        ref={searchBoxRef}
        style={{
          position: "fixed",
          top: "5.1rem",
          right: "2.5rem",
          display: "flex",
          alignItems: "center",
          zIndex: 9999,
          gap: "0.5rem",
        }}
      >
        {showSearchInput ? (
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            autoFocus
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
              // width: "60vw",
              maxWidth: "180px",
            }}
          />
        ) : (
          <FaSearch
            size={20}
            onClick={() => setShowSearchInput(true)}
            style={{
              cursor: "pointer",
              color: "black",
              backgroundColor: "#cec1c1",
              padding: "0.45rem",
            //   padding: "8px 16px",
              borderRadius: "50%",
              boxShadow: "0 3px 6px rgb(0, 26, 255)",
            }}
            className="search-btn-8-all"
          />
        )}
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div
          ref={searchBoxRef}
          style={{
            backgroundColor: "lightgrey",
            padding: "10px",
            borderRadius: "10px",
            position: "fixed",
            top: "115px",
            right: "43px",
            width: "350px",
            maxHeight: "500px",
            overflowY: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            zIndex: 9998,
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "1rem",
              textAlign: "center",
              color: "#333",
            }}
          >
            Search Results
          </h2>

          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                {/* Topic Title (like Mathematics) */}
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "#007bff",
                    cursor: "pointer",
                    padding: "5px 0",
                  }}
                  onClick={() => navigate(topic.link)}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  {topic.title}
                </div>

                {/* Headings and Subheadings */}
                {topic.headings.map((heading, hIndex) => (
                  <div
                    key={hIndex}
                    style={{ marginLeft: "10px", marginBottom: "10px" }}
                  >
                    {/* Heading Title (like Algebra) */}
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#28a745",
                        cursor: "pointer",
                        marginBottom: "5px",
                      }}
                      onClick={() =>
                        navigate(
                          heading.link
                            ? heading.link // ✅ go to /mathematics/Algebra_Page
                            : heading.subheadings.length > 0
                            ? heading.subheadings[0].link // fallback if no heading.link
                            : topic.link // fallback to topic link
                        )
                      }
                      onMouseOver={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      {heading.headingTitle}
                    </div>

                    {/* Subheadings (like Linear Equations, etc.) */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        paddingLeft: "10px",
                      }}
                    >
                      {(heading.subheadings || []).map((sub, sIndex) => (
                        <div
                          key={sIndex}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#333",
                            border: "1px solid #ccc",
                          }}
                          onClick={() => handleSubtopicClick(sub.link)}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#d1ecf1";
                            e.target.style.color = "#0056b3";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#f8f9fa";
                            e.target.style.color = "#333";
                          }}
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "red" }}>
              No results found.
            </p>
          )}
        </div>
      )}

      {/* ====================================================================================== */}
    </div>
  );
};

export default Search_For_8;
