// import react to use jsx
import React from "react";
// importing css file
import "./App.css";
// importing components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// importing element from react scroll for smooth scrolling
import { Element } from "react-scroll";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main>
                <Element name="about">
                    <About />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </main>
        </div>
    );
}

export default App;
