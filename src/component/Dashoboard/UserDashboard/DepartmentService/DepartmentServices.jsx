                        


// import React, { useState } from 'react';
// import { Form, Col, Row, Button, Toast } from 'react-bootstrap';
// import { AddService } from '../../../../api/department';

// const AddServiceComponent = () => {
//     const [formData, setFormData] = useState({
//         title: "",
//         description: "",
//         subtitle: "",
//         careerScope: "",
//         technology: "",
//         isActive: true,
//         serviceArray: [],
//         media: []  // Array to hold the image file URLs or file objects
//     });
//     const [showToast, setShowToast] = useState(false);
//     const [toastMessage, setToastMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const handleArrayChange = (e) => {
//         const { value } = e.target;
//         const services = value.split(",").map(service => service.trim());
//         setFormData((prevData) => ({
//             ...prevData,
//             serviceArray: services,
//         }));
//     };

//     const handleFileChange = (e) => {
//         const { files } = e.target;
//         if (files) {
//             const fileArray = Array.from(files);
//             setFormData((prevData) => ({
//                 ...prevData,
//                 media: fileArray,
//             }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Prepare form data to include images (if any)
//         const dataToSend = new FormData();
//         dataToSend.append('title', formData.title);
//         dataToSend.append('description', formData.description);
//         dataToSend.append('subtitle', formData.subtitle);
//         dataToSend.append('careerScope', formData.careerScope);
//         dataToSend.append('technology', formData.technology);
//         dataToSend.append('isActive', formData.isActive);
//         dataToSend.append('serviceArray', formData.serviceArray.join(", "));

//         // Append media files
//         formData.media.forEach((file, index) => {
//             dataToSend.append(`media[${index}]`, file);
//         });

//         try {
//             const data = await AddService(dataToSend);
//             setToastMessage("Service created successfully!");
//             setShowToast(true);
//             setFormData({
//                 title: "",
//                 description: "",
//                 subtitle: "",
//                 careerScope: "",
//                 technology: "",
//                 isActive: true,
//                 serviceArray: [],
//                 media: []
//             });
//         } catch (error) {
//             setToastMessage("Error creating service");
//             setShowToast(true);
//             console.error(error);
//         }
//     };

//     return (
//         <div className="addServiceForm">
//             <Form onSubmit={handleSubmit}>
//                 <Row>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Service Title</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                                 placeholder="Enter service title"
//                             />
//                         </Form.Group>
//                     </Col>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Subtitle</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="subtitle"
//                                 value={formData.subtitle}
//                                 onChange={handleChange}
//                                 placeholder="Enter subtitle"
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 placeholder="Enter description"
//                                 rows={3}
//                             />
//                         </Form.Group>
//                     </Col>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Career Scope</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="careerScope"
//                                 value={formData.careerScope}
//                                 onChange={handleChange}
//                                 placeholder="Enter career scope"
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Technology</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="technology"
//                                 value={formData.technology}
//                                 onChange={handleChange}
//                                 placeholder="Enter technology stack"
//                             />
//                         </Form.Group>
//                     </Col>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Service Types (comma-separated)</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 value={formData.serviceArray.join(", ")}
//                                 onChange={handleArrayChange}
//                                 placeholder="e.g., Web Development, Mobile App Development"
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={6} className="my-3">
//                         <Form.Group>
//                             <Form.Label>Upload Media (Images)</Form.Label>
//                             <Form.Control
//                                 type="file"
//                                 multiple
//                                 onChange={handleFileChange}
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Form.Group className="my-3">
//                     <Form.Check
//                         type="checkbox"
//                         label="Is Active"
//                         name="isActive"
//                         checked={formData.isActive}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <div className='d-flex justify-content-center'>
//                     <Button variant="success" type="submit">Add Service</Button>
//                 </div>

//             </Form>

//             <Toast
//                 onClose={() => setShowToast(false)}
//                 show={showToast}
//                 delay={3000}
//                 autohide
//                 className="mt-3"
//             >
//                 <Toast.Body>{toastMessage}</Toast.Body>
//             </Toast>
//         </div>
//     );
// };

// export default AddServiceComponent;


import React, { useState } from "react";
import { Form, Col, Row, Button, Toast } from "react-bootstrap";
import { AddService } from "../../../../api/department";

const AddServiceComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    careerScope: "",
    technology: "",
    isActive: true,
    serviceArray: [],
    media: [],
    departmentId: "",
    projects: [],
    isRequested: false,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (e) => {
    const { value } = e.target;
    const services = value.split(",").map((service) => service.trim());
    setFormData((prevData) => ({
      ...prevData,
      serviceArray: services,
    }));
  };

  const handleProjectsChange = (e) => {
    const { value } = e.target;
    const projects = value.split(";").map((project) => {
      const [title, desc, link] = project.split("|");
      return { title: title.trim(), desc: desc.trim(), link: link.trim() };
    });
    setFormData((prevData) => ({
      ...prevData,
      projects,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prevData) => ({
        ...prevData,
        media: fileArray,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "serviceArray" || key === "projects") {
        dataToSend.append(key, JSON.stringify(value));
      } else if (key === "media") {
        value.forEach((file, index) => {
          dataToSend.append(`media[${index}]`, file);
        });
      } else {
        dataToSend.append(key, value);
      }
    });

    try {
      const data = await AddService(dataToSend);
      setToastMessage("Service created successfully!");
      setShowToast(true);
      setFormData({
        title: "",
        description: "",
        subtitle: "",
        careerScope: "",
        technology: "",
        isActive: true,
        serviceArray: [],
        media: [],
        departmentId: "",
        projects: [],
        isRequested: false,
      });
    } catch (error) {
      setToastMessage("Error creating service");
      setShowToast(true);
      console.error(error);
    }
  };

  return (
    <div className="addServiceForm">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Service Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter service title"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="Enter subtitle"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows={3}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Career Scope</Form.Label>
              <Form.Control
                type="text"
                name="careerScope"
                value={formData.careerScope}
                onChange={handleChange}
                placeholder="Enter career scope"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Technology</Form.Label>
              <Form.Control
                type="text"
                name="technology"
                value={formData.technology}
                onChange={handleChange}
                placeholder="Enter technology stack"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Department ID</Form.Label>
              <Form.Control
                type="text"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                placeholder="Enter department ID"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Service Types (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                value={formData.serviceArray.join(", ")}
                onChange={handleArrayChange}
                placeholder="e.g., Web Development, Mobile App Development"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Projects (title|desc|link;...)</Form.Label>
              <Form.Control
                type="text"
                onChange={handleProjectsChange}
                placeholder="e.g., Project1|Description1|Link1;Project2|Description2|Link2"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="my-3">
            <Form.Group>
              <Form.Label>Upload Media (Images)</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="my-3">
          <Form.Check
            type="checkbox"
            label="Is Active"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Check
            type="checkbox"
            label="Is Requested"
            name="isRequested"
            checked={formData.isRequested}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="success" type="submit">
            Add Service
          </Button>
        </div>
      </Form>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="mt-3"
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default AddServiceComponent;
