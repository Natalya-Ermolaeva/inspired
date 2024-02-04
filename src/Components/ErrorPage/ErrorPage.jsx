import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchNavigation } from "../../features/navigationSlice";
import { fetchColor } from "../../features/colorSlice";

export const ErrorPage = () => {
    const routeError = useRouteError();
    const { status } = useSelector(state => state.statusServer);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const timeIdRef = useRef(null);

    useEffect(() => {
        if (status && location.pathname === "/404") {
            navigate("/")
        }
    }, [status, location, navigate])

    useEffect(() => {
        if (!status && location.pathname === "/404") {
            clearInterval(timeIdRef.current );

            timeIdRef.current = setInterval(() => {
                dispatch(fetchNavigation());
                dispatch(fetchColor())
            }, 3000)
        }

        return () => {
            clearInterval(timeIdRef.current );
        }
    }, [status, location, dispatch])

    return (
        <div className={s.error}>
            <h2 className={s.title}>Произошла ошибка, попробуйте зати позже</h2>
            <p className={s.message}>{routeError?.message ?? 'Неизвестная ошибка'}</p>
        </div>
)}