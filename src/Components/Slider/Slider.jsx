import React, { useEffect, useState } from 'react'
import './Slider.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderData from '../Background/SliderData.jsx'

const Slider = () => {

    const [sliderData, setsliderData] = useState(SliderData)

    const [currentSlide, setcurrentSlide] = useState(0)
    const  sliderLength = SliderData.length;

    const autoScrol = true;
    let slideIntervel;
    let intervalTime = 5000;

    function auto(){
        slideIntervel = setInterval(nextSLide, intervalTime)
    }

    const nextSLide = ()=>{
        setcurrentSlide(currentSlide === sliderLength - 1 ? 0 :  currentSlide + 1 )
    }

    const prevSlide = ()=>{
        setcurrentSlide(currentSlide === 0 ?  sliderLength - 1 : currentSlide - 1)
    }

    useEffect(() => {
      setcurrentSlide(0)
    
    }, [])

    useEffect(() => {
       if(autoScrol){
        auto();
       }
       return ()=>clearInterval(slideIntervel)
      
      }, [currentSlide])
    

    return (
        <div className='slider'>
            <FaArrowLeft onClick={prevSlide} className='font-bold text-3xl prev absolute z-10 top-60 left-20 text-amber-600 cursor-pointer' />
             <FaArrowRight onClick={nextSLide} className='font-bold text-3xl next absolute z-10 top-60 right-60 text-amber-600  cursor-pointer' /> 
            {
                sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {index === currentSlide && (
                                <div>
                                    <img className='  w-[100vw] h-[100vh] opacity-[0.9] ' src= {slide.image} alt="" />
                                    <div className='absolute top-44 text-white w-[40vw] left-60 bg-slate-900 opacity-[0.7] p-7 rounded-sm'>
                                      <h2 className='text-2xl font-bold'> {slide.name} </h2>
                                      <h3 className='text-2xl'> {slide.desc} </h3>
                                      <hr className='w-[20vw] ' />
                                      <button className='font-bold bg-blue-900 p-2 m-2 rounded-md'>Get Start</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider