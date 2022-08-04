import React from 'react'; 
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer>
        <div className='row row-1'>
            <div className='col media'>
                <h3>Join the community</h3>
                <div className='icons'>
                <FaTwitter />
                <FaInstagram />
                <FaYoutube/>

                </div>
                
            </div>
            <div className=' col connected'>
               <h3>stay updated</h3>
                <p>Join our mailing list for promotions.Stay updated</p>
                
                <input type='text' placeholder='enter your email'/>
                <button className='btn'>Sign up</button>
            </div>
        </div>

        <div className='row row-2'>
            <div className='col about'>
               <h3>About Agalm</h3>
               <p>News</p>
               <p>Careers</p>
               <p>sell</p>
               <p>Contact us</p>
            </div>
            <div className='col sell'>
                <h3>Sell</h3>
                <p>Start selling</p>
                <p>how to sell</p>
                <p>contact us</p>
                <p>become and affliate</p>
                <p>advertise your products</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
