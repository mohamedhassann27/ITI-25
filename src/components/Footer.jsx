import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer class="w-full bg-[var(--primary)] pt-5">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black rounded-t-2xl text-gray-300  py-5">
        {/* <!--Grid--> */}
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-0 py-5 max-sm:max-w-sm max-sm:mx-auto gap-y-8 max-lg:text-center">
          <div class="col-span-full mb-10 lg:col-span-3 lg:mb-0 max-md:text-center w-fit">
            <p className="text-2xl font-semibold text-[var(--secondary)]">Shoppire</p>
            <p class="py-8 text-sm text-white lg:max-w-sm">
              Crafted with care and dedication. Bringing quality and style right to your doorstep. Your satisfaction is our promise!
            </p>
            <p className="text-gray-300"> &copy;Mohame Hassan ITI 2025, All rights reserved.</p>
          </div>
          {/* <!--End Col--> */}
          <div class="lg:mx-auto text-left lg:mr-20  lg:text-left w-full">
            <h4 class="text-lg font-medium mb-7 text-left text-white">Quick Links</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class="text-gray-300 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-300 hover:text-gray-900"
                >
                  Products
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-300 hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-300 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div class="lg:mx-auto text-left grid-cols-6">
            <h4 class="text-lg font-medium mb-7 text-white">Contact Us</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6 flex gap-2 items-center">
                <IoIosCall className="text-xl"/>
                <p>+201278256598</p>
              </li>
              <li class="mb-6 flex gap-2 items-center">
                <MdEmail className="text-xl "/>
                <p>mohamedhassann542@gmail.com</p>
              </li>
              <li class="mb-6 flex gap-2 items-center">
                <FaLocationDot className="text-xl"/>
                <p>Zagazig, Sharkia, Egypt</p>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div class="lg:mx-auto text-left col-span-2 pl-25">
            <h4 class="text-lg font-medium mb-7 text-white">Follow Us</h4>
            <ul class="text-sm  transition-all duration-500 flex gap-4">
              <li class="mb-6">
                <FaFacebook className="text-2xl text-[var(--secondary)]"/>
              </li>
              <li class="mb-6">
                <FaLinkedin className="text-2xl text-[var(--secondary)]"/>
              </li>
              <li class="mb-6">
                <FaXTwitter className="text-2xl text-[var(--secondary)]"/>
              </li>
              <li>
                <FaSquareInstagram className="text-2xl text-[var(--secondary)]"/>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        
      </div>
    </footer>
  );
}

export default Footer;
