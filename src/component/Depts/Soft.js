import React from "react";

const Soft = () => {
  return (
    <>
      <section className="pe-2">
        <h1 className="mt-5">Department of Software Engineering</h1>
        <div className="CenterDeptImg">

        <img
          loading="lazy"
          className="deptimg"
          src="se.jpeg"
          align="right"
          alt="Department of Software Engineering"
          title="Department image"
        />
        </div>
        <h2>Introduction:</h2>
        <p className="text-justify">
          NEDUET's Department of Software Engineering is a leading department,
          boasting a highly qualified faculty and top-notch tools and machinery
          for teaching software engineering at the BE degree level. The PEC has
          approved the program, which is OBE-based and spans four years with
          eight semesters, each consisting of five courses (except the first,
          which has six). Students who earn a BE software engineering degree
          from NEDUET are considered to have a comparable level of expertise to
          those with an MS software engineering degree. The department offers
          five well-equipped computer labs with high-performance computers and
          essential software for software engineering students. Students have
          free access to these computers and can purchase internet connections
          at reasonable prices.
        </p>
        <h2>Scope & Career:</h2>
        <p className="text-justify">
          The software engineering program at NEDUET covers a wide range of
          important areas such as programming languages, web engineering and
          development, software development and testing, database management,
          artificial intelligence, cyber security, graphics, and the latest
          technologies like blockchains. The syllabus has been carefully
          designed to equip students with the necessary skills and knowledge to
          work as programmers, security analysts, data records managers, ethical
          hackers with intelligence agencies, web designers and developers,
          software analysts, cyber security experts, and more. Graduates can
          also apply their knowledge to practical approaches such as
          blockchains, cloud computing, artificial intelligence, and the
          internet of things (IoT) in various fields including medicine,
          education, construction, management, and technology.
        </p>
      </section>
    </>
  );
};

export default Soft;
