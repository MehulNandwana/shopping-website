import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-xl font-medium text-grey-700'>Subscribe Now and get 20% off</p>
      <form>
        
        <input className ='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required></input>
      <button type ="Submit" className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
