import ProductActionTypes from "./product.types";

export const getProducts = (products) => ({
    type: ProductActionTypes.GET_PRODUCTS,
    payload: products
});

export const listProducts = () => ({
    type: ProductActionTypes.LIST_PRODUCTS,
   
});