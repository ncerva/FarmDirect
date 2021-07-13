import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../utils/AuthContext";
import API from "../../utils/API";

import "./style.css";

function FarmInput() {
  const [edit, setEdit] = useState({ editable: false });

  const [farmInfo, setFarmInfo] = useState({
    farm_name: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    bio: "",
    image: ""
  });

  const Context = useContext(AuthContext);
  useEffect(() => {
    API.getFarm(Context.token)
      .then((res) =>
        setFarmInfo({
          farm_name: res.data.farm_name,
          street_address: res.data.street_address,
          city: res.data.city,
          state: res.data.state,
          zipcode: res.data.zipcode,
          description: res.data.description,
          bio: res.data.bio,
          image: res.data.image
        })
      )
      .catch((err) => console.log(err));
  }, []);

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

        // const getFarm = function() => {

        // }

        const setEditTrue = (e) => {
          e.preventDefault();
          setEdit({ ...edit, editable: true });
        };

        const setEditFalse = (e) => {
          setEdit({ ...edit, editable: false });
        };

        const updateFarm = (e) => {
          e.preventDefault();
          API.updateFarm(token, {
            farm_name: farmInfo.farm_name,
            street_address: farmInfo.street_address,
            city: farmInfo.city,
            state: farmInfo.state,
            zipcode: farmInfo.zipcode,
            description: farmInfo.description,
            bio: farmInfo.bio,
            image: farmInfo.image
          }).then(setEditFalse);
        };

        if (edit.editable === false) {
          return (
            // <div className="column is-half">
            <div className="container column is-half">
              <section className="section">
                <h1 className="title">Farmer Portal</h1>
                <p className="info"> Howdy! Make it easy for customers to find you by filling out your Farm Info. </p>
              </section>

              <form action="#">
                <fieldset disabled>
                  <div className="user-details">
                    <div className="input-box">
                      <div className="details">Farm Name</div>

                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.farm_name
                            ? farmInfo.farm_name
                            : "Sample Farms"
                        }
                      />

                    </div>
                  </div>

                  <div className="user-details">
                    <div className="input-box">
                      <label className="details">Street Adress</label>

                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.street_address
                            ? farmInfo.street_address
                            : "123 Fleet st"
                        }
                      />
                    </div>
                  </div>


                  <div className="user-details">
                    <div className="input-box">
                      <label className="details">City</label>

                      <input
                        className="input"
                        type="text"
                        placeholder={farmInfo.city ? farmInfo.city : "Anytown"}
                      />
                    </div>
                  </div>

                  <div className="user-details">
                    <div className="input-box">
                      <label className="details">State</label>

                      <input
                        className="input"
                        type="text"
                        placeholder={farmInfo.state ? farmInfo.state : "State"}
                      />
                    </div>
                  </div>


                  <div className="user-details">
                    <div className="input-box">
                      <label className="details">Zip Code</label>

                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.zipcode ? farmInfo.zipcode : "12345"
                        }
                      />
                    </div>
                  </div>


                  <div className="user-details">
                    <div className="input-box">
                      <label className="ldetails">Description</label>

                      <textarea
                        className="textarea"
                        placeholder={
                          farmInfo.description
                            ? farmInfo.description
                            : "A short description of your farm, this will appear on our results page.     e.g. 'A small hydroponic farm in Austin TX, specializing in tomatoes and lettuces'"
                        }
                      />
                    </div>
                  </div>

                  <div className="user-details">
                    <div className="input-box">
                      <label className="details">Bio</label>

                      <textarea
                        className="textarea"
                        placeholder={
                          farmInfo.bio
                            ? farmInfo.bio
                            : "This can be a bit longer, it will appear on your farms results page. Describe your farm, it's history and values etc..."
                        }
                        rows="10"
                      />
                    </div>
                  </div>

                  <div className="user-details">
                    <div className="input-box">
                      <div className="details">Image</div>
                      <input
                        className="input"
                        type="text"
                        placeholder={farmInfo.image ? farmInfo.image : "Add and image to your farm by pasting the URL here!"}
                      />
                    </div>
                  </div>

                </fieldset>
                <div className="user-details">
                  <div className="input-box">

                    <button className="button is-link" onClick={setEditTrue}>
                      Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            // </div>

          );


        } else if (edit.editable === true) {
          return (
            <div className="column is-half">
              <section className="section">
                <h1 className="title"> <strong> Farmer Portal </strong></h1>
                <p className="info"> Howdy! Make it easy for customers to find you by filling out your Farm Info. </p>
              </section>
              <form action="#">
                <div className="user-details">
                  <div className="input-box"></div>
                  <label className="details">Farm Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder={
                        farmInfo.farm_name ? farmInfo.farm_name : "Sample Farms"
                      }
                      onChange={(e) =>
                        setFarmInfo({ ...farmInfo, farm_name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">Street Adress</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.street_address
                            ? farmInfo.street_address
                            : "123 Fleet st"
                        }
                        onChange={(e) =>
                          setFarmInfo({
                            ...farmInfo,
                            street_address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">City</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder={farmInfo.city ? farmInfo.city : "Anytown"}
                        onChange={(e) =>
                          setFarmInfo({ ...farmInfo, city: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">State</label>
                    <p className="control">
                      <select
                        className="form-control"
                        id="state-signup"
                        name="state"
                        onChange={(e) =>
                          setFarmInfo({ ...farmInfo, state: e.target.value })
                        }
                      >
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
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">Zip Code</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.zipcode ? farmInfo.zipcode : "12345"
                        }
                        onChange={(e) =>
                          setFarmInfo({ ...farmInfo, zipcode: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">Description</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder={
                          farmInfo.description
                            ? farmInfo.description
                            : "A short description of your farm, this will appear on our results page.     e.g. 'A small hydroponic farm in Austin TX, specializing in tomatoes and lettuces'"
                        }
                        onChange={(e) =>
                          setFarmInfo({
                            ...farmInfo,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">Bio</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder={
                          farmInfo.bio
                            ? farmInfo.bio
                            : "This can be a bit longer, it will appear on your farms results page. Describe your farm, it's history and values etc..."
                        }
                        rows="10"
                        onChange={(e) =>
                          setFarmInfo({ ...farmInfo, bio: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <label className="details">Zip Code</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder={
                          farmInfo.image ? farmInfo.image : "Add and image to your farm by pasting the URL here!"
                        }
                        onChange={(e) =>
                          setFarmInfo({ ...farmInfo, image: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="user-details">
                  <div className="input-box">
                    <div className="control">
                      <button className="button is-warning" onClick={updateFarm}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          );
        }
      }}
    </AuthContext.Consumer>
  );
}

export default FarmInput;
