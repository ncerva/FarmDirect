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
                    <img src="https://user-images.githubusercontent.com/76696641/123719478-3fd2f680-d847-11eb-979b-578b974d7608.png" alt="Placeholder image"/>
                </figure>
                </div>
                <div className="media-content">
                <p className="title">Billy Jones</p>
                <p className="subtitle">Howdy! My name is Billy Jones! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.</p>
                </div>
                </div>
                <div className="content">
                <div className="columns">
                    <div className="column">
                    <p className="title is-4">What I grow </p>
                <ul>
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