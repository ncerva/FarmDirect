import React from "react";
import { Redirect } from "react-router-dom";

import ResultsCard from "../components/ResultsCard";
import AuthContext from "../utils/AuthContext";

const Results = () => {


  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;
      const alertLogin = () => {
        alert('you must be logged in to do that');
      }


      if (!isAuthorized) {
        alertLogin()
        return (
          <Redirect to='/login'>
            
          </Redirect>
        );
      }
      return (
        <div className="columns is-multiline">
          <div className="container">
            <ResultsCard />
          </div>
        </div>
      )
    }}


    </AuthContext.Consumer>
  );
};

export default Results;