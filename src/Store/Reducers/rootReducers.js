import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    allProducts: productReducer,
})