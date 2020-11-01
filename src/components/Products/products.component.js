import './product.style.css';
import {addDataToCart, removeSelectedProductFromCart, selectedProductsTotal, totalAmountAfterRemoveProductFromCart} from '../../actions/action';
import {useDispatch} from 'react-redux';
import { useState } from 'react';



const Product = ({name, price, currency, image, index}) =>{

    const dispatch = useDispatch();
    
    const [isInCart, isInCartSelected]  = useState(false);

    const passDataToCart = (data) =>{

        if(isInCart){
            dispatch(removeSelectedProductFromCart({data}));
            dispatch(totalAmountAfterRemoveProductFromCart({data}))
            isInCartSelected(false);
        }
        else{
            dispatch(addDataToCart({data}));
            dispatch(selectedProductsTotal(({data})));
            isInCartSelected(true);
        
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
                    className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                    onClick = {()=>passDataToCart({name,price,currency, index})}
                >
                    {isInCart ? 'Remove' : 'Add to cart'}
                </button>
            </div>
        </div>
    </div>
    );
}

export default Product;