import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
import Results from "./Pages/Results";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import AuthContext from "./utils/AuthContext";

function App() {

  const [authState, setAuthState] = useState({
    token: '',
    isAuthorized: false,
    isFarmer: false,
    currentUser: 'Not logged in'
  });


  return (
    <Router>
      <AuthContext.Provider value={{
        ...authState, 
        setAuthState: (token, isAuthorized, isFarmer, currentUser) => setAuthState({
          token: token,
          isAuthorized: isAuthorized,
          isFarmer: isFarmer,
          currentUser: currentUser
        })
        }}>
      <div>
        <Navbar />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/checkout" component={Checkout} />
          
        </Switch>
        <Footer />
      </div>
      </AuthContext.Provider>
    </Router>
  );
}


export default App;

