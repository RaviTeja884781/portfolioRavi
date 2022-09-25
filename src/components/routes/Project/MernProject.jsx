import React from "react";
import { Carousel } from "react-responsive-carousel";

const MernProject = ({
  heading1,
  subHeading1_1,
  data1_1,
  data1_2,
  subHeading1_2,
  data1_3,
  sup,
  covid,
  news,
  git,
}) => {
  return (
    <div>
      <div className="projects">
        <p>{heading1}</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">{subHeading1_1}</p>
            <hr />
            <p className="project-react-2">{data1_1}</p>
            <p className="project-react-3">{data1_2}</p>
          </div>
          <div className="project-node">
            <p className="project-node-1">{subHeading1_2}</p>
            <hr />
            <p className="project-node-2">{data1_3}</p>
          </div>
        </div>
      </div>
      <div className="project-output">
        <p className="">Output</p>
        <hr />
        <div className="project-output-1">
          <Carousel>
            <div>
              <img src={covid} alt="covid api output" />
              <p className="legend">Covid Api</p>
            </div>
            <div>
              <img src={sup} alt="super hero output" />
              <p className="legend">Super Hero Api</p>
            </div>
            <div>
              <img src={git} alt="git users output" />
              <p className="legend">Git Users Api</p>
            </div>
            <div>
              <img src={news} alt="news output" />
              <p className="legend">News Api</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MernProject;
