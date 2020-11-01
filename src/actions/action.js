import data from "../data/products";

const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const SELECTED_PRODUCTS_TOTAL_PRICE= "SELECTED_PRODUCTS_TOTAL_PRICE";

export const addDataToCart = (data) =>{
    return{
        type: PASS_DATA_TO_CART,
        data:data
    }
}

export const selectedProductsTotal = (data)=>{
    return{
        type:SELECTED_PRODUCTS_TOTAL_PRICE,
        data:data
    }
}