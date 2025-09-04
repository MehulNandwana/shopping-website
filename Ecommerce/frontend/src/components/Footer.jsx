import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-col-[3fr-1fr-1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className = 'mb-5 w-32' alt=''></img>
            <p className='w-full md:w-2/3 text-gray-600'>
                We will always deliver the best quality products to you and your dear ones
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className=' flex flex-col gap-1 text-gray-600'>
              <li>Home</li><li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
        <p className='text-xl font-medium mb-5'>Contact Us</p>
            <ul className=' flex flex-col gap-1 text-gray-600'>
                    <li>7568739105</li>
                    <li>abc@gmail.com</li>

            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
