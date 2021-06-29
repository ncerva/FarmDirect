import React from "react";
import { Carousel } from "../components/Carousel/index";
import { CarouselData } from "../components/Carousel/CarouselData"


const Home = () => {
    return (
    <div>
        <div className="background-image: url('https://user-images.githubusercontent.com/76188076/123734826-a960fe00-d863-11eb-8f83-abef5dc64d25.jpeg');">
                <img className="background" src="https://user-images.githubusercontent.com/76188076/123734826-a960fe00-d863-11eb-8f83-abef5dc64d25.jpeg" alt="" ></img>
        <Carousel slides={CarouselData}/>
        </div>
    </div>
    );
};

export default Home;