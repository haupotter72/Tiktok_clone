
import React, { useEffect, useRef, useState } from 'react'
import {  FaAngry,  FaCommentAlt, FaHeart, FaMusic,  FaShare, } from 'react-icons/fa';
import { useElementOnScreen } from '../App';
const VideoInfo =({avt,idName,content,music,nickName})=>{
    return( 
    <div className="flex flex-row">
    <img className="rounded-full h-[50px] w-[50px]" src={avt}  alt="avt"/>
    <div className='ml-3 min-w-[80%]'>
       <div>
         <a href="a" className="text-3xl font-bold hover:text-indigo-500 hover:underline pr-4 "> {nickName}</a>
         <a href="a" className='text-2xl text-lime-600 underline'>{idName}</a>
       
       </div>

       <div className='text-cyan-600 font-bold text-xl'>
    {content}</div>
       <div className='flex flex-row items-center mb-5'>
        <FaMusic className='text-red-700'/> <span className='ml-3 text-indigo-700  font-serif cursor-pointer'>{music}</span>
        </div>
    </div>
    <div>
    <button className='p-1 pl-4 pr-3 hover:bg-emerald-600 hover:text-red-700  hover:font-bold rounded-xl text-green-400 border-red-400 border-2 '>Folllow Hau_Potter </button>


    </div>
    </div>
    );

}

const VideoContent =({video,kay,cmt,share,like})=>{
    const videoRef=useRef();
    const [playing,setPlaying]=useState(false);
    const handleVideo=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }

    };
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  };
  const isVisibile = useElementOnScreen(options, videoRef);
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])

    return (
    <div className='flex flex-row'>
    <video 
    ref={videoRef}
    onClick={handleVideo}
    className='w-[80%] max-h[-50px] ml-[50px] rounded-md mt-4' loop 
    src={video}
    
    />
   
     
     <div className='flex flex-col justify-end ml-5' >
     <div className='text-center mb-3'>
        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-green-400'>

        <FaHeart className='text-xl text-pink-600'/>
    
        </div>
        <span>{like}</span>
     </div>

      <div className='text-center mb-3'>
        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-green-400'>

        <FaCommentAlt className='text-xl text-pink-600'/>
    
        </div>
        <span>{cmt}</span>
     </div>

      <div className='text-center mb-3'>
        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-green-400'>

        <FaAngry className='text-xl text-pink-600'/>
    
        </div>
        <span>{kay}</span>
     </div>

      <div className='text-center mb-3'>
        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-green-400'>

        <FaShare className='text-xl text-pink-600'/>
    
        </div>
        <span>{share}</span>
     </div>
        

     </div>

    </div>
    );

}





const Video=({data})=>{

    return(
        <div  className='snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-5'>
        <VideoInfo {...data}/>
        <VideoContent {...data}/>

        </div>
    );
}

export default Video;

 

