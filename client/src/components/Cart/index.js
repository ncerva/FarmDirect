import React, { useContext, useState } from "react";
import "./style.css";
import CartItem from "../CartItem";
import { CartContext } from "../../utils/CartContext";
import { Link } from "react-router-dom"

function CartCard() {
  const [grandTotal, setGrandTotal] = useState();

  const [cart, setCart] = useContext(CartContext)

  const multiplier = (a, b) => {
    return a * b;
  }

  const totalPrice = cart.reduce((acc, curr) => acc + curr.total, 0)

  function linkCheckoutPage(){
    return(`/checkout`);
  }
  return (
    <div className="card">
      <header className="card-header">
        <p className="title">
          Cart
        </p>
      </header>

      <div className="card-content">
        <div className="content">
          {/* CartItem will be mapped for each item in cart */}
          {cart.map(item => (
            <CartItem key={item.id} id={item.id} total={item.total} title={item.title} price={item.price} packsize={item.packsize} total={item.total} quantity={item.quantity} />
          ))}
          

        </div>
        <div className="columns">
          <div className="column is-half"></div>
          <div className="column is-one-quarter">
            <p className="title is-4">
              Total: ${totalPrice}
            </p>

          </div>
          <div className="column is-one-quarter">
          <Link
                  to={linkCheckoutPage}>
                    <button className="button is-primary" >Checkout</button>
                  </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartCard;
