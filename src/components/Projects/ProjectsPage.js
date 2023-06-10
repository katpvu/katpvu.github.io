import "./Projects.css"
import Skills from "../Skills/Skills";
import { TfiGithub } from "react-icons/tfi";
import { BsBoxArrowUpRight } from "react-icons/bs"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProjectPage = ({portfolioData}) => {
    const { projects } = portfolioData;
    const location = useLocation();
    const { num } = location.state;

    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [currentIndex, setCurrentIndex] = useState(0) 

    useEffect(() => {
        return () => {
            setCurrentProject(projects[num]);
        };
    }, [])

    useEffect(() => {
        if (location) {
            setCurrentProject(projects[num])
            setCurrentIndex(num)
        }
    }, [location])


    const handleProjectNavClick = (i) => {
        setCurrentProject(projects[i]);
        setCurrentIndex(i)
    }
    return (
        <>
        <section id="projects-page-wrapper" className="right">
            <ul id="projects-nav">
            {
                ["01", "02", "03"].map((num, i) => (
                    <li 
                    key={i} 
                    onClick={() => handleProjectNavClick(i)}
                    className={currentIndex === i ? "active" : ""}
                    >
                        <h1>{num}</h1>
                        <h3>{projects[i].name}</h3>
                    </li>
                ))
            }
            </ul>
            {/* <div className="project-card" > */}
                <div className="project-header-container">
                    <h2>{currentProject.name}</h2>
                    <div className="btns-container">
                        <a href={currentProject.liveLink} target="_blank" className="projects-btn">Live <BsBoxArrowUpRight /></a>
                        <a href={currentProject.sourceCode} target="_blank" className="projects-btn"><TfiGithub /> Source Code</a>
                    </div>
                </div>
                <p>{currentProject.description}</p>
                <div className="tech-stack-div">
                    <h3>Techstack:</h3>
                    <Skills portfolioData={portfolioData} techstack={currentProject.techstack}/>
                </div>
                <div>
                    <div>
                        <img className="project-img-full" src={currentProject.imgurl} alt={currentProject.name} />
                        <div id="image-gallery">
                        {currentProject.additionalPhotos.map((url) => (
                            <div className="gallery-image">
                                <img src={url} alt="" className="project-thumb" />
                            </div>
                        ))}
                        </div>
                    </div>
                    <img src={currentProject.giflink} alt="gif" />
                </div>
            {/* </div> */}
        </section>
        </>
    );
};

export default ProjectPage;