import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { set } from 'zod';

function EditModal({modal, setModal, product, setReload}) {

    // const[reload, setReload]= useState(false)

    const [productEdited, setProductEdited]= useState(product)
    // console.log(product);
    
    const handleChange= (e)=>{
        setProductEdited({
            ...productEdited,
            [e.target.name]: e.target.value
        })
        // console.log(productEdited);
    }

    useEffect(()=>{
        setProductEdited(product)
    },[product])


    const handleSubmit= async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3000/products/${product.id}`, productEdited)
        setReload(e=> !e)
        setModal(false)
        toast.success("Product is updated")
    }

    return (
    <div className='relative'>
    {/* Modal toggle */}
    {/* <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
        onClick={()=> setModal((e)=>!e)}
    >
        Toggle modal
    </button> */}
    
    {/* Main modal */}
    <div id="crud-modal" tabIndex={-1} className={` ${modal? "fixed": "hidden"}  overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-x-1/6 max-md:-translate-x-1/3 max-sm:-translate-x-[11rem] -translate-y-1/2 z-20 justify-center items-center w-full max-h-full`}>
        <div className="relative p-4 w-full max-w-md max-sm:w-[90%] max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Product Details
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=> setModal(false)} data-modal-toggle="crud-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                value={productEdited.name}
                onChange={handleChange}
                name="name"
                type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input
                value={productEdited.price}
                onChange={handleChange} 
                type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select
                value={productEdited.category}
                onChange={handleChange}
                name='category'
                id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    {/* <option selected>Select category</option> */}
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    {/* <option value="PH">Phones</option> */}
                </select>
                </div>
                <div className="col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                <textarea 
                value={productEdited.description}
                onChange={handleChange}
                name='description'
                id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here" />                    
                </div>
            </div>
            <button
            onClick={handleSubmit}
            type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {/* <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg> */}
                Edit This Product
            </button>
            </form>
        </div>
        </div>
    </div>
    </div>

    )
}

export default EditModal
