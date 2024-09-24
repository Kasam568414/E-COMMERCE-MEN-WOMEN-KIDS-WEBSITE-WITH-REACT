import React, { useContext, useState } from 'react'
import Titlle from '../components/Titlle'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {navigate} =useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap- 4 pt-6 min-h-[80vh] border-t'>
       {/* left side  */}
      <div className='flex flex-col gap-4 w-full max-w-[480px]'>
       
        <div className='text-xl my-3 sm:text-2xl'>
          <Titlle text1={'DELIVERY'} text2={'INFORMATION'}></Titlle>

        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />

        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />

        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />

        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />



      </div>

      {/* right side  */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal></CartTotal>

        </div>
        <div className='mt-12'>
          <Titlle text1={'PAYMENT'} text2={'METHOD'}></Titlle>
          {/* payment method card  */}
          <div className='flex flex-col lg:flex-row gap-4'>
            <div  onClick={()=>setMethod('stripe')}  className='flex items-center gap-4 cursor-pointer p-2 px-3 border'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' :''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />

            </div>
            <div onClick={()=>setMethod('razorpay')}  className='flex items-center gap-4 cursor-pointer p-2 px-3 border'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' :''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />

            </div>
            <div  onClick={()=>setMethod('cod')} className='flex items-center gap-4 cursor-pointer p-2 px-3 border'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' :''}`}></p>
             <p className='text-gray-500 font-medium text-sm mx-4'>CASH ON DELIVERY</p>

            </div>


          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default PlaceOrder