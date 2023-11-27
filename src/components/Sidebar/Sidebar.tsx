import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetworks";
import Experience from "../Experience/Experience";

import Avatar from "../../assets/Avatar.jpg";

import "./sidebar.sass";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";

const Sidebar = () => {
    const appContext = useContext(AppContext);
    const {t} = useTranslation();
    const resume = appContext.data.user.resume;
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Image Steven Yin"></img>
      <p className="title">{t("title.role")}</p>
      <SocialNetWorks />
      <InformationContainer />
      <a target={'_blank'} href={resume} download={resume} className="btn">
        Get CV
      </a>
      <Experience />
    </aside>
  );
};

export default Sidebar;
