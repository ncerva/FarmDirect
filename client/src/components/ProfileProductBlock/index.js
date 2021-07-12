import React, { useContext, useState } from "react";
import "./style.css"
import API from "../../utils/API"
import AuthContext from "../../utils/AuthContext";
import { CartContext, CartProvider } from "../../utils/CartContext";
import { MdAddShoppingCart } from "react-icons/md";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { set } from "mongoose";

function ProfileProductBlock(props) {

  const [count, setCount] = useState(1);
  const [itemList, setItemList] = useState([])

  const total = props.price * count;

  const addAlert = () => {
    alert(`${count} ${props.packsize} ${props.title} added to cart!`)
    setCount(1);
  }
  const countMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    return;
  }
  const countPlus = () => {
    setCount(count + 1)
  }


 
    const [cart, setCart] = useContext(CartContext)


      const addToCart = () => {
        const item = { title: props.title, price: props.price, packsize: props.packsize, total: total, quantity: count, id: props.id };
        setCart(current => [...current, item]);
        addAlert();
        console.log(cart);
      }
      return (
        <div key={props._id} className="box has-background-primary-light is-flex is-justify-content-space-evenly">
          <span>{props.title}</span>
          <span>${props.price}/{props.packsize}</span>
          <span><a onClick={countMinus}><FiMinusCircle /></a><span>{count}</span><a onClick={countPlus}><FiPlusCircle /></a></span>
          <button className="button is-danger" onClick={addToCart}><MdAddShoppingCart /></button>
        </div>
      )
    
  
}

export default ProfileProductBlock;