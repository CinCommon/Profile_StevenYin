import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/Avatar.jpg";
import CV from "../../assets/CVDanielToledo.pdf";

import "./sidebar.sass";
import {useTranslation} from "react-i18next";

const Sidebar = () => {
    const {t} = useTranslation();
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Image Steven Yin"></img>
      <p className="title">{t("title.role")}</p>
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
