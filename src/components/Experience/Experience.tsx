import * as Tabs from "@radix-ui/react-tabs";

import "./experience.sass";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";

const Experience = () => {
  const { t } = useTranslation();
  const appContext = useContext(AppContext);
  return (
    <div className="experience-container">
      <h2>{t('title.experience')}</h2>

      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Profissionais
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="experiences-list">
            {appContext.data.user.experiences.map((experience) => {
              const { role, name, date } = experience;
              return (
                <div className="experience-item" key={name}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>{name}</span>
                  <p>{date}</p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className="experiences-list">
            {appContext.data.user.projects.map((experience) => {
              const { role, name, date } = experience;
              return (
                <div className="experience-item" key={name}>
                  <div className="circle"></div>
                  <h3>{role}</h3>
                  <span>{name}</span>
                  <p>{date}</p>
                </div>
              );
            })}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Experience;
