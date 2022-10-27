import React, { useContext } from "react";
import { ThemeContext } from "../context";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Edu from "./education/Edu";
import Intro from "./Intro/Intro";
import ProjectList from "./projectList/ProjectList";
import Skills from "./skills/Skills";
import Toggle from "./toggle/Toggle";



function App(){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"  }}>
    <Navbar />
    <Toggle />
    <Intro />
    <About />
    <Edu />
    <Skills />
    <ProjectList />
    <Contact />
    </div>
    );
}

export default App;