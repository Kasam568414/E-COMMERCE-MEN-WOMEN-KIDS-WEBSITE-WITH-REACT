import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // cart show programme here 

  const [catItems,setCartItems]=useState({});

  const addCart = async (itemId,size)=>{
    if (!size) {
      toast.error('select product size')
      return
      
    }
    let cartData = structuredClone(catItems);
    if (cartData [itemId]) {
      if (cartData [itemId] [size]) {
        cartData[itemId][size] +=1;

        
      }
      else{
        cartData[itemId][size] =1
      }
      
    }
    else{
      cartData[itemId]={};
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
    

  }

// const getCartCount =()=>{
//   let totalCount =0;
//   for( const items in catItems){
//     for(const item in catItems[items]){
//       try {
//         if (catItems[items] [item] > 0) {
//           totalCount +=catItems[items[item]]
          
//         }
        
//       } catch (error) {
        
//       }

//     }
//   }
//   return totalCount;

// }

const getCartCount =()=>{
  let totalCount = 0;
  for(const items in catItems){
    for( const item in catItems[items] ){
      try {
if (catItems [items][item] > 0) {
  totalCount += catItems[items][item]

          
}
      } catch (error) {
        console.log(error)
        
      }

      
    }

  }
  return totalCount;
}




  // cart show programme end here 

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    catItems,setCartItems,addCart,getCartCount
  
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
