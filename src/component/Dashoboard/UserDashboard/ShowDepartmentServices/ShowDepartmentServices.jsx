import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container, ListGroup, Modal, Form, Alert } from 'react-bootstrap';

import { ShowServices } from '../../../../api/department';
import { UpdateService,DeleteService } from '../../../../api/department';
const Services = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await ShowServices();
                if (data.code === 200) {
                    setServices(data.data);
                }
            } catch (error) {
                setError("Error fetching services data");
                console.error(error);
            }
        };
        fetchServices();
    }, []);

    const handleEdit = (service) => {
        setCurrentService(service);
        setShowEditModal(true);
    };

    const handleDelete = (service) => {
        setCurrentService(service);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        try {
            const response = await DeleteService(currentService._id);
            if (response.status === 200) {
                setShowDeleteConfirm(false);
                setShowAlert(true);
                // Refetch services after deletion
                const data = await ShowServices();
                setServices(data.data);
            }
        } catch (error) {
            console.error('Failed to delete service', error);
        }
    };

    const handleSave = async () => {
        try {
            const response = await UpdateService(currentService._id, currentService);
            if (response.status === 200) {
                setShowEditModal(false);
                setShowAlert(true);
                // Refetch services after update
                const data = await ShowServices();
                setServices(data.data);
            }
        } catch (error) {
            console.error('Failed to update service', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Our Services</h2>
            {error && <p className="text-danger">{error}</p>}
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Action completed successfully.
                </Alert>
            )}
            <Row>
                {services.map((service) => (
                    <Col md={4} sm={6} xs={12} key={service._id} className="my-3">
                        <Card>
                            <Card.Header as="h5">{service.title}</Card.Header>
                            {service.media.length > 0 && (
                                <Card.Img variant="top" src={service.media[0]} alt="Service Media" />
                            )}
                            <Card.Body>
                                <Card.Title>{service.subtitle}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>

                                <h6>Technologies: {service.technology}</h6>
                                <h6>Career Scope: {service.careerScope}</h6>

                                <ListGroup variant="flush" className="my-3">
                                    <ListGroup.Item><strong>Department:</strong> {service.departmentId.name}</ListGroup.Item>
                                    <ListGroup.Item><strong>Faculty:</strong> {service.departmentId.faculty}</ListGroup.Item>
                                    <ListGroup.Item><strong>University:</strong> {service.departmentId.universityName}</ListGroup.Item>
                                </ListGroup>

                                {service.projects.length > 0 && (
                                    <div className="mt-3">
                                        <h6>Projects:</h6>
                                        {service.projects.map((project) => (
                                            <Card key={project._id} className="my-2">
                                                <Card.Body>
                                                    <Card.Title>{project.title}</Card.Title>
                                                    <Card.Text>{project.desc}</Card.Text>
                                                    <Button variant="link" href={project.link} target="_blank">View Project</Button>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" onClick={() => handleEdit(service)}>
                                    Edit
                                </Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(service)}>
                                    Delete
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="serviceTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.title}
                                onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceSubtitle">
                            <Form.Label>Subtitle</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.subtitle}
                                onChange={(e) => setCurrentService({ ...currentService, subtitle: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={currentService?.description}
                                onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceTechnology">
                            <Form.Label>Technologies</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.technology}
                                onChange={(e) => setCurrentService({ ...currentService, technology: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceCareerScope">
                            <Form.Label>Career Scope</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.careerScope}
                                onChange={(e) => setCurrentService({ ...currentService, careerScope: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceMedia">
                            <Form.Label>Media URL (Image)</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.media[0] || ''}
                                onChange={(e) => setCurrentService({ ...currentService, media: [e.target.value] })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceDepartment">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.departmentId.name}
                                onChange={(e) => setCurrentService({ ...currentService, departmentId: { ...currentService.departmentId, name: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group controlId="serviceProjects">
                            <Form.Label>Projects (Comma separated)</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentService?.projects.map((p) => p.title).join(', ') || ''}
                                onChange={(e) => {
                                    const updatedProjects = e.target.value.split(',').map((title) => ({ title }));
                                    setCurrentService({ ...currentService, projects: updatedProjects });
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the service <strong>{currentService?.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Confirm Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Services;



