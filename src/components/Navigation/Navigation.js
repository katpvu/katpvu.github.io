import "./Navigation.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";
import { TfiClose } from 'react-icons/tfi'
import Footer from "../Footer/Footer";
import useWindowSize from "../../hooks/useWindowSize";

export const Navigation = ({ portfolioData }) => {
    const [openNavPanel, setOpenNavPanel] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize >= 815) {
            setOpenNavPanel(false);
        };
    }, [windowSize]);

    const generateNavListItems = (nav=false) => {
        let links = ["about", "skills", "projects", "contact"];
        if (nav) links.pop();
        return (
            links.map((link, i) => (
                <li onClick={nav ? () => setOpenNavPanel(false) : () => true} key={i}>
                    <a href={`#${link}`}>{link}</a>
                </li>
            ))
        );
    };

    return (
        <>
        <nav id="nav-bar-1">
            <ul>
                <li id="initials"><a href="#home">kv.</a></li>
                {generateNavListItems()}
            </ul>
            <Footer portfolioData={portfolioData} nav={true}/>
        </nav>
        {openNavPanel 
        ? <TfiClose id="close-nav-btn" onClick={() => setOpenNavPanel(false)}/>
        : <GiHamburgerMenu size={20} id="hamburger-button" onClick={() => setOpenNavPanel(true)}/>
        }
        <nav id="nav-bar-2" className={openNavPanel ? "open-nav" : "close-nav"}>
            <ul >
                <li id="initials" onClick={() => setOpenNavPanel(false)}><a href="#home">kv.</a></li>
                {generateNavListItems(true)}
                <Footer portfolioData={portfolioData} openNavPanel={openNavPanel}/>
            </ul>
        </nav>
        </>
    );
};

export default Navigation;