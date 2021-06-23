import React from "react";


export function FarmerLogin() {
    return (
    <form>
        <h3>Farmer Sign In/ Sign Up</h3>
        
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    );
}

export function UserLogin(props) {
    return (
    <div className="form-group">
        <input className="form-control" {...props} />
    </div>
    );
}
