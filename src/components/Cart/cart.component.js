import React from 'react';
import CartItem from './CartItem';
import './cart.style.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Cart = () => {


    const items = useSelector(state => state.selectedDataForCart)
    const total = useSelector(state => state.totalAmount);


    // trying place order--in which there should be atleast one product
    // database should be updated
    // request to backend
    // response from backend

    const chechOut = () =>{
        axios.post("http://localhost:3000/")
        .then(function(response){
            console.log(response)
            if(response.data.data === true){
                alert("Thank you for shopping with us");
             
            }else{
                alert("sorry your order is not proceed");
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }


const placeorder = () =>{
    const chechOut = () =>{
        axios.post("http://localhost:3000/")
        .then(function(response){
            console.log(response)
            if(response.data.data === true){
                alert("Thank you for shopping with us");
             
            }else{
                alert("sorry your order is not proceed");
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }


    
    if(items && items.length > 0){
        return <button  onClick={(chechOut())}  className='btn btn-success'>Place order</button>
    }
    else{
        return <p>Must Buy one Product</p>
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
                        {placeorder()}
                        {/* <button className='btn btn-success'>Place order</button> */}

                    </div>
                </div>
            </div>
            </div>
    );
}

export default Cart;
