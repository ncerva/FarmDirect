import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import AuthContext from "../utils/AuthContext";

const Results = () => {
  const [farm, setFarms] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadFarms()
  }, [])
  
  function loadFarms() {
    API.getFarm()
      .then(res => 
        setFarms(res.data)
      )
      .catch(err => console.log(err));
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
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
            <ResultsCard />
          </div>
        </div>
      )
    }}


    </AuthContext.Consumer>
  );
};

export default Results;