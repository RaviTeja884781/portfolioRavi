import React from "react";
import vscodes from "../../images/vscodes.png";
import profile_nobg from "../../images/profile_pics/profile_nobg.png";
import nodejs from "../../images/nodejs.png";
import express from "../../images/express.png";
import mern from "../../images/mern.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile1">
        <div className="profile_div1">
          <div className="profile_div1-1">
            <div className="profile_name">
              <p className="profile_name-1">HELLO EVERYBODY I'AM</p>
              <p className="profile_name-2">RAVI TEJA</p>
            </div>
            <div className="profile_desc">
              <p className="profile_desc-1">A WEB DEVELOPER</p>
              <p className="profile_desc-2">
                Seeking an entery-level position to begain my carear <br /> in a
                high-level professional environment. To secure <br /> employment
                with a reputable company, whre i can utilize my skills. Seeking
                a challenging carear with an MNC.
              </p>
              <p className="profile_desc-3">
                <i class="fa-sharp fa-solid fa-phone"></i> 8847819634
              </p>
              <p className="profile_desc-4">
                <i class="fa-regular fa-envelope"></i> ladi.ravi884781@gmail.com
              </p>
              <p className="profile_desc-5">
                <i class="fa-solid fa-calendar-days"></i> 9'th June 1997
              </p>
              <p className="profile_desc-6">
                <i class="fa-sharp fa-solid fa-house-chimney"></i> Bangalore
                (Ready To Relocate)
              </p>
              <p className="profile_desc-7">Hire Me</p>
            </div>
          </div>
          <div className="profile_pic_div1-2">
            <img src={profile_nobg} alt="profile_pic" />
          </div>
        </div>
        {/* =========================================================================== */}
        <div className="profile_skills">
          <div className="profile_main1">
            <p>SKILL'S</p>
          </div>
          <div className="profile_main2">
            <div className="profile_main2-1">
              <p className="profile_main-1-el1">Front-End Technology</p>
              <hr />
              <p className="profile_main-1-el1-1">
                <i class="fa-brands fa-react"></i>REACT JS
              </p>
              <p className="profile_main-1-el1-2">
                <i class="fa-brands fa-html5"></i>HTML
              </p>
              <p className="profile_main-1-el1-3">
                <i class="fa-brands fa-css3-alt"></i>CSS
              </p>
              <p className="profile_main-1-el1-4">
                <i class="fa-brands fa-square-js"></i>JAVA SCRIPT
              </p>

              <p className="profile_main-1-el2">Back-End Technology</p>
              <hr />
              <p className="profile_main-1-el2-1">
                <img src={nodejs} height="19px" alt="nodejs" /> NODE JS
              </p>
              <p className="profile_main-1-el2-2">
                <img src={express} height="19px" alt="express" /> EXPRESS JS
              </p>
              <p className="profile_main-1-el2-3">
                <i class="fa-solid fa-database"></i>MONGO DB
              </p>
              <p className="profile_main-1-el2-4">
                <i class="fa-brands fa-java"></i>Java
              </p>
              <p className="profile_main-1-el2-5">
                <i class="fa-solid fa-database"></i>SQL
              </p>
            </div>
            <div className="profile_main2-2">
              <div className="profile_tools">
                <p className="profile_main-2-el1">Code Edtior</p>
                <hr />
                <p className="profile_main-2-el1">
                  <img src={vscodes} height="15px" alt="vscode" /> Visual Studio
                  Code
                </p>
              </div>
              <div className="profile_soft">
                <p className="profile_main-2-el2">Soft Skills</p>
                <hr />
                <div className="profile_main-2-el2-1">
                  <p>1.Observation</p>
                  <p>2.Decision Making</p>
                  <p>3.Multi Tasking</p>
                  <p>4.Good Communication</p>
                </div>
                <p className="profile_main-2-el3">Other Softwares</p>
                <hr />
                <div className="profile_main-2-el3-1">
                  <p>1.MS OFFICE</p>
                  <p>2.Catia V5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_mern">
          <img src={mern} alt="mern" />
        </div>
      </div>
      {/* <div className="profile_goodat">
        <p>Good knowledge At</p>
        <div className="react">
          <h2>React</h2>
          <p>
            Good Understanding at all react concepts like.ex.Class
            Components,Function Components,props,states etc...
          </p>
          <p>Hooks:</p>
          <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useContext</li>
            <li>useReduser</li>
            <li>useCallback</li>
            <li>useMemeo</li>
            <li>useRef</li>
          </ul>
          <p>React Third party Modules</p>
          <ul>
            <li>React-router-dom</li>
            <li>Axios</li>
            <li>React-hook-form</li>
          </ul>
        </div>
        <div className="frontend">
          <p>Java Script</p>
          <p>Good At..</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
