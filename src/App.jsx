import React from "react";
import Navbar from "./components/navar.jsx/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
