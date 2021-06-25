import React from "react";
import { SignUpCard, LoginCard } from "../components/Login";


const Login = () => {
    return (
<div className="columns is-multiline" id="card-container">
            <SignUpCard />
            <LoginCard />
</div>
    );
};

export default Login;
