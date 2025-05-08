/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction.js";
import Home from "./pages/Home.js";
import BBB from "./pages/BBB.js";
import Contact from "./pages/Contact.js";
import Editorial_Board from "./pages/EditorialBoard.js";

import Math from "./components/Mathematics/Math.js";
import Algebra_1 from "./components/Mathematics/Algebra_1.js";
import Algebra_2 from "./components/Mathematics/Algebra_2.js";
import Geometry_1 from "./components/Mathematics/Geometry_1.js";
import Geometry_2 from "./components/Mathematics/Geometry_2.js";
import Trigonometry_1 from "./components/Mathematics/Trigonometry_1.js";
import Trigonometry_2 from "./components/Mathematics/Trigonometry_2.js";
import Calculus_1 from "./components/Mathematics/Calculus_1.js";
import Calculus_2 from "./components/Mathematics/Calculus_2.js";
import MinAS_2 from "./components/Mathematics/MinAS_2.js";

import PS from "./components/PhysicalSciences/PS.js";
import CA_1 from "./components/PhysicalSciences/CA_1.js";
import CA_2 from "./components/PhysicalSciences/CA_2.js";
import Phy_1 from "./components/PhysicalSciences/Phy_1.js";
import Phy_2 from "./components/PhysicalSciences/Phy_2.js";
import Chem_1 from "./components/PhysicalSciences/Chem_1.js";
import Chem_2 from "./components/PhysicalSciences/Chem_2.js";

import EES_main from "./components/EarthEnvironmentalSciences/EES_main.js";
import GG_1 from "./components/EarthEnvironmentalSciences/GG_1.js";
import GG_2 from "./components/EarthEnvironmentalSciences/GG_2.js";
import EE_1 from "./components/EarthEnvironmentalSciences/EE_1.js";
import EE_2 from "./components/EarthEnvironmentalSciences/EE_2.js";
import F_1 from "./components/EarthEnvironmentalSciences/F_1.js";
import F_2 from "./components/EarthEnvironmentalSciences/F_2.js";

import YCS from "./components/YogaCognitiveSciences/YCS.js";
import Y_1 from "./components/YogaCognitiveSciences/Y_1.js";
import Y_2 from "./components/YogaCognitiveSciences/Y_2.js";
import CS_1 from "./components/YogaCognitiveSciences/CS_1.js";
import CS_2 from "./components/YogaCognitiveSciences/CS_2.js";
import Psy_1 from "./components/YogaCognitiveSciences/Psy_1.js";
import Psy_2 from "./components/YogaCognitiveSciences/Psy_2.js";

import HLS from "./components/HealthLifeSciences/HLS.js";
import Ayu_1 from "./components/HealthLifeSciences/Ayu_1.js";
import Ayu_2 from "./components/HealthLifeSciences/Ayu_2.js";
import Bot_1 from "./components/HealthLifeSciences/Bot_1.js";
import Bot_2 from "./components/HealthLifeSciences/Bot_2.js";
import HF_1 from "./components/HealthLifeSciences/HF_1.js";
import HF_2 from "./components/HealthLifeSciences/HF_2.js";
import VA_1 from "./components/HealthLifeSciences/VA_1.js";
import VA_2 from "./components/HealthLifeSciences/VA_2.js";
import FS_1 from "./components/HealthLifeSciences/FS_1.js";
import FS_2 from "./components/HealthLifeSciences/FS_2.js";
import SOP_1 from "./components/HealthLifeSciences/SOP_1.js";
import SOP_2 from "./components/HealthLifeSciences/SOP_2.js";

import SS from "./components/SocialSciences/SS.js";
import ABJ_1 from "./components/SocialSciences/ABJ_1.js";
import ABJ_2 from "./components/SocialSciences/ABJ_2.js";
import TC_1 from "./components/SocialSciences/TC_1.js";
import TC_2 from "./components/SocialSciences/TC_2.js";
import PS_1 from "./components/SocialSciences/PS_1.js";
import PS_2 from "./components/SocialSciences/PS_2.js";
import MS_1 from "./components/SocialSciences/MS_1.js";
import MS_2 from "./components/SocialSciences/MS_2.js";

import CLS from "./components/ComputationalLanguageSciences/CLS.js";
import LIN_1 from "./components/ComputationalLanguageSciences/LIN_1.js";
import LIN_2 from "./components/ComputationalLanguageSciences/LIN_2.js";
import SA_1 from "./components/ComputationalLanguageSciences/SA_1.js";
import SA_2 from "./components/ComputationalLanguageSciences/SA_2.js";
import E_1 from "./components/ComputationalLanguageSciences/E_1.js";
import E_2 from "./components/ComputationalLanguageSciences/E_2.js";
import CM_1 from "./components/ComputationalLanguageSciences/CM_1.js";
import CM_2 from "./components/ComputationalLanguageSciences/CM_2.js";

import TS from "./components/TechnologicalSciences/TS.js";
import Agri_1 from "./components/TechnologicalSciences/Agri_1.js";
import Agri_2 from "./components/TechnologicalSciences/Agri_2.js";
import WM_1 from "./components/TechnologicalSciences/WM_1.js";
import WM_2 from "./components/TechnologicalSciences/WM_2.js";
import Meta_1 from "./components/TechnologicalSciences/Meta_1.js";
import Meta_2 from "./components/TechnologicalSciences/Meta_2.js";
import CEA_1 from "./components/TechnologicalSciences/CEA_1.js";
import CEA_2 from "./components/TechnologicalSciences/CEA_2.js";
import ME_1 from "./components/TechnologicalSciences/ME_1.js";
import ME_2 from "./components/TechnologicalSciences/ME_2.js";
import TE_1 from "./components/TechnologicalSciences/TE_1.js";
import TE_2 from "./components/TechnologicalSciences/TE_2.js";
import Gem_1 from "./components/TechnologicalSciences/Gem_1.js";
import Gem_2 from "./components/TechnologicalSciences/Gem_2.js";



function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          
          <Route path="/BBB" element={<BBB />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/EditorialBoard" element={<Editorial_Board />} />
          {/* ==================================================================================================== */}
          <Route path="/mathematics" element={<Math />} />
          <Route path="/mathematics/Algebra_Page" element={<Algebra_1 />} />
          <Route path="/mathematics/Algebra_Content" element={<Algebra_2 />} />
          <Route path="/mathematics/Geometry_Page" element={<Geometry_1 />} />
          <Route
            path="/mathematics/Geometry_Content"
            element={<Geometry_2 />}
          />
          <Route
            path="/mathematics/Trigonometry_Page"
            element={<Trigonometry_1 />}
          />
          <Route
            path="/mathematics/Trigonometry_Content"
            element={<Trigonometry_2 />}
          />
          <Route path="/mathematics/Calculus_Page" element={<Calculus_1 />} />
          <Route
            path="/mathematics/Calculus_Content"
            element={<Calculus_2 />}
          />
          <Route
            path="/mathematics/Mathematics_in_Alaṅkāra_Śāstra_Content"
            element={<MinAS_2 />}
          />
          {/* ================================================================================================ */}
          <Route path="/Physical_Sciences" element={<PS />} />
          <Route
            path="/Physical_Sciences/Cosmology&Astronomy_Page"
            element={<CA_1 />}
          />
          <Route
            path="/Physical_Sciences/Cosmology&Astronomy_Content"
            element={<CA_2 />}
          />
          <Route path="/Physical_Sciences/Physics_Page" element={<Phy_1 />} />
          <Route
            path="/Physical_Sciences/Physics_Content"
            element={<Phy_2 />}
          />
          <Route
            path="/Physical_Sciences/Chemistry_Page"
            element={<Chem_1 />}
          />
          <Route
            path="/Physical_Sciences/Chemistry_Content"
            element={<Chem_2 />}
          />
          {/* ============================================================================================== */}
          <Route path="/Earth_Environmental_Sciences" element={<EES_main />} />
          <Route
            path="/Earth_Environmental_Sciences/Geology_Geography_Page"
            element={<GG_1 />}
          />
          <Route
            path="/Earth_Environmental_Sciences/Geology_Geography_Content"
            element={<GG_2 />}
          />
          <Route
            path="/Earth_Environmental_Sciences/Ecology_Environment_Page"
            element={<EE_1 />}
          />
          <Route
            path="/Earth_Environmental_Sciences/Ecology_Environment_Content"
            element={<EE_2 />}
          />
          <Route
            path="/Earth_Environmental_Sciences/Forestry_Page"
            element={<F_1 />}
          />
          <Route
            path="/Earth_Environmental_Sciences/Forestry_Content"
            element={<F_2 />}
          />
          {/* ============================================================================================= */}
          <Route path="/Social_Sciences" element={<SS />} />
          <Route
            path="/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Page"
            element={<ABJ_1 />}
          />
          <Route
            path="/Social_Sciences/Ancient_Bhāratīya_Jurisprudence_Content"
            element={<ABJ_2 />}
          />
          <Route
            path="/Social_Sciences/Trade_and_Commerce_Page"
            element={<TC_1 />}
          />
          <Route
            path="/Social_Sciences/Trade_and_Commerce_Content"
            element={<TC_2 />}
          />
          <Route
            path="/Social_Sciences/Political_Science_Page"
            element={<PS_1 />}
          />
          <Route
            path="/Social_Sciences/Political_Science_Content"
            element={<PS_2 />}
          />
          <Route
            path="/Social_Sciences/Military_Science_Page"
            element={<MS_1 />}
          />
          <Route
            path="/Social_Sciences/Military_Science_Content"
            element={<MS_2 />}
          />
          {/* ============================================================================================= */}
          <Route path="/Yoga_Cognitive_Sciences" element={<YCS />} />
          <Route path="/Yoga_Cognitive_Sciences/Yoga_Page" element={<Y_1 />} />
          <Route
            path="/Yoga_Cognitive_Sciences/Yoga_Content"
            element={<Y_2 />}
          />
          <Route
            path="/Yoga_Cognitive_Sciences/Cognitive_Sciences_Page"
            element={<CS_1 />}
          />
          <Route
            path="/Yoga_Cognitive_Sciences/Cognitive_Sciences_Content"
            element={<CS_2 />}
          />
          <Route
            path="/Yoga_Cognitive_Sciences/Psychology_Mantras_Page"
            element={<Psy_1 />}
          />
          <Route
            path="/Yoga_Cognitive_Sciences/Psychology_Mantras_Content"
            element={<Psy_2 />}
          />
          {/* ======================================================================================= */}
          <Route path="/Computational_Language_Sciences" element={<CLS />} />
          <Route
            path="/Computational_Language_Sciences/Linguistics_Page"
            element={<LIN_1 />}
          />
          <Route
            path="/Computational_Language_Sciences/Linguistics_Content"
            element={<LIN_2 />}
          />
          <Route
            path="/Computational_Language_Sciences/Semantic_Analysis_Page"
            element={<SA_1 />}
          />
          <Route
            path="/Computational_Language_Sciences/Semantic_Analysis_Content"
            element={<SA_2 />}
          />
          <Route
            path="/Computational_Language_Sciences/Encryption_Page"
            element={<E_1 />}
          />
          <Route
            path="/Computational_Language_Sciences/Encryption_Content"
            element={<E_2 />}
          />
          <Route
            path="/Computational_Language_Sciences/Combinatorics_Mnemonics_Page"
            element={<CM_1 />}
          />
          <Route
            path="/Computational_Language_Sciences/Combinatorics_Mnemonics_Content"
            element={<CM_2 />}
          />
          {/* ============================================================================================ */}
          <Route path="/Health_Life_Sciences" element={<HLS />} />
          <Route
            path="/Health_Life_Sciences/Ayurveda_Page"
            element={<Ayu_1 />}
          />
          <Route
            path="/Health_Life_Sciences/Ayurveda_Content"
            element={<Ayu_2 />}
          />
          <Route path="/Health_Life_Sciences/Botany_Page" element={<Bot_1 />} />
          <Route
            path="/Health_Life_Sciences/Botany_Content"
            element={<Bot_2 />}
          />
          <Route
            path="/Health_Life_Sciences/Horticulture_Floriculture_Page"
            element={<HF_1 />}
          />
          <Route
            path="/Health_Life_Sciences/Horticulture_Floriculture_Content"
            element={<HF_2 />}
          />
          <Route
            path="/Health_Life_Sciences/Veterinary_Ayurveda_Page"
            element={<VA_1 />}
          />
          <Route
            path="/Health_Life_Sciences/Veterinary_Ayurveda_Content"
            element={<VA_2 />}
          />
          <Route
            path="/Health_Life_Sciences/Food_Science_Page"
            element={<FS_1 />}
          />
          <Route
            path="/Health_Life_Sciences/Food_Science_Content"
            element={<FS_2 />}
          />
          <Route
            path="/Health_Life_Sciences/Science_of_Pulse_Page"
            element={<SOP_1 />}
          />
          <Route
            path="/Health_Life_Sciences/Science_of_Pulse_Content"
            element={<SOP_2 />}
          />
          {/* ===================================================================================== */}
           
           <Route path="/Technological_Sciences" element={<TS />} />
         
          <Route
            path="/Technological_Sciences/Agriculture_Page"
            element={<Agri_1 />}
          />
          <Route
            path="/Technological_Sciences/Agriculture_Content"
            element={<Agri_2 />}
          />

          <Route
            path="/Technological_Sciences/Water_Management_Page"
            element={<WM_1 />}
          />
          <Route
            path="/Technological_Sciences/Water_Management_Content"
            element={<WM_2 />}
          />
          <Route
            path="/Technological_Sciences/Metallurgy_Page"
            element={<Meta_1 />}
          />
          <Route
            path="/Technological_Sciences/Metallurgy_Content"
            element={<Meta_2 />}
          />
          <Route
            path="/Technological_Sciences/Civil_Engineering_Architecture_Page"
            element={<CEA_1 />}
          />
          <Route
            path="/Technological_Sciences/Civil_Engineering_Architecture_Content"
            element={<CEA_2 />}
          />
          <Route
            path="/Technological_Sciences/Mechanical_Engineering_Page"
            element={<ME_1 />}
          />
          <Route
            path="/Technological_Sciences/Mechanical_Engineering_Content"
            element={<ME_2 />}
          />
           <Route
            path="/Technological_Sciences/Textile_Engineering_Page"
            element={<TE_1 />}
          />
          <Route
            path="/Technological_Sciences/Textile_Engineering_Content"
            element={<TE_2 />}
          />
          <Route
            path="/Technological_Sciences/Gemmology_Page"
            element={<Gem_1 />}
          />
          <Route
            path="/Technological_Sciences/Gemmology_Content"
            element={<Gem_2 />}
          /> 


          {/* ========================================================================================= */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
