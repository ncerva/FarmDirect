import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { withRouter } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const index = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container is-fluid">
      <section data-aos="fade-down">
        <h1 id="team">Our Team</h1>
        <div class="column is-one-third">
          <img
            className="team"
            src="https://user-images.githubusercontent.com/76188076/124361364-6ea8ee00-dbf4-11eb-86f7-5b1c614f5deb.png"
          ></img>
          <div id="box"><h1 className="head">Nicole Tribo</h1>
          <p>Fullstack Web Developer</p>
          <FaGithub/> <p>https://github.com/nicoletribo</p>
          </div>
        </div>
        <div class="column is-one-third">
          <img
            className="team"
            src="https://user-images.githubusercontent.com/76188076/124361014-5b951e80-dbf2-11eb-9c74-d3b05865d5b2.jpeg"
          ></img>
          <div id="box"><h1 className="head">Reid Johnson</h1>
          <p>Fullstack Web Developer</p>
          <FaGithub/> <p>https://github.com/Rjsa210</p>
          </div>
        </div>
        <div class="column is-one-third">
          <img
            className="team"
            src="https://user-images.githubusercontent.com/76188076/124361023-6a7bd100-dbf2-11eb-9767-53878e0cbbd5.jpeg"
          ></img>
          <div id="box"><h1 className="head">Nayeli Cervantes</h1><p>Fullstack Web Developer</p>
          <FaGithub/> <p>https://github.com/ncerva</p>
          </div>
        </div>
      </section>
      <div className="container is-fluid">
        <section data-aos="fade-left" className="section">
          <div className="left">
            <div className="wrapper">
              <img
                className="image"
                src="https://user-images.githubusercontent.com/76188076/124308137-6f774c80-db2e-11eb-9a04-115e919abb58.png"
              ></img>
              <div className="right">
                <h1 className="about"> Billy Jones</h1>
                <p id="hello">
                  {" "}
                  "Agriculture is the most healthful, most useful and most noble
                  employment of man." - George Washington
                </p>
                <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                <button className="btn"> Learn more about Billy </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-right" className="section">
          <div className="right">
            <div className="wrapper">
              <div className="left">
                <h1 className="about"> Suzie Crabgrass </h1>
                <p id="hello">
                  {" "}
                  "My grandfather used to say that once in your life you need a
                  doctor, a lawyer, a policeman, and a preacher. But every day,
                  three times a day, you need a farmer." - Brenda Schoepp
                </p>
                <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                <button className="btn"> Learn more about Suzie </button>
                </Link>
              </div>
              <img
                className="image"
                src="https://user-images.githubusercontent.com/76188076/124316782-c1729f00-db3b-11eb-87fc-12282150b41d.png"
              ></img>
            </div>
          </div>
        </section>
        <section data-aos="fade-left" className="section">
          <div className="left">
            <div className="wrapper">
              <img
                className="image"
                src="https://user-images.githubusercontent.com/76188076/124316840-d64f3280-db3b-11eb-93cc-ced79efb6201.png"
              ></img>
              <div className="right">
                <h1 className="about"> John Deere</h1>
                <p id="hello">
                  {" "}
                  "Agriculture is our wisest pursuit, because it will in the end
                  contribute most to real wealth, good morals and happiness." -
                  Thomas Jefferson
                </p>
                <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                <button
                  className="btn"
                >
                  {" "}
                  Learn more about John{" "}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(index);
