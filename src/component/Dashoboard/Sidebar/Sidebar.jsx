import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList, faUserCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from '../../../context';
import Image from 'react-bootstrap/Image';
import dilLogo from '../../../Assets/dilLogo.png';


const Sidebar = ({setTitle}) => {
    const { state: { admin } } = useAppContext()

    return (
        <div>
            <div className="sideBrand">
                <div className="sideBrnIcon">
                    {/* <FontAwesomeIcon icon={faBuffer}/> */}
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
                            {/* <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeclassname="activePage" exact to="/dashboard/DepartmentService">
                                    <FontAwesomeIcon icon={faPlus} className="iconC"/> 
                                    Add Department services
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Services')} activeclassname="activePage" exact to="/dashboard/ShowDepartmentService">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> 
                                    Show Department services
                                </NavLink>
                                
                            </li> */}
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
                                <NavLink onClick={() => setTitle('Review')} activeclassname="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Approval Department
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Review')} activeclassname="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Approval Industry
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
