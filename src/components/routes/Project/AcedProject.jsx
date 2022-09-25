import React from "react";

const AcedProject = ({
  heading2,
  subheading2_1,
  data2_1,
  data2_2,
  subheading2_2,
  data2_3,
  subheading2_3,
  data2_4,
  subheading2_4,
  data2_5,
}) => {
  return (
    <div>
      <div className="projects">
        <p>{heading2}</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">{subheading2_1}</p>
            <hr />
            <p className="project-react-2">{data2_1}</p>
            <p className="project-react-3">{data2_2}</p>
          </div>
          <div className="project-node">
            <p className="project-node-1">{subheading2_2}</p>
            <hr />
            <p className="project-node-2">{data2_3}</p>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">{subheading2_3}</p>
            <hr />
            <p className="project-react-2">{data2_4}</p>
          </div>
          <div className="project-node">
            <p className="project-node-1">{subheading2_4}</p>
            <hr />
            <p className="project-node-2">{data2_5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcedProject;
