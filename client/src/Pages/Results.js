import React, { useState, useEffect, useContext, } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import SearchForm from "../components/SearchForm";
import AuthContext from "../utils/AuthContext";
import ProductBlock from "../components/ProductBlock";
const dummyZips = require("../utils/zipCodes.json")

const Results = () => {


  // const [farm, setFarm] = useState([1, 2, 3])
  // const [formObject, setFormObject] = useState({})

  // useEffect(() => {
  //   loadFarms()
  // }, [])

  // function loadFarms() {
  //   API.getFarm()
  //     .then(res =>
  //       setFarm(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function handleInputChange(event) {
    event.preventDefault();
    alert("you have pressed a button without a purpose");
    // const { name, value } = event.target;
    // setFormObject({ ...formObject, [name]: value })
  };
  const [currentZip, setCurrentZip] = useState(78216);
  const [radius, setRadius] = useState(50);
  const [zipsWithinRadius, setZipsWithinRadius] = useState();
  const [demoZips, setDemoZips] = useState(dummyZips)
  const [results, setResults] = useState([])

  const context = useContext(AuthContext);


  /* Production useEffect() *calls zipcode API */

  // useEffect(() => {
  //   API.getZips(currentZip, radius)
  //   .then(res => {
  //     console.log(res.data)
  //     setZipsWithinRadius({...res.data})
  //     console.log(zipsWithinRadius)
  //   });

  // }, [])

  useEffect(async () => {
    await API.getZips(currentZip, radius)
      .then(res => {
        setZipsWithinRadius(res.data);
      })
      
      .catch(err => console.log(err))
  }, [])

  function logger(data){
    console.log(data)
  }

  function setSearch(res) {
    let searchResults = [];
    for (let i = 0; i < res.data.length; i++) {
      console.log(res.data[i])
      API.getFarmsByZip(res.data[i].zip_code)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
  // const setSearch = (res) => {
  //   let searchResults = [];
  //   for (let i = 0; i < res.data.length; i++) {
  //     console.log(res.data[i])
  // API.getFarmsByZip(res.data[i].zip_code)
  //   .then(res => console.log(res))
  //    .then(res => {
  //      if (res.length) {
  //        searchResults.push(res)
  //        console.log('line 71')
  //        return searchResults
  //      }
  //    })
  //    .then(searchResults => {
  //      setSearch(searchResults)
  //      console.log('line 77')
  //    })
  //   .catch(err => console.log(err))
  //   }
  // }


  /* Test useEffect() calls dummy JSON data */


  // useEffect(async () => {
  //   // console.log(demoZips)
  //   let searchResults = results
  //   for (let i = 0; i < demoZips.length; i++) {
  //     await API.getFarmsByZip(demoZips[i].zip_code)
  //       .then(res => {
  //         // console.log(res.data[0])
  //         if (res.data.length) {
  //           searchResults.push({ ...res.data[0] });
  //         }
  //       })
  //       // .then(setResults(searchResults))
  //       .then(console.log(results))
  //       .catch(err => console.log(err))

  //   }
  //   setResults(searchResults);
  // }, [])



  function handleFormSubmit(event) {
    event.preventDefault();
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
                <p className="title is-1"> Search results</p>

                {results.map(farm => (
                  <ResultsCard heading="Search Results"
                    key={farm._id}
                    farm_name={farm.farm_name}
                    farmer={farm.farmer}
                    image={farm.image}
                    description={farm.description} >
                  </ResultsCard>

                ))}

                {/* farm.map(farm => (
                <ResultsCard heading="Search Results"
                key={farm._id}
                farm_name={farm.farm_name}
                farmer={farm.farmer}
                image={farm.image}
                description={farm.description} >
                  </ResultsCard> */

                  /* //   <ResultsCard>
                  // {/* <h3>No Results to Display</h3>           */
                  /* //   </ResultsCard> */}

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