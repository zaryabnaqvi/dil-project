// import React, { useEffect, useState } from 'react';
// import { Container, Accordion, Card, ListGroup, Spinner, Form, Button, Modal } from 'react-bootstrap';
// import { ShowServices } from '../../../api/department';
// import { RequestService } from '../../../api/requestService';
// import NavBar from '../../Shared/Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Service.css';
// import { Toaster, toast } from 'react-hot-toast';

// const Services = () => {
//     const [services, setServices] = useState([]);
//     const [filteredServices, setFilteredServices] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // Modal state
//     const [showModal, setShowModal] = useState(false);
//     const [currentService, setCurrentService] = useState(null);
//     const [description, setDescription] = useState('');
//     const [supportingDocs, setSupportingDocs] = useState([[]]);


//     const token=localStorage.getItem('user');
//     console.log(token);
//     // localStorage.removeItem('user');

//     const fetchServices = async () => {
//         setLoading(true);
//         try {
//             const data = await ShowServices();
//             if (data.code === 200) {
//                 setServices(data.data);
//                 setFilteredServices(data.data);
//             }
//         } catch (error) {
//             setError('No services available');
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchServices();
//     }, []);

//     const handleSearch = (e) => {
//         const query = e.target.value.toLowerCase();
//         setSearchQuery(query);

//         if (query) {
//             const matches = services.filter((service) =>
//                 service.title.toLowerCase().includes(query)
//             );
//             setFilteredServices(matches);
//         } else {
//             setFilteredServices(services);
//         }
//     };

//     const handleRequestClick = (service) => {
//         const token = localStorage.getItem('user');
//         if (!token) {
//             toast.error('You need to log in to request a service.');
//             return;
//         }
//         setCurrentService(service);
//         setShowModal(true);
//     };

//     const handleModalSubmit = async () => {
//         const token = localStorage.getItem('user');
//         // if (!token) {
//         //     toast.error('You need to log in to request a service.');
//         //     return;
//         // }

//         try {
//             const parsedToken = JSON.parse(token);
//             const payload = {
//                 serviceId: currentService._id,
//                 industryUserId: parsedToken._id,
//                 description,
//                 supportingDocs, // Pass the selected files (supportingDocs) to the API
//             };

//             // Make the API call to submit the request
//             // console.log( payload);
//             const response = await RequestService(payload);

//             if (response.code === 200) {
//                 toast.success('Request successfully sent!');
//                 setShowModal(false);
//                 setDescription('');
//                 setSupportingDocs([[]]); // Clear file inputs after successful submission
//             } else {
//                 toast.error(`Request failed: ${response.message}`);
//             }
//         } catch (error) {
//             console.error('Error submitting request:', error);
//             toast.error('An error occurred while submitting the request.');
//             setDescription('');

//         }
//     };


//     const handleFileChange = (e, index) => {
//         const newDocs = [...supportingDocs];
//         newDocs[index] = e.target.files;
//         setSupportingDocs(newDocs);
//     };

//     const addFileField = () => {
//         setSupportingDocs([...supportingDocs, []]);
//     };

//     const removeFileField = (index) => {
//         const newDocs = supportingDocs.filter((_, i) => i !== index);
//         setSupportingDocs(newDocs);
//     };

//     return (
//         <>
//             <NavBar />
//             <Container className="mt-4">
//                 <Toaster
//                     position="top-center"
//                     reverseOrder={false}
//                 />

//                 {loading ? (
//                     <div
//                         className="d-flex justify-content-center align-items-center"
//                         style={{ minHeight: '100vh' }}
//                     >
//                         <Spinner animation="border" variant="primary" />
//                         <h3 className="ms-3">Loading services...</h3>
//                     </div>
//                 ) : (
//                     <>
//                         <h1>Services</h1>

//                         <Form className="mb-2 no-border-input">
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Search services by title..."
//                                 value={searchQuery}
//                                 onChange={handleSearch}
//                                 className="rounded-pill"
//                             />
//                         </Form>

//                         {error && <p className="text-danger">{error}</p>}

//                         {filteredServices.length > 0 ? (
//                             <Accordion>
//                                 {filteredServices.map((service) => (
//                                     <Accordion.Item
//                                         eventKey={service._id}
//                                         key={service._id}
//                                         className="mb-3"
//                                     >
//                                         <Accordion.Header>
//                                             <strong>{service.title}</strong>
//                                         </Accordion.Header>
//                                         <Accordion.Body>
//                                             {service.media?.length > 0 && (
//                                                 <Card.Img
//                                                     variant="top"
//                                                     src={service.media[0]}
//                                                     alt="Service Media"
//                                                     className="mb-3"
//                                                 />
//                                             )}
//                                             <h5>{service.subtitle}</h5>
//                                             <p>{service.description}</p>

//                                             <h6>Technologies: {service.technology || 'N/A'}</h6>
//                                             <h6>Career Scope: {service.careerScope || 'N/A'}</h6>

//                                             {service.departmentId && (
//                                                 <ListGroup variant="flush" className="my-3">
//                                                     <ListGroup.Item>
//                                                         <strong>Department:</strong>{' '}
//                                                         {service.departmentId.name || 'N/A'}
//                                                     </ListGroup.Item>
//                                                     <ListGroup.Item>
//                                                         <strong>Faculty:</strong>{' '}
//                                                         {service.departmentId.faculty || 'N/A'}
//                                                     </ListGroup.Item>
//                                                     <ListGroup.Item>
//                                                         <strong>University:</strong>{' '}
//                                                         {service.departmentId.universityName || 'N/A'}
//                                                     </ListGroup.Item>
//                                                 </ListGroup>
//                                             )}

//                                             <Button
//                                                 variant="success"
//                                                 onClick={() => handleRequestClick(service)}
//                                             >
//                                                 Request
//                                             </Button>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         ) : (
//                             <p>No matches found.</p>
//                         )}
//                     </>
//                 )}
//             </Container>

//             <div style={{ marginTop: '50px' }}>
//                 <Footer />
//             </div>

//             {/* Modal for Request Form */}
//             <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Request {currentService?.title} </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                                 placeholder="Enter request description"
//                             />
//                         </Form.Group>

//                         <Form.Label>Supporting Documents</Form.Label>
//                         {supportingDocs.map((docs, index) => (
//                             <div key={index}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Control
//                                         type="file"
//                                         multiple
//                                         accept=".pdf, .docx, .txt, .jpg, .jpeg, .png"
//                                         onChange={(e) => handleFileChange(e, index)}
//                                     />
//                                     {supportingDocs.length > 1 && (
//                                         <Button
//                                             variant="danger"
//                                             className="mt-2"
//                                             onClick={() => removeFileField(index)}
//                                         >
//                                             Remove this field
//                                         </Button>
//                                     )}
//                                 </Form.Group>
//                             </div>
//                         ))}
//                         <Button variant="secondary" onClick={addFileField}>Add More Documents</Button>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="success" onClick={handleModalSubmit}>
//                         Submit Request
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Services;


// import React, { useEffect, useState } from 'react';
// import { Container, Accordion, Card, ListGroup, Spinner, Form, Button, Modal } from 'react-bootstrap';
// import { ShowServices } from '../../../api/department';
// import { RequestService } from '../../../api/requestService'; // Your API method
// import NavBar from '../../Shared/Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Service.css';

// const Services = () => {
//     const [services, setServices] = useState([]);
//     const [filteredServices, setFilteredServices] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // Modal state
//     const [showModal, setShowModal] = useState(false);
//     const [currentService, setCurrentService] = useState(null);
//     const [description, setDescription] = useState('');
//     const [supportingDocs, setSupportingDocs] = useState([]);

//     // localStorage.removeItem('user');
//     const fetchServices = async () => {
//         setLoading(true);
//         try {
//             const data = await ShowServices();
//             if (data.code === 200) {
//                 setServices(data.data);
//                 setFilteredServices(data.data);
//             }
//         } catch (error) {
//             setError('No services available');
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchServices();
//     }, []);

//     const handleSearch = (e) => {
//         const query = e.target.value.toLowerCase();
//         setSearchQuery(query);

//         if (query) {
//             const matches = services.filter((service) =>
//                 service.title.toLowerCase().includes(query)
//             );
//             setFilteredServices(matches);
//         } else {
//             setFilteredServices(services);
//         }
//     };

//     const handleRequestClick = (service) => {
//         const token = localStorage.getItem('user');
//         if (!token) {
//             alert('You need to log in to request a service.');
//             return;
//         }
//         setCurrentService(service);
//         setShowModal(true);
//     };

//     const handleModalSubmit = async () => {
//         const token = localStorage.getItem('user');
//         if (!token) {
//             alert('You need to log in to proceed.');
//             return;
//         }

//         try {
//             const parsedToken = JSON.parse(token);
//             const payload = {
//                 serviceId: currentService._id,
//                 industryUserId: parsedToken._id,
//                 description,
//                 supportingDocs, // Replace with file upload logic if needed
//             };

//             const response = await RequestService(payload); // Replace with actual API call
//             if (response.code === 200) {
//                 alert('Request successfully sent!');
//                 setShowModal(false);
//             } else {
//                 alert(`Request failed: ${response.message}`);
//             }
//         } catch (error) {
//             console.error('Error submitting request:', error);
//             alert('An error occurred while submitting the request.');
//         }
//     };
//     const resetModal = () => {
//         setDescription(''); // Reset description
//         setSupportingDocs([null]); // Reset to a single document input
//         setCurrentService(null); // Clear the selected service
//         setShowModal(false); // Close the modal
//     };


//     return (
//         <>
//             <NavBar />
//             <Container className="mt-4">
//                 {loading ? (
//                     <div
//                         className="d-flex justify-content-center align-items-center"
//                         style={{ minHeight: '100vh' }}
//                     >
//                         <Spinner animation="border" variant="primary" />
//                         <h3 className="ms-3">Loading services...</h3>
//                     </div>
//                 ) : (
//                     <>
//                         <h1>Services</h1>

//                         <Form className="mb-2 no-border-input">
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Search services by title..."
//                                 value={searchQuery}
//                                 onChange={handleSearch}
//                                 className="rounded-pill"
//                             />
//                         </Form>

//                         {error && <p className="text-danger">{error}</p>}

//                         {filteredServices.length > 0 ? (
//                             <Accordion>
//                                 {filteredServices.map((service) => (
//                                     <Accordion.Item
//                                         eventKey={service._id}
//                                         key={service._id}
//                                         className="mb-3"
//                                     >
//                                         <Accordion.Header>
//                                             <strong>{service.title}</strong>
//                                         </Accordion.Header>
//                                         <Accordion.Body>
//                                             {service.media?.length > 0 && (
//                                                 <Card.Img
//                                                     variant="top"
//                                                     src={service.media[0]}
//                                                     alt="Service Media"
//                                                     className="mb-3"
//                                                 />
//                                             )}
//                                             <h5>{service.subtitle}</h5>
//                                             <p>{service.description}</p>

//                                             <h6>Technologies: {service.technology || 'N/A'}</h6>
//                                             <h6>Career Scope: {service.careerScope || 'N/A'}</h6>

//                                             {service.departmentId && (
//                                                 <ListGroup variant="flush" className="my-3">
//                                                     <ListGroup.Item>
//                                                         <strong>Department:</strong>{' '}
//                                                         {service.departmentId.name || 'N/A'}
//                                                     </ListGroup.Item>
//                                                     <ListGroup.Item>
//                                                         <strong>Faculty:</strong>{' '}
//                                                         {service.departmentId.faculty || 'N/A'}
//                                                     </ListGroup.Item>
//                                                     <ListGroup.Item>
//                                                         <strong>University:</strong>{' '}
//                                                         {service.departmentId.universityName || 'N/A'}
//                                                     </ListGroup.Item>
//                                                 </ListGroup>
//                                             )}

//                                             <Button
//                                                 variant="success"
//                                                 onClick={() => handleRequestClick(service)}
//                                             >
//                                                 Request
//                                             </Button>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         ) : (
//                             <p>No matches found.</p>
//                         )}
//                     </>
//                 )}
//             </Container>

//             <div style={{ marginTop: '50px' }}>
//                 <Footer />
//             </div>


//             <Modal
//                 show={showModal}
//                 onHide={() => {
//                     resetModal();
//                 }}
//                 size='lg'
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Request Service</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                                 placeholder="Enter request description"
//                             />
//                         </Form.Group>
//                         {supportingDocs.length === 0 && setSupportingDocs([null]) /* Ensures one input initially */}
//                         {supportingDocs.map((doc, index) => (
//                             <Form.Group className="mb-3 d-flex align-items-center" key={index}>
//                                 <div className="flex-grow-1">
//                                     <Form.Label>Supporting Document {index + 1}</Form.Label>
//                                     <Form.Control
//                                         type="file"
//                                         onChange={(e) => {
//                                             const files = [...supportingDocs];
//                                             files[index] = e.target.files[0];
//                                             setSupportingDocs(files);
//                                         }}
//                                     />
//                                 </div>
//                                 {supportingDocs.length > 1 && (
//                                     <Button
//                                         variant="danger"
//                                         className="ms-2"
//                                         onClick={() => {
//                                             const files = supportingDocs.filter((_, i) => i !== index);
//                                             setSupportingDocs(files);
//                                         }}
//                                     >
//                                         Remove
//                                     </Button>
//                                 )}
//                             </Form.Group>
//                         ))}
//                         <Button
//                             variant="link"
//                             onClick={() => setSupportingDocs([...supportingDocs, null])}
//                             className="mb-3"
//                         >
//                             Add More Documents
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button
//                         variant="secondary"
//                         onClick={() => {
//                             resetModal(); // Reset state and close modal
//                         }}
//                     >
//                         Cancel
//                     </Button>
//                     <Button variant="success" onClick={handleModalSubmit}>
//                         Submit Request
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//         </>
//     );
// };
// export default Services;

import React, { useEffect, useState } from 'react';
import {
    Container,
    Accordion,
    Card,
    ListGroup,
    Spinner,
    Form,
    Button,
    Modal,
} from 'react-bootstrap';
import { ShowServices } from '../../../api/department';
import { RequestService } from '../../../api/requestService'; 
import NavBar from '../../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast'; 
import './Service.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [description, setDescription] = useState('');
    const [supportingDocs, setSupportingDocs] = useState([]);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const data = await ShowServices();
            if (data.code === 200) {
                setServices(data.data);
                setFilteredServices(data.data);
            }
        } catch (error) {
            setError('No services available');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const token=localStorage.getItem('user');
    console.log(token);
    // localStorage.removeItem('user');
    
    useEffect(() => {
        fetchServices();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            const matches = services.filter((service) =>
                service.title.toLowerCase().includes(query)
            );
            setFilteredServices(matches);
        } else {
            setFilteredServices(services);
        }
    };

    const handleRequestClick = (service) => {
        const token = localStorage.getItem('user');
        if (!token) {
            toast.error('You need to log in to request a service.');
            return;
        }
        setCurrentService(service);
        setShowModal(true);
    };

    const handleModalSubmit = async () => {
        const token = localStorage.getItem('user');
        if (!token) {
            toast.error('You need to log in to proceed.');
            return;
        }

        try {
            const parsedToken = JSON.parse(token);
            const payload = {
                serviceId: currentService._id,
                industryUserId: parsedToken._id,
                description,
                supportingDocs, // Replace with file upload logic if needed
            };

            const response = await RequestService(payload); // Replace with actual API call
            if (response.code === 200) {
                toast.success('Request successfully sent!');
                setShowModal(false);
            } else {
                toast.error(`Request failed: ${response.message}`);
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            toast.error('An error occurred while submitting the request.');
        }
    };

    const resetModal = () => {
        setDescription(''); // Reset description
        setSupportingDocs([null]); // Reset to a single document input
        setCurrentService(null); // Clear the selected service
        setShowModal(false); // Close the modal
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} /> 
            <NavBar />
            <Container className="mt-4">
                {loading ? (
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Spinner animation="border" variant="primary" />
                        <h3 className="ms-3">Loading services...</h3>
                    </div>
                ) : (
                    <>
                        <h1>Services</h1>

                        <Form className="mb-2 no-border-input">
                            <Form.Control
                                type="text"
                                placeholder="Search services by title..."
                                value={searchQuery}
                                onChange={handleSearch}
                                className="rounded-pill"
                            />
                        </Form>

                        {error && <p className="text-danger">{error}</p>}

                        {filteredServices.length > 0 ? (
                            <Accordion>
                                {filteredServices.map((service) => (
                                    <Accordion.Item
                                        eventKey={service._id}
                                        key={service._id}
                                        className="mb-3"
                                    >
                                        <Accordion.Header>
                                            <strong>{service.title}</strong>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {service.media?.length > 0 && (
                                                <Card.Img
                                                    variant="top"
                                                    src={service.media[0]}
                                                    alt="Service Media"
                                                    className="mb-3"
                                                />
                                            )}
                                            <h5>{service.subtitle}</h5>
                                            <p>{service.description}</p>

                                            <h6>Technologies: {service.technology || 'N/A'}</h6>
                                            <h6>Career Scope: {service.careerScope || 'N/A'}</h6>

                                            {service.departmentId && (
                                                <ListGroup variant="flush" className="my-3">
                                                    <ListGroup.Item>
                                                        <strong>Department:</strong>{' '}
                                                        {service.departmentId.name || 'N/A'}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>Faculty:</strong>{' '}
                                                        {service.departmentId.faculty || 'N/A'}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <strong>University:</strong>{' '}
                                                        {service.departmentId.universityName || 'N/A'}
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            )}

                                            <Button
                                                variant="success"
                                                onClick={() => handleRequestClick(service)}
                                            >
                                                Request
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        ) : (
                            <p>No matches found.</p>
                        )}
                    </>
                )}
            </Container>

            <div style={{ marginTop: '50px' }}>
                <Footer />
            </div>

            <Modal
                show={showModal}
                onHide={() => {
                    resetModal();
                }}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Request Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter request description"
                            />
                        </Form.Group>
                        {supportingDocs.length === 0 && setSupportingDocs([null]) /* Ensures one input initially */}
                        {supportingDocs.map((doc, index) => (
                            <Form.Group className="mb-3 d-flex align-items-center" key={index}>
                                <div className="flex-grow-1">
                                    <Form.Label>Supporting Document {index + 1}</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => {
                                            const files = [...supportingDocs];
                                            files[index] = e.target.files[0];
                                            setSupportingDocs(files);
                                        }}
                                    />
                                </div>
                                {supportingDocs.length > 1 && (
                                    <Button
                                        variant="danger"
                                        className="ms-2"
                                        onClick={() => {
                                            const files = supportingDocs.filter((_, i) => i !== index);
                                            setSupportingDocs(files);
                                        }}
                                    >
                                        Remove
                                    </Button>
                                )}
                            </Form.Group>
                        ))}
                        <Button
                            variant="link"
                            onClick={() => setSupportingDocs([...supportingDocs, null])}
                            className="mb-3"
                        >
                            Add More Documents
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            resetModal(); // Reset state and close modal
                        }}
                    >
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleModalSubmit}>
                        Submit Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Services;
