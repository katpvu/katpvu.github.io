import "./Projects.css";
import { TfiGithub } from "react-icons/tfi";
import { BsBoxArrowUpRight } from "react-icons/bs"

const ProjectsIndex = ({portfolioData}) => {
    const { projects } = portfolioData;
    return (
        <>
        <section id="projects">
            <h1 className="header-title">PROJECTS</h1>
            <div id="projects-container">
            {projects && projects.map((project, i) => (
                <div className="project-card">
                    <div className="project-card-img-container">
                        <img className="project-thumb" src={project.imgurl} alt={project.name} />
                    </div>
                    <div className="project-details">
                        <h2>0{i+1} {project.name}</h2>
                        <p>{project.shortDescription}</p>
                        <div>
                            <h3>Techstack: {project.techStackSingleLine}</h3>
                            
                            {/* <Skills portfolioData={portfolioData} techstack={project.techstack}/> */}
                        </div>
                        <div className="btns-container">
                            <a href={project.liveLink} target="_blank" className="projects-btn">Live <BsBoxArrowUpRight /></a>
                            <a href={project.sourceCode} target="_blank" className="projects-btn"><TfiGithub /> Source Code</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
        </>
    );
};

export default ProjectsIndex;