import { BsFire } from "react-icons/bs";

function Hero() {
    return (
        <section id='Hero' className="slider-container w-full overflow-hidden">
                <div>
                    <div className="w-[85%] h-[88vh] max-md:h-full flex max-md:flex-col flex-1 items-center justify-between max-w-8xl mx-auto my-6 rounded-3xl bg-[#e7e7e9] pl-13 max-md:px-5 max-md:pt-5 py-0">
                        <div className=" h-[100%] flex-1 flex flex-col justify-center gap-2 rounded-l-3xl">
                            <h3 data-aos="zoom-out" className='text-[var(--secondary)]'>MODERN COLLECTION</h3>
                            <h1 data-aos="zoom-out" className='font-bold max-md:font-semibold'>Elevate Your Look With Every Click Shop Today</h1>
                            <p data-aos="zoom-out" className='my-4 pl-3 border-l-4 border-[var(--secondary)]'>Discover quality and style with our premium collection. Shop confidently for unique, fashionable pieces that elevate your wardroobe!</p>
                            <div className="flex gap-5 max-md:flex-col max-md:items-center">
                                <button data-aos="zoom-out" className='btn py-2 px-5 bg-[var(--tertiary)] text-white w-fit'>Latest Products</button>
                                <button data-aos="zoom-out" className='btn py-2 px-5 bg-[var(--secondary)] text-white w-fit'>Popular Products</button>
                            </div>
                        </div>
                        <div className="h-full w-full flex-1">
                            <img data-aos="zoom-out" src="imgs/Hero/Hero-bg.png" alt="hero img" className='h-full w-full rounded-r-3xl object-cover' />
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Hero

