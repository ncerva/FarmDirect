import React from "react";


export default function Signin() {
  return (
    <div className="hero">
      <div className="box">
        <div className="button-box">
          <button className="button is-info is-rounded toggle-btn" type="button" onClick={() => setShowSignup(false)}>
            Start Connecting
          </button>
        </div>
        <div>
          <button className="button toggle-btn" type="button" onClick={() => setShowSignup(true)}>
            Don't have an account? Click here to sign up
          </button>
        </div>
        <form id="login" className="input-group">
          <div className="field">
            <input
              id="email-login"
              className="input"
              type="text"
              placeholder="Email"
              onChange={(e) =>
                setLogin({ ...login, email: e.target.value })
              }
            />
          </div>
          <div className="field">
            <input
              id="password-login"
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
              }
            />
          </div>
          <div className="field">
            <div className="button-box">
              <button className="button is-info is-rounded" onClick={handleLoginUser}>
                Login as customer <FaCarrot />
              </button>
              <button className="button is-info is-rounded" onClick={handleLoginFarmer}>
                Login as farmer <GiFarmer />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
