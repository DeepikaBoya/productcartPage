import React, { useState,useEffect, useContext } from 'react';
import SingleProduct from './SingleProduct';
import { cartContext } from '../context';
const Home = ({}) => {


  const [products, setProducts] = useState([]);
  console.log(useContext(cartContext))

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <div className='productContainer'> {products.map((prod=>
      (
<SingleProduct prod={prod} />
      )))}</div>
  )
}

export default Home;