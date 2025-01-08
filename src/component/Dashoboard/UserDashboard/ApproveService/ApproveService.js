import React, { useEffect, useState } from 'react';
import { Button, Spinner, Row, Col } from 'react-bootstrap';
import { fetchAllRequests } from '../../../../api/requestService';
import { updateServiceStatus } from '../../../../api/requestService';
import { toast,Toaster } from 'react-hot-toast';

export const ApprovalServices = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);


    const ApproveService = async (id) => {
        try {
            const response = await updateServiceStatus(id, { status: 'approved' });
            if (response.code === 200) {
                toast.success("Service approved successfully!");
                fetchRequests();
            }
        } catch (error) {
            toast.error(error.message || "Error while approving service.");
            console.error(error);
        }
    };
    
    const RejectService = async (id) => {
        try {
            const response = await updateServiceStatus(id, { status: 'rejected' });
            if (response.code === 200) {
                toast.success("Service rejected successfully!");
                fetchRequests();
            }
        } catch (error) {
            toast.error(error.message || "Error while rejecting service.");
            console.error(error);
        }
    };
    
    const fetchRequests = async () => {
        try {
            const response = await fetchAllRequests();
            if (response.code === 200) {
                setRequests(response.data);
            } else {
                toast.error(response.message || "Failed to fetch service requests.");
            }
        } catch (error) {
            toast.error("Error while fetching service requests.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div className="approval-industry-container container py-4">
            <h2 className="mb-4">Service Requests</h2>
            {loading ? (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Loading service requests...</p>
                </div>
            ) : requests.length > 0 ? (
                <div className="request-list">
                    <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                    {requests.map((request, index) => (
                        <div key={request._id} className="request-card border rounded p-3 mb-3">
                            <Row className="align-items-center">
                                <Col xs={12} md={1} className="mb-2 mb-md-0">
                                    <strong>{index + 1}</strong>
                                </Col>
                                <Col xs={12} md={4} className="mb-2 mb-md-0">
                                    <strong>Description:</strong>
                                    <p className="mb-0">{request.description}</p>
                                </Col>
                                <Col xs={12} md={2} className="mb-2 mb-md-0">
                                    <strong>Status:</strong>
                                    <p className={`mb-0 status ${request.status}`}>{request.status}</p>
                                </Col>
                                <Col xs={12} md={3} className="mb-2 mb-md-0">
                                    <strong>Supporting Documents:</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {request.supportingDocs.length > 0 ? (
                                            request.supportingDocs.map((doc, i) => (
                                                <a
                                                    key={i}
                                                    href={`/path-to-documents/${doc}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none text-primary"
                                                >
                                                    {doc}{" "}
                                                </a>
                                            ))
                                        ) : (
                                            <span>No documents</span>
                                        )}
                                    </div>
                                </Col>
                                <Col xs={12} md={2}>
                                    <div className="d-flex gap-2">
                                        <Button variant="success" onClick={() => ApproveService(request._id)}>Approve</Button>
                                        <Button variant="danger" onClick={() => RejectService(request._id)}>Reject</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No service requests found.</p>
            )}
        </div>
    );
};
