import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Emi_Calculator from "./pages/Emi_Calculator";
import Home from "./pages/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emicalculator" element={<Emi_Calculator />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
