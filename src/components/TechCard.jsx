import React from 'react'

const TechCard = (props) => {
  return (
    <>
    <div className="w-[300px] h-[100px] bg-[#1a1c1e] rounded border border-cyan-500 max-sm:w-[80%]">
        <h2 className='text-white text-2xl text-center py-8 '>{props.name}</h2>
    </div>
    </>
  )
}

export default TechCard