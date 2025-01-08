
import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Toast, Button } from 'react-bootstrap';
import './Department.css';
import axios from 'axios';
import ifoIcon from '../../../../Assets/info.svg';
import { CreateDepartment } from '../../../../api/department';
// import toast,Toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
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
            toast.success("Department created successfully!");
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
             <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
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
                
            
                <div className="d-flex justify-content-center">
                    <Button variant="success" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default Department;
