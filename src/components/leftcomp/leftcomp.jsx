import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './leftcomp.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Menu from '../images/menu.png'

const Leftcomp = () =>{



    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);



    return(
        <>
        <div className='leftbar'>

            
          <Link to='#' className='leftmenu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return(
                <li key={index} className={item.cName}>
                  
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-closing'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
        </nav>
        </>
    )
}
export default Leftcomp;