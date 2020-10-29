import React from 'react';
import Product from '../Products/products.component';
import './productlist.style.css';

const ProductList = ({data}) =>{
    const renderingProductsList = () =>{
        const productArray = data.map(item=>{
           return <Product name={item.name} currency={item.currency} price={item.price} image={item.image} />
        });
        console.log(productArray);
        return productArray;
    }

    return (
        <div className="product-list">
             <div className="product-list__item">{renderingProductsList()}</div>
        </div>
   
    );
}

export default ProductList;