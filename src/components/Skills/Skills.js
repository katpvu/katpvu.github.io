import "./Skills.css"
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";

const Skills = ({ portfolioData, techstack }) => {
    const { skills } = portfolioData;
    const windowSize = useWindowSize();

    const [currentSet, setCurrentSet] = useState(skills)

    useEffect(() => {
        if (techstack) {
            let techSkills = skills.filter((skill) => techstack.includes(skill.name))
            setCurrentSet(techSkills)
        }
    }, [techstack])


    return (
        <section id="skills-container">
            {!techstack && <h1 className="header-title">Skills</h1>}
            {/* {windowSize.width <= 555 && <marquee>} */}
            {/* <marquee> */}
            <ul id="skills-flexbox">
                {currentSet.map((skill) => (
                    <li>
                        <img className="skill-icon" src={skill.imageUrl} alt={skill.name} />
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>
            {/* </marquee> */}
            {/* {windowSize.width <= 555 && </marquee>} */}
        </section>
    );

};

export default Skills;