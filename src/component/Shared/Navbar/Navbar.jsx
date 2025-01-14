// import React from 'react';
// import { Link } from "react-router-dom";
// import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBuffer } from '@fortawesome/free-brands-svg-icons';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import PopOver from '../PopOver/PopOver';
// import { useAppContext } from '../../../context';
// import Image from 'react-bootstrap/Image';
// import dilLogo from '../../../Assets/dilLogo.png';



// const NavBar = () => {
//     const { state: { user } } = useAppContext()
//     // console.log(user)
//     const [isSticky, setSticky] = useState(false)

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 50) {
//                 setSticky(true)
//             } else {
//                 setSticky(false)
//             }
//         })
//     }, [])

//     const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });

//     return (
//         <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
//             <Container>
//                 <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
//                     <Image src={dilLogo} alt='logo' className="img-fluid" style={{ maxWidth: '60px', height: 'auto' }} />
//                     DIL <span className="navHighlight">Portal</span>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto mainNav" activeKey="/home">
//                         <Nav.Item>
//                             <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link as={Link} to="/departments" className="nav-link">Departments</Nav.Link>                       
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link as={Link} to="/services" className="nav-link">Services</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
//                         </Nav.Item>
//                         { user?.email && (
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
//                             </Nav.Item>)}
//                         {/* <Nav.Item>
//                             <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
//                         </Nav.Item> */}
//                         <Nav.Item>
//                             {
//                                 user?.email ?
//                                     <div>
//                                         <PopOver />
//                                     </div> :
//                                     <Link to="/login">
//                                         <button className="loginBtn">Login</button>
//                                     </Link>
//                             }
//                         </Nav.Item>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default NavBar;

import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';
import { useAppContext } from '../../../context';
import Image from 'react-bootstrap/Image';
import dilLogo from '../../../Assets/dilLogo.png';



const NavBar = () => {
    const [isSticky, setSticky] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

    useEffect(() => {
        const updateLoginState = () => {
            const token = localStorage.getItem('user');
            setIsLoggedIn(!!token);
        };

        window.addEventListener('user-logout', updateLoginState);

        return () => {
            window.removeEventListener('user-logout', updateLoginState);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });

    return (
        <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <Image src={dilLogo} alt='logo' className="img-fluid" style={{ maxWidth: '60px', height: 'auto' }} />
                    DIL <span className="navHighlight">Portal</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/departments" className="nav-link">Departments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/services" className="nav-link">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
                        </Nav.Item>
                        {isLoggedIn && (
                            <Nav.Item>
                                <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
                            </Nav.Item>)}
                        {/* <Nav.Item>
                            <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            {
                                isLoggedIn ? (
                                    <div>
                                        <PopOver/>
                                    </div>
                                ) : (
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                                )
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;

