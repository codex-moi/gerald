import React from 'react'
import technologies from '../assets/technologies'
import TechCard from './TechCard'
const Technologies = () => {
  return (
    <>
    <div className="w-full h-auto bg-[#0c0d0e]">
        <h2 className='text-4xl px-[5%] pt-4 text-white'>Technologies</h2>
        <hr className='h-[2px] w-[250px] ml-10 mt-2 bg-[#4dc6eb] rounded '/>
        <p className='text-gray-400 px-[3%]'>A list of technologies I use to craft beautiful software.</p>
        <div className="flex flex-wrap gap-4 w-full justify-center py-4">
            {technologies.map((tech, id) =>
            (
                <TechCard
                key={id}
                name={tech.name}
                />
            )
            )}
        </div>
    </div>
    </>
  )
}

export default Technologies