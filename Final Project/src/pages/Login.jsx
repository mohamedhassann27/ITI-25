// import React from 'react'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import * as z from "zod";


function Login() {
    const navigate= useNavigate()
    const [userData, setUserData]= useState({username:"", password: ""})
    const [errors, setErrors]= useState({})

    const handleChange= (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const userSchema= z.object({
        username: z.string().min(2, "name is very small"),
        password: z.string().regex(/[a-z]/, "invalid password"),
    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=userSchema.safeParse(userData)
        console.log(response);
        if(!response.success){
            let newErrors={}
            response.error.issues.forEach((err)=>{
                newErrors[err.path[0]]= err.message
                setErrors(newErrors)
            })
            console.log(errors);
            return
        }
        try{
            setErrors({})
            setUserData({username:"", password: ""})
            const fetchData= async()=>{
                let {data}= await axios.post("https://dummyjson.com/auth/login", userData, {  credentials: 'include'})
                localStorage.setItem("token", data.accessToken)
                toast.success("Login Success")
                setTimeout(() => {
                    navigate("/")                               
                }, 1000);
            }
            fetchData()
        }catch(err){
            console.log(err);
        }

    }

    const inputRef= useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return (
        <div id='login' className='h-[100vh] flex justify-center items-center bg-[var(--primary)]'>
            <div className="bg-white text-gray-500 w-96 max-w-96 max-sm:w-80 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>

                <form onSubmit={handleSubmit}>
                    
                    <div className="min-w-full my-3">
                        <input ref={inputRef} value={userData.username} name='username' onChange={handleChange}  id="username" className="w-full bg-transparent border border-gray-500/30 outline-none rounded-2xl mb-2 py-2.5 px-4" type="text" placeholder="Enter your name"/> 
                        {errors&& errors.username && <p className='text-red-500 ml-4 mb-2'>{errors.username}</p>}
                    </div>
                    <div className="min-w-full">
                        <input value={userData.password} name='password' onChange={handleChange} id="password" className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-2xl py-2.5 px-4" type="password" placeholder="Enter your password"/>
                        {errors&& errors.password && <p className='text-red-500 ml-4'>{errors.password}</p>}
                    </div>

                    <div className="text-right py-4">
                        <a className="text-blue-600 underline" href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="w-full mb-3 bg-blue-600 py-3 rounded-full text-white">Log in</button>
                </form>

                <p className="text-center mt-4">Don’t have an account? <Link to="/signup" className="text-blue-500 underline">Signup</Link></p>
                <button type="button" className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo"/>
                    Log in with Apple
                </button>
                <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon"/>
                    Log in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
