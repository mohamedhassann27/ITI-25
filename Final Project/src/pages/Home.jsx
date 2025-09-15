import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import NewArrivals from '../components/home/NewArrivals'
import SummerSale from '../components/home/SummerSale'
import PopularProducts from '../components/home/PopularProducts'
import axios from "axios";
import Features from '../components/home/Features'
import Subscribe from '../components/home/Subscribe'



function Home() {

    const [products, setProducts]= useState([])
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
        
    },[])
    console.log(products);

    return (
        <div className='relative bg-[var(--primary)]'>
            <Hero/>
            <NewArrivals products={products}/>
            <SummerSale/>
            <PopularProducts products={products}/>
            <Features/>
            <Subscribe/>
        </div>
    )
}

export default Home
