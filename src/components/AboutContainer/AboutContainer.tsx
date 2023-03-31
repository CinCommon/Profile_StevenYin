import NumberAnimation from "../NumberAnimation/NumberAnimation";
import { GoPlusSmall } from "react-icons/go";

import "./aboutcontainer.sass";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import {useTranslation} from "react-i18next";

const AboutContainer = () => {
    const appContext = useContext(AppContext);
    const { t } = useTranslation();
  return (
    <section className="about-container">
      <h2>{t('title.about')}</h2>
        {appContext.data.user.introduction.map(p => <p>{p}</p>)}
      <div className="projects-grid">
        {appContext.data.user.summary.map((info) => {
          return (
            <div className="projects-card" key={info.label}>
              <div className="projects-info">
                <GoPlusSmall />
                <NumberAnimation value={info.value as number} />
              </div>
              <h3>{info.label}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutContainer;
