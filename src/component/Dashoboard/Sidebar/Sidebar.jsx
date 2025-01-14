import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList, faUserCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from '../../../context';
import Image from 'react-bootstrap/Image';
import dilLogo from '../../../Assets/dilLogo.png';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setTitle}) => {
    const { state: { admin } } = useAppContext()
    const navigate=useNavigate();
    return (
        <div>
            <div className="sideBrand" onClick={()=>navigate('/')}>
                <div className="sideBrnIcon">
                    <Image src={dilLogo} alt='logo' className="img-fluid" style={{ maxWidth: '50px', height: 'auto' }} />
                    </div>
                <h2>DIL <span className="navHighlight">Portal</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>    
                        <li>
                            <NavLink onClick={() => setTitle('Profile')} activeclassname="activePage" exact to="/dashboard/profile">
                                <FontAwesomeIcon icon={faUserCircle} className="iconC"/> 
                                Profile
                            </NavLink>
                        </li>
                    {admin ? 
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Order List')} activeclassname="activePage" to="/dashboard/orderList">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> 
                                    Order list
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeclassname="activePage" to="/dashboard/addService">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> 
                                    Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Make Admin')} activeclassname="activePage" to="/dashboard/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} className="iconC"/> 
                                    Make Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Services')} activeclassname="activePage" to="/dashboard/manageServices">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/>
                                     Manage Services
                                </NavLink>
                            </li>
                        </>
                        :
                        <>

                            <li>
                                <NavLink onClick={() => setTitle('Add Deparment')} activeclassname="activePage" to="/dashboard/department">
                                    <FontAwesomeIcon icon={faPlus} className="iconC"/> 
                                    Add Department
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Departments')} activeclassname="activePage" to="/dashboard/Showdepartments">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> 
                                    Show Department
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Approval Services')} activeclassname="activePage" to="/dashboard/approval-services">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Approval Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Approval Industry')} activeclassname="activePage" to="/dashboard/approval-industry">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Approval Industry
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Approval Department')} activeclassname="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Approval Department
                                </NavLink>
                            </li>
                        </>
                     } 
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
