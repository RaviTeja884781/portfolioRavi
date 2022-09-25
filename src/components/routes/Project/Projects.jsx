import React from "react";
import MernProject from "./MernProject";
import "./Projects.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import sup from "../../../images/project/mern/sup.png";
import news from "../../../images/project/mern/news.png";
import git from "../../../images/project/mern/git.png";
import covid from "../../../images/project/mern/covid.png";
import AcedProject from "./AcedProject";
import AcedAchive from "./AcedAchive";

import proj1 from "../../../images/project/aced/proj1.jpg";
import proj2 from "../../../images/project/aced/proj2.jpg";
import proj3 from "../../../images/project/aced/proj3.jpg";
import proj4 from "../../../images/project/aced/proj4.jpg";
import proj5 from "../../../images/project/aced/proj5.jpg";
import proj6 from "../../../images/project/aced/proj6.jpg";
import proj7 from "../../../images/project/aced/proj7.jpg";
import proj8 from "../../../images/project/aced/proj8.jpg";
import proj9 from "../../../images/project/aced/proj9.jpg";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  let heading1 = "Mern Projects";

  let subHeading1_1 = "React js";

  let data1_1 = ` 1. Fetching Real-Time API and displaying in the front end by
  creating User-Interface with the help of Hooks( useState ,
  UseEffect ,useContext ,useReducer ,useCallback,UseMemo,UseRef )and
  third- party libraries called Axios, React-router-dom.`;

  let data1_2 = `2.creating individual components like login form, Single page
  web-pages ,Form Validation,Navigation Bar ,search Bar with search
  functionality, Buttons with good UI etc...`;

  let subHeading1_2 = `Node js,Express js, Mongodb`;

  let data1_3 = ` Creating REST FUL Api with all HTTP operations
  (GET,POST,PUT,DELETE) and connecting it to Mongodb(atlas) with the
  help of third party library Mongoose and encrypting password with
  Bycript library`;

  let heading2 = "Acedimic Projects";

  let subheading2_1 = "Go-Kart";

  let data2_1 =
    " It is designed and fabricated in our university and represented in go-kart racing.";
  let data2_2 =
    "It is motorsport on-road vehicles which were powered by the petrol engine";
  let subheading2_2 = "Electric-Bike ";
  let data2_3 =
    "Design and fabrication of electric bike in our university and represented in racing.";

  let subheading2_3 = "Subsonic Wind Tunnel";

  let data2_4 = `The wind tunnels are used to copy the actions of an object in
  flight. Researchers use wind tunnels to learn more about how an
  aircraft will fly. NASA uses wind tunnels to test scale models of
  aircraft and spacecraft. The wind tunnel moves air around an
  object, making it seem like the object is really flying`;

  let subheading2_4 = `Manufacturing of Mobile stand in cnc`;

  let data2_5 = `I worked on this project on my 5th semester. Designed in
  Catia v5 and I used master cam to generate cnc codes to
  manufacture the product`;

  let heading3 = `Academic Achievements`;

  let data3_1 = `1. First prize, Electric bike racing in Centurion University of
  Technology and Management (2017 December)`;

  let data3_2 = ` 2. Second prize, Electric bike racing in SRM University (2018)`;

  let data3_3 = `  3. Second prize, Electric bike racing in AITAM collage TEKKALI
              (2019)`;

  let data3_4 = `Internship Did in Centurion University Of Technology And Managment
  In (Go To Market Program)`;

  let data3_5 = `Worked on Design Of Pay Load Drone`;

  let heading4 = "Project Details";

  return (
    <div>
      <MernProject
        heading1={heading1}
        subHeading1_1={subHeading1_1}
        data1_1={data1_1}
        data1_2={data1_2}
        subHeading1_2={subHeading1_2}
        data1_3={data1_3}
        sup={sup}
        covid={covid}
        news={news}
        git={git}
      />
      <AcedProject
        heading2={heading2}
        subheading2_1={subheading2_1}
        data2_1={data2_1}
        data2_2={data2_2}
        subheading2_2={subheading2_2}
        data2_3={data2_3}
        subheading2_3={subheading2_3}
        data2_4={data2_4}
        subheading2_4={subheading2_4}
        data2_5={data2_5}
      />
      <AcedAchive
        heading3={heading3}
        data3_1={data3_1}
        data3_2={data3_2}
        data3_3={data3_3}
        data3_4={data3_4}
        data3_5={data3_5}
      />
      <ProjectDetails
        heading4={heading4}
        proj1={proj1}
        proj2={proj2}
        proj3={proj3}
        proj4={proj4}
        proj5={proj5}
        proj6={proj6}
        proj7={proj7}
        proj8={proj8}
        proj9={proj9}
      />
    </div>
  );
};

export default Projects;
