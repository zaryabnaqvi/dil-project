import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Spinner } from "react-bootstrap";
import { fetchAllRequests, updateServiceStatus } from "../../../../api/requestService";
import toast, { Toaster } from "react-hot-toast";

export const ApprovalServices = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [currentRequest, setCurrentRequest] = useState(null);

    const ApproveService = async (id) => {
        setLoading(true);
        try {
            const response = await updateServiceStatus(id, { status: "approved" });
            if (response.code === 200) {
                toast.success("Service approved successfully!");
                fetchRequests();
            }
        } catch (error) {
            toast.error(error.message || "Error while approving service.");
        } finally {
            setLoading(false);
        }
    };

    const RejectService = async (id) => {
        setLoading(true);
        try {
            const response = await updateServiceStatus(id, { status: "rejected" });
            if (response.code === 200) {
                toast.success("Service rejected successfully!");
                fetchRequests();
            }
        } catch (error) {
            toast.error(error.message || "Error while rejecting service.");
        } finally {
            setLoading(false);
        }
    };

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const response = await fetchAllRequests();
            if (response.code === 200) {
                setRequests(response.data);
            } else {
                toast.error(response.message || "Failed to fetch service requests.");
            }
        } catch (error) {
            toast.error("Error while fetching service requests.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const handleDetails = (request) => {
        setCurrentRequest(request);
        setShowDetailsModal(true);
    };

    return (
        <div className="container mt-4">
            <Toaster />
            <h2>Service Requests</h2>
            {loading ? (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "300px" }}>
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Loading service requests...</p>
                </div>
            ) : requests.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={request._id}>
                                <td>{index + 1}</td>
                                <td>{request.description}</td>
                                <td>
                                    <span >
                                        {request.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="d-flex flex-wrap">
                                        <Button
                                            variant="secondary"
                                            className="me-2 mb-2 btn-sm"
                                            onClick={() => handleDetails(request)}
                                        >
                                            Details
                                        </Button>
                                        <Button
                                            variant="success"
                                            className="me-2 mb-2 btn-sm"
                                            onClick={() => ApproveService(request._id)}
                                        >
                                            Approve
                                        </Button>
                                        <Button
                                            variant="danger"
                                            className="mb-2 btn-sm"
                                            onClick={() => RejectService(request._id)}
                                        >
                                            Reject
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className="text-center">No service requests found.</p>
            )}

            {/* Details Modal */}
            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentRequest && (
                        <>
                            <p><strong>Status:</strong> {currentRequest.status}</p>
                            <p><strong>Description:</strong> {currentRequest.description}</p>
                            <p><strong>Supporting Documents:</strong></p>
                            {currentRequest.supportingDocs && currentRequest.supportingDocs.length > 0 ? (
                                <ul>
                                    {currentRequest.supportingDocs.map((doc, index) => (
                                        <li key={index}>
                                            <a
                                                href={`/path-to-documents/${doc}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {doc}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No documents available.</p>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};









// import React, { useEffect, useState } from 'react';
// import { Button, Spinner, Row, Col } from 'react-bootstrap';
// import { fetchAllRequests, updateServiceStatus } from '../../../../api/requestService';
// import { toast, Toaster } from 'react-hot-toast';

// export const ApprovalServices = () => {
//     const [requests, setRequests] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const ApproveService = async (id) => {
//         try {
//             const response = await updateServiceStatus(id, { status: 'approved' });
//             if (response.code === 200) {
//                 toast.success("Service approved successfully!");
//                 fetchRequests();
//             }
//         } catch (error) {
//             toast.error(error.message || "Error while approving service.");
//             console.error(error);
//         }
//     };

//     const RejectService = async (id) => {
//         try {
//             const response = await updateServiceStatus(id, { status: 'rejected' });
//             if (response.code === 200) {
//                 toast.success("Service rejected successfully!");
//                 fetchRequests();
//             }
//         } catch (error) {
//             toast.error(error.message || "Error while rejecting service.");
//             console.error(error);
//         }
//     };

//     const fetchRequests = async () => {
//         try {
//             const response = await fetchAllRequests();
//             if (response.code === 200) {
//                 setRequests(response.data);
//             } else {
//                 toast.error(response.message || "Failed to fetch service requests.");
//             }
//         } catch (error) {
//             toast.error("Error while fetching service requests.");
//             console.error(error);
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
//                 <div
//                     className="d-flex flex-column align-items-center justify-content-center"
//                     style={{ height: '300px' }}
//                 >
//                     <Spinner animation="border" variant="primary" />
//                     <p className="mt-3">Loading service requests...</p>
//                 </div>
//             ) : requests.length > 0 ? (
//                 <div className="request-list">
//                     <Toaster position="top-center" reverseOrder={false} />
//                     {requests.map((request, index) => (
//                         <div key={request._id} className="request-card border rounded p-3 mb-3">
//                             <Row>
//                                 <Col xs={12} md={1} className="text-center mb-2 mb-md-0">
//                                     <strong>{index + 1}</strong>
//                                 </Col>
//                                 <Col xs={12} md={4} className="mb-2">
//                                     <strong>Description:</strong>
//                                     <p className="mb-0">{request.description}</p>
//                                 </Col>
//                                 <Col xs={12} md={2} className="mb-2">
//                                     <strong>Status:</strong>
//                                     <p className={`mb-0 status ${request.status}`}>{request.status}</p>
//                                 </Col>
//                                 <Col xs={12} md={3} className="mb-2">
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
//                                                     {doc}{" "}
//                                                 </a>
//                                             ))
//                                         ) : (
//                                             <span>No documents</span>
//                                         )}
//                                     </div>
//                                 </Col>
//                                 <Col xs={12} md={2}>
//                                     <div className="d-flex flex-column gap-2 align-items-md-start align-items-center">
//                                         <Button
//                                             variant="success"
//                                             className="w-100"
//                                             onClick={() => ApproveService(request._id)}
//                                         >
//                                             Approve
//                                         </Button>
//                                         <Button
//                                             variant="danger"
//                                             className="w-100"
//                                             onClick={() => RejectService(request._id)}
//                                         >
//                                             Reject
//                                         </Button>
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
