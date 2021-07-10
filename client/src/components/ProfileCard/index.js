import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md";
import "./style.css";
import ProfileProductBlock from "../ProfileProductBlock"
import API from "../../utils/API";


function ProfileCard(props) {

  const { farmerid } = useParams();
  

  useEffect(() => {
    API.getFarm(farmerid)
    .then(res => console.log(res.data))
  })

return (
    <div className="card">
        <div className="card-content">
        <div className="media">
            <figure className="media-left is-128x128">
                <img src="https://via.placeholder.com/128" alt="Placeholder image" />
        
            </figure>

        <div className="media-content">
            <p className="title">Farm Name Goes Here</p>
            <p className="subtitle">Once upon a time a farm bio went here. lorem ipsum dolorem setum upem knckom kljfgoseja</p>
        </div>
        </div>
        <div className="content">
            <div className="columns">
                <div className="column">
                    <p className="title is-4">What I grow </p>
                <ul>
                < ProfileProductBlock />
                < ProfileProductBlock />
                < ProfileProductBlock />
                < ProfileProductBlock />
                </ul>
            </div>
        </div>

        </div>
    </div>
    <footer className="card-footer">
        <a href="/results" className="card-footer-item">Back</a>
    </footer>
    </div>
)
}
export default ProfileCard;