import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

function ProductDetails() {
  const [product, setProduct]= useState(null)
  const {id}= useParams()

  useEffect(()=>{
    const fetchData= async()=>{
      try{
        let {data}=await axios.get(`https://68cd48bfda4697a7f3056db2.mockapi.io/api/shoppire/products/${id}`)
        setProduct(data)
      }catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[id])
  console.log(product);

  return (
    <section className="py-8 bg-[var(--primary)] md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 max-md:px-6 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Image Section */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            {product&& <img src={product.image} alt=""  className="w-full rounded-2xl"/>}
          </div>

          {/* Details Section */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h3 className="text-4xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              {product&& product.name}
            </h3>

            {/* Price & Rating */}
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${product&& product.price}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {product&& Array.from({length:product.rate}, (_,i)=>(
                    <FaStar key={i} className="text-[var(--secondary)]"/>
                  ))}

                  {/* {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 
                        8.387l-4.552.361c-1.775.14-2.495 
                        2.331-1.142 3.477l3.468 2.937-1.06 
                        4.392c-.413 1.713 1.472 3.067 2.992 
                        2.149L12 19.35l3.897 2.354c1.52.918 
                        3.405-.436 2.992-2.15l-1.06-4.39 
                        3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))} */}
                </div>
                {/* <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({product.rate})
                </p> */}
                <p
                  className="text-sm font-medium dark:text-white text-[var(--secondary)]"
                >
                  ({product&& product.sale} Reviews)
                </p>
              </div>
            </div>

            {/* Title */}
            <p className="text-gray-500 mt-5 dark:text-gray-400">{product&& product.description}</p>

            {/* Sizes */}
            <div className="flex gap-3 mt-5">
              {product&& product.sizes.map((e,i)=>(
                <button key={i} className={`py-2 w-14 border-2 border-[var(--tertiary)] text-[var(--tertiary)] rounded-xl dark:border-white dark:text-white`}>{e}</button>
              ))}
            </div>
            {/* Buttons */}
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium 
                text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 
                focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-500 
                dark:text-white dark:border-gray-600 "
                role="button"
              >
                <FaRegHeart className="mr-2 text-[16px]"/>
                Add to favorites
              </a>

              <a
                href="#"
                title=""
                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 
                focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm 
                px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 
                focus:outline-none dark:focus:ring-primary-800 flex items-center 
                justify-center bg-[var(--tertiary)]"
                role="button"
              >
                <FaCartPlus className="text-[16px] mr-2"/>
                Add to cart
              </a>
            </div>

            <p className="flex items-center mt-3 text-black dark:text-white"> <TbTruckDelivery className="text-[25px] mr-2"/> Free Delivery on orders over 500$</p>

            <hr className="my-5 border-gray-200 dark:border-gray-800" />

            {/* Description */}
            <p className="mb-1 text-gray-500 dark:text-gray-400">
              Authenticity You Can Trust
            </p>
            <p className="mb-1 text-gray-500 dark:text-gray-400">
              Enjoy Cash on Delivery for Your Convenience
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Easy Returns and Exchanges Within 7 Days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

