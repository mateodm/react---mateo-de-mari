import React, { createContext, useState } from 'react'

// CommonJS



export const GlobalContext = createContext("")
const GlobalContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    let inicial = 1
    const [contador, setContador] = useState(inicial)
    const [productos, setProductos] = useState([])
    const repeatProductCheck = (id) => {
        return cart.find(t => t.id === id)
    }
    
    const addProduct = (producto, cant) => {
        const item = producto.item
        if (!repeatProductCheck(item.id)) {
        let productos = producto.item
            setCart([...cart, {...productos, cant}])
            console.log(cart)
        }
        else {
            alert("El producto ya se encuentra en el carrito")
        }
    }

    const removeProduct = (id) => {
        let removeProduct = cart.filter(e => e.id !== id)
        setCart(removeProduct)
    }
    
    const emptyCart = () => {
        setCart([])
    }
    const sumarCant = (cantidad) => {
        if(contador < cantidad) {
        setContador(contador + 1)
        }
        else {
            alert("No hay mas stock del producto seleccionado")
        }

    }
    const restarCant = () => {
        if(contador > 1) {
        setContador(contador - 1)
        }
        else {
            alert("No es posible realizar esta acción")
              }
        }
    
    
    return (
        <GlobalContext.Provider value={{            
            cart,
            contador,
            setContador,
            sumarCant,
            restarCant,
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