import { useState } from "react";
import SparkIcon from "../assets/spark-icon.png";
import ShippingIcon from "../assets/shipping.png";
import PickupIcon from "../assets/pickup.png";
import DeliveryIcon from "../assets/delivery.png";
import DropIcon from "../assets/drop.png";
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white font-sans h-[90px]">
      <img src={SparkIcon} alt="Walmart Logo" className="ml-4 h-9 w-9" />
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-blue-800 rounded-full text-white text-sm font-medium hover:bg-blue-800 focus:outline-none"
        >
          <img src={DropIcon} alt="Icon" className="w-6 h-6 mr-2" />
          <div className="flex flex-col items-start">
            <span>Pickup or delivery?</span>
            <span className="text-xs mt-1">Sacramento, 95829 - Sacramento Supercenter...</span>
          </div>
          <svg
            className="w-4 h-4 ml-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 w-76 bg-blue-600 text-white rounded-lg shadow-lg z-10 p-4">
            <div className="flex justify-between mb-4">
              <button className="flex flex-col items-center text-white">
                <img
                  src={ShippingIcon}
                  alt="Shipping"
                  className="w-10 h-10 mb-1"
                />
                <span className="text-xs">Shipping</span>
              </button>
              <button className="flex flex-col items-center text-white">
                <img src={PickupIcon} alt="Pickup" className="w-10 h-10 mb-1" />
                <span className="text-xs">Pickup</span>
              </button>
              <button className="flex flex-col items-center text-white">
                <img
                  src={DeliveryIcon}
                  alt="Delivery"
                  className="w-10 h-10 mb-1"
                />
                <span className="text-xs">Delivery</span>
              </button>
            </div>
            <div className="bg-white rounded-md mb-4 p-2">
              <div className="flex items-center text-black text-sm mb-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Add an address for shipping and delivery
              </div>
              <p className="text-black text-sm mb-2">Sacramento, CA 95829</p>
              <button className="w-full py-2 bg-blue-700 text-white rounded-full text-sm">
                Add address
              </button>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg text-sm">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-7-7v18"
                />
              </svg>
              <div>
                <p className="text-gray-800">Sacramento Supercenter</p>
                <p className="text-gray-600">
                  8915 GERBER ROAD, Sacramento, CA 95829
                </p>
              </div>
              <svg
                className="w-4 h-4 ml-auto text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <form className="search-bar flex items-center w-[700px] bg-white rounded-full">
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          className="w-full px-4 py-3 text-black border-none rounded-l-full focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 mr-1 bg-blue-700 text-white border-none rounded-full cursor-pointer"
        >
          <FaSearch />
        </button>
      </form>

      <div className="actions flex items-center gap-10 text-base">
        <div className="nav-hover icon-label flex items-center gap-1 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer hover:bg-blue-900">
          <FaHeart />
          <div className="item text-left">
            <div className="text-[13px]">Reorder</div>
            <div>
              <strong>My Items</strong>
            </div>
          </div>
        </div>
        <div className="nav-hover icon-label flex items-center gap-0.5 px-2 py-2 rounded-full transition-colors duration-300 cursor-pointer hover:bg-blue-900">
          <FaUser />
          <div className="item text-left">
            <div className="text-[13px]">Sign In</div>
            <div>
              <strong>Account</strong>
            </div>
          </div>
        </div>
        <div className="nav-hover icon-label flex items-center gap-1 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer hover:bg-blue-900 relative">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-yellow-400 text-white text-xs rounded-full">
            0
          </span>
          <div>$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;