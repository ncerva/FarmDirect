import React from "react";
import "./style.css";
import { Link } from "react-router-dom"


function ResultsCard(props) {

  function linkFarmerProfile(){
    return(`/profile/${props._id}`);
  }



  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="title">
            props.heading
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="media">
              <figure className="media-left">
                <a href="">
                  <Link
                  to={linkFarmerProfile}>
                  <p className="image is-128x128" note="thumbnail">
                    <img src={props.image} alt="Placeholder image" />
                  </p>
                  </Link>
                </a>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong className="title">{props.farm_name}</strong>
                    <br />
                    <strong className="subtitle">props.farmer</strong>
                    <br />
                    {props.description}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ResultsCard;