import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { useEffect } from "react";
import { fetchGoods } from "../../features/goodsSlice.js"; 
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams.js";
import s from "./FavoritePage.module.scss";

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const page = usePageFromSearchParams(dispatch);
    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        if (favorites) {
            const param = { list: favorites }
            if (page) {
                param.page = page;
            }
            dispatch(fetchGoods(param))
        }
    }, [favorites, page, dispatch]);
    
    return (
        favorites.length ?
        <Goods title="Избранное"/>
        : 
        <h3 className={s.empty}>Вы ничего не добавили в корзину</h3>
)}