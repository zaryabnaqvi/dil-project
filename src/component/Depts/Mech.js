import React from 'react';

const Mech = () => {
    return (
      <>
        <section className="pe-2">
          <h1 className="mt-5">Department of Mechanical Engineering</h1>
          <div className="CenterDeptImg">

          <img
            loading="lazy"
            className="deptimg"
            src="mech.jpg"
            align="right"
            alt="Department of Mechanical Engineering"
            title="Department image"
          />
          </div>
          <h2>Introduction:</h2>
          <p className="text-justify">
            The Department of Mechanical Engineering (MED) aims to provide a
            well-balanced education in mechanical engineering, with both
            theoretical instruction and practical exposure. The department has
            highly qualified faculty members and well-equipped laboratories to
            facilitate the learning process. The flagship program of MED is the
            Bachelor of Engineering (BE) program, which is highly esteemed and
            one of the oldest mechanical engineering programs in the country.
            The program has an enrollment of over 800 students and offers a
            strong foundation in mechanical engineering, allowing students to
            pursue diverse career goals. MED has established links with the
            industry, providing two internship opportunities to most of the
            students in their third year of studies. In the final year design
            project, students conduct research and design solutions to
            real-world problems under the guidance of academic and industrial
            professionals. BE graduates from MED have ample employment
            opportunities in the industry throughout Pakistan and overseas. Many
            also choose to pursue further studies in marine, automotive,
            industrial, and manufacturing, or other specializations of
            mechanical engineering. Additionally, MED offers management and
            sciences courses to enhance soft skills, which are essential in the
            job market.
          </p>
          <h2>Core Courses & Studies</h2>
          <p className="text-justify">
            The Mechanical Engineering Department offers core courses in
            Thermodynamics, Fluid Mechanics, Power Plant Engineering, Heat
            Transfers, Mechanics, Solid Mechanics, Machine Design, and
            Refrigeration. Skilled mechanical engineers are in great demand in
            various industries, including traditional manufacturing sectors such
            as automobile, aviation, shipping, aerospace, power plants, and
            machinery manufacturing. In addition, they are sought after in
            emerging fields such as nanotechnology, biomedical engineering,
            energy conservation, and environmental engineering. Mechanical
            engineers with management skills are also highly valued as
            consultants who can manage both technology and personnel. Many
            engineering colleges and polytechnics across the country are working
            hard to meet the growing demand for skilled mechanical engineering
            professionals.
          </p>
          <h2>Scope & Career:</h2>
          <p className="text-justify">
            {" "}
            Here is a list of industries in Pakistan that offer job
            opportunities for mechanical engineers: <br /> • Aviation industry:
            PIA, Shaheen Airlines, CAA, etc. <br /> • HVAC industry: Carrier,
            Dawlance, etc. <br /> • Research and Development: NDC, SUPARCO, AWC,
            etc. <br /> • Utilities industry: KESC, SSGC, SNGC, KWSB, etc.{" "}
            <br /> • Manufacturing industry: HMC, PMTF, KTDMC, etc. <br /> •
            Power generation industry: KESC, HUBCO, etc. <br /> • Automotive
            industry: Hino Pak, Pak Suzuki, Honda, Indus Motors, etc. <br /> •
            Design industry: Simcon, NESCOM, ENAR, etc. <br /> • Oil and gas
            industry: OGDCL, PSO, Shell, PPL, NRL, etc. <br /> • Chemicals and
            fertilizers industry: FFC, Engro, etc. <br /> • Food and consumables
            industry: Unilever, P&G, BP, etc. <br /> • Pharmaceutical industry:
            GSK, Pfizer, Novartis, etc.
          </p>
        </section>
      </>
    );
}

export default Mech;
