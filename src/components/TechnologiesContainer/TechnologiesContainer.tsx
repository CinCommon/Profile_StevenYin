import "./technologiescontainer.sass";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import DynamicIconRender from "../DynamicIconRender/DynamicIconRender";
import {useTranslation} from "react-i18next";

const TechnologiesContainer = () => {
  const { t } = useTranslation();
  const appContext = useContext(AppContext);
  return (
    <section className="technologies-container">
      <h2>{t('title.technologies')}</h2>
      <div className="technologies-grid">
        {appContext.data.user.technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <DynamicIconRender {...tech} />
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
