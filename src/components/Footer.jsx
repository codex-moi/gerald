import React from 'react'
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    const date = new Date().getFullYear()
  return (
  <>
  <div className="w-full bg-black">
  <div className="w-[80%] py-[5%] mx-[10%] h-auto bg-black flex justify-between px-[5%] border-t border-gray-400">
    <p className='text-white'>© Gerald {date}</p>
     <div className="flex  ">
            <FaTiktok className='text-white text-2xl hover:text-[#4dc6eb]'/>
            <FaInstagram className='text-white text-2xl hover:text-[#4dc6eb] ml-4'/>
            <FaFacebook className='text-white text-2xl hover:text-[#4dc6eb] ml-4'/>
            <FaLinkedin className='text-white text-2xl hover:text-[#4dc6eb] ml-4'/>
          </div>
  </div>
  </div>
  </>
  )
}

export default Footer