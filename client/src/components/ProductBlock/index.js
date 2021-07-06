import React, { useState, useEffect, useContext } from "react";
import "./style.css"
import API from "../../utils/API"
import AuthContext from "../../utils/AuthContext";


function ProductBlock(props) {

  // const [editable, setEditable] = useState();

  // useEffect(() => {
  //   setEditable(false);
  // })

  // const toggleEditable = (e) => {
  //   e.preventDefault();
  //   setEditable( editable ? false : true)
  // }

  // if (!editable) {
  //   return (
  //     <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
  //       <span>{props.title}</span>
  //       <span>{props.price}/{props.packsize}</span>
  //       <span><a>+</a>{props.quantity}<a>-</a></span>
  //       <button className="button is-link" onClick={toggleEditable}>edit</button>
  //     </div>
  //   )
  // }
  // return (
  //   <div className="box has-background-primary-light is-flex is-justify-content-space-evenly">
  //       <span>THIS IS NOW EDITABLE{props.title}</span>
  //       <span>{props.price}/{props.packsize}</span>
  //       <span><a>+</a>{props.quantity}<a>-</a></span>
  //       <button className="button is-link" onClick={toggleEditable}>edit</button>
  //     </div>
  // )
  return( 
    <div>
      <span> this is where its supposed to be</span>
    </div>
  )
}

export default ProductBlock;