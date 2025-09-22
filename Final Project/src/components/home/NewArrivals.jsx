import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { DataCotext } from "../../../DataCotext";

function NewArrivals() {
    const navigate= useNavigate()
    const {products,setCart,cart}= useContext(DataCotext)
    
    return (
        <section className="my-10 px-20 max-md:px-12 py-10 ">
        <h2 data-aos="fade-up" className=" w-fit  border-b-3 border-[var(--secondary)] mb-10 mx-auto pb-1 text-black dark:text-white">New Arrivals</h2>

        <div className="my-4 grid gap-8 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

            {products.slice(0,4).map((product)=>(
                <div data-aos="fade-up" data-aos-delay={100*product.id} key={product.id} className="rounded-lg border border-gray-200 bg-white p-6  max-md:p-4 shadow-sm dark:border-gray-700 dark:bg-[#e7e7e9]">
                <div>
                    <img src={product.image} alt="product" className=" w-full rounded h-80 object-cover"/>
                </div>
                <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        Up to {product.price-145}% off{" "}
                    </span>

                    <div className="flex items-center justify-end gap-1">
                        
                        <button
                        onClick={()=> navigate(`products/${product.id}`)}
                        type="button"
                        data-tooltip-target="tooltip-quick-look"
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                        >
                        <span className="sr-only"> Quick look </span>
                        <IoEyeOutline/>
                        </button>

                        <button
                        type="button"
                        data-tooltip-target="tooltip-add-to-favorites"
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                        >
                        <span className="sr-only"> Add to Favorites </span>
                        <CiHeart/>
                        </button>
                    </div>
                    </div>

                    <h3
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                    >
                    {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        {Array.from({length:Math.round(product.rate)}).map((r,i)=>(
                            <FaStar key={i} className="text-yellow-400"/>
                        ))}
                        {/* <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/> */}
                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        {product.rate}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        ({product.sale})
                    </p>
                    </div>

                    {/* <ul className="mt-2 flex items-center gap-4">
                    <li className="flex items-center gap-2">
                        <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                        />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Fast Delivery
                        </p>
                    </li>

                    <li className="flex items-center gap-2">
                        <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Best Price
                        </p>
                    </li>
                    </ul> */}

                    <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900">
                        ${product.price}
                    </p>

                    <button
                        onClick={()=> setCart(p=> p+1)}
                        type="button"
                        className="inline-flex items-center bg-[var(--secondary)] rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        <FaCartPlus className="mr-3 text-xl" width="24"
                        height="24"/>
                        Add to cart
                    </button>
                    </div>
                </div>
            </div>
            ))}

        </div>
        </section>
    );
}

export default NewArrivals;

