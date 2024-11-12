
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { deleteDepartment, ShowDepartments, updateDepartment } from '../../../../api/department';

export const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [currentDepartment, setCurrentDepartment] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleEdit = (department) => {
        setCurrentDepartment(department);
        setShowEditModal(true);
    };

    const handleDelete = (department) => {
        setCurrentDepartment(department);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async() => {
        setShowDeleteConfirm(false);
        setShowAlert(true);
        // Add delete logic here, such as API call to delete the department.
                const response = await deleteDepartment(currentDepartment._id);
        if(response.status === 200){
            fetchDepartments(); // Fetch updated departments after successful delete.
        }
        else{
            console.error('Failed to delete department');
        }
    };

    const handleSave = async() => {
        setShowEditModal(false);
        setShowAlert(true);

        // Add save logic here, such as API call to update the department.

        const response = await updateDepartment(currentDepartment._id,currentDepartment);
        if(response.status === 200){
            fetchDepartments(); // Fetch updated departments after successful save.
        }
        else{
            console.error('Failed to update department');
        }
    };

    const fetchDepartments = async () => {
        // Fetch departments from API here and update the departments state.
        const data= await ShowDepartments();
        setDepartments(data.data)
        setShowAlert(false);
        // Reset currentDepartment and showEditModal
        setCurrentDepartment(null);
        setShowEditModal(false);

    }

    useEffect(() => {
        fetchDepartments(); // Fetch departments on component mount.
        // Add any additional API calls or data fetching logic here.
        // For example, fetchDepartments when the component is updated (isUpdated state changes).
        // This ensures that the component always fetches the latest departments data.
        // Also, reset currentDepartment and showEditModal when the component is updated.
        // This ensures that the user can see the updated department details after editing.
        // Finally, reset showAlert when the component is updated.
        // This ensures that the success alert is not shown multiple times.
        

    },[]);

    return (
        <div className="container mt-4">
            <h2>Departments</h2>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Action completed successfully.
                </Alert>
            )}
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
                                <Button variant="primary" onClick={() => handleEdit(department)}>
                                    Edit
                                </Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(department)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
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
                                onChange={(e) => setCurrentDepartment({...currentDepartment, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="facultyName">
                            <Form.Label>Faculty</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={currentDepartment?.faculty}
                                onChange={(e) => setCurrentDepartment({...currentDepartment, faculty: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="universityName">
                            <Form.Label>University</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={currentDepartment?.universityName}
                                onChange={(e) => setCurrentDepartment({...currentDepartment, universityName: e.target.value })}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
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
                    Are you sure you want to delete <strong>{currentDepartment?.name}</strong>?
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
        </div>
    );
};

// Sample department data for testing
const sampleDepartments = [
    {
        _id: '67222e6f670487648a43aca4',
        name: 'CSIT',
        faculty: 'ECE',
        universityName: 'NED',
        createdAt: '2024-10-30T13:02:39.111Z',
        updatedAt: '2024-10-30T13:02:39.111Z',
    },
    {
        _id: '6723f9a26e18439bac15b54b',
        name: 'English',
        faculty: 'Allied Studies',
        universityName: 'NED',
        createdAt: '2024-10-31T21:41:54.173Z',
        updatedAt: '2024-10-31T21:41:54.173Z',
    },
];

