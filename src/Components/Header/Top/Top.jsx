import { NavLink } from 'react-router-dom';

import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import SearchSVG from "../../../assets/search.svg?react";
import CartSVG from "../../../assets/cart.svg?react";
import LikeSVG from "../../../assets/heart.svg?react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplaySearch } from '../../../features/searchSlice';

export const Top = () => {
    const { countItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleOpenSearch = () => {
        dispatch(toggleDisplaySearch());
    }
    
    return (
        <div className={cn(s.top, s.container)}>
            <a className={cn(s.link, s.phone)} href='tel:89304902620'>8 930 490 26 20</a>
    
            <NavLink className={s.logo} to='/'>
                <img src={logo} alt="Логотип Inspired" />
            </NavLink>
    
            <div className={s.navigation}>
                <ul className={s.navList}>
                    <li>
                        <button className={s.link} onClick={handleOpenSearch}>
                            <SearchSVG />                
                        </button>
                    </li>
                    <li>
                        <NavLink className={s.link} to='/cart'>
                            <CartSVG />
                            <span className={s.linkCount}>{countItems}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={cn(s.link, s.like)} to='/favorite'>
                            <LikeSVG />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}