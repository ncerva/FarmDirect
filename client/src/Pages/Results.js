import React, { useState, useEffect, useContext, } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import SearchForm from "../components/SearchForm";
import AuthContext from "../utils/AuthContext";
import ProductBlock from "../components/ProductBlock";
const dummyZips = require("../utils/zipCodes.json")

const Results = () => {
  const [currentZip, setCurrentZip] = useState();
  const [radius, setRadius] = useState(100);
  const [zipsWithinRadius, setZipsWithinRadius] = useState();
  const [demoZips, setDemoZips] = useState(dummyZips)
  const [results, setResults] = useState([])


  const context = useContext(AuthContext);


  function handleInputChange(event) {
    event.preventDefault();
    alert("you have pressed a button without a purpose");
  };


  useEffect(() => {
    API.getZips(context.zipcode, radius)
      .then(res => {
        setZipsWithinRadius(res.data);
        setCurrentZip(context.zipcode);
        setResults([]);
      })
      .catch(err => console.log(err))
  }, [radius]);

  function logger(e) {
    e.preventDefault()
    console.log(results)
  };


  function setSearch(arr) {
    let FARM_ARRAY = []
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      API.getFarmsByZip(arr[i].zip_code)
        .then(res => {
          if (res.data.length > 0) {
            setResults(current => [...current, res.data[0]]);
          }
        })
        .catch(err => console.log(err))
    }
  };

  console.log(results);




  function handleFormSubmit(event) {
    event.preventDefault()
    console.log("submitting" + JSON.stringify(zipsWithinRadius))
    zipsWithinRadius.map(e => {
      console.log(e)
    })


    setSearch(zipsWithinRadius);
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
                <div className="card">
                  <header className="card-header">
                    <p className="title">
                      Farm Search
                    </p>
                  </header>
                  {/* Search Form */}
                  <div className="card-content">
                    <div className="content">
                      <label>Search for farms within 100 miles</label>
                      <div className="field">
                        
                        <div class="select" onChange={e => {setRadius(e.target.value)}}>
                          <select>
                            <option value="10">10 miles</option>
                            <option value="25">25 miles</option>
                            <option value="50">50 miles</option>
                            <option value="75">75 miles</option>
                            <option selected value="100">100 miles</option>
                            <option value="200">200 miles</option>
                          </select>
                        </div>
                      </div>
                      <div className="control">
                        <button onClick={handleFormSubmit} className="button">Submit</button>
                      </div>

                    </div>
                  </div>
                </div>
                <br />
                <p className="title is-1"> Search results within {radius} miles</p>
                <br />
                {/* search results render here */}
                {results.map(farm => (
                  <ResultsCard heading="Search Results"
                    key={farm._id}
                    _id={farm._id}
                    farm_name={farm.farm_name}
                    farmer={farm.owner}
                    image={farm.image}
                    description={farm.description} >
                  </ResultsCard>
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