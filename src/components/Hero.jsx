import React from 'react'
import Image from '../assets/me.png'
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
   <>
   <div className="w-full flex bg-black pt-[10%] h-[100vh] max-sm:block max-sm:pt-[30%] max-sm:h-auto ">
    <div className=" pl-[5%] text-white max-sm:pl-[2%]">
      <h1 className='text-white text-6xl max-sm:text-3xl'>Creative Software <br /> Developer.</h1>
      <p className="text-2xl ">I strive to build software and websites to customer satisfaction.</p>
      <p className='text-gray-400'>I'm Gerald, a self-taught developer with about 4 years of experience in software development. <br /> I'm passionate about building software and websites that are user-friendly and efficient. <br /> Started coding in 2021, specializing in web development, app development. </p>
      <div className="flex py-8 w-[200px] justify-between">
        <FaTiktok className='text-2xl hover:text-[#4dc6eb] '/>
        <FaInstagram className='text-2xl hover:text-[#4dc6eb] '/>
        <FaFacebook className='text-2xl hover:text-[#4dc6eb] '/>
        <FaLinkedin className='text-2xl hover:text-[#4dc6eb] '/>
      </div>
    </div>
      <div className="w-[300px] mx-11 max-sm:mx-0">
        <img src={Image} alt="" style={{ filter: 'drop-shadow(0 0 8px #4dc6eb)' }} />
      </div>
   </div>
   </>
  )
}
export default Hero