import React from "react";
import style from "./About.module.css";
import profile from "./assets/pic.png";
import SocialButton from "../../HelperComponents/SocialButton/SocialButton";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>About Me</h1>
      </div>
      <div className={style.content__first}>
        <div className={style.content__left}>
          <h2>Name</h2>
          <p>
            I am a PhD Scholar (Prime Minister Research Fellow) in the School of
            Energy Science and Engineering at IIT Kharagpur, India. I am working
            under the supervision of Dr. Chirodeep Bakli. My broad research area
            is Microfluidics and Nanofluidics with focus towards desalination.
          </p>
        </div>
        <div className={style.content__right}>
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className={style.content__second}>
        <h2>PMRF Project Details</h2>
        <p>
          Title: Study of Nanoporous Membranes for Desalination Applications
        </p>
        <p>
          We study nanoporous membranes for their water permeation and ion
          filtration abilities using molecular dynamics (MD) simulations, we
          study the effect of pore size and functionalisation of graphene oxide
          membranes on the orientation of water molecules and their transport.
          With this knowledge, we aim to design a desalination device that would
          use the electrostatic and hydrodynamic interactions in confined water
          near membranes to filter water using lesser energy than conventional
          filtration techniques.
        </p>
      </div>
      <div className={style.links}>
        <h2>Important Links</h2>
        <div className={style.links__list}>
          <SocialButton text={"LinkedIn"} />
          <SocialButton text={"Research Gate"} />
          <SocialButton text={"Google Scholar"} />
        </div>
      </div>
    </div>
  );
};

export default About;
