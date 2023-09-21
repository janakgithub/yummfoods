import React from 'react'
import DApp from './images/deliver1.png'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-10 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'> Get It Delivered!</h3>
      <div className='w-[1220px] mx-auto grid md:grid-cols-2'>
        <img className='width-[550px] mx-auto my-4' src={DApp} />
        <div className='flex flex-col justify-center'>
          <p className='text-[#47dd47] font-bold'>Get The App Now!</p>
          <h1 className='md:text-4xl sm:tet-3xl font-bold py-2'>Convenience on demand.</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
          </p>
          <button className='bg-black text-[#47dd47] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery