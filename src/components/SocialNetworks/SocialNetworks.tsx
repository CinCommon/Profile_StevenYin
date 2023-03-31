import React, {useContext} from "react";
import {AppContext} from "../../context/AppContext";

import "./socialnetworks.sass";
import DynamicIconRender from "../DynamicIconRender/DynamicIconRender";

const SocialNetworks = () => {
        const appContext = useContext(AppContext);

        return (
            <section id="social-networks">
                {appContext.data.user.socialNetworks.map((network) => {
                    return (
                        <DynamicIconRender {...network}/>
                    )
                })}
            </section>
        )
            ;
    }
;

export default SocialNetworks;

