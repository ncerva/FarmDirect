import React from "react";
import { Carousel } from "../components/Carousel/index";
import { CarouselData } from "../components/Carousel/CarouselData"


const Home = () => {
    return (
    <div>
        <Carousel slides={CarouselData}/>
        </div>
    );
};

export default Home;