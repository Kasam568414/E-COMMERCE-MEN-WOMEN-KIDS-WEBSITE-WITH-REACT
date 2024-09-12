import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5  w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus quidem eius, saepe aut illo veritatis placeat expedita numquam vitae.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPONY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+08801700000</li>
                    <li>Kasam11@gmail.com</li>

                </ul>

            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Kasam.com -All Right Reserved</p>

        </div>
    </div>
  )
}

export default Footer