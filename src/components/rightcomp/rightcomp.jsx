import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './rightcomp.css';
import { Link } from 'react-router-dom';
import Baggreen from '../images/baggrreen.png'

const Rightcomp = () =>{

  const [check, setCheck] = useState(false);

  useEffect(()=> {
    let data = sessionStorage.getItem('myUser')
    data = JSON.parse(data)

    if(data==null){
      setCheck(false)
  
    }
    else {
     setCheck(true)
 
    }
    
    
}, [])


    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <div className='rightbar'>


{(() => {
        if (check==true) {
          return (
            <a href="/cart">
            <img src={Baggreen}></img>
            </a>
          )
        }
        else {
          return (
            <a href="/cartguest">
          <img src={Baggreen}></img>
          </a>
          )
        }
      })()}
         
        </div>
       
        </>
    )
}
export default Rightcomp;