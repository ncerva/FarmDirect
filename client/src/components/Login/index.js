import React from "react";
import { GiFarmer } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';


export function SignUpCard() {
    //sign up 
        //are you are farmer or a customer
    //log in
    return (
        <div className="column">
            <div className="text-block login-block logout-block" id="signup-block">
                <p>Sign up</p>
            <div className="field">
                <p className="control">
                <input className="input" id="email-signup" type="text" placeholder="Email" />
                </p>
            </div>
            <div className="field">
                <p className="control">
                <input className="input" id="password-signup" type="password" placeholder="Password" />
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button id="signup-farmer"> 
                    I am a farmer! <GiFarmer />
                    </button>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button id="signup-customer">
                    I am a customer! <FaCarrot />
                    </button>
                </p>
            </div>
            </div>
        </div>
    );
}
export function LoginCard() {
    return (
        <div className="column ">
            <div className="text-block login-block logout-block">
                <p>Login</p>
            <div className="field">
                <p className="control">
                <input id="email-login" className="input" type="text" placeholder="Email" />
                </p>
            </div>
            <div className="field">
                <p className="control">
                <input id="password-login" className="input" type="password" placeholder="Password" />
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button id="login-submit">
                    Login
                    </button>
                </p>
            </div>
            </div>
        </div>
    )
}
