import React from "react";
import style from "./AcademicProfile.module.css";

const AcademicProfile = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>Academic Profile</h1>
        <div>
          <h2>Education</h2>
          <ul>
            <li>2020-current : PhD, IIT Kharagpur (with PMRF scholarship)</li>
            <li>2018-2020: M.Tech., IIT Kharagpur (CGPA: 9.11)</li>
            <li>2013-2017: B.Tech., DCRUST, Haryana (CGPA: 7.89)</li>
          </ul>
        </div>
        <div>
          <h2>Online certification</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
        <div>
          <h2>Acievements and Scholarships</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Research Experience</h1>
        <div>
          <h2>Workshop Presentations</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
        <div>
          <h2>Journal papers</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
        <div>
          <h2>Conferences</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
        <div>
          <h2>Patents/Designs</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
        <div>
          <h2>PHD Coursework</h2>
          <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicProfile;
