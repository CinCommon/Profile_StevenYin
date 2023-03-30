import * as iconFa from "react-icons/fa";
import React, {useContext} from "react";
import {AppContext} from "../../context/AppContext";

import "./socialnetworks.sass";

const isIconName = (iconName: string): iconName is keyof typeof iconFa =>
    Object.prototype.hasOwnProperty.call(iconFa, iconName);

const SocialNetworks = () => {
    const appContext = useContext(AppContext);

    return (
        <section id="social-networks">
            {appContext.data.user.socialNetworks.map((network) => {
                if (!isIconName(network.icon)) {
                    return null;
                }
                const FaIcon = iconFa[network.icon];
                return (
                    <a
                        href={network.url}
                        className="social-btn"
                        id={network.name}
                        key={network.name}
                        target="_blank"
                    >
                        <FaIcon/>
                    </a>
                )
            })}
</section>
)
;
}
;

export default SocialNetworks;

