import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const DataCotext= createContext({
    products: [],
    setProducts: ()=>{},
    setReload: ()=>{},
    cart: 0,
    setCart: ()=>{}
})

function DataProvider(props) {
    const [products, setProducts]= useState([])
    const [reload, setReload]= useState(false)
    const [cart,setCart]= useState(0)

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let {data}= await axios.get("http://localhost:3000/products")
                setProducts(data)
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
        // console.log(products);
    },[reload])
    
    return (
        <DataCotext.Provider value={{products,setProducts,setReload,cart,setCart}}>
            {props.children}
        </DataCotext.Provider>
    )
}

export default DataProvider
