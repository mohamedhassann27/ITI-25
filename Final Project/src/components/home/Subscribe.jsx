import React from 'react'

function Subscribe() {
    return (
        <section className='px-20 py-20 bg-white'>
            <div className="w-fit mx-auto ">
                <p className=' font-semibold text-4xl'>Get Exclusive offers on Your Email</p>
                <p className=' uppercase mt-8 mb-6 font-semibold text-md text-center'>subscribe to our newsletter and stay updated</p>  
                <div className="bg-gray-100 py-3 px-6 rounded-full relative">
                    <input type="email" name="email" id="email" placeholder='Your email address' />
                    <button className='absolute right-0 top-0 bg-[var(--tertiary)] text-white h-full px-6 rounded-full'>Subscribe</button>
                </div>
            </div>            
        </section>
    )
}

export default Subscribe
