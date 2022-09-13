import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="educ">
      <p>Educational BackGround:-</p>
      <hr />
      <div className="educ-1">
        <div className="educ_grad">
          <p className="name">
            Centurion University of Technology and Management. (CUTM)
          </p>
          <p className="desc">Bachelor of Technology.</p>
          <p className="stream">Mechanical Engineering.</p>
          <p className="marks">8.1 Cgpa</p>
        </div>
        <div className="educ_inter">
          <p className="name">Sri Chaitanya Junior Collage.</p>
          <p className="desc">
            Inter Mediate.(+1,+2) <span>(State Board)</span>
          </p>
          <p className="stream">Maths Physic Chemistry. (MPC)</p>
          <p className="marks">89.6%</p>
        </div>
        <div className="educ_school">
          <p className="name">Alluri Sitarama Raju Public School</p>
          <p className="desc">10th (CBSE) </p>
          <p className="marks">7.6 Cgpa</p>
        </div>
      </div>
      <div className="jsp">
        <p className="jsp-1">
          <span className="jsp-1-1">J</span>spiders
        </p>
        <p className="jsp-2">
          <span className="jsp-2-1">M</span>
          <span className="jsp-2-2">E</span>
          <span className="jsp-2-3">R</span>
          <span className="jsp-2-4">N</span>
        </p>
        <p className="jsp-3">
          Joined jspiders (Bangalore) in the Month of April on 18th.opted for
          fullstack web development course.After 6 months of hard work i
          sucessfully completd my course with industrial standard practice .with
          crystal clear concepts of MERN as well as in Html,Css,Java Script
          etc...
        </p>
        <p className="jsp-4">Looking For Job..</p>
      </div>
    </div>
  );
};

export default Education;
