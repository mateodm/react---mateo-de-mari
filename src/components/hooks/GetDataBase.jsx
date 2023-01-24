import { useState } from "react"
import { bd } from "../../firebase"
import { collection, docs, doc, addDoc,  getDocs } from "firebase/firestore"

const GetDataBase = () => {
    const [stock,setStock] = useState([]);
    const [product, setProduct] = useState([]); 
    const getProducts = async () => {
        try {
            const productsGet = collection(bd, "productos" )
            const consult = await getDocs(productsGet)
            const response = consult.docs.map(doc => doc = {...doc.data()})
            setStock(response)
            }
            catch(error) {
            
            }
        }
        return {stock, getProducts}

    }

export default GetDataBase;