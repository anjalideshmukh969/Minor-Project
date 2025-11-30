import React from 'react'
import bg from "../assets/authBg.png"

const Register = () => {
  return (
    <div className='w-full h-screen bg-cover flex justify-center items-center' 
    style={{backgroundImage: `url(${bg})`}}>

      <form className='w-[90%] h-[600px] px-5 max-w-[500px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-5'>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to 
          <span className='text-blue-400'> Virtual Assistant</span></h1>

          <input type="text" placeholder='Enter your name' 
          className='w-full px-5 py-2.5 rounded-full h-[60px] outline-none 
          border-2 border-white bg-transparent text-white placeholder-gray-300' />

          <input type="email" placeholder='Enter your email' 
          className='w-full px-5 py-2.5 rounded-full h-[60px] outline-none 
          border-2 border-white bg-transparent text-white placeholder-gray-300' />

          <div className='w-full h-[60px] border-2 border-white bg-transparent
          text-white rounded-full text-[18px]'>
           <input type="password" placeholder='password' 
           className='w-full h-full rounded-full outline-none bg-transparent
           placeholder-gray-300 px-5 py-2.5' />
          </div>

      </form>
    </div>
  )
}

export default Register