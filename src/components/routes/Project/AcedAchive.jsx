import React from "react";

const AcedAchive = ({
  heading3,
  data3_1,
  data3_2,
  data3_3,
  data3_4,
  data3_5,
}) => {
  return (
    <div>
      <div className="projects">
        <p>{heading3}</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-2">{data3_1}</p>
            <p className="project-react-2">{data3_2}</p>
            <p className="project-react-2">{data3_3}</p>
          </div>
          <div className="project-react">
            <p className="project-react-2">{data3_4}</p>
            <p className="project-react-2">{data3_5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcedAchive;
