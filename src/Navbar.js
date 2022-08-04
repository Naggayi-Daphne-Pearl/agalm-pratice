import React from 'react'; 
import { FaWallet, FaCartArrowDown,FaSearch, FaBars } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
    <nav> 
        <div className='nav-list'>
            <ul>
              <FaBars/>
                <li className='logo'><h6>agalm</h6></li>
                <li><a href="#">help</a></li>
                <li><input type="text" placeholder='search for products and services ' className='search'/></li>
                <li><a href="#">sell</a></li>
                <li><a href="#">currency</a></li>
                <li><a href="#">account</a></li>
                <li><a href="#"><FaWallet/></a></li>
                <li><a href="#">cart<FaCartArrowDown/></a></li>

            </ul>      
        </div>
    </nav>
    </>
  )
}

export default Navbar
