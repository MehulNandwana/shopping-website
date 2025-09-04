import React from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'Contact'} text2 ={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className = 'w-full md:max-w-[480px]' src={assets.contact_img} ></img>
        <div className='flex flex-col justify-center items-start gap-6'>
     <p className='font-semibold text-xl'>Our Store</p>
     <p text-gray-500>Dingli House<br/>
     Jaipur,Rajasthan INDIA</p>
     <p text-gray-500>Tel 9694451354 <br/> abc@gmail.com</p>
     <p className='font-semibold text-xl'>Careers</p>
     <p>Learn more about our teams and job openings.</p>
     <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
