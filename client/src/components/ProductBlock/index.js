import React, { useState, useEffect, useContext } from "react";
import "./style.css"
import API from "../../utils/API"
import AuthContext from "../../utils/AuthContext";


function ProductBlock(props) {

  const [editable, setEditable] = useState(false);
  const [deleting, setDeleting] = useState(false)
  const [productInfo, setProductInfo] = useState({
    title: props.title,
    price: props.price,
    packsize: props.packsize,
    quantity: props.quantity
  })

  const toggleEditable = (e) => {
    e.preventDefault();
    setEditable(editable ? false : true)
  }

  const deleteProduct = (e) => {
    e.preventDefault();
    API.deleteProduct(props.productId)
    // .then(setEditable(editable ? false : true));
    .then(props.onDelete(props.productId))
  }

  const updateProduct = (e) => {
    e.preventDefault();
    API.updateProduct(props.productId, {
      price: productInfo.price,
      packsize: productInfo.packsize,
      quantity: productInfo.quantity
    })
    .then(setEditable(editable ? false : true))
    .then(props.onUpdate);
  }

  if (!editable) {
    return (
      <div className="box is-flex is-justify-content-space-evenly" >
        <span>{props.title}</span>
        <span>${props.price}/{props.packsize}</span>
        <span>{props.quantity}/{props.packsize}</span>
        <button className="button is-link" onClick={toggleEditable}>edit</button>
      </div>
    )
  }
  return (
    <div className="column is-two-thirds">
      <form action="#">
        <div className="user-details">
          <p className="input-box">
            <strong>{props.title}</strong>
          </p>
          <p className="control is-two-thirds">
            <label className="label is-small">Price</label>
            <input className="input" type="number" placeholder={props.price} onChange={e => setProductInfo({ ...productInfo, price: e.target.value })}></input>
          </p>
          <p className="input-box">
            <label className="label is-small">Pack size</label>
            <select className="form-control" id="unit-select" name="unit" onChange={e => setProductInfo({ ...productInfo, packsize: e.target.value })}>
                <option value="">Select Unit</option>
                <option value="lb">Per Pound</option>
                <option value="oz">Per Ounce</option>
                <option value="ea">Each</option>
                <option value="cs">Per Case</option>
                <option value="bu">per bunch</option>
              </select>
          </p>
        </div>
        <div className="user-details">
          <p className="input-box">
            <label className="label is-small">Stock</label>
            <input className="input" type="number" placeholder={props.quantity} onChange={e => setProductInfo({ ...productInfo, quantity: e.target.value })}></input>
          </p>
          <button className="button is-link" onClick={updateProduct} >Save</button>
          <button className="button is-delete is-danger" onClick={deleteProduct}>Delete</button>
        </div>
      </form>
    </div>
  )
};

export default ProductBlock;