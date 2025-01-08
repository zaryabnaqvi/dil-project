// import React, { useEffect, useState, useRef } from 'react';
// import { Container, Accordion, Card, ListGroup, Spinner, Form, Button } from 'react-bootstrap';
// import { ShowServices } from '../../../api/department';
// import NavBar from '../../Shared/Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import './Service.css'

// const Services = () => {
//     const [services, setServices] = useState([]);
//     const [filteredServices, setFilteredServices] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [activeKey, setActiveKey] = useState(null);

//     const accordionRefs = useRef({});

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
//             const matches = services
//                 .filter((service) => service.title.toLowerCase().includes(query))
//                 .slice(0, 4);
//             setFilteredServices(matches);
//         } else {
//             setFilteredServices(services);
//         }
//     };

//     const handleServiceClick = (serviceId) => {
//         const accordionItem = accordionRefs.current[serviceId];
//         if (accordionItem) {
//             const offsetTop = accordionItem.getBoundingClientRect().top + window.scrollY;
//             const headerOffset = 100; // Adjust for header height
//             window.scrollTo({
//                 top: offsetTop - headerOffset,
//                 behavior: 'smooth',
//             });
//             setActiveKey(serviceId); // Open the corresponding accordion item
//         }
//     };



//     return (
//         <>
//             <NavBar />
//             <Container className="mt-4">
//                 {loading ? (
//                     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
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


//                         {searchQuery && (
//                             <div className="search-results">
//                                 {filteredServices.map((service) => (
//                                     <button
//                                         key={service._id}
//                                         className="btn btn-link text-start d-block mb-2"
//                                         onClick={() => handleServiceClick(service._id)}
//                                     >
//                                         {service.title}
//                                     </button>
//                                 ))}
//                                 {filteredServices.length === 0 && <p>No matches found</p>}
//                             </div>
//                         )}
//                         {services.length > 0 && services[0]?.departmentId?.name && (
//                             <h2 className="mb-4">{services[0].departmentId.name} Services</h2>
//                         )}
//                         {error && <p className="text-danger">{error}</p>}

//                         <Accordion activeKey={activeKey} onSelect={setActiveKey}>
//                             {services.map((service) => (
//                                 <Accordion.Item
//                                     eventKey={service._id}
//                                     key={service._id}
//                                     ref={(el) => (accordionRefs.current[service._id] = el)}
//                                     className="mb-3"
//                                 >
//                                     <Accordion.Header>
//                                         <strong>{service.title}</strong>
//                                     </Accordion.Header>
//                                     <Accordion.Body>
//                                         {service.media?.length > 0 && (
//                                             <Card.Img
//                                                 variant="top"
//                                                 src={service.media[0]}
//                                                 alt="Service Media"
//                                                 className="mb-3"
//                                             />
//                                         )}
//                                         <h5>{service.subtitle}</h5>
//                                         <p>{service.description}</p>

//                                         <h6>Technologies: {service.technology || 'N/A'}</h6>
//                                         <h6>Career Scope: {service.careerScope || 'N/A'}</h6>

//                                         {service.departmentId && (
//                                             <ListGroup variant="flush" className="my-3">
//                                                 <ListGroup.Item><strong>Department:</strong> {service.departmentId.name || 'N/A'}</ListGroup.Item>
//                                                 <ListGroup.Item><strong>Faculty:</strong> {service.departmentId.faculty || 'N/A'}</ListGroup.Item>
//                                                 <ListGroup.Item><strong>University:</strong> {service.departmentId.universityName || 'N/A'}</ListGroup.Item>
//                                             </ListGroup>
//                                         )}

//                                         {service.projects?.length > 0 && (
//                                             <div className="mt-3">
//                                                 <h6>Projects:</h6>
//                                                 {service.projects.map((project, idx) => (
//                                                     <Card key={project._id || idx} className="my-2">
//                                                         <Card.Body>
//                                                             <Card.Title>{project.title || 'N/A'}</Card.Title>
//                                                             <Card.Text>{project.desc || 'N/A'}</Card.Text>
//                                                             <a
//                                                                 href={project.link || '#'}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="btn btn-link"
//                                                             >
//                                                                 View Project
//                                                             </a>
//                                                         </Card.Body>
//                                                     </Card>

//                                                 ))}
//                                             </div>

//                                         )}
//                                         <Button variant='success'>Request</Button>
//                                     </Accordion.Body>
//                                 </Accordion.Item>
//                             ))}
//                         </Accordion>
//                     </>
//                 )}
//             </Container>

//             <div style={{ marginTop: '50px' }}>
//                 <Footer />
//             </div>
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
// // import toast from 'react-hot-toast';
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
//     const [supportingDocs, setSupportingDocs] = useState([[]]);  // Start with one empty file input

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

//     const handleFileChange = (index, files) => {
//         const updatedDocs = [...supportingDocs];
//         updatedDocs[index] = files;
//         setSupportingDocs(updatedDocs);
//     };

//     const handleAddDocumentField = () => {
//         setSupportingDocs([...supportingDocs, []]);  // Add an empty array for a new field
//     };

//     const handleRemoveFile = (index, fileIndex) => {
//         const updatedDocs = [...supportingDocs];
//         updatedDocs[index] = Array.from(updatedDocs[index]).filter((_, i) => i !== fileIndex);
//         setSupportingDocs(updatedDocs);
//     };

//     const handleModalSubmit = async () => {
//         const token = localStorage.getItem('user');
//         if (!token) {
//             toast.error('You need to log in to request a service.');
//             return;
//         }
    
//         try {
//             const parsedToken = JSON.parse(token);
    
//             // Create FormData to submit files
//             const formData = new FormData();
//             formData.append('serviceId', currentService._id);
//             formData.append('industryUserId', parsedToken._id);
//             formData.append('description', description);
    
//             // Loop through all document fields (supportingDocs) and append files to FormData
//             supportingDocs.forEach((docFiles, index) => {
//                 docFiles.forEach((file) => {
//                     formData.append(`supportingDocs[${index}][]`, file);  // Support multiple files per field
//                 });
//             });
    
//             // Make the API call with FormData
//             const response = await RequestService(formData); // Replace with actual API call
    
//             if (response.code === 200) {
//                 toast.success('Request successfully sent!');
//                 setShowModal(false);
//                 setDescription('');
//                 setSupportingDocs([[]]);  // Reset file inputs after successful submission
//             } else {
//                 toast.error('Request failed: ' + response.message);
//             }
//         } catch (error) {
//             console.error('Error submitting request:', error);
//             toast.error('An error occurred while submitting the request.');
//         }
//     };
    
//     // const handleModalSubmit = async () => {
//     //     const token = localStorage.getItem('user');
//     //     if (!token) {
//     //         toast.error('You need to log in to request a service.');
//     //         return;
//     //     }

//     //     try {
//     //         const parsedToken = JSON.parse(token);

//     //         // Create FormData to submit files
//     //         const formData = new FormData();
//     //         formData.append('serviceId', currentService._id);
//     //         formData.append('industryUserId', parsedToken._id);
//     //         formData.append('description', description);

//     //         // Append files to FormData
//     //         supportingDocs.forEach((docFiles, index) => {
//     //             docFiles.forEach((file) => {
//     //                 formData.append(`supportingDocs[${index}]`, file);  // Support multiple files for each document field
//     //             });
//     //         });

//     //         const response = await RequestService(formData);
//     //         toast.success('Request successfully sent!');
//     //         setShowModal(false);
//     //         setDescription('');
//     //         setSupportingDocs([[]]);  // Reset file inputs after successful submission
//     //     } catch (error) {
//     //         console.error('Error submitting request:', error);
//     //         toast.error('An error occurred while submitting the request.');
//     //     }
//     // };

//     return (
//         <>
//             <NavBar />
//             <Container className="mt-4">
//                 <Toaster position="top-center" reverseOrder={false} />

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
//             <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
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

//                         {/* Multiple document fields */}
//                         <Form.Label>Supporting Documents</Form.Label>
//                         {supportingDocs.map((docFiles, index) => (
//                             <div key={index} className="mb-3">
//                                 <Form.Control
//                                     type="file"
//                                     multiple
//                                     accept="*/*" // Accept all types of files
//                                     onChange={(e) => handleFileChange(index, e.target.files)}
//                                 />
//                                 {docFiles.length > 0 && (
//                                     <ul>
//                                         {Array.from(docFiles).map((file, i) => (
//                                             <li key={i}>
//                                                 {file.name}
//                                                 <Button
//                                                     variant="danger"
//                                                     size="sm"
//                                                     className="ms-2"
//                                                     onClick={() => handleRemoveFile(index, i)}
//                                                 >
//                                                     Remove
//                                                 </Button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         ))}

//                         <Button variant="link" onClick={handleAddDocumentField}>
//                             Add More Documents
//                         </Button>
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

import React, { useEffect, useState } from 'react';
import { Container, Accordion, Card, ListGroup, Spinner, Form, Button, Modal } from 'react-bootstrap';
import { ShowServices } from '../../../api/department';
import { RequestService } from '../../../api/requestService'; // Your API method
import NavBar from '../../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Service.css';
import { Toaster, toast } from 'react-hot-toast';

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
    const [supportingDocs, setSupportingDocs] = useState([[]]);


    const token=localStorage.getItem('user');
    console.log(token);
    // localStorage.removeItem('user');

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
            toast.error('You need to log in to request a service.');
            return;
        }

        try {
            const parsedToken = JSON.parse(token);
            const payload = {
                serviceId: currentService._id,
                industryUserId: parsedToken._id,
                description,
                supportingDocs, // Pass the selected files (supportingDocs) to the API
            };

            // Make the API call to submit the request
            const response = await RequestService(payload);

            if (response.code === 200) {
                toast.success('Request successfully sent!');
                setShowModal(false);
                setDescription('');
                setSupportingDocs([[]]); // Clear file inputs after successful submission
            } else {
                toast.error(`Request failed: ${response.message}`);
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            toast.error('An error occurred while submitting the request.');
            setDescription('');

        }
    };
    

    const handleFileChange = (e, index) => {
        const newDocs = [...supportingDocs];
        newDocs[index] = e.target.files;
        setSupportingDocs(newDocs);
    };

    const addFileField = () => {
        setSupportingDocs([...supportingDocs, []]);
    };

    const removeFileField = (index) => {
        const newDocs = supportingDocs.filter((_, i) => i !== index);
        setSupportingDocs(newDocs);
    };

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

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

            {/* Modal for Request Form */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Request {currentService?.title} </Modal.Title>
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

                        <Form.Label>Supporting Documents</Form.Label>
                        {supportingDocs.map((docs, index) => (
                            <div key={index}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="file"
                                        multiple
                                        accept=".pdf, .docx, .txt, .jpg, .jpeg, .png"
                                        onChange={(e) => handleFileChange(e, index)}
                                    />
                                    {supportingDocs.length > 1 && (
                                        <Button
                                            variant="danger"
                                            className="mt-2"
                                            onClick={() => removeFileField(index)}
                                        >
                                            Remove this field
                                        </Button>
                                    )}
                                </Form.Group>
                            </div>
                        ))}
                        <Button variant="secondary" onClick={addFileField}>Add More Documents</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
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

