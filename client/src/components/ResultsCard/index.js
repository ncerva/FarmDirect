import React from "react";
import "./style.css";


function ResultsCard() {
    return (
    <div className="column is-full">
        <div className="container">
        <article className="media">
            <figure className="media-left">
                <a href="/profile">
                    <p className="image is-128x128" note="thumbnail">
                    <img src="https://user-images.githubusercontent.com/76696641/123719478-3fd2f680-d847-11eb-979b-578b974d7608.png" alt="Placeholder image"/>
                    </p>
                </a>
            </figure>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>Billy Jones</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br />
                </p>
                </div>
            </div>
        </article>
        <article className="media">
            <figure className="media-left">
                    <p className="image is-128x128" note="thumbnail">
                    <img src="https://user-images.githubusercontent.com/76696641/123720376-86295500-d849-11eb-80d2-ac19d041a2ae.png" alt="Placeholder image"/>
                    </p>
            </figure>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>Sheryl Hayes</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br />
                </p>
                </div>
            </div>
        </article>
        </div>
    </div>
    )
}

export default ResultsCard;