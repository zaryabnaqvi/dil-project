import React from 'react';

const Arch = () => {
    return (
      <>
        <section className="pe-2">
          <h1 className="mt-5 DeptHead">Department of Architecture.</h1>
          <div className="CenterDeptImg">

          <img
            loading="lazy"
            className="deptimg"
            src="arch.jpg"
            align="right"
            title="Department image"
            alt="Department of Architecture."
          />
          </div>
          <h2 className="DeptHead">Introduction</h2>
          <p className="text-justify">
            Architecture students develop highly desirable creative, visual,
            technical, and design-based skills. A career in architecture offers
            profitable jobs such as:
            <ul>
              <li>Architectural technologist </li>
              <li>CAD technician</li>
              <li>Interior and spatial designer </li>
              <li>Urban designer</li>
              <li>Building surveyor</li>
              <li>Commercial/residential surveyor </li>
              <li>Construction manager</li>
              <li> Estates manager</li>
              <li>Higher education lecturer</li>
              <li> Historic buildings inspector/conservation officer </li>
              <li>Landscape architect</li>
              <li>Planning and development surveyor</li>
            </ul>{" "}
          </p>
        </section>
      </>
    );
}

export default Arch;
