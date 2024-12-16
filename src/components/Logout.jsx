import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import Home from './Home'
const Logout = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.removeItem(`authToken`);
    sessionStorage.removeItem(`authToken`)
  },[navigate]);


  
  return (
    <div>
     
     
     
       <h1>LOading...</h1>
    
    </div>
  );
}

export default Logout

