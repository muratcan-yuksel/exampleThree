import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Building from "./components/Building";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Building />
    </div>
  );
};

export default App;
