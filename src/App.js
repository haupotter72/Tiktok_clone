
import { useEffect, useState,useMemo } from 'react';
import './App.css';

import Video from './components/Video';
import db from './firebase';
import Navbar from './components/navBar';




function App() {
 
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    db.collection("videos").get()
    .then((querySnapshot)=>{
      setVideos(querySnapshot.docs.map((doc)=>doc.data()))
   
    });

    // document.getElementById('focus').focus();

  },[])
  return (
    <div style={{background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(110,142,227,1) 38%, rgba(221,85,195,1) 65%, rgba(144,253,45,1) 94%)'}}  id='focus' tabIndex="1" 
    className="flex flex-col items-center snap-y  overflow-x-hidden  overflow-scroll h-screen">
    {<Navbar/>},
    
    {

      videos.map((video)=>(<Video data={video}/>
     ))

    }
    
  
    {/* <Video/>
    <Video/>
    <Video/>
    <Video/> */}

   

      
    </div>
  );
};



 export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = entries => {
        const [entry] = entries //const entry = entries[0]
        setIsVisible(entry.isIntersecting)
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options])
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
        if(currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])
    return isVisibile
}


export default App;
