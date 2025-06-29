import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Services = () => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleDepartments = () => setIsDepartmentsOpen(!isDepartmentsOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-[#F0F5FF] text-[#0043AD] py-2 px-3">
      <ul className="flex items-center space-x-4">
        <li className="relative group">
          <button
            onClick={toggleDepartments}
            className="flex items-center space-x-1"
          >
            <span className="font-bold">Departments</span>
            <FaAngleDown className="w-4 h-4" />
          </button>
          {isDepartmentsOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 3</li>
            </ul>
          )}
        </li>

        <li className="relative group">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 mr-3"
          >
            <span className="font-bold">Services</span>
            <FaAngleDown className="w-4 h-4" />
          </button>
          {isServicesOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Subcategory 3</li>
            </ul>
          )}
        </li>

        <li className="text-sm mr-7.5">Get it Fast</li>
        <li className="text-sm mr-7.5">New Arrivals</li>
        <li className="text-sm mr-7.5">4th of July</li>
        <li className="text-sm mr-7.5">Dinner Made Easy</li>
        <li className="text-sm mr-7.5">Pharmacy Delivery</li>
        <li className="text-sm mr-7.5">Trending</li>
        <li className="text-sm mr-7.5">Back to School</li>
        <li className="text-sm mr-7.5">My Items</li>
        <li className="text-sm mr-7.5">Auto Service</li>
        <li className="text-sm mr-7.5">Only at Walmart</li>
        <li className="text-sm mr-7.5">Registry</li>
        <li className="text-sm">Walmart+</li>
      </ul>
    </nav>
  );
};

export default Services;