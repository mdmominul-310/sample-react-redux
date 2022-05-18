import actionTypes from "../Contants/ActionTypes"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const setProduct = (product) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        payload: product,
    }
}