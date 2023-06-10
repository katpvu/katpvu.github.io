import "./Main.css"
import AboutMe from "../AboutMe/AboutMe";
import Landing from "../Landing/Landing";
import ProjectsIndex from "../Projects/ProjectsIndex";
import SkillsChart from "../Skills/SkillsChart";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Main = ({portfolioData}) => {
    const { aboutMe } = portfolioData;
    return (
        <>
        <div id="main-wrapper">
            <Landing portfolioData={portfolioData}/>
            <AboutMe portfolioData={portfolioData}/>
            <SkillsChart portfolioData={portfolioData}/>
            <ProjectsIndex portfolioData={portfolioData}/>
            <div id="profile-img-container">
                <img id="profile-img" src={aboutMe.profileImgUrl} alt="me" />
            </div>
            <Footer portfolioData={portfolioData}/>
        </div>
        <Navigation portfolioData={portfolioData}/>
        </>
    );
};

export default Main;