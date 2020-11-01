import React from 'react';
import Product from '../Products/products.component';
import './productlist.style.css';


const ProductList = ({ products }) => {
    
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map((product,index) => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} index={index}/>
                  </li>
              ))}
            </ul>
        </div>
   
    );
}

export default ProductList;