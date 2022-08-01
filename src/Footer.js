import React from 'react'

const Footer = () => {
  return (
    <>
    <article className='footer'>
        <div className='connected'>
        <div className='community'>
            <h3>Join the community</h3>
        </div>
        <div className='stay-connected'>
            <h3>Stay Connected</h3>
            <p>Join our mailing list for promotions
            Stay Updated offers and deals</p>
            <input type='text' placeholder='Enter your email'/>
            <button type='button' className='btn btn-hipster'>sign up</button>      
        </div>  
        </div>
        <div className='company-info'>
            <div className='about'>
                <h3>about agalm</h3>
                <ul>
                    <li>Company info</li>
                    <li>News</li>
                    <li>careers</li>
                    <li>sell</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div className='sell'>
                <h3>sell</h3>
                <ul>
                    <li>Start Selling</li>
                    <li>How to sell</li>
                    <li>contact us</li>
                    <li>become and affliate</li>
                    <li>advertise your product</li>
                </ul>
            </div>
        </div>
        





    </article>
    </>
  )
}

export default Footer
