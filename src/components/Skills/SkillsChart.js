
import "./Skills.css"
export const SkillsChart = ({ portfolioData }) => {
    const { categorizedSkills } = portfolioData;
    return (<>
    <section id="skills">
        <h1 className="header-title">Skills</h1>
        <div id="skills-table">
            {categorizedSkills.map((item, i) => (
                <div className="skills-table-row">
                    <h6>{item.category}</h6>
                    <p>{item.skills}</p>
                </div>
            ))}
        </div>
    </section>
    </>);
};

export default SkillsChart;