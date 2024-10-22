import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Ap from "../Depts/Ap";
import Arch from "../Depts/Arch";
import Auto from "../Depts/Auto";
import Bcit from "../Depts/Bcit";
import Bmd from "../Depts/Bmd";
import Cis from "../Depts/Cis";
import Civil from "../Depts/Civil";
import Default from "../Depts/Default";
import Eco from "../Depts/Eco";
import Elec from "../Depts/Elec";
import Electronic from "../Depts/Electronic";
import Ic from "../Depts/Ic";
import Im from "../Depts/Im";
import Mech from "../Depts/Mech";
import Petrol from "../Depts/Petrol";
import Soft from "../Depts/Soft";
import Telecom from "../Depts/Telecom";
import Textile from "../Depts/Textile";
import Urban from "../Depts/Urban";
import NavBar from '../Shared/Navbar/Navbar';


const Departments = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      document.title = " Departments | DIL Services";
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
  
    const [openTab, setOpenTab] = useState("");
    const [openDept, setOpenDept] = useState("default");
    
    return (
        <main>
            <NavBar/>
            {isLoading ? (
        <>LOADING...</>
      ) : (
        <div className="container d-md-flex align-items-stretch">
          <article className="w-100  ">
            {openDept === "default" && <Default />}
            {openDept === "civil" && <Civil />}
            {openDept === "urban" && <Urban />}
            {openDept === "petrol" && <Petrol />}
            {openDept === "mech" && <Mech />}
            {openDept === "textile" && <Textile />}
            {openDept === "im" && <Im />}
            {openDept === "auto" && <Auto />}
            {openDept === "elec" && <Elec />}
            {openDept === "cis" && <Cis />}
            {openDept === "electronic" && <Electronic />}
            {openDept === "bmd" && <Bmd />}
            {openDept === "telecom" && <Telecom />}
            {openDept === "soft" && <Soft />}
            {openDept === "bcit" && <Bcit />}
            {openDept === "phy" && <Ap />}
            {openDept === "chem" && <Ic />}
            {openDept === "arch" && <Arch />}
            {openDept === "eco" && <Eco />}
          </article>
          <aside id="sidebar">
            <div
              style={{
                color: "white ",
              }}
              data-aos="fade-down" data-aos-duration="600" data-aos-easing='ease-out-sine'
              className="p-4 pt-5"
            >
              <h5>Faculties and Departments</h5>
              <ul
                data-aos="fade-down" data-aos-duration="600" data-aos-easing='ease-out-sine'
                className="list-unstyled components  mb-5"
              >
                <li>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    href="#pageSubmenu1"
                    data-toggle="collapse"
                    className="dropdown-toggle"
                    onClick={(event) => {
                      event.preventDefault();
                      openTab !== "civil"
                        ? setOpenTab("civil")
                        : setOpenTab("");
                    }}
                  >
                    Faculty of Civil and <br /> Petroleum Engineering <br />{" "}
                    (CPL)
                  </a>
                  {
                    <ul
                      className={
                        openTab === "civil"
                          ? " list-unstyled"
                          : "collapse list-unstyled"
                      }
                      id="pageSubmenu1"
                    >
                      <li>
                        <a
                          role="button"
                          rel="noopener noreferrer"
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            setOpenDept("civil");
                          }}
                        >
                          <span className="fa fa-chevron-right mr-2"></span>{" "}
                          Department of Civil Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          role="button"
                          rel="noopener noreferrer"
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            setOpenDept("urban");
                          }}
                        >
                          <span className="fa fa-chevron-right mr-2"></span>{" "}
                          Department of Urban and Infrastructure Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          role="button"
                          rel="noopener noreferrer"
                          href="#"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            setOpenDept("petrol");
                          }}
                        >
                          <span className="fa fa-chevron-right mr-2"></span>{" "}
                          Department of Petroleum Engineering
                        </a>
                      </li>
                    </ul>
                  }
                </li>
                <li>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    href="#pageSubmenu2"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle collapse"
                    onClick={(event) => {
                      event.preventDefault();
                      openTab !== "MME" ? setOpenTab("MME") : setOpenTab("");
                    }}
                  >
                    Faculty of Mechanical and <br /> Manufacturing Engineering{" "}
                    <br /> (MME)
                  </a>
                  <ul
                    className={
                      openTab == "MME"
                        ? " list-unstyled"
                        : "collapse list-unstyled"
                    }
                    id="pageSubmenu2"
                  >
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("mech");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Mechanical Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("textile");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Textile Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("im");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>
                        Department of Industrial and Manufacturing Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("auto");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Automotive and Marine Engineering
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    href="#pageSubmenu3"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                    onClick={(event) => {
                      event.preventDefault();
                      openTab !== "ECE" ? setOpenTab("ECE") : setOpenTab("");
                    }}
                  >
                    Faculty of Electrical <br /> and Computer Engineering <br />{" "}
                    (ECE)
                  </a>
                  <ul
                    className={
                      openTab === "ECE"
                        ? " list-unstyled"
                        : "collapse list-unstyled"
                    }
                    id="pageSubmenu3"
                  >
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("elec");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>
                        Department of Electrical Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("cis");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Computer and Information Systems
                        Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("electronic");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Electronic Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("bmd");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Bio-Medical Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("telecom");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Telecommunications Engineering
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    href="#pageSubmenu4"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                    onClick={(event) => {
                      event.preventDefault();
                      openTab !== "ish" ? setOpenTab("ish") : setOpenTab("");
                    }}
                  >
                    Faculty of Information Sciences <br /> and Humanities (ISH)
                  </a>
                  <ul
                    className={
                      openTab === "ish"
                        ? " list-unstyled"
                        : "collapse list-unstyled"
                    }
                    id="pageSubmenu4"
                  >
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("soft");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Software Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("bcit");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Computer Science & Information Technology
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("phy");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Physics
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("chem");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Chemistry
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    role="button"
                    rel="noopener noreferrer"
                    href="#pageSubmenu4"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                    onClick={(event) => {
                      event.preventDefault();
                      openTab !== "ams" ? setOpenTab("ams") : setOpenTab("");
                    }}
                  >
                    Faculty of Architecture & <br /> Management Sciences (AMS)
                  </a>
                  <ul
                    className={
                      openTab === "ams"
                        ? " list-unstyled"
                        : "collapse list-unstyled"
                    }
                    id="pageSubmenu4"
                  >
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("arch");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>{" "}
                        Department of Architecture and Planning
                      </a>
                    </li>
                    <li>
                      <a
                        role="button"
                        rel="noopener noreferrer"
                        href="#"
                        onClick={(event) => {
                          window.scrollTo(0, 0);

                          setOpenDept("eco");
                        }}
                      >
                        <span className="fa fa-chevron-right mr-2"></span>
                        Department of Economics and Management Sciences
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      )}
            <Footer/>
            {/* <ScrollTop/>   */}
        </main>
    );
};

export default Departments;