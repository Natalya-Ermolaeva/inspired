import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useSelector } from "react-redux";

import s from "./Gender.module.scss";

export const Gender = () => {
const {activeGender, genderList, categories} = useSelector(state => state.navigation);

return (
    <ul className={s.gender}>
        {genderList.map(gender => (
            <li className={s.item} key={gender}>
                <NavLink className={({ isActive }) => cn(s.link, (isActive || gender === activeGender) ? s.linkActive : "")} 
                    to={`/catalog/${gender}`}>
                    {categories[gender].title}
                </NavLink>
            </li>)
        )}
    </ul>
)}