import React, { useState, useEffect, Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import SearchForm from "../components/SearchForm";
import AuthContext from "../utils/AuthContext";


const Results = () => {
  const [farm, setFarm] = useState([ 1,2,3])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadFarms()
  }, [])

  function loadFarms() {
    API.getFarm()
      .then(res => 
        setFarm(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.farmer) {
      API.getFarm(this.state.farm)
      .then(res => {
        this.setState({
            farm: res.data.items,
            products: ""
        });
        console.log(this.state.farms)
    })
    .catch(err => console.log(err));
    }
  };
  
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
            <div className="column is-full">
              <div className="container">
                <SearchForm 
                  onChange={handleInputChange}
                  onClick={handleFormSubmit}
                />
                  {farm.map(farm => (
                <ResultsCard heading="Search Results"
                key={farm._id}
                farm_name={farm.farm_name}
                farmer={farm.farmer}
                image={farm.image}
                description={farm.description} >
                  </ResultsCard>
                /* {farm.length ? ( */
                  /* farm.map(farm => (
                <ResultsCard heading="Search Results"
                key={farm._id}
                farm_name={farm.farm_name}
                farmer={farm.farmer}
                image={farm.image}
                description={farm.description} >
                  </ResultsCard> */
                  
                  /* //   <ResultsCard>
                  // {/* <h3>No Results to Display</h3>           */
                  /* //   </ResultsCard> */
                ))}
            </div>
          </div>
          </div>
        </div>
      )
    }}


    </AuthContext.Consumer>
  );
}

export default Results;