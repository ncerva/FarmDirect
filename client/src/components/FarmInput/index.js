import React from "react";
import AuthContext from "../../utils/AuthContext";
import { Redirect } from "react-router-dom";
import "./style.css";


function FarmInput() {

  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;
      const alertLogin = () => {
        alert('you must be logged in to do that');
      }
      if (isAuthorized && isFarmer) {

        return (

          <div>
            <p> this is where the farm input will go</p>
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

export default FarmInput;