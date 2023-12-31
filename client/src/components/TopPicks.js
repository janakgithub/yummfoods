import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {topPicks} from '../data/data'
import '@splidejs/react-splide/css';


const TopPicks = () => {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center'>
       Top Picks! 
    </h1>
    <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2 w-full'>
        <Splide options={{perPage: 4, gap: "0.5rem", drag:"free", arrows:false}}>
        {
        topPicks.map((itm)=>{
            return (
                <SplideSlide key={itm.id}>
                <div className='rounded-3xl relative'>
                    <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                        <p className='px-2 font-bold text-2xl pt-4'>{itm.title}</p>
                        <p className='px-2'>{itm.price}</p>
                        <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
                    </div>
                    <img className='h-[200px] w-full object-cover rounded-3xl hover:scale-105 ease-out duration-300' src={itm.img}/>
                </div>
                </SplideSlide>
            )
        })
        }
        </Splide>
    </div>
    </>
    )
}

export default TopPicks