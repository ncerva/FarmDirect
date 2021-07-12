import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
import Results from "./Pages/Results";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import FarmerPortal from "./Pages/FarmerPortal";
import AuthContext from "./utils/AuthContext";
import {CartContext, CartProvider} from "./utils/CartContext";

function App() {

  const [authState, setAuthState] = useState({
    token: '',
    isAuthorized: false,
    isFarmer: false,
    currentUser: 'Not logged in'
  });

  const [cartState, setCartState] = useState([])

  return (
    <Router>
      <AuthContext.Provider value={{
        ...authState,
        setAuthState: (token, isAuthorized, isFarmer, currentUser, zipcode) => setAuthState({
          token: token,
          isAuthorized: isAuthorized,
          isFarmer: isFarmer,
          currentUser: currentUser,
          zipcode: zipcode
        })
      }}>
        <CartProvider>
          <div>
            <Navbar />
            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/results" component={Results} />
              <Route path="/profile/:farmerid" component={Profile} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/farmerportal" component={FarmerPortal} />

            </Switch>
            <Footer />
          </div>
          </CartProvider>
      </AuthContext.Provider>
    </Router>
  );
}


export default App;

