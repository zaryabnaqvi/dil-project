import React from 'react';

const Civil = () => {
    return (
      <>
        <section className="pe-2">
          <h1 className="mt-5 DeptHead">Department of Civil Engineering</h1>
          <div className="CenterDeptImg">

          <img
            loading="lazy"
            className="deptimg"
            src="civil.jpeg"
            align="right"
            alt="Department of Civil Engineering"
            title="Department image"
          />
          </div>
          <h2 className="DeptHead">Introduction:</h2>
          <p className="text-justify">
            The Department of Civil Engineering at NED University seems to have
            a rich history and a strong commitment to providing a quality
            education to its students. The adoption of Outcome Based Education
            (OBE) and Outcome Based Assessment (OBA) is a great step towards
            ensuring that the program is focused on the development of specific
            learning outcomes, and that the assessment of student learning is
            aligned with those outcomes. The availability of specialized
            facilities such as the Building Modeling Centre, Water Modeling
            Centre, and Virtual Reality Centre should also provide students with
            valuable hands-on experience and exposure to cutting-edge technology
            in their field.
          </p>
          <h2 className="DeptHead">Course Topic:</h2>
          <p className="text-justify">
            The civil engineering curriculum focuses on various aspects related
            to construction, including the selection of building materials,
            surveying techniques, designing and analyzing steel and concrete
            structures, fluid mechanics, transportation, environmental studies,
            engineering drawing, estimation, and costing. To excel in these
            courses, students must have strong arithmetic and mathematical
            abilities. Additionally, some courses may also touch on aspects of
            architecture.
          </p>
          <h2 className="DeptHead">Scope & Career:</h2>
          <p className="text-justify">
            Civil engineering graduates can expect promising career
            opportunities in the construction, energy, and power sectors. There
            are numerous job opportunities available in both the public and
            private sectors, including consulting firms, railways, defense
            forces, and municipal corporations. Civil engineering offers various
            specializations, such as construction, geo-technical, environmental,
            coastal, and transportation engineering. Compared to other
            engineering branches, civil engineering has a lower unemployment
            rate. Graduates can find career opportunities in different fields,
            such as designing, planning, and construction, which offer
            significant scope for growth and development.
          </p>
        </section>
      </>
    );
}

export default Civil;
