
import "./Landing.css"
import Typical from 'react-typical';

const Landing = ({portfolioData}) => {
    const { aboutMe } = portfolioData;

    return (
        <>
        <section id="landing-root">
            <div id="landing-top">
                {/* <div id="profile-img">
                    <img src={aboutMe.profileImgUrl} alt="profile"/>
                </div> */}
                <h1 id="name" className="header">{aboutMe.name}.</h1>
                <h1 id="role">{aboutMe.role}</h1>
            </div>
            <div id="landing-bottom">
                <div className="full-flex-row">
                    <p id="typical-text">Oh hi! I was just 
                        <Typical
                        steps={['working on some projects!', 3000, "looking into new tools and technologies", 3000]}
                        loop={Infinity}
                        wrapper="p"
                        />
                    </p>
                    <div id="landing-image-container">
                        {/* <img src={aboutMe.profileImgUrl} /> */}
                        <img src={aboutMe.landingImageUrl} />
                    </div>
                </div>
                <div className="full-flex-row">
                    
                </div>

            </div>
            {/* <Footer portfolioData={portfolioData}/> */}
        </section>
        </>
    );
};

export default Landing;