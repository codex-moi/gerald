import React from 'react'

const Carousel = (props) => {
    return (
        <>
            <div className="w-[400px] h-[250px] max-md:w-[80%] max-md:mx-[10%] my-4 mr-4 rounded bg-[#5e5f5f] text-white bg-opacity-70 border-cyan-500 border p-2 max-sm:p-1 hover:scale-105 hover:transition-all hover:duration-500 ">
                <h1 className='text-3xl'>{props.name}</h1>
                <p className='text-gray-400'>{props.talk} </p>
                <hr className='h-0.5 w-[250px] bg-[#4dc6eb] my-4 '/>
            </div>
        </>
    )
}

export default Carousel