import React, { useContext, useEffect } from 'react'
import SingleProduct from './SingleProduct'
import { useState } from 'react';
import { cartContext } from '../context';

const Cartpage = () => {
  const [total,settotal]=useState();
  const {cart,setcart}=useContext(cartContext)


  useEffect(()=>
  {
    settotal(cart.reduce((acc,curr)=>
    {
     return  acc+Number(curr.price);
  },0))
  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>{total}</span>
      <br/>

<span style={{fontSize:30}}>Total: Rs.100</span>
<div className='productContainer'>
  {cart.map((prod)=>
  (
    <SingleProduct prod={prod} key={prod.id} />
  ))}
</div>

    </div>
  )
}

export default Cartpage