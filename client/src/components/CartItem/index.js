import React from "react";

function CartItem(props) {


  return (
    <div className="columns">
      <div className="column">
        <p className="title is-4">{props.title} </p>
      </div>
      <div className="column">
        <p className="title is-4">${props.price}/{props.packsize}</p>
      </div>
      <div className="column">
        <p className="title is-4">{props.quantity}/{props.packsize}</p>
      </div>
      <div className="column">
        <p className="title is-4">${props.total}</p>
      </div>
      <div className="column">
        <button className="button is-danger">Remove from cart</button>
      </div>
    </div>

  )
}
export default CartItem;