import { useMedia } from 'react-use';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

import { Container } from "../Layout/Container/Container";
import { API_URL } from "../../const";

import s from "./Banner.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setBgUrl } from '../../features/navigationSlice';

export const Banner = ({bannerData}) => {
   const { bgUrl } = useSelector(state => state.navigation);
   const dispatch = useDispatch();

    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');
    
    useEffect(() => {
        if (isMobile) {
            dispatch(setBgUrl(`${API_URL}/${bannerData?.bg?.mobile}`));
        } else if (isTablet) {
            dispatch(setBgUrl(`${API_URL}/${bannerData?.bg?.tablet}`));
        } else if (isLaptop) {
            dispatch(setBgUrl(`${API_URL}/${bannerData?.bg?.laptop}`));
        } else {
            dispatch(setBgUrl(`${API_URL}/${bannerData?.bg?.desktop}`));
      }
    }, [isMobile, isTablet, isLaptop, dispatch, bannerData])

    return (
    bannerData &&
    <section className={s.banner}
        style={{
            backgroundImage: `url(${bgUrl})`
        }}
    >
        <Container>
            <div className={s.content}>
                <h2 className={s.title}>{bannerData.description}</h2>
                <NavLink className={s.link} to={`/product/${bannerData.id}`}>
                    Перейти
                </NavLink>
            </div>
        </Container>
    </section>
)}