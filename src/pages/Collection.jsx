import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Titlle from '../components/Titlle';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter]= useState(false)
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);

  const [sortType, setSortType]= useState('relavent')


// category function start  
  const toggleCategory =(e)=>{
   if (category.includes(e.target.value)) {
    setCategory(prev=> prev.filter(item => item !== e.target.value))
    
   }
   else{
    setCategory(prev => [...prev,e.target.value])
   }

  }
  // category function end here  


  // Subcategory function start  
  const toggleSubCategory=(e)=>{
   
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item=> item !== e.target.value))
      
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }

  }
   // Subcategory function end here   

  //  two category here apply star 
  const applyFilter =()=>{
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    if (category.length > 0) {
      productsCopy= productsCopy.filter(item => category.includes(item.category))
      
    }
    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      
    }
    setFilterProducts(productsCopy)

  }
  //  two category here apply end here  

  // sortType function star here 

  const sortProduct =()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
        case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;

    
      default:
       applyFilter();
       break;
    }
  }
  // sortType function end  here 

  // sortType useEffect star here 
  useEffect(()=>{
    sortProduct()

  },[sortType])
  // sortType useEffect end here 


  // useEffect(()=>{
  //   console.log(subCategory);
  // },[subCategory])

  // applyFilter useEffect Both here 
  useEffect(()=>{
    applyFilter();

  },[category,subCategory,search,showSearch])

  // map function her 
  useEffect(()=>{
    setFilterProducts(products)


  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 pt-10   border-t'>
      {/* filter option here  */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS  <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>
        
        {/* category filter here  */}
        <div className={`border border-pink-400 pl-5 py-3 rounded  mt-6 ${showFilter ? "" : 'hidden' } sm:block` }>
          <p className='mb-3mtext-sm  font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 mt-3'>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Men'} onChange={toggleCategory}  className='w-3 ' id="" />
              Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Women'} onChange={toggleCategory}  className='w-3 ' id="" />
             Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Kids'} onChange={toggleCategory}  className='w-3 ' id="" />
              Kids

             
            </p>

          </div>

        </div>
        {/* sub category filter here  */}
        <div className={`border border-pink-400 pl-5 py-3 rounded  my-6 ${showFilter ? "" : 'hidden' } sm:block` }>
          <p className='mb-3mtext-sm  font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 mt-3'>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Topwear'}  onChange={toggleSubCategory}  className='w-3 ' id="" />
              Topwear
          
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Bottomwear'}  onChange={toggleSubCategory}  className='w-3 ' id="" />
              Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" value={'Winterwear'}  onChange={toggleSubCategory}  className='w-3 ' id="" />
              Winterwear

             
            </p>

          </div>

        </div>

      </div>

      {/* right side  */}
      <div className='flex-1'>
        <div className='flex justify-between items-center text-base  sm:tex-2xl
        mb-4'>
          <Titlle text1={'ALL'} text2={'COLLECTION'}></Titlle>
          {/* product selector  sort here  */}

          <select onChange={(e)=>setSortType(e.target.value)} className='border border-pink-400  text-sm px-2' name="" id="">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High </option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* map product here  */}

        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
            ))
          }

        </div>
       

       

      </div>
      

    </div>
  )
}

export default Collection