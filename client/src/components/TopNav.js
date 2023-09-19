import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const TopNav = () => {

  const [sideNav, setSideNav] = useState(false);
  //console.log(sideNav);

  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
           <div onClick={()=>{setSideNav(!sideNav)}} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
              Lets <span className='font-bold'> Eat</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <p className='bg-orange-600 text-white rounded-full p-2 text-bold'>Free</p>
              <p>Delivery</p>
            </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25}/>
          <input className='bg-transparent p-2 w-full focus:outline-none'
            type='text'
            placeholder='search meals..'/>
        </div>
        <button className='bg-orange-600 text-white hidden items-center rounded-full py-2 md:flex'>
         <BsFillCartFill size={20}/> Cart
        </button>
        
        {sideNav ?(
          <div className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>{setSideNav(!sideNav)}}></div>
                  ) :''}

        <div className={sideNav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                                : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

          <AiOutlineClose size={25} onClick={()=>{setSideNav(!sideNav)}} className='top-4 right-4 cursor-pointer absolute'/>
            <h2 className='text-2xl p-4'> Lets <span className='text-orange-700 font-bold'> Eat</span></h2> 
            <nav>
              <ul className='flex flex-col text-gray-900'>
                <li className='text-xl py-4 flex'>
                  <BsPerson size={25} className='mx-4 rounded-full bg-gray-900 text-white'/>
                  My Account
                </li>
                <li className='text-xl py-4 flex'>
                  <TbTruckReturn size={25} className='mx-4 rounded-full bg-gray-900 text-white'/>
                  Delivery
                </li>
                <li className='text-xl py-4 flex'>
                  <MdOutlineFavorite size={25} className='mx-4 rounded-full bg-gray-900 text-white'/>
                  My Favourite
                </li>
                <li className='text-xl py-4 flex'>
                  <FaGoogleWallet size={25} className='mx-4 rounded-full bg-gray-900 text-white'/>
                  Google Wallet
                </li>
                <li className='text-xl py-4 flex'>
                  <MdHelp size={25} className='mx-4 rounded-full bg-gray-900 text-white'/>
                  Help
                </li>
              </ul>
            </nav>
          </div>          
    </div>
  )
}

export default TopNav