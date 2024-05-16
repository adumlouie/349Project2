// import react to use jsx
import React from "react";
// css styling file
import "./Projects.css";

// array of project objects that could be add on to later
const projects = [
    {
        title: "Fitty Kitty Workout Logger",
        description:
            "Fitty Kitty is a workout logging app that was designed for you to easily track your fitness journey. Built with Node.js, Express, MySql, HTML, and CSS, this app allows users to create accounts, log daily workouts, and review workout history.",
        github: "https://github.com/adumlouie/cpsc254Project",
    },
    {
        title: "BFS Maze Solver",
        description:
            "This was a Maze Generator and Solver built using Python and Tkinter that generates randomized mazes using DFS and then traces through the maze and solves them using Breadth First Search. ",
        github: "https://github.com/adumlouie/cpsc481-assignment1",
    },
];

// functional compoentn that renders the projects section
const Projects = () => {
    return (
        <section className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                {/* map over the projects array and render each project */}
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
