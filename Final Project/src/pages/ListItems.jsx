import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from 'sweetalert2'
import EditModal from '../components/ListItems/EditModal';
import { DataCotext } from '../../DataCotext';

function ListItems() {
    // const [reload,setReload]= useState(false)
    // const [products, setProducts]= useState([])
    const [selectedProduct, setSelectedProduct]= useState({})
    
    const {products, setProducts, setReload}= useContext(DataCotext)
    // console.log(setProducts);
    // console.log(products);
    
    
    // useEffect(()=>{
    //     const fetchData= async()=>{
    //         try{
    //             let {data}=await axios.get("http://localhost:3000/products")
    //             console.log(data);
    //             setProducts(data)
                
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetchData()
    // },[reload])

    const handleDelete= (product)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonColor: "#28a745",
            confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
            if (result.isConfirmed) {
                let {data}= await axios.delete(`https://68cd48bfda4697a7f3056db2.mockapi.io/api/shoppire/products/${product.id}`);
                // console.log(data);
                setProducts(prev=> prev.filter(p=> p.id !== data.id))
                setReload((e)=>!e)
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }
        });
    }

    const[modal, setModal]= useState(false)

    return (
        <div className="rounded-md p-5 w-[70%] relative max-md:w-[100%] max-md:px-3">

            <div className="bg-white p-2 max-md:px-2 shadow-sm">
                <ul className='grid grid-cols-8 max-md:grid-cols-6 max-md:gap-6'>
                    <li className='text-[var(--secondary)] font-semibold'>Image</li>
                    <li className='col-span-3 max-md:col-span-1 text-[var(--secondary)] font-semibold bg-white'>Name</li>
                    <li className='text-[var(--secondary)] font-semibold max-md:-ml-2'>Category</li>
                    <li className='text-[var(--secondary)] font-semibold max-md:ml-2'>Price</li>
                    <li className='text-[var(--secondary)] font-semibold'>Edit</li>
                    <li className='text-[var(--secondary)] font-semibold max-md:-ml-4'>Remove</li>
                </ul>
            </div>

            {products && products.map((product)=>(

                <div key={product.id} className={`grid grid-cols-8 max-md:grid-cols-6 items-center bg-white p-2 shadow-sm rounded-xl mt-3 ${modal? 'opacity-50' : ''}`}>
                    <img src={product.image} alt="product img" className='h-15 rounded-md'/>
                    <p className='col-span-3 max-md:col-span-1 max-md:mx-1 max-md:w-20'>{product.name}</p>
                    <p className='max-md:ml-9'>{product.category}</p>
                    <p className='max-md:ml-12'>{product.price}$</p>
                    <FaEdit data-modal-target="crud-modal" data-modal-toggle="crud-modal" className='text-lg text-blue-500 max-md:ml-12'
                        onClick={()=>{ 
                            setModal((e)=>!e),
                            setSelectedProduct(product)
                        }
                        }/>

                    <RiDeleteBinFill className='text-lg text-red-500 max-md:ml-8' onClick={()=>handleDelete(product)}/>
                    {/* <p>edit</p>
                    <p>remove</p> */}
                </div>
            ))}

            <EditModal modal={modal} setModal={setModal} product={selectedProduct} setReload={setReload}/>

        </div>
    )
}

export default ListItems

