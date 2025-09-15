import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router";

function PopularProducts({ products }) {
    const navigate = useNavigate();
    return (
        <section className="px-20 py-10 my-10">
        <h2 className="border-b-3 w-fit mx-auto pb-1 border-[var(--secondary)] mb-10">
            Popular Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
            {products
            .filter((product) => product.popular)
            .slice(0, 4)
            .map((product) => (
                <div
                key={product.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                <div>
                    <img
                    src={product.image}
                    alt="product"
                    className="h-full w-full rounded object-cover"
                    />
                </div>
                <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        Up to {product.price - 145}% off{" "}
                    </span>

                    <div className="flex items-center justify-end gap-1">
                        <button
                        onClick={() => navigate(`products/${product.id}`)}
                        type="button"
                        data-tooltip-target="tooltip-quick-look"
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                        >
                        <span className="sr-only"> Quick look </span>
                        <IoEyeOutline />
                        </button>

                        <button
                        type="button"
                        data-tooltip-target="tooltip-add-to-favorites"
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xl"
                        >
                        <span className="sr-only"> Add to Favorites </span>
                        <CiHeart />
                        </button>
                    </div>
                    </div>

                    <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        {Array.from({ length: Math.round(product.rate) }).map(
                        (r, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        )
                        )}
                        {/* <FaStar className="text-yellow-400"/>
                                            <FaStar className="text-yellow-400"/>
                                            <FaStar className="text-yellow-400"/> */}
                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {product.rate}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        ({product.sale})
                    </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        ${product.price}
                    </p>

                    <button
                        type="button"
                        className="inline-flex items-center bg-[var(--secondary)] rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        <FaCartPlus
                        className="mr-3 text-xl"
                        width="24"
                        height="24"
                        />
                        Add to cart
                    </button>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </section>
    );
}

export default PopularProducts;
