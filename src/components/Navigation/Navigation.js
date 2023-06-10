import { Link } from "react-router-dom";
import "./Navigation.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";
import { TfiClose } from 'react-icons/tfi'
import Footer from "../Footer/Footer";
import useWindowSize from "../../hooks/useWindowSize";

export const Navigation = ({portfolioData}) => {
    const [openNavPanel, setOpenNavPanel] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize >= 815) {
            setOpenNavPanel(false);
        };
    }, [windowSize]);

    return (
        <>
        <nav id="nav-bar-1">
            <ul>
                <li id="initials"><a href="#">kv.</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <Footer portfolioData={portfolioData} nav={true}/>
        </nav>
        {openNavPanel ? 
        <TfiClose id="close-nav-btn" onClick={() => setOpenNavPanel(false)}/>
        :
        <GiHamburgerMenu size={20} id="hamburger-button" onClick={() => setOpenNavPanel(true)}/>
        }
        <nav id="nav-bar-2" className={openNavPanel ? "open-nav" : "close-nav"}>
            <ul >
                <li id="initials" onClick={() => setOpenNavPanel(false)}><a href="#">kv.</a></li>
                <li href="#about" onClick={() => setOpenNavPanel(false)}><a href="#about">about</a></li>
                <li href="#skills" onClick={() => setOpenNavPanel(false)}><a href="#skills">skills</a></li>
                <li href="#projects" onClick={() => setOpenNavPanel(false)}><a href="#projects">projects</a></li>
                {/* <li href="#contact"onClick={() => setOpenNavPanel(false)}><a href="#about">contact</a></li> */}
                <Footer portfolioData={portfolioData} openNavPanel={openNavPanel}/>
            </ul>
        </nav>
        </>
    );
};

export default Navigation;