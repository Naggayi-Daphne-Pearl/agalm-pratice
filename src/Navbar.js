import React from 'react'; 
import { FaWallet, FaCartArrowDown,FaSearch, FaBars,FaUserCircle,FaArrowDown, FaChevronDown, FaTimes } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
    <nav> 
        <div className='nav-list'>
            <ul>
                <li className='logo'><h4>agalm</h4></li>
                <li><a href="#">help</a></li>
                <li><span className='search'><input type="text" placeholder='search for products and services ' /></span></li>
                <li><a href="#">sell</a></li>
                <li><a href="#">currency<FaChevronDown listItem/></a></li>
                <li><a href="#"><FaUserCircle  fixedWidth />account<FaChevronDown listItem/></a></li>
                <li><a href="#"><FaWallet listItem/><FaChevronDown listItem/></a></li>
                <li><a href="#"><FaCartArrowDown listItem/></a></li>
            </ul>      
        </div>
    </nav>
    <section>
      <div>
        <ul>
          <li><input type="text" placeholder='search for products and services'/></li>
          <li><a href="#">Cart<FaCartArrowDown listItem/></a></li>    
        </ul>
       
     
      </div>
    </section>
    </>
  )
}

export default Navbar