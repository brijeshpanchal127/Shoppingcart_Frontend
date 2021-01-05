import React from 'react';
import CartItem from './CartItem';
import './cart.style.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {updateCartAfterPlaceOrder} from '../../actions/action';

const Cart = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.selectedDataForCart)
    const total = useSelector(state => state.totalAmount);


    // trying place order--in which there should be atleast one product
    // database should be updated
    // request to backend
    // response from backend




    const placeorder = ({ items }) => {

        console.log("button clicked");
        if (items.length > 0) {
            axios.patch("http://localhost:3000/placeorder", { items })
                .then(function (response) {
                    console.log(response);
                    dispatch(updateCartAfterPlaceOrder());         
                })
                .catch(function (error) {
                    console.log(error);
                })
        }


    }





    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items && items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.name + item.price} {...item} />
                                ))}
                            </div>
                        )}
                        <div className="cart__total">Total: {total} EUR</div>
                        {/* {placeorder()} */}
                        <button className='btn btn-success' onClick={() => placeorder({ items })}>Place order</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
