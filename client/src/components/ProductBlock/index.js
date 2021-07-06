import React, { useState, useEffect, useContext } from "react";
import "./style.css"
import API from "../../utils/API"
import AuthContext from "../../utils/AuthContext";


function ProductBlock(props) {

  const [editable, setEditable] = useState(false);
  const [deleting, setDeleting] = useState(false)
  const [productInfo, setProductInfo] = useState({
    title: "",
    price: "",
    packsize: "",
    quantity: ""
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

  if (!editable) {
    return (
      <div className="box has-background-primary-light is-flex is-justify-content-space-evenly" >
        <span>{props.title}</span>
        <span>${props.price}/{props.packsize}</span>
        <span>{props.quantity}/{props.packsize}</span>
        <button className="button is-link" onClick={toggleEditable}>edit</button>
      </div>
    )
  }
  return (
    <div className="box has-background-primary-light is-flex is-justify-content-space-evenly" >
      <form>
        <div className="field is-grouped">
          <p className="control">
            <strong>{props.title}</strong>
          </p>
          <p className="control">
            <label className="label is-small">Price</label>
            <input className="input" type="number" placeholder={props.price} onChange={e => setProductInfo({ ...productInfo, title: e.target.value })}></input>
          </p>
          <p className="control">
            <label className="label is-small">Pack size</label>
            <input className="input" type="number" placeholder={props.packsize} onChange={e => setProductInfo({ ...productInfo, packsize: e.target.value })}></input>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <label className="label is-small">Stock</label>
            <input className="input" type="number" placeholder={props.quantity} onChange={e => setProductInfo({ ...productInfo, quantity: e.target.value })}></input>
          </p>
          <button className="button is-link" onClick={toggleEditable} >Save</button>
          <button className="button is-delete is-danger" onClick={deleteProduct}>Delete</button>
        </div>
      </form>
    </div>
  )
};

export default ProductBlock;