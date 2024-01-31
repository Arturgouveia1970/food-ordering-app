import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black-25 transition-all'>
      <div className='text-center'>
        <img src="/pizza.png" className='max-h-auto max-h-24 block mx-auto' alt="pizza" />
      </div>
      <h4 className='font-semibold my-3 text-xl'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Quos eum excepturi ipsam iusto, reprehenderit 
        maiores voluptatem possimus cum 
      </p>
      <button className='bg-primary mt-4 text-white rounded-full px-8 py-2'>Add to Cart $12</button>
    </div>
  )
}

export default MenuItem
