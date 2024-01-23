import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchGoods, fetchGender } from "../../features/goodsSlice";
import { useParams } from "react-router-dom";
import { setActiveGender } from "../../features/navigationSlice";
import { Goods } from "../Goods/Goods";
import { Banner } from "../Banner/Banner";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

export const MainPage = () => {
    const dispatch = useDispatch();
    const { gender = "women", category } = useParams();
    const { activeGender,  categories } = useSelector(state => state.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list.find(item => item.slug === category);
    const page = usePageFromSearchParams(dispatch);

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch])
    
    useEffect(() => {
        if (gender && category) {
            const params = { gender, category }
            if (page) {
                params.page = page
            }
            dispatch(fetchGoods(params))
            return;
        }

        if (gender) {
            dispatch(fetchGender(gender));
            return;
        }
    }, [gender, category, page, dispatch])
    
    return (
        <>
            {!category ? <Banner bannerData={genderData?.banner}/> : ""}
            <Goods title={categoryData?.title}/>
        </>
)};