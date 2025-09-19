import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";

function Footer() {
  return (
<footer id="footer" className="w-full bg-[var(--primary)] dark:bg-gray-900 pt-5 ">
  <div className="mx-auto max-w-7xl dark:w-full px-4 sm:px-6 lg:px-8 bg-black dark:bg-[#e7e7e9] rounded-t-2xl max-md:rounded-t-none text-gray-300 dark:text-gray-500 py-5">
    {/*Grid*/}
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-0 py-5 max-sm:max-w-sm max-sm:mx-auto gap-y-8 max-lg:text-center ">
      <div data-aos="fade-down" className="col-span-full mb-10 lg:col-span-3 lg:mb-0 max-md:text-center w-fit">
        <p className="text-2xl font-semibold text-[var(--secondary)]">Shoppire</p>
        <p className="py-8 text-sm text-white lg:max-w-sm dark:text-black">
          Crafted with care and dedication. Bringing quality and style right to your doorstep. Your satisfaction is our promise!
        </p>
        <p className="text-gray-300 dark:text-gray-500"> ©Mohame Hassan ITI 2025, All rights reserved.</p>
      </div>
      {/*End Col*/}
      <div data-aos="fade-down" className="lg:mx-auto text-left lg:mr-20 lg:text-left w-full">
        <h4 className="text-lg font-medium mb-7 text-left text-white dark:text-black">Quick Links</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a href="javascript:;" className="text-gray-300 dark:text-gray-500 hover:text-gray-900">
              About Us
            </a>
          </li>
          <li className="mb-6">
            <a href="javascript:;" className=" text-gray-300 dark:text-gray-500 hover:text-gray-900">
              Products
            </a>
          </li>
          <li className="mb-6">
            <a href="javascript:;" className=" text-gray-300 dark:text-gray-500 hover:text-gray-900">
              Services
            </a>
          </li>
          <li>
            <a href="javascript:;" className=" text-gray-300 dark:text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/*End Col*/} 
      <div data-aos="fade-down" className="lg:mx-auto text-left grid-cols-6 max-md:w-fit">
        <h4 className="text-lg font-medium mb-7 text-white dark:text-black">Contact Us</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6 flex gap-2 items-center">
            <IoIosCall className="text-xl"/>
            <p>+201278256598</p>
          </li>
          <li className="mb-6 flex gap-2 items-center">
            <MdEmail className="text-xl "/>
            <p>mohamedhassann542@gmail.com</p>
          </li>
          <li className="mb-6 flex gap-2 items-center">
            <FaLocationDot className="text-xl"/>
              <p>Zagazig, Sharkia, Egypt</p>
            </li>
        </ul>
      </div>
      {/*End Col*/} 
      <div data-aos="fade-down" className="lg:mx-auto text-left col-span-2 pl-25">
        <h4 className="text-lg font-medium mb-7 text-white dark:text-black">Follow Us</h4>
        <ul className="text-sm  transition-all duration-500 flex gap-4">
          <li className="mb-6">
            <FaFacebook className="text-2xl text-[var(--secondary)]">
            </FaFacebook></li>
          <li className="mb-6">
            <FaLinkedin className="text-2xl text-[var(--secondary)]">
            </FaLinkedin></li>
          <li className="mb-6">
            <FaXTwitter className="text-2xl text-[var(--secondary)]">
            </FaXTwitter></li>
          <li>
            <FaSquareInstagram className="text-2xl text-[var(--secondary)]">
            </FaSquareInstagram></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
