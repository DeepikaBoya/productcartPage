import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { cartContext } from '../context'
import { useContext } from 'react'

const Header = () => {
  const {cart,setcart}=useContext(cartContext)


  return (
    <div>
        <span className='header'> React Context API </span>
        <ul className='nav'>
          <li>

            <Link to='/'>Home Page</Link>

          </li>
          <li>
            <Link to="/Cartpage">cart ({cart.length})</Link>
          </li>
        </ul>
        </div>
  )
}

export default Header