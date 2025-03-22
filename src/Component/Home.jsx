import React from 'react'
import { CartState } from "../context/Context"
import { Singleproduct } from './Singleproduct';
import { Filter } from './Filter';
import "./style.css"


export const Home = () => {
  const {state:{ products},
  pstate: { byStock, byFastDelivary, byRating, sort, searchQuery },
} = CartState();
 
  const transformproducts=()=>{
    let sortedProduct = products;
    if(sort){
      sortedProduct = sortedProduct.sort((a,b)=>
      sort==="lowToHigh"? a.price-b.price:b.price - a.price
    )
    }
    if(!byStock){
      sortedProduct = sortedProduct.filter((pro)=> pro.byStock)
    }
    if(byFastDelivary){
      sortedProduct = sortedProduct.filter((pro)=>pro.fastDelivery)
    }
    if (byRating ) {
      sortedProduct = sortedProduct.filter((pro) => pro.rating === byRating);
    }
    return sortedProduct;
  }

  return (
   <div className='Home'>
    
    <Filter/>
    <div className="productcontainer">
      {transformproducts().map((pro)=>{
        return  <Singleproduct  pro={pro} key={pro.id}/>
      })
      }
    </div>
    </div>
  )
}
