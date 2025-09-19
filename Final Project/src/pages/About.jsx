import React from "react";
import CountUp from "react-countup";

function About() {
    return (
        <section className="py-20 max-md:py-10 relative xl:mr-0 lg:mr-5 mr-0 bg-[var(--primary)] dark:bg-gray-900">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                <div data-aos="fade-right" className="w-full lg:justify-start justify-center items-start flex">
                    <div className="sm:w-[464px] w-full sm:h-[446px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <img
                        className=" w-full h-full rounded-3xl ml-10 object-cover max-md:w-fit max-md:mx-auto max-md:h-70"
                        // src="https://pagedone.io/asset/uploads/1717742431.png"
                        src="/public/imgs/Hero/about1.png"
                        alt="about Us image"
                    />
                    </div>
                </div>

                <div data-aos="fade-left" className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="flex-col justify-start lg:items-start items-center gap-0 flex">
                        <p className="text-[var(--secondary)] text-xl font-normal leading-relaxed">
                        Unveiling Our Journey
                        </p>
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex max-md:px-1">
                        <p className="text-black text-4xl max-md:text-3xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-white">
                            Our Commitment to Crafting Individualized Fashion Experiences
                        </p>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            Our achievement story is a testament to teamwork and
                            perseverance. Together, we've overcome challenges,
                            celebrated victories, and created a narrative of progress
                            and success.
                        </p>
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-3 grid-cols-1 max-md:px-10">
                            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <p className="text-[var(--secondary)] text-3xl font-bold font-manrope leading-9">
                                    <CountUp end={99} duration={2} easingFn={(t, b, c, d) => c * t / d + b}>
                                    </CountUp>K+
                                </p>
                                {/* <h4 className="text-[var(--secondary)] text-3xl font-bold font-manrope leading-9">
                                99K+
                                </h4> */}
                                <p className="text-gray-500 text-base font-semibold leading-relaxed">
                                Sutisfied Customers
                                </p>
                            </div>
                            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <p className="text-[var(--secondary)] text-3xl font-bold font-manrope leading-9">
                                    <CountUp end={12} duration={2} easingFn={(t, b, c, d) => c * t / d + b}>
                                    </CountUp>K+
                                </p>
                                <p className="text-gray-500 text-base font-semibold leading-relaxed">
                                Exclusive Products
                                </p>
                            </div>
                            <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <p className="text-[var(--secondary)] text-3xl font-bold font-manrope leading-9">
                                    <CountUp  end={3} duration={2} easingFn={(t, b, c, d) => c * t / d + b} >
                                    </CountUp>K+
                                </p>
                                <p className="text-gray-500 text-base font-semibold leading-relaxed">
                                New Products
                                </p>
                            </div>
                        {/* <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                            99% Happy Clients
                            </h4>
                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                            Mirrors our Focus on Client Satisfaction.
                            </p>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
        </div>
        </section>
    );
}

export default About;
