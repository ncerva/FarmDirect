import React, {useState} from "react";
import "./style.css"
import { CarouselData } from "./CarouselData"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";



export function Carousel() {
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }


    return (
        <section className='slides'>
            <BsFillCaretLeftFill className="left" onClick={prevSlide}/>
            <BsFillCaretRightFill className="right" onClick={nextSlide}/>
        {CarouselData.map((slides,index) => {
            return (
                <div>
                    
                <div className={index === current ? 'slides active' : 'slides'} key={index}>
                    {index === current && (<img src={slides.image} alt='' className='image'/>
                    )}
                    <div className="image__overlay">
                    </div>
                </div>
                </div>
            ) 
        })}
    </section>
    )
}
 export default Carousel;