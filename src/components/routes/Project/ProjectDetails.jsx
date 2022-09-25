import React from "react";
import { Carousel } from "react-responsive-carousel";

const ProjectDetails = ({
  heading4,
  proj1,
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
  proj7,
  proj8,
  proj9,
}) => {
  return (
    <div>
      <div className="project-output">
        <p className=""> {heading4}</p>
        <hr />
        <div className="project-output-2">
          <Carousel>
            <div className="img">
              <img src={proj1} alt="project1" />
              <p className="legend">Diaplayed Project to Managment </p>
            </div>
            <div className="img">
              <img src={proj2} alt="project2" />
              <p className="legend">Team Group Photo</p>
            </div>
            <div className="img">
              <img src={proj3} alt="project3" />
              <p className="legend">Team Group Photo</p>
            </div>
            <div className="img">
              <img src={proj4} alt="project4" />
              <p className="legend">Pic During Ongoing Event</p>
            </div>
            <div className="img">
              <img src={proj5} alt="project5" />
              <p className="legend">Design of Bike Which We Designed</p>
            </div>
            <div className="img">
              <img src={proj6} alt="project6" />
              <p className="legend">Price Money</p>
            </div>
            <div className="img">
              <img src={proj7} alt="project7" />
              <p className="legend">Bike pic</p>
            </div>
            <div className="img">
              <img src={proj8} alt="project8" />
              <p className="legend">Bike pic</p>
            </div>
            <div className="img">
              <img src={proj9} alt="project9" />
              <p className="legend">Bike pic</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
