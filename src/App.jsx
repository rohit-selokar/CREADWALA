import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Emi_Calculator from "./pages/Emi_Calculator";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import EmiCalculator from "./pages/calculator/EmiCalculator";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Emi_Calculator />} />
        <Route path="/emicalculator" element={<EmiCalculator/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
