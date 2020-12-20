import ProductList from './components/ProductList/productList.component'
import Cart from './components/Cart/cart.component';
import './App.css';
import productData from './data/products';
import React from 'react';
import axios from 'axios';


function App() {

    var config = {
        method: 'get',
        url: 'http://localhost:3000/',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log("Hello");
      })
      .catch(function (error) {
        console.log(error);
      });


  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <h1> Shopping Cart Example</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <ProductList products={ productData }/>
        </div>
        <div className="col-md-4">
            <Cart />
        </div>
    </div>

</div>
  );
}

export default App;
