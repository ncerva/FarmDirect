import React from "react";
import Hero from "../components/HeroSection/index"
import Farmers from "../components/Farmers/index"
// import { Carousel } from "../components/Carousel/index";
// import { CarouselData } from "../components/Carousel/CarouselData"


const Home = () => {
    return (
    <div>
        <Hero/>
        <Farmers/>
        {/* <Carousel slides={CarouselData}/> */}
        </div>
    );
};

export default Home;