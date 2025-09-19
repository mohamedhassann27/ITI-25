import { IoReturnUpBack } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

function Features() {
    return (
        <section className="my-20 px-30 max-md:px-12">
            <h2 data-aos="fade-up" className="border-b-3 w-fit mx-auto pb-1 border-[var(--secondary)] mb-10 text-black dark:text-white">Our Features</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 ">
                <div data-aos="zoom-in" className="bg-white shadow-xl px-6 py-4 rounded-lg">
                    <IoReturnUpBack className="text-4xl text-yellow-500" />
                    <h3 className="mb-2 mt-1 text-xl font-bold  text-black ">Easy Return</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enjoy a hassle-free return process, making every purchase worry-free.
                    </p>
                </div>
                <div data-aos="zoom-in" className="bg-white shadow-xl px-6 py-4 rounded-lg">
                <TbTruckDelivery className="text-4xl text-[var(--secondary)]" />
                <h3 className="mb-2 mt-1 text-xl font-bold text-black dark:text-white">Fast Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Experience quick and reliable delivery, bringing your order right to you.
                </p>
                </div>
                <div data-aos="zoom-in" className="bg-white shadow-xl px-6 py-4 rounded-lg">
                <RiSecurePaymentLine className="text-4xl text-red-500" />
                <h3 className="mb-2 mt-1 text-xl font-bold text-black">
                    Secure Payment
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Shop with peace of mind through our safe and secure payment system.
                </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
