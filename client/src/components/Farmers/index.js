import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import"aos/dist/aos.css";
import {withRouter} from 'react-router-dom';


const index = () => {
    useEffect (() => {
        AOS.init ({ duration: 2000 });
    }, []);

  return (
    <div className="container is-fluid">
      <section data-aos="fade-left" className="section">
        <div className="left">
          <div className="wrapper">
            <img
              className="image"
              src="https://user-images.githubusercontent.com/76188076/124308137-6f774c80-db2e-11eb-9a04-115e919abb58.png"
            ></img>
            <div className="right">
              <h1 className="about"> Zed Smith</h1>
              <p id="hello">
                {" "}
                "Agriculture is the most healthful, most useful and most noble employment of man." - George Washington
              </p>
              <button className="btn"> Learn more about Zed </button>
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
                "My grandfather used to say that once in your life you need a doctor, a lawyer, a policeman, and a preacher. But every day, three times a day, you need a farmer." - Brenda Schoepp
              </p>
              <button className="btn"> Learn more about Suzie </button>
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
                "Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals and happiness." - Thomas Jefferson
              </p>
              <button onClick={()=> this.nextPath('../login/index.js')} className="btn"> Learn more about John </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default withRouter(index);