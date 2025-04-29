import React from 'react'
import services from '../assets/servicesdata'
import Carousel  from './Carousel'
const Services = () => {
  return (
    <div className="w-full h-auto bg-black">
      <h2 className='text-4xl px-[5%] text-white'>Services</h2>
      <hr className='h-[2px] w-[250px] ml-10 mt-2 bg-[#4dc6eb] rounded '/>
      <div className="flex py-[5%] flex-wrap justify-center max-sm:block ">
      {services.map((service, id) => 
      (
        <Carousel
        key={id}
        name={service.name}
        talk={service.talk}
        />
      )
      )  }
      </div>
    </div>
  )
}

export default Services