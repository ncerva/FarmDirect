import React from "react";

function CartItem(props) {


  return (
    <div className="columns">
      <div className="column">
        <p className="title is-4">Product </p>
      </div>
      <div className="column">
        <p className="title is-4">Name of Farm </p>
      </div>
      <div className="column">
        <p className="title is-4">Price </p>
      </div>
      <div className="column">
        <p className="title is-4">Quantity </p>
      </div>
      <div className="column">
        <p className="title is-4">Total </p>
      </div>
      <div className="column">
        <button className="button is-danger">Remove from cart</button>
      </div>
    </div>

  )
}
export default CartItem;