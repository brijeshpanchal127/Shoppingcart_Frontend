const PASS_DATA_TO_CART = "PASS_DATA_TO_CART";
const SELECTED_PRODUCTS_TOTAL_PRICE= "SELECTED_PRODUCTS_TOTAL_PRICE";


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

        default: return newState;
            
    }

}

export default rootReducer;