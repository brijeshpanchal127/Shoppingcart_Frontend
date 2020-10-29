import './product.style.css';


const Product = ({name, price, currency, image}) =>{
    return(
        <div className="product thumbnail">
        <img src={image} alt="product" />
        <div className="caption">
            <h3>{name}</h3>
            <div className="product__price">{price} {currency}</div>
            <div className="product__button-wrap">
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
    );
}

export default Product;