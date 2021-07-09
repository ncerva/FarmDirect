import React, { useState } from "react";
import API from "../../utils/API";
import { GiFarmer } from "react-icons/gi";
import { FaCarrot } from "react-icons/fa";
import AuthContext from "../../utils/AuthContext";
import "./style.css";
const bcrypt = require('bcryptjs');
// const toggleEditable = (e) => {
//   e.preventDefault();
//   setEditable(editable ? false : true)
// }

export function SignUpCard() {
  const [signup, setSignup] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
  });


  const addFarmer = (e) => {
    e.preventDefault();
    API.addNewFarmer(signup).then((res) => {
      API.createFarmById(res.data._id);
    });
  };

  //sign up
  //are you are farmer or a customer
  //log in
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          isAuthorized,
          token,
          isFarmer,
          currentUser,
          setAuthState,
        } = context;
        return (
          //toggle button
          <div className="hero">
            <div className="box">
            <div className="button-box">
                <button className="button is-info is-rounded toggle-btn"  type="button">
                  Start Connecting
                </button>
                </div> 
                <div>
                <button className="button toggle-btn"  type="button">
                  Don't have an account? Click here to sign up
                </button>
                </div>
              <form id="register" className="input-group">
                <div className="box" id="formBox">
              <div
                className="text-block login-block logout-block"
                id="signup-block"
              >
              <div className="field">
              <p className="control">
                <input className="input" id="email-signup" type="text" placeholder="Email" onChange={e => setSignup({ ...signup, email: e.target.value })} />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="password-signup" type="password" placeholder="Password" onChange={e => setSignup({ ...signup, password: e.target.value })} />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="first-name-signup" type="text" placeholder="First Name" onChange={e => setSignup({ ...signup, first_name: e.target.value })} />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="last-name-signup" type="text" placeholder="Last Name" onChange={e => setSignup({ ...signup, last_name: e.target.value })} />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="street address-signup" type="text" placeholder="Street address e.g. '123 Farm st'" onChange={e => setSignup({ ...signup, street_address: e.target.value })} />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="city-signup" type="text" placeholder="City" onChange={e => setSignup({ ...signup, city: e.target.value })} />
              </p>
            </div> 
                <div className="field">
              <p className="control">
                <select className="form-control" id="state-signup" name="state" onChange={e => setSignup({ ...signup, state: e.target.value })}>
                  <option value="">Select State</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input className="input" id="zip-signup" type="text" placeholder="Zipcode" onChange={e => setSignup({ ...signup, zipcode: e.target.value })} />
              </p>
            </div> 
                <div className="field">
                  <p className="control">
                    <button className="button is-info is-rounded" id="signup-farmer" onClick={addFarmer}>
                      I am a farmer! <GiFarmer />
                    </button>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-info is-rounded"
                      id="signup-customer"
                      onClick={() => API.addNewUser(signup)}
                    >
                      I am a customer! <FaCarrot />
                    </button>
                  </p>
                </div>
              </div>
              </div>
            </form>
            </div>
            </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export function LoginCard() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          isAuthorized,
          token,
          isFarmer,
          currentUser,
          setAuthState,
        } = context;

        const handleLoginUser = async (event) => {
          event.preventDefault();
          await API.loginUser(login.email)
            .then((res) => {
              if (res.data.password === login.password) {
                alert(`${res.data.email} is now logged in!`);
                setAuthState(res.data._id, true, false, res.data.email);
              } else {
                alert(`invalid username or password`);
              }
            })
            .catch((err) => {
              console.log(err);
              alert(`invalid username or password`);
            });
        };

        const handleLoginFarmer = async (event) => {
          event.preventDefault();
          await API.loginFarmer(login.email)
            .then((res) => {
              if (res.data.password === login.password) {
                alert(`${res.data.email} is now logged in!`);
                setAuthState(res.data._id, true, true, res.data.email);
              } else {
                alert(`invalid username or password`);
              }
            })
            .catch((err) => {
              console.log(err);
              alert(`invalid username or password`);
            });
        };

        return (
            <form id="login" className="input-group">
            <div className="field">
                <input
                  id="email-login"
                  className="input"
                  type="text"
                  placeholder="Email"
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
            </div>
            <div className="field">
                <input
                  id="password-login"
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
            </div>
            <div className="field">
              <div className="button-box">
                  <button className="button is-info is-rounded" onClick={handleLoginUser}>
                    Login as customer <FaCarrot />
                  </button>
                  <button className="button is-info is-rounded" onClick={handleLoginFarmer}>
                    Login as farmer <GiFarmer />
                  </button>
              </div>
            </div>
          </form>
        );
      }}
    </AuthContext.Consumer>
  );
}
