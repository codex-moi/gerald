import React from 'react'
import projects from '../assets/projects'
const Projects = () => {
  return (
    <>
    <div className="w-full h-auto bg-black px-[3%]">
        <h2 className="text-4xl px-[5%] text-white">My Projects</h2>
        <div className="w-full flex flex-wrap justify-center">
            {projects.map((project, id) =>
            (
                <div className="w-[350px] h-auto max-md:w-[80%] max-md:mx-auto my-4 mr-4 rounded bg-[#5e5f5f] text-white bg-opacity-70 border-cyan-500 border p-2 max-sm:p-1 hover:scale-105 hover:transition-all hover:duration-500" key={id}>
                   <div className="w-[100%]">
                    <img src={project.image} className='w-full' alt="" />
                   </div>
                    <h2 className='text-2xl text-[#4dc6eb]'>{project.name} </h2>
                    <p>{project.desc} </p>
                    <a href={project.link} className='text-[#4dc6eb]'>{project.link}</a>
                </div>
            )
            )}
        </div>
    </div>
    </>
  )
}

export default Projects