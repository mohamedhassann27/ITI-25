import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { tr } from "zod/locales";

function Collection() {
    const [men,setMen]= useState(false)
    const [women,setWomen]= useState(false)
    const [kids,setKids]= useState(false)

    const [searchValue, setSearchValue]= useState("")

    const navigate= useNavigate()
    const [products, setProducts]= useState(null)
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let {data}= await axios.get('http://localhost:3000/products')
                setProducts(data)
                console.log(data);
                
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[])

    // const [cart, setCart]= useState(localStorage.getItem('cart'))
    // useEffect(()=>{
    //     localStorage.setItem('cart', cart)
    // },[cart])

    return (
        <div className="bg-[var(--primary)]">
        <div className="flex gap-6 mx-15 py-10 min-h-screen ">
            <div className="w-[18%] h-screen bg-white py-5 rounded-md shadow-md">
            <div className="relative text-center p-3 mt-3">
                <FaSearch className="absolute right-7 top-6 text-[var(--secondary)]"/>
                <input
                value={searchValue}
                name="search"
                onChange={(e)=>setSearchValue(e.target.value)}
                type="text"
                className="border border-gray-300 rounded-full py-2 px-4 bg-[var(--primary)] w-full"
                placeholder="Serch here..."
                />
            </div>

            <div className="bg-[var(--primary)] mt-10 mb-6 w-[90%] mx-auto p-3 rounded-md border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <div className="text-gray-600">
                <input type="checkbox" id="men" onClick={()=>setMen((e)=>!e)
                }/>
                <label htmlFor="men" className="ml-1.5">
                    Men
                </label>
                </div>
                <div className="my-1 text-gray-600">
                <input type="checkbox" id="women" onClick={()=> setWomen((e)=>!e)}/>
                <label htmlFor="women" className="ml-1.5">
                    Women
                </label>
                </div>
                <div className="text-gray-600">
                <input type="checkbox" id="kids" onClick={()=> setKids((e)=> !e)}/>
                <label htmlFor="kids" className="ml-1.5">
                    Kids
                </label>
                </div>
            </div>

            {/* <div className="bg-[var(--primary)]  w-[90%] mx-auto p-3 rounded-md border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Type</h3>
                <div className="text-gray-600">
                <input type="checkbox" id="topwear" />
                <label htmlFor="topwear" className="ml-1.5">
                    Topwear
                </label>
                </div>
                <div className="my-1 text-gray-600">
                <input type="checkbox" id="bottomwear" />
                <label htmlFor="bottomwear" className="ml-1.5">
                    Bottomwear
                </label>
                </div>
                <div className="text-gray-600">
                <input type="checkbox" id="winterwear" />
                <label htmlFor="winterwear" className="ml-1.5">
                    Winterwear
                </label>
                </div>
            </div> */}

            {/* <div className="bg-gray-300">
                            <select name="sort" id="sort"></select>
                        </div> */}
            </div>

    {/*--------------------------------------------------------*/}

            <div className="flex-1 bg-white rounded-md p-5">
            <h2 className="font-bold border-b-3 border-[var(--secondary)] w-fit mb-10">
                Our Collection
            </h2>
            <div className="">
                <div className="my-4 grid gap-5 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                {products&& products.filter((product) =>  product.name.toLowerCase().includes(searchValue.toLowerCase()) && 
                    (
                        (   (product.category=='Men' && men) ||
                            (product.category=='Women' && women) ||
                            (product.category=="Kids" && kids)
                        ) ||
                        (
                            !men&&!women&&!kids? true: ''
                        )
                    )
                
                    
                )
                .map((product)=>(
                    <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white py-6 px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    >
                    <div>
                        <img
                        src={product.image}
                        alt="product"
                        className="h-full w-full rounded"
                        />
                    </div>
                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                            Up to {product.price - 145}% off
                        </span>

                        <div className="flex items-center justify-end gap-1">
                            <button
                            onClick={() => navigate(`/products/${product.id}`)}
                            type="button"
                            data-tooltip-target="tooltip-quick-look"
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                            >
                            <span className="sr-only"> Quick look </span>
                            <IoEyeOutline />
                            </button>

                            <button
                            type="button"
                            data-tooltip-target="tooltip-add-to-favorites"
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                            >
                            <span className="sr-only"> Add to Favorites </span>
                            <CiHeart />
                            </button>
                        </div>
                        </div>

                        <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                        {product.name}
                        </h3>

                        <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center">
                            {Array.from({ length: Math.round(product.rate) }).map(
                            (r, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            )
                            )}
                            {/* <FaStar className="text-yellow-400"/>
                                                    <FaStar className="text-yellow-400"/>
                                                    <FaStar className="text-yellow-400"/> */}
                        </div>

                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.rate}
                        </p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            ({product.sale})
                        </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            ${product.price}
                        </p>

                        <button
                            // onClick={()=> setCart((c)=> Number(c+1))}
                            type="button"
                            className="inline-flex items-center bg-[var(--secondary)] rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            <FaCartPlus
                            className="mr-1 text-xl"
                            width="24"
                            height="24"
                            />
                            Add to cart
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Collection;
