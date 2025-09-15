import { useNavigate } from "react-router";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as z from "zod";

function AddProduct() {
    const navigate= useNavigate()

    let [newProduct, setNewProduct]= useState({
        name: "",
        description: "",
        category: "Men",
        price: "",
        image: ""
    })

    const handleChange= (e)=>{
        setNewProduct({
            ...newProduct,
            [e.target.name]:  e.target.value
        })
    }

    const [errors, setErrors]= useState({
        name: "",
        description: "",
        price: "",
        image:""
    })

    const Product = z.object({
        name: z.string("Name is required").min(2, "Enter a valid name").max(15, 'Enter a valid name'),
        description: z.string("Description is required").min(0,"Description is required").min(5, "description is very small"),
        price: z.number("Enter a price"),
        image: z.string(),
    });

    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(newProduct);
        try{
            const res= Product.safeParse(newProduct)
            console.log(res);
            if(!res.success){
                const newErrors= {}
                res.error.issues.forEach((e)=>{
                    newErrors[e.path[0]]= e.message
                })
                console.log(newErrors);
                setErrors(newErrors)
                return
            }
            
            await axios.post("http://localhost:3000/products", newProduct)
            toast.success("Add product success")
            navigate("/dashboard/list")
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        
            <div className="flex-1 bg-white rounded-md p-5">
                <p class="text-3xl font-bold text-gray-800 mb-8">Add New Product</p>
                <form id="productForm" class="space-y-6">
                    <div class="grid  gap-6">
                    <div class="space-y-4">
                        <div className="w-[40%]">
                            <label
                                for="productName"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Product Name*
                            </label>
                            <input
                                value={newProduct.name}
                                onChange={handleChange}
                                name="name"
                                type="text"
                                id="productName"
                                placeholder="Type here..."
                                class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                            <p class="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        </div>
                        {/* <div className="w-[40%]">
                            <label
                                for="price"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Price*
                            </label>
                            <div class="mt-1 relative">
                                <span class="absolute left-3 top-3 text-gray-500">$</span>
                                <input
                                type="number"
                                id="price"
                                class="block w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <p class="hidden text-red-500 text-sm mt-1">
                                Price is required
                            </p>
                        </div> */}

                    </div>

                    <div class="space-y-4">
                        <div className="w-[40%]">
                            <label
                                for="description"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Description*
                            </label>
                            <textarea
                                value={newProduct.description}
                                onChange={handleChange}
                                name="description"
                                id="description"
                                rows="4"
                                class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Write here..."
                            ></textarea>
                            <p class="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        </div>

                        <div className="w-[40%] flex  gap-3 ">
                            <div className="w-[30%]">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <select 
                                value={newProduct.category}
                                onChange={handleChange}
                                name="category" id="cotegory" className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>

                            <div className="w-[30%]">
                                <label className="block text-sm font-medium text-gray-700" >Product Price</label>
                                <input
                                value={newProduct.price}
                                onChange={(e)=>setNewProduct({
                                    ...newProduct,
                                    [e.target.name]: +(e.target.value)
                                })} 
                                name="price"
                                type="number" placeholder="10$" className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all "/>
                                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                            </div>

                        </div>

                        <div className="w-[40%]">
                            <label class="block text-sm font-medium text-gray-700">
                                Product Image*
                            </label>
                            <div class="mt-1 flex justify-center  border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-all cursor-pointer">
                                {/* <div class="space-y-1 text-center">
                                    <div class="flex flex-col items-center">
                                        <img
                                        alt=""
                                        id="preview"
                                        class="hidden w-32 h-32 object-cover rounded-lg mb-4"
                                        />
                                        <svg
                                        class="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        </svg>
                                    </div>
                                    <div class="flex text-sm text-gray-600">
                                        <label
                                        for="file-upload"
                                        class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                                        >
                                        <span>Upload a file</span>
                                        <input
                                            onChange={(e)=> setNewProduct({
                                                ...newProduct,
                                                image: e.target.files[0]
                                            })}
                                            name="image"
                                            id="file-upload"
                                            type="file"
                                            class="sr-only"
                                            accept="image/*"
                                        />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div> */}

                                <input type="text" value={newProduct.image} onChange={handleChange} name="image"  placeholder="Type image URL" className="w-full h-full border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                        </div>
                    </div>
                    </div>

                    <div class="flex mt-8 w-[40%] ">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        class="group relative inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all mx-auto"
                    >
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3 hidden group-[.loading]:block">
                        <svg
                            class="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                            ></circle>
                            <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        </span>
                        Add Product
                    </button>
                    </div>
                </form>
            </div>
    );
}

export default AddProduct;
