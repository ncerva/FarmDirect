import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import "./style.css";


function ProfileCard() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                <div class="media-left">
                <figure className="image is-128x128">
                    <img src={props.image} alt="Profile image"/>
                </figure>
                </div>
                <div className="media-content">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.bio}</p>
                </div>
                </div>
                <div className="content">
                <div className="columns">
                    <div className="column">
                    <p className="title is-4">What I grow </p>
                <ul> {props.products}
                    <li>Carrots</li> 
                    <li>Beets</li>
                    <li>Sweet Potatoes</li>
                </ul>
                    </div>
                    <div className="column">
                    <p className="title is-4">Add to Cart </p>
                    <MdAddShoppingCart /> <br/>
                    <MdAddShoppingCart /> <br/>
                    <MdAddShoppingCart />
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