import React from 'react'
import { FaSearch, FaTiktok,FaHeadset } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(232,175,204,1) 7%, rgba(230,175,205,1) 9%, rgba(223,176,207,1) 17%, rgba(148,187,233,1) 100%)'}} className='w-[100%] h-28 flex   pr-[35%]  text-white text-center  leading-[6rem] text-5xl font-mono'>
        <div className='flex w-[50%]   '>
        <input type='search' placeholder='Search NickName And Videos'  
        className=' text-green-600 text-[35%] border-amber-400  h-10 w-[65%] ml-10  mt-7 bg-neutral-500 rounded-2xl '></input>
        <button >{<FaSearch className='h-[40%] p-1 pt-1 pl-1'/>}
        </button>
        
        </div>
     
        <h1 className='w-[50%]  justify-center  flex text-emerald-200 font-black'>
        {<FaTiktok className=' text-sky-400  h-20  pt-2 text-5xl   pt-7xl pr-1' />} Potter TopTop {<FaTiktok className='   text-sky-400  h-20  pt-2 text-5xl   pt-7xl pl-1' />} </h1>
        <div> <button> {<FaHeadset className='h-[80%] p-1 pt-1 pl-1'/>}</button></div>
            
          
        </div>
    )
}