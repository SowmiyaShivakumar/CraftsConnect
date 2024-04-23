import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import './style_pages/home.css'
import carousel_img1 from '../assets/carousel_img1.jpeg'
import carousel_img2 from '../assets/carousel_img2.png'
import carousel_img3 from '../assets/carousel_img3.jpeg'
import carousel_img4 from '../assets/carousel_img4.jpeg'

export default function Home(){

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };

    return (
        <div className="homepage">
            <h1>Welcome to CraftsConnect</h1>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            <div className='carousel'>
                <img className="slides" src={carousel_img1} alt="img1" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className="slides" src={carousel_img2} alt="img2" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className="slides" src={carousel_img3} alt="img3" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className="slides" src={carousel_img4} alt="img4" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
            </div>
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <span className='indicators'>
                <button className={`indicator ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)} ></button>
                <button className={`indicator ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)} ></button>
                <button className={`indicator ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)} ></button>
                <button className={`indicator ${currentSlide === 3 ? 'active' : ''}`} onClick={() => setCurrentSlide(3)} ></button>
            </span>
        </div>
    )
}