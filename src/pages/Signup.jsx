import { useState } from "react";
import * as z from "zod";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userData, setUserData]= useState({name:"", email:"", password:""})
    const [errors, setErrors]= useState({name:'', email:'', password:''})

    const handleChange= (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const userSchema= z.object({
        name: z.string().min(2, "name is very small"),
        email: z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "invalid email"),
        password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/, "invalid password"),
    })
    
    const handleSubmit= (e)=>{
        e.preventDefault()
        let response= userSchema.safeParse(userData)
        if(!response.success){
            console.log(response);
            let newErrors= {}
            response.error.issues.forEach((err)=>{
                newErrors[err.path[0]]=err.message
            })
            setErrors(newErrors)
            return
        }
        setErrors({name:'', email:'', password:''})
        setUserData({name:"", email:"", password:""})
    }

    return (
        <div id="signup" className="w-full py-6 min-h-[100vh] bg-[var(--primary)]">

            <div className="bg-white max-w-110 mx-auto mt-6 px-15 py-5 rounded-lg shadow-2xl">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
                Sign Up
                </h2>
                <p className="text-center text-sm text-gray-600 mt-2">
                Already have an account?{" "}
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                    title="Sign In"
                >
                    Sign in here
                </a>
                </p>

                <form onSubmit={handleSubmit} className="my-8 text-sm">
                <div className="flex flex-col my-4">
                    <label htmlFor="name" className="text-gray-700">
                    Name
                    </label>
                    <input
                    value={userData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Enter your name"
                    />
                    {errors&&errors.name&& <p className="text-red-500 pt-1">{errors.name}</p>}
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="email" className="text-gray-700">
                    Email Address
                    </label>
                    <input
                    value={userData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Enter your email"
                    />
                    {errors&&errors.email&& <p className="text-red-500 pt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="flex flex-col my-4">
                    <label htmlFor="password" className="text-gray-700">
                    Password
                    </label>
                    <div className="relative flex items-center mt-2">
                        <input
                            value={userData.password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter your password"
                        />
                        <a
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 bg-transparent flex items-center justify-center text-gray-700"
                        >
                            {showPassword ? (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 
                                2.943 9.542 7-1.274 4.057-5.064 7-9.542 
                                7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                            </svg>
                            ) : (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.875 18.825A10.05 10.05 0 
                                0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 
                                9.97 0 011.563-3.029m5.858.908a3 3 0 
                                114.243 4.243M9.878 9.878l4.242 
                                4.242M9.88 9.88l-3.29-3.29m7.532 
                                7.532l3.29 3.29M3 3l3.59 3.59m0 
                                0A9.953 9.953 0 0112 5c4.478 0 
                                8.268 2.943 9.543 7a10.025 
                                10.025 0 01-4.132 5.411m0 0L21 21"
                                ></path>
                            </svg>
                            )}
                        </a>
                    </div>
                    {errors&&errors.password&& <p className="text-red-500 pt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col my-4">
                    <label htmlFor="password_confirmation" className="text-gray-700">
                    Password Confirmation
                    </label>
                    <div className="relative flex items-center mt-2">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        id="password_confirmation"
                        className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                        placeholder="Enter your password again"
                    />
                    <a
                        onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-6 bg-transparent flex items-center justify-center text-gray-700"
                    >
                        {showConfirmPassword ? (
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 
                            016 0z"
                            ></path>
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 
                            7.523 5 12 5c4.478 0 
                            8.268 2.943 9.542 7-1.274 
                            4.057-5.064 7-9.542 
                            7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                        </svg>
                        ) : (
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13.875 18.825A10.05 
                            10.05 0 0112 19c-4.478 
                            0-8.268-2.943-9.543-7a9.97 
                            9.97 0 011.563-3.029m5.858.908a3 
                            3 0 114.243 4.243M9.878 
                            9.878l4.242 4.242M9.88 
                            9.88l-3.29-3.29m7.532 
                            7.532l3.29 3.29M3 
                            3l3.59 3.59m0 
                            0A9.953 9.953 0 0112 
                            5c4.478 0 8.268 
                            2.943 9.543 7a10.025 
                            10.025 0 01-4.132 
                            5.411m0 0L21 21"
                            ></path>
                        </svg>
                        )}
                    </a>
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    className="mr-2 focus:ring-0 rounded"
                    />
                    <label htmlFor="remember_me" className="text-gray-700">
                    I accept the{" "}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        terms
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        privacy policy
                    </a>
                    </label>
                </div>

                <div className=" flex items-center justify-center space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-3 text-[16px] text-gray-100 hover:shadow-xl transition duration-150 w-full mt-4 ">
                    Create an account
                    </button>
                </div>
                </form>

            </div>
        </div>
    );
}

export default Signup
