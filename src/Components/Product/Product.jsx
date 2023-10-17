import { NavLink } from "react-router-dom";

import s from "./Product.module.scss";
import { API_URL } from "../../const";
import Like from "../../assets/heart.svg?react";
import { ColorList } from "../ColorList/ColorList";

export const Product = ({id, pic, title, price, colors, description }) => (
    <article className={s.product}>
        <NavLink className={s.link} to={`/product/${id}`}>
            <img className={s.image} src={`${API_URL}/${pic}`} alt={description}/>
            <h3 className={s.title}>{title}</h3>
        </NavLink>
        <div className={s.row}>
            <p className={s.price}>руб {price}</p>
            <button>
                <Like />
            </button>
        </div>
        <ColorList colors={colors}/>
    </article>
)