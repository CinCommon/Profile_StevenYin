import "./informationcontainer.sass";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import DynamicIconRender from "../DynamicIconRender/DynamicIconRender";
import {Icon} from "../../context/data";

const InformationContainer = () => {
    const appContext = useContext(AppContext);
  return (
    <section id="information">
        {appContext.data.user.information.map(item => (
            <div className="info-card">
                <DynamicIconRender {...item.icon as Icon} />
                <div>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                </div>
            </div>
        ))}
    </section>
  );
};

export default InformationContainer;
