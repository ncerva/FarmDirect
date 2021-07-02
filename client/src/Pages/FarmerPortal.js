
import React from 'react';
import { Redirect } from 'react-router-dom';
import FarmInput from "../components/FarmInput"
import AuthContext from '../utils/AuthContext';
function FarmerPortal() {

  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;
      const alertLogin = () => {
        alert('you must be logged in to do that');
      }
      if (isAuthorized && isFarmer) {

        return (

          <div className="container">
          <div className="columns">

            <FarmInput></FarmInput>
          </div>
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
  )
}

export default FarmerPortal;