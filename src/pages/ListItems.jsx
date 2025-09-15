import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import EditModal from '../components/ListItems/EditModal';

function ListItems() {
    // const navigate= useNavigate()
    const [reload,setReload]= useState(false)
    const [products, setProducts]= useState([])
    const [selectedProduct, setSelectedProduct]= useState({})
    
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let {data}=await axios.get("http://localhost:3000/products")
                console.log(data);
                setProducts(data)
                
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[reload])

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
                await axios.delete(`http://localhost:3000/products/${product.id}`);
                setReload((e)=>!e)
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }
        });
    }

    // const []
    const handleEdit= async()=>{

    }

        const[modal, setModal]= useState(false)
    


    return (
        <div className="rounded-md p-5 w-[70%] relative">

            <div className="bg-white p-2 shadow-sm">
                <ul className='grid grid-cols-8'>
                    <li className='text-[var(--secondary)] font-semibold'>Image</li>
                    <li className='col-span-3 text-[var(--secondary)] font-semibold'>Name</li>
                    <li className='text-[var(--secondary)] font-semibold'>Category</li>
                    <li className='text-[var(--secondary)] font-semibold'>Price</li>
                    <li className='text-[var(--secondary)] font-semibold'>Edit</li>
                    <li className='text-[var(--secondary)] font-semibold'>Remove</li>
                </ul>
            </div>

            {products && products.map((product)=>(

                <div key={product.id} className={`grid grid-cols-8 items-center bg-white p-2 shadow-sm rounded-xl mt-3 ${modal? 'opacity-50' : ''}`}>
                    <img src={product.image} alt="product img" className='h-15 rounded-md'/>
                    <p className='col-span-3'>{product.name}</p>
                    <p className=''>{product.category}</p>
                    <p>{product.price}$</p>
                    <FaEdit data-modal-target="crud-modal" data-modal-toggle="crud-modal" className='text-lg text-blue-500'
                        onClick={()=>{ 
                            setModal((e)=>!e),
                            setSelectedProduct(product)
                        }
                        }/>

                    <RiDeleteBinFill className='text-lg text-red-500' onClick={()=>handleDelete(product)}/>
                    {/* <p>edit</p>
                    <p>remove</p> */}
                </div>
            ))}

            <EditModal modal={modal} setModal={setModal} product={selectedProduct} setReload={setReload}/>

        </div>
    )
}

export default ListItems
