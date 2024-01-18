import { NavLink } from "react-router-dom";

import s from "./Product.module.scss";
import { API_URL } from "../../const";
import { ColorList } from "../ColorList/ColorList";
import { BtnLike } from "../BtnLike/BtnLike";

export const Product = ({id, pic, title, price, colors, description, gender, category}) => (
    <article className={s.product}>
        <NavLink className={s.link} to={`/catalog/${gender}/${category}/product/${id}`}>
            <img className={s.image} src={`${API_URL}/${pic}`} alt={description}/>
            <h3 className={s.title}>{title}</h3>
        </NavLink>
        <div className={s.row}>
            <p className={s.price}>руб {price}</p>
            <BtnLike id={id}/>
        </div>
        <ColorList colors={colors}/>
    </article>
)