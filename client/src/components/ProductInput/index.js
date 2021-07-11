import React, { useState, useContext, useEffect } from 'react';
import API from '../../utils/API';
import AuthContext from '../../utils/AuthContext';
import "./style.css";
import ProductBlock from "../ProductBlock/index";
import ProductList from '../ProductList';

function ProductInput(props) {
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
      .then(setNewProduct({
        title: '',
        packsize: '',
        price: '',
        quantity: '',
        farmerId: ''
      }))
      .then(props.onAdd());
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
    <div className="container">
      <div className="column is-half">
        {/* <div className="block"> */}
        <form action="#">

          <div className="field">

            <label className="label is-small user-details">Product Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g. Carrots..." onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
            </div>

            <label className="label is-small user-details">Price</label>
            <div className="control">
              <input className="input" type="number" placeholder="12" onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
            </div>

            <label className="label is-small user-details">Unit</label>
            <div className="control">
              <select className="form-control user-details" id="unit-select" name="unit" onChange={e => setNewProduct({ ...newProduct, packsize: e.target.value })}>
                <option value="">Select Unit</option>
                <option value="lb">Per Pound</option>
                <option value="oz">Per Ounce</option>
                <option value="ea">Each</option>
                <option value="cs">Per Case</option>
                <option value="bu">Per Bunch</option>
              </select>
            </div>

            <label className="label is-small user-details">Quantity in stock</label>
            <div className="control">
              <input className="input" type="number" placeholder="12" onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })} />
            </div>

            <div className="control user-details">
              <button className="button is-link details" onClick={submitNewProduct}>Add product</button>
            </div>
          </div>
        </form>

        <div className="box is-flex is-justify-content-space-evenly">
          <span>Product Name</span>
          <span>Price/pack</span>
          <span>Stock</span>
          <span></span>
        </div>

        {/* <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
          <form>
            <div className="field is-grouped">
              <p className="control">
                <strong>Product.title</strong>
              </p>
              <p className="control">
                <label className="label is-small">Price</label>
                <input className="input" type="number" placeholder="product.price"></input>
              </p>
              <p className="control">
                <label className="label is-small">Pack size</label>
                <input className="input" type="number" placeholder="product.packsize"></input>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <label className="label is-small">Stock</label>
                <input className="input" type="number" placeholder="product.quantity"></input>
              </p>
              <button className="button is-link" >Save</button>
              <button className="button is-delete is-danger">Delete</button>
            </div>
          </form>
        </div> */}

        <section id="product field">
          <ProductList />
        </section>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProductInput;
