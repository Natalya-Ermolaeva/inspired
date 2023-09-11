import { NavLink } from "react-router-dom";
import cn from "classnames";

import s from "./Category.module.scss";

export const Category = ({list}) => {
    
   return (
   <ul className={s.category}>
        {list.map(item => (
            item.categories.map(category => (
                <li key={category.link}>
                    <NavLink className={({isActive}) => cn(s.link, isActive ? s.linkActive : "")} 
                        to={`${item.link}/${category.link}`}>
                        {category.title}
                    </NavLink>
                </li>
            ))
        ))}
   </ul>
)}