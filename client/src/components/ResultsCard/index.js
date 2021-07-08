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
                    <figure className="media-left is-128x128">
                        <a href="/profile">
                            <p className="thing" note="thumbnail">
                                <img src="https://via.placeholder.com/128" alt="Placeholder image"/>
                            </p>
                        </a>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong className="title">props.farm_name</strong>
                                <br />
                                <strong className="subtitle">props.farmer</strong>
                                <br />
                                props.description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <br />
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ResultsCard;