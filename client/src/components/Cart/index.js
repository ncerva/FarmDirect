import React, { useState } from "react";
import "./style.css";
import CartItem from "../CartItem";

function CartCard() {
  const [grandTotal, setGrandTotal] = useState();
  
    return (
        <div className="card">
            <header className="card-header">
            <p className="title">
            Checkout
            </p>
            </header>
            <div className="card-content">
                <div className="content">
                  {/* CartItem will be mapped for each item in cart */}
                   <CartItem />
                   <CartItem />
                   <CartItem />
                   <CartItem />
                </div>
                <div className="columns">
                  <div className="column is-half"></div>
                  <div className="column is-one-quarter">
                    <p className="title is-4">
                      Total: GrandTotal$$$
                    </p>
                    
                  </div>
                  <div className="column is-one-quarter">
                    <button className="button is-primary">
                      Checkout
                    </button>
                  </div>

                </div>
            </div>
        </div>
    )
}

export default CartCard;
