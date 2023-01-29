import React, { createContext, useContext, useState } from 'react'




export const GlobalContext = createContext("")
const GlobalContextProvider = ({children}) => {
    const {cart, setCart} = useState([]);
    const repeatProductCheck = (id) => {
        return cart.find(t => t.id === id)
    }
    
    const addProduct = (producto) => {
        if(repeatProductCheck(producto.id)) {
            producto.cantidad++
        }
        else {
            setCart([...cart, producto])
        }
    }
    const removeProduct = (id) => {
        let removeProduct = cart.filter(e => e.id === id)
        setCart([removeProduct])
    }
    
    const emptyCart = () => {
        setCart([])
    }
    
    
    return (
        <GlobalContext.Provider value={{            cart,
            addProduct,
            repeatProductCheck,
            removeProduct,
            emptyCart

            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider