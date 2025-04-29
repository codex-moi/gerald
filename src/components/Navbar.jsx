import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
   <div className="w-full h-[100px] bg-black bg-opacity-70 flex justify-between fixed z-10 top-0 max-sm:h-[60px] ">
    <h2 className='text-3xl p-4 text-[#4dc6eb] max-sm:text-2xl max-sm:p-2 '>Gerald Codez⚡</h2>
    <div className="">
        <button className='w-[150px] rounded my-3 mx-4 h-[40px] bg-[#4dc6eb] max-sm:w-[100px] text-[16px]'>
            Download CV
        </button>
    </div>
   </div>
    </>
  )
}

export default Navbar