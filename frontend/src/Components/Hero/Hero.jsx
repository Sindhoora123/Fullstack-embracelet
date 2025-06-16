import React from 'react'
import './Hero.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import offer_img from '../Assets/p20.png'



const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New &#128075; </p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collections <FaRegArrowAltCircleRight /></div>
            </div>
        </div>
        <div className='hero-right'>
            <img src={offer_img} alt=''/>


        </div>

    </div>
  )
}

export default Hero