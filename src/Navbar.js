import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav> 
        <div className='nav-list'>
            <ul>
                <li className='logo'><h6>agalm</h6></li>
                <li><a href="#">help</a></li>
                <li><input type="text" placeholder='search for products' className='search'/></li>
                <li><a href="#">sell</a></li>
                <li><a href="#">currency</a></li>
                <li><a href="#">account</a></li>
                <li><a href="#">wallet</a></li>
                <li><a href="#">cart</a></li>

            </ul>      
        </div>
    </nav>
    </>
  )
}

export default Navbar
