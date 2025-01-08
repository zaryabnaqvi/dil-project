// import React from 'react';
// import teamPic from '../../../Assets/about.svg';
// import Fade from 'react-reveal/Fade';
// import { useTheme } from '@emotion/react';

// const About = () => {
//     const theme=useTheme();
//     return (
//         <section className="about overflow-hidden py-5">
//             <div className="row w-100">
//                 <div className="row col-md-11 mx-auto ">
//                     <div className="col-md-6 img">
//                         <Fade duration={2000} left>
//                             <img src={`${teamPic}`} alt="" className="img-fluid"/>
//                         </Fade>
//                     </div>
//                     <div className="col-md-6 ps-2">
//                         <Fade duration={2000} right>
//                             <p className="miniTitle">about us</p>
//                             <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL</h1>
//                             <p className="headerContent">At the Directorate of Industrial Liaison (DIL), we facilitate impactful connections between academia, industry, and government. Our initiatives support your business objectives through access to skilled professionals, collaborative research opportunities, and tailored services from university departments. By bridging the gap between education and industry, we aim to enhance innovation, provide industry visits, internships, and effective job placements, ultimately fostering a sustainable socio-economic environment for all stakeholders.</p>
//                             <button className="branBtn">learn More</button>
//                         </Fade>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
import React from 'react';
import teamPic from '../../../Assets/about.svg';
import Fade from 'react-reveal/Fade';
import { useTheme } from '@emotion/react';

const About = () => {
    const theme = useTheme();
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid" />
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2 text-center text-md-start">
                        <Fade duration={2000} right>
                            <p className="miniTitle">about us</p>
                            <h1 className="headerTitle">
                                HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL
                            </h1>
                            <p className="headerContent">
                                At the Directorate of Industrial Liaison (DIL), we facilitate impactful connections between academia, industry, and government. Our initiatives support your business objectives through access to skilled professionals, collaborative research opportunities, and tailored services from university departments. By bridging the gap between education and industry, we aim to enhance innovation, provide industry visits, internships, and effective job placements, ultimately fostering a sustainable socio-economic environment for all stakeholders.
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <button className="branBtn">learn More</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
