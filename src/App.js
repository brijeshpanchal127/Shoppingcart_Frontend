import React from 'react';
import Cart from './components/Cart/cart.component';
import ProductList from './components/ProductList/productList.component';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const App = () => {

   
  

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1> Shopping Cart Example</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    {/* <ProductList products={ productList }/> */}
                    <ProductList/>
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

        </div>
    );
}

export default App;