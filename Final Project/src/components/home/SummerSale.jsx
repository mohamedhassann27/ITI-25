
function SummerSale() {
    return (
        <section className='py-10 my-10 flex relative h-110'>
            <div data-aos="zoom-out" className="w-full">
                <img src="/public/imgs/Hero/banneroffer.png" alt="banner offer" className="w-full h-full mx-auto" />
            </div>
            <div data-aos="zoom-out" className="absolute left-[12%] top-[50%] translate-y-[-50%] max-md:left-[7%]">
                <p className="text-5xl font-bold max-md:text-3xl">Summer Sale 50%</p>
                <p className="text-3xl font-semibold my-5 max-md:text-2xl">Men's Leather Formal Wear Shoes</p>
                <button className="py-2.5 px-6 rounded-full bg-[var(--tertiary)] text-white">Go to store</button>
            </div>
        </section>
    )
}

export default SummerSale
