import React from "react";
import CartCard from "../components/Cart";
import { Redirect } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';


const Cart = () => {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;
      const alertLogin = () => {
        alert('you must be logged in to do that');
      }
      if (isAuthorized && isFarmer) {
        return (
          <div>
            <CartCard />
          </div>
        )
      } else {
        alertLogin()
        return (
          <Redirect to='/login'>

          </Redirect>
        )
      }
    }}
      
    </AuthContext.Consumer>
  );
};

export default Cart;