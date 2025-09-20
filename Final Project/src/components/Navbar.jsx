import { SiGooglehome } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";
import { SiAtlassian } from "react-icons/si";
import { SiMaildotcom } from "react-icons/si";
import { NavLink, useNavigate } from "react-router";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { CiShoppingCart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";
import { DataCotext } from "../../DataCotext";



function Navbar() {
    const [userMenuShow, setUserMenuShow]= useState(false)
    const [toggleMenuShow, setToggleMenuShow]= useState(false)
    const navigate= useNavigate()
    // console.log(localStorage.getItem("token"));
    // localStorage.setItem("cart", 0)
    const {cart}= useContext(DataCotext)

    return (
        <nav className=" sticky top-0 left-0 z-30 border-gray-200 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-around mx-auto py-4 px-2 w-[100vw] text-white">
            {/*  */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" /> */}
                <img src="imgs/admin/logo.png" className="w-12" alt="Logo" />
                <span className="self-center text-2xl max-md:text-xl max-md:-ml-2 font-semibold whitespace-nowrap text-[var(--secondary)]">Shoppire</span>
            </div>

            {/*  */}
            <div className="flex items-center gap-5 max-md:gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">

                <div onClick={()=> document.documentElement.classList.toggle('dark')} className="w-9">
                    <GoSun className="block dark:hidden text- text-xl mr-10 cursor-pointer p-2 w-fit h-fit rounded-lg hover:bg-gray-200 text-yellow-500 max-md:ml-3"/>
                    <GoMoon className=" hidden dark:block text-xl mr-10 cursor-pointer p-2 w-fit h-fit rounded-lg hover:bg-gray-700 text-violet-700 max-md:ml-3"/>
                </div>

                <div className="relative">
                    <FaBasketShopping className="text-gray-900 text-2xl dark:text-white" /> 
                    <p className=" bg-[var(--secondary)] absolute -top-3.5 left-[2.5px] rounded-full h-5 w-5 text-center text-sm">{cart}</p>
                </div>

                {!localStorage.getItem('token') && <button onClick={()=> navigate('/login')} className="btn bg-[var(--secondary)] py-2 px-5">Login</button>}
                
                {localStorage.getItem("token") && <img src="imgs/admin/profile_img_3.png" alt="user img" onClick={()=> setUserMenuShow((show)=> !show)} className="text-gray-900 text-xl cursor-pointer dark:text-white w-9"/>}

                {/* <!-- Dropdown menu --> */}
                {localStorage.getItem("token") && <div className={`${userMenuShow? 'absolute': 'hidden'} z-10 top-10 right-0 md:-right-10 md:top-9 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">Mohamed Hassan</span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">mohamed@gmail.com</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="" onClick={()=>navigate('/dashboard/add')} className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        {/* <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li> */}
                        <li>
                            <a onClick={()=> {localStorage.removeItem('token'); navigate("/")}} className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>}
                <button onClick={()=>setToggleMenuShow((show)=> !show)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            {/*  */}
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1  max-md:absolute max-md:top-19 max-md:bg-white max-md:w-[99%] rounded-md z-20 ${toggleMenuShow? 'flex': 'hidden'}`} id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                    <li>
                        <NavLink to="/" className={({isActive})=>`py-2 px-3 text-[var(--secondary)] dark:text-[var(--secondary)] flex items-center gap-2 ${isActive?' ':'text-gray-900 dark:text-white'}`}> <SiGooglehome/> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="collection" className={({isActive})=> `flex items-center py-2 px-3 text-[var(--secondary)] dark:text-[var(--secondary)] gap-2 ${isActive?'':'text-gray-900 dark:text-white'}`}> <BsCollectionFill/> Collection</NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink to="about" className={({isActive})=> `flex items-center py-2 px-3 text-[var(--secondary)] dark:text-[var(--secondary)] gap-2 ${isActive?'':'text-gray-900 dark:text-white'} `}> <SiAtlassian/> About</NavLink>
                    </li>
                    <li className="flex items-center">
                        <a href="#footer" className=" ` flex items-center py-2 px-3 text-gray-900 gap-2 dark:text-white"> <SiMaildotcom/> Contact</a>
                    </li>
                    {/* <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li> */}
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar


