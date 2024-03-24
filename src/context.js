import React, { createContext } from 'react'
import Cartpage from './components/Cartpage'
import { useState } from 'react'
export const cartContext=createContext()
const Context = ({children}) => {
    const [cart,setcart]=useState([])
  return (
    <div>

<cartContext.Provider value={{cart,setcart}}>
    {children}
</cartContext.Provider>
    </div>
  )
}

export default Context