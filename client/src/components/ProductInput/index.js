import React, { useState, useContext, useEffect } from 'react';
import API from '../../utils/API';
import AuthContext from '../../utils/AuthContext';
import "./style.css";
import ProductBlock from "../ProductBlock/index";
import ProductList from '../ProductList';

function ProductInput() {
  const [newProduct, setNewProduct] = useState({
    title: '',
    packsize: '',
    price: '',
    quantity: '',
    farmerId: '',
  })

  const context = useContext(AuthContext);

  const submitNewProduct = (e) => {
    e.preventDefault();
    API.addProduct({
      title: newProduct.title,
      packsize: newProduct.packsize,
      price: newProduct.price,
      quantity: newProduct.quantity,
      farmerId: context.token

    })
  }


  // const products = [];

  // useEffect(
  //   API.getProductsByFarmer(context.token)
  //   .then(res => {
  //     for(let i = 0; i < res.length; i++) {
  //       products.push(res[i])
  //     }
  //   })
  // )



  return (
    <div className="column is-half has-background-primary">
      <div className="block">
        <form className="box has-background-primary-light">

          <div className="field">

            <label className="label is-small">Product Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g. Carrots..." onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
            </div>

            <label className="label is-small">Price</label>
            <div className="control">
              <input className="input" type="number" placeholder="12" onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
            </div>

            <label className="label is-small">Unit</label>
            <div className="control">
              <select className="form-control" id="unit-select" name="unit" onChange={e => setNewProduct({ ...newProduct, packsize: e.target.value })}>
                <option value="">Select Unit</option>
                <option value="lb">Per Pound</option>
                <option value="oz">Per Ounce</option>
                <option value="ea">Each</option>
                <option value="cs">Per Case</option>
              </select>
            </div>

            <label className="label is-small">Quantity in stock</label>
            <div className="control">
              <input className="input" type="number" placeholder="12" onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })} />
            </div>

            <div className="control">
              <button className="button is-link" onClick={submitNewProduct}>Edit/Submit</button>
            </div>
          </div>
        </form>


        <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
          <span>Item Name</span>
          <span>Price/unit</span>
          <span><a>+</a>stock<a>-</a></span>
          <button className="button is-link">edit</button>
        </div>
        <div>
          <ProductList />
          <h2> this is wher the list wants to be</h2>

        </div>
      </div>
    </div>
  )
}

export default ProductInput;