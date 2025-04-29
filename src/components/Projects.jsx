import React from 'react'
import projects from '../assets/projects'
const Projects = () => {
  return (
    <>
    <div className="w-full h-[100vh] bg-black">
        <h2 className="text-4xl px-[5%] text-white">My Projects</h2>
        <div className="w-full flex flex-wrap">
            {projects.map((project, id) =>
            (
                <div className="w-[400px] h-[250px] max-md:w-[80%] max-md:mx-[10%] my-4 mr-4 rounded bg-[#5e5f5f] text-white bg-opacity-70 border-cyan-500 border p-2 max-sm:p-1 hover:scale-105 hover:transition-all hover:duration-500" key={id}>
                    <h2>{project.name} </h2>
                    <p>{project.desc} </p>
                    <a href={project.link}>Link</a>
                </div>
            )
            )}
        </div>
    </div>
    </>
  )
}

export default Projects