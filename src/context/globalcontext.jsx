import React, { createContext, useContext, useState } from 'react'


export const GlobalProvider = () => useContext(GlobalContext)
const GlobalContext = createContext()

const GlobalState = ({children}) => {
    const {cart, setCart} = useState([])
    const repeatProductCheck = (id) => {
        return cart.find(t => t.id === id)
    }
    
    const addProduct = (producto, cantidad) => {
        if(repeatProductCheck(producto.id)) {
            producto.cantidad++
    
        }
        else {
            producto.push(cart)
        }
    }
    const removeProduct = (id) => {
        cart.filter(e => e.id === id)
    }
    
    const emptyCart = () => {
        setCart([])
    }
    
    const totalPrice = () => {
        
    }
    
    return (
        <GlobalContext.Provider value={{
            cart, addProduct
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState