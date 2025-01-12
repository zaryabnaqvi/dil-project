import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Shared/Navbar/Navbar";
import { Card, Button, ListGroup, Spinner, Accordion } from "react-bootstrap";
import "./Department.css"
import { Toaster } from "react-hot-toast";
const Departments = () => {
  const [isLoading, setIsLoading] = useState(true); // For departments
  const [isServicesLoading, setIsServicesLoading] = useState(false); // For services
  const [data, setData] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null); // Tracks selected department
  const [services, setServices] = useState([]); // Holds services for the selected department

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          "https://single-window-dil.vercel.app/api/departments/get-all"
        );
        const result = await response.json();
        if (result.code === 200) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const fetchServices = async (deptId) => {
    setIsServicesLoading(true);
    try {
      const response = await fetch(
        `https://single-window-dil.vercel.app/api/departments/services/get-service-by-dept-id/${deptId}`
      );
      const result = await response.json();
      if (result.code === 200) {
        setServices(result.data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);
    } finally {
      setIsServicesLoading(false);
    }
  };

  const handleSelectDepartment = (dept) => {
    setSelectedDept(dept);
    setServices([]);
    fetchServices(dept.id);
  };

  const groupedData = data.reduce((acc, dept) => {
    const faculty = dept.faculty || "Other";
    if (!acc[faculty]) {
      acc[faculty] = [];
    }
    acc[faculty].push(dept);
    return acc;
  }, {});

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} /> 
      <NavBar />
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Spinner animation="border" variant="primary" />
          <h3 className="ms-3">Loading departments...</h3>
        </div>
      ) : (
        <div className="container d-flex mt-3 main-layout">
          <div className="flex-grow-1 content-area">
            {selectedDept ? (
              <div>
                <h1>{selectedDept.name}</h1>
                <p>
                  <Card.Text className="fs-5">{selectedDept.description || "No description available."}</Card.Text>
                </p>
                <div>
                  <h2>Services</h2>
                  {isServicesLoading ? (
                    <div className="d-flex justify-content-center align-items-center my-3">
                      <Spinner animation="border" variant="secondary" />
                      <h4 className="ms-3">Loading services...</h4>
                    </div>
                  ) : services.length > 0 ? (
                    <Accordion>
                      {services.map((service, index) => (
                        <Accordion.Item eventKey={index.toString()} key={service._id}>
                          <Accordion.Header>
                            <strong>{index + 1}. {service.title}</strong>
                          </Accordion.Header>
                          <Accordion.Body>
                            {service.media.length > 0 && (
                              <Card.Img
                                variant="top"
                                src={service.media[0]}
                                alt="Service Media"
                              />
                            )}
                            <Card.Body>
                              <Card.Title>{service.subtitle}</Card.Title>
                              <Card.Text>{service.description}</Card.Text>
                              <h6>Technologies: {service.technology}</h6>
                              <h6>Career Scope: {service.careerScope}</h6>
                              <ListGroup variant="flush" className="my-3">
                                <ListGroup.Item>
                                  <strong>Department:</strong> {service.departmentId.name}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <strong>Faculty:</strong> {service.departmentId.faculty}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <strong>University:</strong> {service.departmentId.universityName}
                                </ListGroup.Item>
                              </ListGroup>
                              {service.projects.length > 0 && (
                                <div className="mt-3">
                                  <h6>Projects:</h6>
                                  {service.projects.map((project) => (
                                    <Card key={project._id} className="my-2">
                                      <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.desc}</Card.Text>
                                        <Button variant="link" href={project.link} target="_blank">
                                          View Project
                                        </Button>
                                      </Card.Body>
                                    </Card>
                                  ))}
                                </div>
                              )}
                            </Card.Body>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  ) : (
                    <p>No services available for this department.</p>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h1>Departments Section</h1>
                <p>Select a department from the sidebar to view details.</p>
              </div>
            )}
          </div>
          {/* <aside id="sidebar" className="sidebar">
            <div className="p-4 pt-5">
              <h5>Faculties and Departments</h5>
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <Spinner animation="border" variant="primary" />
                  <span className="ms-2">Loading faculties and departments...</span>
                </div>
              ) : (
                <Accordion>
                  {Object.entries(groupedData).map(([faculty, departments], idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={faculty}>
                      <Accordion.Header>{faculty}</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled" style={{ paddingLeft: "20px" }}>
                          {departments.map((dept) => (
                            <li key={dept._id}>
                              <a
                                role="button"
                                href="#"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleSelectDepartment(dept);
                                }}
                              >
                                {dept.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </div>
          </aside> */}


          {/* correct */}
          
          <aside id="sidebar" className="DepartmentsSidebar">
            <div className="p-4 pt-5">
              <h5>Faculties and Departments</h5>
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <Spinner animation="border" variant="primary" />
                  <span className="ms-2">Loading faculties and departments...</span>
                </div>
              ) : (
                <Accordion>
                  {Object.entries(groupedData).map(([faculty, departments], idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={faculty}>
                      <Accordion.Header>{faculty}</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled" style={{ paddingLeft: "20px" }}>
                          {departments.map((dept) => (
                            <li key={dept._id}>
                              <a
                                role="button"
                                href="#"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleSelectDepartment(dept);
                                }}
                              >
                                {dept.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </div>
          </aside>


        </div>
      )}
      <Footer />
    </main>
  );
};

export default Departments;