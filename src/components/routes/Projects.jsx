import React from "react";
// import git from "../../images/project/mern/git.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <p>Mern Projects</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">React js</p>
            <hr />
            <p className="project-react-2">
              1. Fetching Real-Time API and displaying in the front end by
              creating User-Interface with the help of Hooks( useState ,
              UseEffect ,useContext ,useReducer ,useCallback,UseMemo,UseRef )and
              third- party libraries called Axios, React-router-dom.
            </p>
            <p className="project-react-3">
              2.creating individual components like login form, Single page
              web-pages ,Form Validation,Navigation Bar ,search Bar with search
              functionality, Buttons with good UI etc...
            </p>
          </div>
          <div className="project-node">
            <p className="project-node-1">Node js,Express js, Mongodb</p>
            <hr />
            <p className="project-node-2">
              Creating REST FUL Api with all HTTP operations
              (GET,POST,PUT,DELETE) and connecting it to Mongodb(atlas) with the
              help of third party library Mongoose and encrypting password with
              Bycript library
            </p>
          </div>
        </div>
      </div>
      <div className="project-output">
        <p className="">Output</p>
        <hr />
        <div className="project-output-1"></div>
      </div>
      <div className="projects">
        <p>ACADEMIC PROJECTS</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">Go-Kart</p>
            <hr />
            <p className="project-react-2">
              It is designed and fabricated in our university and represented in
              go-kart racing.
            </p>
            <p className="project-react-3">
              It is motorsport on-road vehicles which were powered by the petrol
              engine
            </p>
          </div>

          <div className="project-node">
            <p className="project-node-1">Electric-Bike</p>
            <hr />
            <p className="project-node-2">
              Design and fabrication of electric bike in our university and
              represented in racing.
            </p>
          </div>
        </div>
      </div>
      {/* ================================================== */}
      <div className="projects">
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-1">Subsonic Wind Tunnel</p>
            <hr />
            <p className="project-react-2">
              The wind tunnels are used to copy the actions of an object in
              flight. Researchers use wind tunnels to learn more about how an
              aircraft will fly. NASA uses wind tunnels to test scale models of
              aircraft and spacecraft. The wind tunnel moves air around an
              object, making it seem like the object is really flying
            </p>
          </div>
          <div className="project-node">
            <p className="project-node-1">
              Manufacturing of Mobile stand in cnc
            </p>
            <hr />
            <p className="project-node-2">
              I worked on this project on my 5th semester. Designed in Catia v5
              and I used master cam to generate cnc codes to manufacture the
              product
            </p>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      <div className="projects">
        <p>Academic Achievements</p>
        <hr />
        <div className="project_1">
          <div className="project-react">
            <p className="project-react-2">
              1. First prize, Electric bike racing in Centurion University of
              Technology and Management (2017 December)
            </p>
            <p className="project-react-2">
              2. Second prize, Electric bike racing in SRM University (2018)
            </p>
            <p className="project-react-2">
              3. Second prize, Electric bike racing in AITAM collage TEKKALI
              (2019)
            </p>
          </div>
          <div className="project-react">
            <p className="project-react-2">
              Internship Did in Centurion University Of Technology And Managment
              In (Go To Market Program)
            </p>
            <p className="project-react-2">
              Worked on Design Of Pay Load Drone
            </p>
          </div>
        </div>
      </div>
      {/* ============================================================= */}
      <div className="project-output">
        <p className="">Project Details</p>
        <hr />
        <div className="project-output-2"></div>
      </div>
    </div>
  );
};

export default Projects;
