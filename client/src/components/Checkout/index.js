import React from "react";
import { GoCreditCard } from "react-icons/go";

function CheckoutCard() {
    return (
        <div className="card">
            <header className="card-header">
            <p className="title">
            Credit card checkout  <GoCreditCard />
            </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="field">
                        <label className="label">Cardholder's Name</label>
                        <p className="control"> 
                            <input className="input" type="text" placeholder="Name" />
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Card Number</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="Card Number" />
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Expiration Date</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="MM/DD/YYYY" />
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">CVV</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="CVV" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success">Place Order</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard;