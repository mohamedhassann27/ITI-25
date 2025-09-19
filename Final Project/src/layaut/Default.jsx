import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DataProvider from '../../DataCotext'

const Default = () => {
    return (
        <div className='min-h-[100vh] flex flex-col justify-between items-center'>
            <div className="">
                <Navbar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Default
