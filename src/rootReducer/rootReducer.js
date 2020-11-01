const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const SELECTED_PRODUCTS_TOTAL_PRICE= "SELECTED_PRODUCTS_TOTAL_PRICE";
const REMOVE_SELECTED_PRODUCT_FROM_CART = "REMOVE_SELECTED_PRODUCT_FROM_CART";
const TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART = "TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART";


const defaultState1 = {

    selectedDataForCart: [],
    totalAmount:0
 
}


const rootReducer=(state=defaultState1, action)=>{
    let newState = {...state}

    switch(action.type){

        case PASS_DATA_TO_CART:
            
            let newArray= [...newState.selectedDataForCart, action.data.data]
            return {
                ...newState,
                selectedDataForCart:newArray
            }

            case  SELECTED_PRODUCTS_TOTAL_PRICE:
            let selectedPrice = parseInt(action.data.data.price);
            let newTotal = newState.totalAmount + selectedPrice;
            return {
                ...newState,
                totalAmount:newTotal
            }

            case TOTAL_AMOUNT_AFTER_REMOVING_PRODUCT_FROM_CART:
                let removedPrice = parseInt(action.data.data.price);
                console.log(removedPrice);
                console.log(action.data.data);
                let total = newState.totalAmount - removedPrice;
                return {
                    ...newState,
                    totalAmount:total
                }

            case REMOVE_SELECTED_PRODUCT_FROM_CART:
            let itemValue = action.data.data.index;
            const index = newState.selectedDataForCart.indexOf(itemValue);
            const array1 = [...newState.selectedDataForCart];
            array1.splice(index,1);
            return {
                ...newState,
                selectedDataForCart:array1
            };


        default: return newState;
            
    }

}

export default rootReducer;