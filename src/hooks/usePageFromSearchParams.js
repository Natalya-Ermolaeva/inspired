import { useEffect } from "react";
import { setPage } from "../features/goodsSlice";
import { useLocation } from "react-router-dom";

export const usePageFromSearchParams = (dispatch) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageURL = +searchParams.get('page');

   useEffect(() => {
    dispatch(setPage(pageURL));
   }, [dispatch, pageURL])

   return pageURL;
}