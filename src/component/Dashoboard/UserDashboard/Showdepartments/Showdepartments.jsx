// import React, { useEffect, useState } from 'react';
// import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
// import { deleteDepartment, ShowDepartments, updateDepartment } from '../../../../api/department';
// import { useNavigate } from "react-router-dom"


// export const DepartmentList = () => {
//     const navigate = useNavigate();
//     const [departments, setDepartments] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//     const [currentDepartment, setCurrentDepartment] = useState(null);
//     const [showAlert, setShowAlert] = useState(false);
//     const [loading,setLoading]= useState(false);

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
//         setShowAlert(true);
//         // Add delete logic here, such as API call to delete the department.
//         const response = await deleteDepartment(currentDepartment._id);
//         if (response.status === 200) {
//             console.error('department deleted');

//             fetchDepartments(); // Fetch updated departments after successful delete.
//         }
//         else {
//             console.error('Failed to delete department');
//         }
//     };

//     const handleSave = async () => {
//         setShowEditModal(false);
//         setShowAlert(true);

//         // Add save logic here, such as API call to update the department.

//         const response = await updateDepartment(currentDepartment._id, currentDepartment);
//         if (response.status === 200) {
//             console.error('Updated department');
//             fetchDepartments(); // Fetch updated departments after successful save.

//         }
//         else {
//             console.error('Failed to update department');
//         }
//     };

//     const fetchDepartments = async () => {
//         // Fetch departments from API here and update the departments state.
//         const data = await ShowDepartments();
//         setDepartments(data.data)
//         setShowAlert(false);
//         // Reset currentDepartment and showEditModal
//         setCurrentDepartment(null);
//         setShowEditModal(false);

//     }

//     useEffect(() => {
//         fetchDepartments(); 
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h2>Departments</h2>
//             {showAlert && (
//                 <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
//                     Action completed successfully.
//                 </Alert>
//             )}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Faculty</th>
//                         <th>University</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {departments.map((department) => (
//                         <tr key={department._id}>
//                             <td>{department.name}</td>
//                             <td>{department.faculty}</td>
//                             <td>{department.universityName}</td>
//                             {/* <td>
//                             <div className="d-flex justify-content-start">
//                                     <Button variant='success' onClick={() => handleEdit(department)} className='me-2 btn-sm'>
//                                         Edit
//                                     </Button>
//                                     <Button variant="danger" onClick={() => handleDelete(department)} className='me-2 btn-sm'>
//                                         Delete
//                                     </Button>
//                                     <Button variant="secondary" onClick={() => navigate(`/dashboard/DepartmentService/${department._id}`)} className='me-2 btn-sm'>
//                                         Add Service
//                                     </Button>
//                                     <Button variant="secondary" onClick={() => navigate(`/dashboard/ShowDepartmentServices/${department._id}`)} className='me-2 btn-sm'>
//                                         Show Service
//                                     </Button>
//                                 </div>
//                             </td> */}

//                             <td>
//                                 <div className="d-flex flex-wrap justify-content-start">
//                                     <div className="btn-group">
//                                         <Button
//                                             variant="success"
//                                             onClick={() => handleEdit(department)}
//                                             className="me-2 mb-2 btn-sm"
//                                         >
//                                             Edit
//                                         </Button>
//                                         <Button
//                                             variant="danger"
//                                             onClick={() => handleDelete(department)}
//                                             className="me-2 mb-2 btn-sm"
//                                         >
//                                             Delete
//                                         </Button>
//                                     </div>
//                                     <div className="btn-group">
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/DepartmentService/${department._id}`)}
//                                             className="me-2 mb-2 btn-sm"
//                                         >
//                                             Add Service
//                                         </Button>
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/ShowDepartmentServices/${department._id}`)}
//                                             className="me-2 mb-2 btn-sm"
//                                         >
//                                             Show Service
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </td>

//                             {/* <td>
//                                 <div className="d-flex flex-wrap justify-content-start">
//                                     <div className="btn-group">
//                                         <Button
//                                             variant="success"
//                                             onClick={() => handleEdit(department)}
//                                             className="me-2 mb-2 btn-sm "
//                                         // style={{ height: '40px' }} // Ensure consistent height
//                                         >
//                                             Edit
//                                         </Button>
//                                         <Button
//                                             variant="danger"
//                                             onClick={() => handleDelete(department)}
//                                             className="me-2 mb-2 btn-sm "
//                                         // style={{ height: '40px' }} // Ensure consistent height
//                                         >
//                                             Delete
//                                         </Button>
//                                     </div>
//                                     <div className="btn-group w-50">
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/DepartmentService/${department._id}`)}
//                                             className="me-2 mb-2 btn-sm "
//                                         // style={{ height: '40px' }} // Ensure consistent height
//                                         >
//                                             Add Service
//                                         </Button>
//                                         <Button
//                                             variant="secondary"
//                                             onClick={() => navigate(`/dashboard/ShowDepartmentServices/${department._id}`)}
//                                             className="me-2 mb-2 btn-sm "
//                                         // style={{ height: '40px' }} // Ensure consistent height
//                                         >
//                                             Show Service
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </td> */}


//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Edit Modal */}
//             <Modal size='lg' show={showEditModal} onHide={() => setShowEditModal(false)}>
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
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="success" onClick={handleSave}>
//                         Save Changes
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
//                     <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="danger" onClick={confirmDelete}>
//                         Confirm Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

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

                    <Table striped bordered hover>
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



