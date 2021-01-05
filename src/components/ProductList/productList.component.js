import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../Products/products.component';
import './productlist.style.css';
import {updateCartWithWishListData} from '../../actions/action';
import axios from 'axios'



const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const items = useSelector(state => state.selectedDataForCart);
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get("http://localhost:3000/wishlist")
    .then(function(response){
      console.log("WishList",response.data.data);
      response.data.data.map(item=>{
        console.log("item", item);
        dispatch(updateCartWithWishListData(item));
      })
    })
    .catch(function(error){
      console.log(error);
    })


    axios.get("http://localhost:3000/")
    .then(function (response) {
      console.log(response);
      setProductData(response.data.data);
    })
  }, [])
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {productData.map((products,index) => (
                  <li key={products.id} className="product-list__item">
                 
                    <Product {...products} index={index}/>
                    
                  </li>
              ))}
            </ul>
        </div>
   
    );
}

export default ProductList;