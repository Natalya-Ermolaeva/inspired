import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

import s from "./Gender.module.scss";

export const Gender = ({list}) => {
const gender = useLocation().pathname.split("/")[1] || "women";

return (
    <ul className={s.gender}>
        {list.map(item => (
            <li className={s.item} key={item.link}>
                <NavLink className={({ isActive }) => cn(s.link, (isActive || gender === item.link) ? s.linkActive : "")} 
                    to={item.link}>
                    {item.title}
                </NavLink>
            </li>)
        )}
    </ul>
)}