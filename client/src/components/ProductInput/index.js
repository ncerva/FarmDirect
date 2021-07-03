import React from 'react';
import "./style.css"

function ProductInput() {
  
  return (
    <div className="column is-half has-background-primary">
      <div className="block">
        <form className="box has-background-primary-light">

        <div className="field">

          <label className="label is-small">Product Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Carrots..." />
          </div>

          <label className="label is-small">Price</label>
          <div className="control">
            <input className="input" type="number" placeholder="12" />
          </div>

          <label className="label is-small">Unit</label>
          <div className="control">
            <select className="form-control" id="unit-select" name="unit">
              <option value="">Select Unit</option>
              <option value="lb">Per Pound</option>
              <option value="oz">Per Ounce</option>
              <option value="ea">Each</option>
              <option value="cs">Per Case</option>
            </select>
          </div>

          <label className="label is-small">Quantity in stock</label>
          <div className="control">
            <input className="input" type="number" placeholder="12" />
          </div>

          <div className="control">
            <button className="button is-link">Edit/Submit</button>
          </div>
        </div>
        </form>

        <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
          <span>Item Name</span>
          <span>Price/unit</span>
          <span><a>+</a>stock<a>-</a></span>
          <button className="button is-link">edit</button>
            
        </div>

      </div>






    




    </div>
  )
}

export default ProductInput;