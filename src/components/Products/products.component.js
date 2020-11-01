import './product.style.css';
import {addDataToCart, selectedProductsTotal} from '../../actions/action';
import {useDispatch} from 'react-redux';



const Product = ({name, price, currency, image, isInCart}) =>{

    const dispatch = useDispatch();


    const passDataToCart = (data) =>{
        dispatch(addDataToCart({data}));
        dispatch(selectedProductsTotal(({data})));
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
                    onClick = {()=>passDataToCart({name,price,currency})}
                >
                    {isInCart ? 'Remove' : 'Add to cart'}
                </button>
            </div>
        </div>
    </div>
    );
}

export default Product;