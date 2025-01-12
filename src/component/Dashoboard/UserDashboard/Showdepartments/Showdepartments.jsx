import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import { deleteDepartment, ShowDepartments, updateDepartment } from '../../../../api/department';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const DepartmentList = () => {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [currentDepartment, setCurrentDepartment] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleEdit = (department) => {
        setCurrentDepartment(department);
        setShowEditModal(true);
    };

    const handleDelete = (department) => {
        setCurrentDepartment(department);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        setShowDeleteConfirm(false);
        setLoading(true);
        try {
            const response = await deleteDepartment(currentDepartment._id);
            if (response.status === 200) {
                toast.success('Department deleted successfully');
                fetchDepartments();
            } else {
                toast.error('Failed to delete department');
            }
        } catch (error) {
            toast.error('An error occurred while deleting the department');
        } finally {
            setLoading(false);
        }
    };

    // const handleSave = async () => {
    //     setShowEditModal(false);
    //     setLoading(true);
    //     try {
    //         const response = await updateDepartment(currentDepartment._id, currentDepartment);
    //         if (response.status === 200) {
    //             toast.success('Department updated successfully');
    //             fetchDepartments();
    //         } else {
    //             toast.error('Failed to update department');
    //         }
    //     } catch (error) {
    //         toast.error('An error occurred while updating the department');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    
    const handleSave = async () => {
        setShowEditModal(false);
        setLoading(true);
    
        try {
            const response = await updateDepartment(currentDepartment._id, currentDepartment);
            toast.success('Department updated successfully');
            fetchDepartments(); // Refresh the department list
        } catch (error) {
            // Show a more specific error message
            toast.error(error.message || 'An error occurred while updating the department');
        } finally {
            setLoading(false);
        }
    };
    

    const fetchDepartments = async () => {
        setLoading(true);
        try {
            const data = await ShowDepartments();
            setDepartments(data.data);
        } catch (error) {
            toast.error('Failed to fetch departments');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <div className="container mt-4">
            <Toaster />
            <h2>Departments</h2>
            {/* {loading && <Spinner animation="border" className="mb-3" />} */}
            {
                loading ? (
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Loading Departments...</p>
                    </div>
                ) : (

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Faculty</th>
                                <th>University</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {departments.map((department) => (
                                <tr key={department._id}>
                                    <td>{department.name}</td>
                                    <td>{department.faculty}</td>
                                    <td>{department.universityName}</td>
                                    <td>
                                        <div className="d-flex flex-wrap justify-content-start">
                                            <Button
                                                variant="success"
                                                onClick={() => handleEdit(department)}
                                                className="me-2 mb-2 btn-sm"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDelete(department)}
                                                className="me-2 mb-2 btn-sm"
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => navigate(`/dashboard/DepartmentService/${department._id}`)}
                                                className="me-2 mb-2 btn-sm"
                                            >
                                                Add Service
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => navigate(`/dashboard/ShowDepartmentServices/${department._id}`)}
                                                className="me-2 mb-2 btn-sm"
                                            >
                                                Show Service
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
            }

            {/* Edit Modal */}
            <Modal size='lg' show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="departmentName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={currentDepartment?.name}
                                onChange={(e) => setCurrentDepartment({ ...currentDepartment, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="facultyName">
                            <Form.Label>Faculty</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={currentDepartment?.faculty}
                                onChange={(e) => setCurrentDepartment({ ...currentDepartment, faculty: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="universityName">
                            <Form.Label>University</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={currentDepartment?.universityName}
                                onChange={(e) => setCurrentDepartment({ ...currentDepartment, universityName: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSave} disabled={loading}>
                        {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{currentDepartment?.name}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete} disabled={loading}>
                        {loading ? 'Deleting...' : 'Confirm Delete'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

// import React, { useEffect, useState } from 'react';
// import { Button, Spinner, Row, Col, Modal, Form } from 'react-bootstrap';
// import { deleteDepartment, ShowDepartments, updateDepartment } from '../../../../api/department';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// export const DepartmentList = () => {
//     const navigate = useNavigate();
//     const [departments, setDepartments] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//     const [currentDepartment, setCurrentDepartment] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleEdit = (department) => {
//         setCurrentDepartment(department);
//         setShowEditModal(true);
//     };

//     const handleDelete = (department) => {
//         setCurrentDepartment(department);
//         setShowDeleteConfirm(true);
//     };

//     const confirmDelete = async () => {
//         setShowDeleteConfirm(false);
//         setLoading(true);
//         try {
//             await deleteDepartment(currentDepartment._id);
//             toast.success('Department deleted successfully');
//             fetchDepartments();
//         } catch (error) {
//             toast.error('Error while deleting the department');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSave = async () => {
//         setShowEditModal(false);
//         setLoading(true);
//         try {
//             await updateDepartment(currentDepartment._id, currentDepartment);
//             toast.success('Department updated successfully');
//             fetchDepartments();
//         } catch (error) {
//             toast.error('Error while updating the department');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchDepartments = async () => {
//         setLoading(true);
//         try {
//             const data = await ShowDepartments();
//             setDepartments(data.data);
//         } catch (error) {
//             toast.error('Failed to fetch departments');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchDepartments();
//     }, []);

//     return (
//         <div className="container mt-4">
//             <Toaster />
//             <h2 className="mb-4">Departments</h2>
//             {loading ? (
//                 <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
//                     <Spinner animation="border" variant="primary" />
//                     <p className="mt-3">Loading Departments...</p>
//                 </div>
//             ) : departments.length > 0 ? (
//                 <div className="department-list">
//                     {departments.map((department, index) => (
//                         <div key={department._id} className="department-card border rounded p-3 mb-3">
//                             <Row className="align-items-center">
//                                 <Col xs={12} md={1} className="mb-2 mb-md-0">
//                                     <strong>{index + 1}</strong>
//                                 </Col>
//                                 <Col xs={12} md={3} className="mb-2 mb-md-0">
//                                     <strong>Name:</strong>
//                                     <p className="mb-0">{department.name}</p>
//                                 </Col>
//                                 <Col xs={12} md={3} className="mb-2 mb-md-0">
//                                     <strong>Faculty:</strong>
//                                     <p className="mb-0">{department.faculty}</p>
//                                 </Col>
//                                 <Col xs={12} md={3} className="mb-2 mb-md-0">
//                                     <strong>University:</strong>
//                                     <p className="mb-0">{department.universityName}</p>
//                                 </Col>
//                                 <Col xs={12} md={2}>
//                                     <div className="d-flex flex-wrap gap-2">
//                                         <Button variant="success" onClick={() => handleEdit(department)}>Edit</Button>
//                                         <Button variant="danger" onClick={() => handleDelete(department)}>Delete</Button>
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/DepartmentService/${department._id}`)}
//                                         >
//                                             Add Service
//                                         </Button>
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/ShowDepartmentServices/${department._id}`)}
//                                         >
//                                             Show Service
//                                         </Button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center">No departments found.</p>
//             )}

//             {/* Edit Modal */}
//             <Modal size="lg" show={showEditModal} onHide={() => setShowEditModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="departmentName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 defaultValue={currentDepartment?.name}
//                                 onChange={(e) => setCurrentDepartment({ ...currentDepartment, name: e.target.value })}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="facultyName">
//                             <Form.Label>Faculty</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 defaultValue={currentDepartment?.faculty}
//                                 onChange={(e) => setCurrentDepartment({ ...currentDepartment, faculty: e.target.value })}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="universityName">
//                             <Form.Label>University</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 defaultValue={currentDepartment?.universityName}
//                                 onChange={(e) => setCurrentDepartment({ ...currentDepartment, universityName: e.target.value })}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
//                     <Button variant="success" onClick={handleSave} disabled={loading}>
//                         {loading ? 'Saving...' : 'Save Changes'}
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             {/* Delete Confirmation Modal */}
//             <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirm Delete</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Are you sure you want to delete <strong>{currentDepartment?.name}</strong>?
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
//                     <Button variant="danger" onClick={confirmDelete} disabled={loading}>
//                         {loading ? 'Deleting...' : 'Confirm Delete'}
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };



