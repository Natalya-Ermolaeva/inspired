import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice";
import colorReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";
import favoritesReducer from "./features/favoritesSlice";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import statusServerReducer from "./features/statusServerSlice";

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
    product: productReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    search: searchReducer,
    statusServer: statusServerReducer,
});