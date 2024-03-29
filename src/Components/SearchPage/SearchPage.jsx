import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchAll } from "../../features/goodsSlice.js"; 
import s from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
    const dispatch = useDispatch();
    const { goodsList } = useSelector(state => state.goods);
    
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get("q");
        const params = { search };
        dispatch(fetchAll(params));
    }, [searchParams, dispatch])
    
    return (
        goodsList.length ?
        <Goods title="Поиск"/>
        : 
        <h3 className={s.empty}>Ничего не найдено по вашему запросу {`"${searchParams.get("q")}"`}</h3>
)}