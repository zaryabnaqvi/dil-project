import React from 'react';

const Cis = () => {
    return (
      <>
        <section className="pe-2">
          <h1 className="mt-5 DeptHead">
            Department of Computer & Information System Engineering
          </h1>
          <div className="CenterDeptImg">

          <img
            className="deptimg"
            src="cis.jpg"
            align="right"
            alt=" Department of Computer & Information System Engineering"
            title="Department image"
          />
          </div>
          <h2 className="DeptHead">Introduction:</h2>
          <p className="text-justify">
            Due to the rapid advancements in computer science and information
            technology in recent years, there is a need for a separate
            department that focuses on computer system engineering. This
            department attracts top students from pre-engineering programs who
            are interested in pursuing a career as a computer engineer due to
            the high demand for this profession in the industry. To encourage
            research and development, students in the department are given
            mini-projects throughout their coursework and a final year project
            as a separate course to apply their knowledge and gain practical
            experience.
          </p>
          <h2 className="DeptHead">Faculty</h2>
          <p className="text-justify">
            The Department of Computer System Engineering has both junior and
            senior faculty members on its staff. The department does not
            generally bring in visiting faculty members and instead relies on
            its permanent faculty to teach courses. The faculty members in the
            department have a diverse range of expertise and are very
            approachable to students, which fosters a supportive learning
            environment.
          </p>
          <h2 className="DeptHead">Scope & Career:</h2>
          <p className="text-justify">
            The field of Computer Information Systems (CIS) provides a wide
            range of career opportunities for graduates. Some of the career
            paths available to CIS graduates include becoming Network
            Architects, Database Administrators, Computer Programmers, System
            Analysts, Software Developers, Web Developers, and Information
            Security Analysts. The CIS program is designed to prepare students
            for career advancement in various domains, and given the increasing
            demand for IT professionals, CIS graduates have a plethora of job
            opportunities available to them. Graduates can find work in software
            houses, gaming and animation centers, network management companies,
            and other organizations that require technology-based solutions.
          </p>
        </section>
      </>
    );
}

export default Cis;
