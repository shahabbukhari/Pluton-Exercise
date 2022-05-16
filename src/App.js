import React from "react";
import Blank from "./Components/Blank";
import DiscountedPro from "./Components/DiscountedPro";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Blank />
      <DiscountedPro />
    </>
  );
}

export default App;
