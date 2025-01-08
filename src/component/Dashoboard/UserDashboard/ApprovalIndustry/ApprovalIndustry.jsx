// import React, { useEffect, useState } from 'react';
// import { Table, Button } from 'react-bootstrap';
// import { fetchAllRequests } from '../../../../api/requestService';
// // import './review.css';
// import './Review.css';

// export const ApprovalIndustry = () => {
//     const [requests, setRequests] = useState([]);

//     const fetchRequests = async () => {
//         try {
//             const response = await fetchAllRequests();
//             if (response.code === 200) {
//                 setRequests(response.data);
//                 console.log(response.data);
//             } else {
//                 console.error("Failed to fetch requests", response.message);
//             }
//         } catch (error) {
//             console.error("Error fetching requests", error);
//         }
//     };

//     useEffect(() => {
//         fetchRequests();
//     }, []);

//     return (
//         <div className="approval-industry-container">
//             <h2>Service Requests</h2>
//             {requests.length > 0 ? (
//                 <Table striped bordered hover responsive>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Description</th>
//                             <th>Status</th>
//                             <th>Supporting Documents</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {requests.map((request, index) => (
//                             <tr key={request._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{request.description}</td>
//                                 <td className={`status ${request.status}`}>{request.status}</td>
//                                 <td>
//                                     {request.supportingDocs.length > 0 ? (
//                                         request.supportingDocs.map((doc, i) => (
//                                             <a
//                                                 key={i}
//                                                 href={`/path-to-documents/${doc}`}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="document-link"
//                                             >
//                                                 {doc}
//                                             </a>
//                                         ))
//                                     ) : (
//                                         <span>No documents</span>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <Button variant="success" className="action-btn">
//                                         Approve
//                                     </Button>
//                                     <Button variant="danger" className="action-btn">
//                                         Reject
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             ) : (
//                 <p>No service requests found.</p>
//             )}
//         </div>
//     );
// };

// import React, { useEffect, useState } from 'react';
// import { Button, Spinner, Row, Col } from 'react-bootstrap';
// import { fetchAllRequests } from '../../../../api/requestService';
// import './Review.css';

// export const ApprovalIndustry = () => {
//     const [requests, setRequests] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchRequests = async () => {
//         try {
//             const response = await fetchAllRequests();
//             if (response.code === 200) {
//                 setRequests(response.data);
//             } else {
//                 console.error("Failed to fetch requests", response.message);
//             }
//         } catch (error) {
//             console.error("Error fetching requests", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchRequests();
//     }, []);

//     return (
//         <div className="approval-industry-container container py-4">
//             <h2 className="mb-4">Service Requests</h2>
//             {loading ? (
//                 <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
//                     <Spinner animation="border" variant="primary" />
//                     <p className="mt-3">Loading service requests...</p>
//                 </div>
//             ) : requests.length > 0 ? (
//                 <div className="request-list">
//                     {requests.map((request, index) => (
//                         <div key={request._id} className="request-card border rounded p-3 mb-3">
//                             <Row className="align-items-center">
//                                 <Col xs={12} md={1} className="mb-2 mb-md-0">
//                                     <strong>{index + 1}</strong>
//                                 </Col>
//                                 <Col xs={12} md={4} className="mb-2 mb-md-0">
//                                     <strong>Description:</strong>
//                                     <p className="mb-0">{request.description}</p>
//                                 </Col>
//                                 <Col xs={12} md={2} className="mb-2 mb-md-0">
//                                     <strong>Status:</strong>
//                                     <p className={`mb-0 status ${request.status}`}>{request.status}</p>
//                                 </Col>
//                                 <Col xs={12} md={3} className="mb-2 mb-md-0">
//                                     <strong>Supporting Documents:</strong>
//                                     <div className="d-flex flex-wrap gap-2">
//                                         {request.supportingDocs.length > 0 ? (
//                                             request.supportingDocs.map((doc, i) => (
//                                                 <a
//                                                     key={i}
//                                                     href={`/path-to-documents/${doc}`}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="text-decoration-none text-primary"
//                                                 >
//                                                     {doc} {","}
//                                                 </a>
//                                             ))
//                                         ) : (
//                                             <span>No documents</span>
//                                         )}
//                                     </div>
//                                 </Col>
//                                 <Col xs={12} md={2}>
//                                     <div className="d-flex gap-2">
//                                         <Button variant="success">Approve</Button>
//                                         <Button variant="danger">Reject</Button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center">No service requests found.</p>
//             )}
//         </div>
//     );
// };
