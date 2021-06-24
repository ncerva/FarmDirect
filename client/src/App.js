import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
import Results from "./Pages/Results";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/results" component={Results} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}


export default App;

