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
        <div className="card-content">
          <div className="content">
            <div className="media">
              <figure className="media-left">
                  <Link
                  to={linkFarmerProfile}>
                    <img  src={props.image} width="160" alt="Placeholder image" />
                  </Link>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong className="title">{props.farm_name}</strong>
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