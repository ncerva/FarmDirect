import React, { useState } from "react";
import "./style.css"
import API from "../../utils/API"
import AuthContext from "../../utils/AuthContext";
import { MdAddShoppingCart } from "react-icons/md";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

function ProfileProductBlock(props) {

  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    alert(`${count} productName added to cart!`)
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


  return (
    <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
      <span>Product name</span>
      <span>product price/pack</span>
      <span><a onClick={countMinus}><FiMinusCircle /></a><span>{count}</span><a onClick={countPlus}><FiPlusCircle /></a></span>
      <button className="button is-danger" onClick={handleAddToCart}><MdAddShoppingCart /></button>
    </div>
  )
}

export default ProfileProductBlock;