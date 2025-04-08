import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = () => {
  return (
    <Link to='/product/245'>
        <img src='https://www.primeabgb.com/wp-content/uploads/2024/10/Lenovo-G24e-20-23.8inch-FHD-VA-120Hz-Gaming-Monitor.jpg' alt='' className='w-full aspect-square mb-2' />
        <p className='truncate max-w-[200px] text-white mb-1'>Lenovo 21.5 inch monitor</p>
        <div className='flex gap-2 items-center'>
          <span className='text-white text-sm'>₹ 5000</span>
          <span className='text-green-400 line-through text-sm'>₹ 7000</span>
        </div>
    </Link>
  )
}

export default ProductCard