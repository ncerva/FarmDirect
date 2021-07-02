import React from "react";

import "./style.css";


function FarmInput() {

  return (
    <div className="column is-half has-background-primary">
      <form>

        <div className="field">
          <label className="label is-small">Farm Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Example Farms" />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">Street Adress</label>
          <div className="control">
            <input className="input" type="text" placeholder="123 Fleet Street" />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">City</label>
          <div className="control">
            <input className="input" type="text" placeholder="Farmtown" />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">State</label>
          <p className="control">
            <select className="form-control" id="state-signup" name="state" onSelect={e => setSignup({ ...signup, state: e.target.value })}>
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
          <label className="label is-small">Zip Code</label>
          <div className="control">
            <input className="input" type="text" placeholder="90210" />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="A short description of your farm, this will appear on our results page.     e.g. 'A small hydroponic farm in Austin TX, specializing in tomatoes and lettuces'" />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">Bio</label>
          <div className="control">
            <textarea className="textarea" placeholder="This can be a bit longer, it will appear on your farms results page. Describe your farm, it's history and values etc..." rows="10" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Edit/Submit</button>
          </div>
        </div>


      </form>

    </div>
  )
}

export default FarmInput;