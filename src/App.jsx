import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import { useDispatch } from "react-redux";

import { Root } from "./routes/Root";
import { MainPage } from "./Components/MainPage/MainPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColor } from "./features/colorSlice";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { FavoritePage } from "./Components/FavoritesPage/FavoritesPage";
import { CartPage } from "./Components/CartPage/CartPage";
import { SearchPage } from "./Components/SearchPage/SearchPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage/>}/>
            <Route path='catalog/:gender/:category?' element={<MainPage />}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/favorite' element={<FavoritePage />}/>
            <Route path='/catalog/:gender/:category/product/:id' element={<ProductPage />}/>
            
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