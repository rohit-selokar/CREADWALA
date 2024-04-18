import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Emi_Calculator from "./pages/Emi_Calculator";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Emi from "./pages/calculator/Emi";
import Sip from "./pages/calculator/Sip";
import Rd from "./pages/calculator/Rd";
import Ssy from "./pages/calculator/Ssy";
import Ppf from "./pages/calculator/Ppf";
import Mf from "./pages/calculator/Mf";
import Swp from "./pages/calculator/Swp";
import Lumpsum from "./pages/calculator/Lumpsum";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Emi_Calculator />} />
        <Route path="/emicalculator" element={<Emi/>}/>
        <Route path="/calculator/sipcalculator" element={<Sip/>}/>
        <Route path="/rdcalulator" element={<Rd/>}/>
        <Route path="/calculator/ssycalculator" element={<Ssy/>}/>
        <Route path="/ppfcalculator" element={<Ppf/>}/>
        <Route path="/lumpsumcalculator" element={<Lumpsum/>}/>
        <Route path="/calculator/mfcalculator" element={<Mf/>}/>
        <Route path="/swpcalculator" element={<Swp/>}/>
        
      </Routes>

      <Footer />
    </>
  );
};

export default App;
