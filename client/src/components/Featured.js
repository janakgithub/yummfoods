import React, { useState } from 'react'
import butterChicken from './images/butter-chicken.jpg'
import chickenLollipop from './images/Chicken-Lollipop.jpg'
import kadaiPaneer from './images/Kadai-Paneer.jpg'
import { BsChevronLeft, BsChevronRight, BsSliders } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {

    const sliders = [
        {url: butterChicken},
        {url: chickenLollipop},
        {url: kadaiPaneer}
    ]

    const [index, setIndex] = useState(0)

    const nextSlider = ()=>{
        const nextIndex = (index +1) % sliders.length;
        setIndex(nextIndex);
    }

    const prevSlider = () =>{
        const nextIndex = (index-1 + sliders.length) % sliders.length;
        setIndex(nextIndex);
    }

    const moveToNextSlide = (index) =>{
        setIndex(index)
    } 


    return (
    <div className='max-w-[1600px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage:`url(${sliders[index].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-orange-600 text-white cursor-pointer'>
        <BsChevronLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-orange-600 text-white cursor-pointer'>
        <BsChevronRight onClick={nextSlider}/>
        </div>
        <div className='flex justify-center top-4'>
            {sliders.map((e,i)=>{
                return(<div key={i} 
                    onClick={()=>moveToNextSlide(i)}
                    className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Featured