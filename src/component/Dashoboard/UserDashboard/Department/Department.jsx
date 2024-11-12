// import React, { useEffect, useState } from 'react';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import { Form, Col, Row, Toast } from 'react-bootstrap';
// import './Department.css'
// import axios from 'axios';
// import ifoIcon from '../../../../Assets/info.svg';

// import { SET_SELECTED_SERVICE, useAppContext } from '../../../../context';

// const Department = () => {
 

    
//     const [show, setShow] = useState(true);

//     useEffect(() => {
//       // TODO:
//     }, [])

   



//     return (
//         <div className="bookForm">
//             <Toast show={show} onClose={() => setShow(!show)} className="bookToast">
//                 <Toast.Header>
//                     <img src={`${ifoIcon}`} className="rounded mr-2 toastIcon" alt=""/>
//                     <strong className="mr-auto">Info</strong>
//                     <small> 02 seconds ago</small>
//                 </Toast.Header>
//                 <Toast.Body>4242 4242 4242 4242 you can use this card number for testing </Toast.Body>
//             </Toast>
//             <Row>
//                 <Col md={6} xs={12} className="my-3">
//                     <Form.Label style={{ fontWeight: "bold" }}>Department Name</Form.Label>
        
//                 </Col>
//                 <Col md={6} xs={12} className="my-3">
//                         <Form.Label style={{ fontWeight: "bold" }}>Faculty</Form.Label>
            
//                 </Col>
//             </Row>

         
//         </div>
//     );
// };

// export default Department;
import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Toast, Button } from 'react-bootstrap';
import './Department.css';
import axios from 'axios';
import ifoIcon from '../../../../Assets/info.svg';
import { CreateDepartment } from '../../../../api/department';

const Department = () => {
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        faculty: "",
        universityName: "NED"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await CreateDepartment(formData)
            console.log("Department created successfully", data);
            setShow(false);
            setFormData({
                name: "",
                faculty: "",
                universityName: "NED"
            });

        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    useEffect(() => {
        // TODO: Add any necessary data fetching or setup here
    }, []);

    return (
        <div className="bookForm">
            <Toast show={show} onClose={() => setShow(!show)} className="bookToast">
                <Toast.Header>
                    <img src={`${ifoIcon}`} className="rounded mr-2 toastIcon" alt=""/>
                    <strong className="mr-auto">Info</strong>
                    <small>02 seconds ago</small>
                </Toast.Header>
                <Toast.Body>4242 4242 4242 4242 you can use this card number for testing</Toast.Body>
            </Toast>
            
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6} xs={12} className="my-3">
                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Department Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Enter department name" 
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12} className="my-3">
                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Faculty</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="faculty" 
                                value={formData.faculty} 
                                onChange={handleChange} 
                                placeholder="Enter faculty name" 
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
            

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Department;
