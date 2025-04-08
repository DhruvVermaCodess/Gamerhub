import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Filter, SortAsc } from 'lucide-react'
import { BACKEND_URL } from '../utils'

const ProductListPage = () => { 
  const [products, setProducts] = useState([])

    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch(`${BACKEND_URL}/api/products`)
    //     const data
    //   } catch (error) {
        
    //   } finally {

    //   }
    // }
  return (
    <>
      <div className='p-4 bg-gray-900 min-h-screen gap-4 md:gap-6 justify-between w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='w-full bg-gray-950 fixed bottom-0 left-0 flex justify-between'>
        <div className='w-1/2 p-4 flex justify-center items-center cursor-pointer hover:bg-gray-900 transition transition-duration-500 text-white'><Filter />Filter</div>
        <div className='w-1/2 p-4 flex justify-center items-center cursor-pointer hover:bg-gray-900 transition transition-duration-500 text-white'><SortAsc />Sort</div>
      </div>
    </>
  )
}

export default ProductListPage