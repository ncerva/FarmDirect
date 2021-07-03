import React from "react";
import "./style.css";

function CartCard() {
    return (
        <div className="card">
            <header className="card-header">
            <p className="title">
            Checkout
            </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            <p className="title is-4">Product </p>
                        </div>
                        <div className="column">
                            <p className="title is-4">Name of Farm </p>
                        </div>
                        <div className="column">
                            <p className="title is-4">Price </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;
