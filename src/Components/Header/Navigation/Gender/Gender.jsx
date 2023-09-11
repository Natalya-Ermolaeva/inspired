import { NavLink } from "react-router-dom";
import cn from "classnames";

import s from "./Gender.module.scss";

export const Gender = ({list}) => (
    <ul className={s.gender}>
        {list.map(item => (
            <li className={s.item} key={item.link}>
                <NavLink className={({ isActive }) => cn(s.link, isActive ? s.linkActive : "")} to={item.link}>{item.title}</NavLink>
            </li>)
        )}
    </ul>
)