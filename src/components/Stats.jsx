import React from 'react'
import stats from '../assets/stats'
const Stats = () => {
  return (
    <>
    <div className="bg-black h-auto">
      <h2 className='text-4xl text-white px-10 '>My Stats</h2>
      <hr className='h-[2px] w-[250px] ml-10 mt-2 bg-[#4dc6eb] rounded '/>
      <div className="flex  w-full justify-center py-4 px-4">
      {stats.map((stat, id) => (
        <div className="text-white flex " key={id}>
          <div className="">
          <h3 className='text-2xl'>{stat.number} +</h3>
          <p className='text-center'>{stat.stat} </p>
          </div>
          <hr className='h-[100px] w-[1px] mx-4  bg-white'/>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Stats