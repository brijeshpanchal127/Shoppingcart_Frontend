import './product.style.css';
import {addDataToCart, removeSelectedProductFromCart, totalAmountAfterRemoveProductFromCart} from '../../actions/action';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';


const Product = ({name, price, currency, image,stock, index}) =>{

 

    const items = useSelector(state => state.selectedDataForCart)
    // const total = useSelector(state=>state.totalAmount);
   
    const dispatch = useDispatch();
    

    const isInCart = () => {
        if (items && items.find(element => element.name === name)) {
            return true;
        } else  return false;
    }

    const passDataToCart = (data) =>{

        if(isInCart()){
            dispatch(removeSelectedProductFromCart({data}));
            dispatch(totalAmountAfterRemoveProductFromCart({data}));
            // isInCartSelected(false);
        }
        else{
            dispatch(addDataToCart({data}));
            // isInCartSelected(true);
        
        }
    }

    



    return(
        <div className="product thumbnail">
        <img src={image} alt="product" />
        <div className="caption">
            <h3>{name}</h3>
            <div className="product__price">{price} {currency}</div>
            <div className="product__button-wrap">
                <button
                    className={items && items.find(element => element.name === name) ? 'btn btn-danger' : 'btn btn-primary'}
                    onClick = {()=>passDataToCart({name,price,currency,stock, index})}
                    disabled= {stock <= 0 ?true:false}
                >
                    {stock<=0? "out of stock" :(items && items.find(element => element.name === name)) ? 'Remove' : 'Add to cart'}
                </button>
            </div>
        </div>
    </div>
    );
}

export default Product;