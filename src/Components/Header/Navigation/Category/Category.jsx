import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useSelector } from "react-redux";

import s from "./Category.module.scss";

export const Category = () => {   
    const { activeGender, categories } = useSelector(state => state.navigation);

    return (
    <ul className={s.category}>
            {categories[activeGender]?.list?.map(category => (
                <li key={category.slug}>
                    <NavLink className={({isActive}) => cn(s.link, isActive ? s.linkActive : "")} 
                        to={`/catalog/${activeGender}/${category.slug}`}>
                        {category.title}
                    </NavLink>
                </li>
            ))}
    </ul>
)}