import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

import s from "./Category.module.scss";

export const Category = ({list}) => {   
    const gender = useLocation().pathname.split("/")[1] || "women";
    const genderList = list.find((item) => item.link === gender);

    return (
    <ul className={s.category}>
            {genderList.categories.map(category => (
                <li key={category.link}>
                    <NavLink className={({isActive}) => cn(s.link, isActive ? s.linkActive : "")} 
                        to={`${gender}/${category.link}`}>
                        {category.title}
                    </NavLink>
                </li>
            ))}
    </ul>
)}