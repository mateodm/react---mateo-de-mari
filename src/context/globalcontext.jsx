import React, { createContext, useState } from 'react'




export const GlobalContext = createContext("")
const GlobalContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([])
    const repeatProductCheck = (id) => {
        return cart.find(t => t.id === id)
    }
    
    const addProduct = (producto) => {
        const item = producto.item
        if (!repeatProductCheck(item.id)) {
        let productos = producto.item
            setCart([...cart, productos])
        }
        else {
            alert("Producto repetido")
        }
    }

    const removeProduct = (id) => {
        let removeProduct = cart.filter(e => e.id !== id)
        setCart(removeProduct)
    }
    
    const emptyCart = () => {
        setCart([])
    }
    
    return (
        <GlobalContext.Provider value={{            
            cart,
            setCart,
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