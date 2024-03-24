import React from 'react'
import { useContext } from 'react'
import './styles.css'
import { cartContext } from '../context'

const SingleProduct = ({ prod }) => {
  const {cart,setcart}=useContext(cartContext)
  return (
    <div className='products'>
      <div
        className='productImage'
        style={{ backgroundImage: `url(${prod.image})` }}
      ></div>
      <div className='productDesc'>
        <span style={{ fontWeight: 700, flex: '1' }}>{prod.title}</span>
        <span style={{ marginLeft: 'auto' }}>₹ {prod.price.toFixed()}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className='add'
          onClick={() => {
            setcart(cart.filter(c => c.id !== prod.id))
          }}
        >
          Remove to cart
        </button>
      ) : (
        <button
          className='add'
          onClick={() => {
            setcart([...cart, prod])
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  )
}

export default SingleProduct
