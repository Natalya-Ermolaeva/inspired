import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import { useDispatch } from "react-redux";

import { Root } from "./routes/Root";
import { MainPage } from "./Components/MainPage/MainPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColor } from "./features/colorSlice";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage/>}/>
            <Route path='catalog/:gender/:category?' element={<MainPage />}/>
           
            <Route path='*' element={<ErrorPage />}/>
        </Route>
    )
)

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColor());
    }, [dispatch]);

    return <RouterProvider router={router}></RouterProvider>
}