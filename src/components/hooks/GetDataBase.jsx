import { useState } from "react"
import { bd } from "../../firebase"
import { collection, docs, doc, addDoc,  getDocs } from "firebase/firestore"
import { GlobalProvider } from "../../context/globalcontext.jsx"

const GetDataBase = () => {
    const [stock,setStock] = useState([]);
    const getProducts = async () => {
            const productsGet = collection(bd, "productos" )
            const consult = await getDocs(productsGet)
            const response = consult.docs.map(doc => doc = {...doc.data()})
            return response
    }
            const getOneProduct = async () => {
                const productsGet = collection(bd, "productos" )
                const consult = await getDocs(productsGet)
                const response = consult.docs.map(doc => doc = {...doc.data()})
                return response
            }
            return {stock, getProducts, getOneProduct}

    }

export default GetDataBase ;