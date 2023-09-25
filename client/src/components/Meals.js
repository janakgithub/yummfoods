import React from 'react'
import {mealData} from '../data/data'

function Meals() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center'>
        Meals 
        </h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                mealData.map((item) => (
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image}
                        alt={item.name}
                        className='w-full h-[200px] objec-cover rounded-md' />
                        <div className='flex justify-between px-4'>
                            <p className='bg-orange-600 rounded-md text-white -mt-5 py-0'>{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meals