import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Building from "./components/Building";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Building />
      <Contact />
    </div>
  );
};

export default App;
