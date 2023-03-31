import * as icons from "react-icons/all";
import {Icon} from "../../context/data";

const isIconName = (iconName: string): iconName is keyof typeof icons =>
    Object.prototype.hasOwnProperty.call(icons, iconName);

const DynamicIconRender = ({icon, color, url, name, id}: Icon) => {
    if (!isIconName(icon)) {
        return null;
    }
    const FaIcon = icons[icon];
    return (url ?
        <a
            href={url}
            className="social-btn"
            id={name}
            key={name}
            target="_blank"
        >
            <FaIcon id={id} color={color}/>
        </a> : <FaIcon id={id} color={color || ""}/>)
};

export default DynamicIconRender;