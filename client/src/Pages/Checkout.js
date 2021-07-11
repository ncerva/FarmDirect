import React from "react";
import CheckoutCard from "../components/Checkout";
import { Redirect } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';


const Checkout = () => {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;
      const alertLogin = () => {
        alert('you must be logged in to do that');
      }
      if (isAuthorized && isFarmer) {
        return (
          <div>
            <CheckoutCard />
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

export default Checkout;