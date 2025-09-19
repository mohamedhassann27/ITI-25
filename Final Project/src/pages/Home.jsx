import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import NewArrivals from '../components/home/NewArrivals'
import SummerSale from '../components/home/SummerSale'
import PopularProducts from '../components/home/PopularProducts'
import axios from "axios";
import Features from '../components/home/Features'
import Subscribe from '../components/home/Subscribe'
import DataProvider, { DataCotext } from '../../DataCotext'




function Home() {

    
    /{ For props but I used UseContext }/
    // const [products, setProducts]= useState([])
    // useEffect(()=>{
    //     const fetchData= async()=>{
    //         try{
    //             let {data}= await axios.get("http://localhost:3000/products")
    //             setProducts(data)
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetchData()
        
    // },[])
    // console.log(products);

    return (
        <div className='relative bg-[var(--primary)] dark:bg-gray-900'>
            <Hero/>
            <NewArrivals/>
            <PopularProducts/>
            <SummerSale/>
            <Features/>
            <Subscribe/>
        </div>
    )
}

export default Home
