import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCol from './FooterCol';
import './Footer.css';
import { usefulLink, ourServices, otherLinks, footerInfo } from '../../FooterData';
import FooterInfo from './FooterInfo';
import { Link } from 'react-router-dom';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';
import Typography from '@mui/material/Typography';
import Image from 'react-bootstrap/Image';
import dilLogo from '../../../Assets/dilLogo.png';
import { Container } from '@mui/material/Container';
const Footer = () => {
    return (
        <section className='row footer'>
            <Row className="col-md-11 mx-auto">
                <Row className="align-items-center footerInfo justify-content-around">
                    <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center text-md-start mb-3 mb-md-0">
                        <Image
                            src={dilLogo}
                            alt="logo"
                            className="img-fluid"
                            style={{ maxWidth: '80px', height: 'auto' }}
                        />
                        <Typography className="fs-5 mt-2">
                            DIRECTORATE OF INDUSTRIAL LIAISON
                        </Typography>
                    </Col>

                    <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center text-md-start mb-3 mb-md-0">
                        <Typography className="fs-5">
                            +923162416442 <br /> sadia@gmail.com
                        </Typography>
                    </Col>

                    <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center text-md-start">
                        <Typography className="fs-5 ">
                            NED University<br />Karachi, Pakistan
                        </Typography>
                    </Col>
                </Row>

                <Col md={6} lg={3} className="fAboutUs ">
                    <div className='d-flex flex-column align-items-center align-items-md-start'>
                        <h5>ABOUT US</h5>
                        <span className="animate-border"></span>
                    </div>
                    <p className="aboutUsDes">The Directorate of Industrial Liaison (DIL) at NED University bridges academia, industry, and government to foster innovation, internships, career counseling, and job placements, driving socio-economic growth.</p>
                    {/* 
                    <ul className="socialIcons d-flex gap-3">
                        <li>
                            <Link onClick={scrollUP} to="/" >
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/directorate-of-industrial-liaison-652b3a221/" target='blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul> */}
                    <ul className="socialIcons d-flex flex-wrap justify-content-center gap-3 w-100">
                        <li className="d-flex justify-content-center">
                            <Link onClick={scrollUP} to="/" className="d-block">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </li>
                        <li className="d-flex justify-content-center">
                            <Link onClick={scrollUP} to="/" className="d-block">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </li>
                        <li className="d-flex justify-content-center">
                            <Link onClick={scrollUP} to="/" className="d-block">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                        <li className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/directorate-of-industrial-liaison-652b3a221/" target='blank' className="d-block">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul>

                </Col>
                
                <FooterCol key="2" menuItems={usefulLink} title="USEFUL LINK" />
                <FooterCol key="3" menuItems={ourServices} title="OUR SERVICES" />
                <FooterCol key="4" menuItems={otherLinks} title="OTHER LINKS" />

            </Row>
            <p className="copyRight">Copyright &copy; 2021 <span className="fHighlight">Saadia Arshad</span>. All rights reserved.</p>
        </section>
    );
};

export default Footer;