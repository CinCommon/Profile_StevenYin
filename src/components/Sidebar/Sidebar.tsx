import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/Avatar.jpg";
import CV from "../../assets/CVDanielToledo.pdf";

import "./sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Image Steven Yin"></img>
      <p className="title">Fullstack Engineer</p>
      <SocialNetWorks />
      <InformationContainer />
      <a href={CV} download={CV} className="btn">
        Download CV
      </a>
      <Experience />
    </aside>
  );
};

export default Sidebar;
