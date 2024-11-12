import React from 'react'
import './HappyClient.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faTasks, faHeadset, faUsers,faIndustry,faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
const HappyClient = () => {
    const workDetails = [
        { title: 'Student Internships', number: 542, id: 1,icon:faUserGraduate },
        { title: 'Projects', number: 623, id: 2,icon:faTasks },
        { title: 'Successful Collaborations', number: 1634, id: 3,icon:faIndustry },
        { title: 'Our Team', number: 31, id: 4 ,icon:faUsers}
    ]
    return (
        <section className="ourValue mt-5">
            <div className="row container mx-auto">
                {
                    workDetails.map(({ title, number, icon, id }) => {
                        return (<div className="col-md-6 col-lg-3" key={id}>
                            <div className="ourValueDetails">
                                <span className={`valueIcon valueIcon${id}`}>
                                    <FontAwesomeIcon icon={icon}/>
                                </span>
                                <div>
                                    <p className="ourValueTitle">{title}</p>
                                    <h4 className="ourValueNumber">
                                        <CountUp
                                            end={`${number}`}
                                            start={0}
                                            duration={9}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    )
}

export default HappyClient
