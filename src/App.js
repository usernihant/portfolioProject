// App.js
import React from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/projects";

// import "./App.css"; // Import the main stylesheet

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Projects/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
