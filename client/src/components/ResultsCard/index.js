import React from "react";
import "./style.css";


function ResultsCard(props) {
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
                <a href="/profile">
                  <p className="image is-128x128" note="thumbnail">
                    <img src={props.image} alt="Placeholder image" />
                  </p>
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