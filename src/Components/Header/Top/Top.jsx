import { NavLink } from 'react-router-dom';

import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import Search from "../../../assets/search.svg?react";
import Cart from "../../../assets/cart.svg?react";
import Like from "../../../assets/heart.svg?react";

export const Top = () => (
    <div className={cn(s.top, s.container)}>
        <a className={cn(s.link, s.phone)} href='tel:89304902620'>8 930 490 26 20</a>

        <NavLink className={s.logo} to='/'>
            <img src={logo} alt="Логотип Inspired" />
        </NavLink>

        <div className={s.navigation}>
            <ul className={s.navList}>
                <li>
                    <button className={s.link}>
                        <Search />                
                    </button>
                </li>
                <li>
                    <NavLink className={s.link} to="/cart">
                        <Cart />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cn(s.link, s.like)} to="/favorite">
                        <Like />
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
)