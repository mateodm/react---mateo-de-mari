import React from "react"
import { useState} from "react"

const ItemCount = (props) => {
    const {defaultValue , addCart} = props;
    const {stock} = item.cantidad
    const [count, setCount] = useState (defaultValue);
    function addValue() {
        if(count < stock) {
            setCount(count++)
        }
    }
    function removeValue() {
        if(count > 0) {
            setCount(count--)
        }
    }
}