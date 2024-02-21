import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero mt-4'>
      <div className='py-8 md:py-12'>
        <h1 className='text-4xl font-semibold'>
          Everything<br /> 
          is better<br /> 
          with a <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-4 text-gray-500 text-sm'>
          Pizza is the missing piece that makes every<br /> day 
          complete, a simple yet delicious joy in life.
        </p>
        <div className='flex gap-4 items-center text-sm'>
          <button className=' flex justify-center bg-primary flex gap-2 items-center text-white px-4 py-2 rounded-full uppercase'>
            Order Now
            <Right />
          </button>
          <button className='flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold'>
            Learn More
            <Right />  
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image 
          src={'/pizza.png'} 
          layout={'fill'} 
          objectFit={'contain'} 
          alt='pizza'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </section>
  )
}

export default Hero
