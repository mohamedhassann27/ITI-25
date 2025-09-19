import { toast } from 'react-toastify'

function Subscribe() {
    const handleSubscripe= ()=>{
        toast.success("🎉 Subscribed! Offers coming soon.")
    }
    return (
        <section className='px-20 max-md:px-12 py-20 bg-white dark:bg-gray-900 text-black dark:text-white'>
            <div className="w-fit mx-auto ">
                <p data-aos="zoom-out" className=' font-semibold text-4xl'>Get Exclusive offers on Your Email</p>
                <p data-aos="zoom-out" className=' uppercase mt-8 mb-6 font-semibold text-md text-center'>subscribe to our newsletter and stay updated</p>  
                <div data-aos="zoom-out" className="bg-gray-100 rounded-full relative">
                    <input type="email" name="email" id="email" placeholder='Your email address' className='dark:text-black w-full py-3 px-6 rounded-full'/>
                    <button onClick={handleSubscripe} className='absolute right-0 top-0 bg-[var(--tertiary)] text-white h-full px-6 rounded-full'>Subscribe</button>
                </div>
            </div>            
        </section>
    )
}

export default Subscribe
