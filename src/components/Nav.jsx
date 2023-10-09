import { FaSistrix, FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const Nav = () => {
  return (
    <nav className='sticky top-0 z-20 bg-white'>
      <div className='mx-auto 2xl:max-w-screen-xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex-1 flex items-center justify-center lg:items-stretch lg:justify-start'>
            <Link
              to={"/"}
              className='text-2xl no-underline hover:text-lime-600 font-sans font-bold'
            >
              My Dashboard
            </Link>
          </div>
          <div className='flex gap-3'>
            <button className='flex items-center justify-center bg-gray-100 focus:shadow-outline border border-gray-200 rounded-full h-8 w-8'>
              <FaSistrix />
            </button>
            <button className='relative flex items-center justify-center border border-gray-200 focus:shadow-outline rounded-full h-8 w-8'>
              <span className='absolute -top-0.5 right-0.5 h-2 w-2 rounded-full bg-indigo-600 flex justify-center items-center items'></span>
              <FaRegBell className='' />
            </button>
            <img
              src={logo}
              className='object-cover btn- h-8 w-8 p-1 rounded-full border border-gray-400 ml-3'
              alt=''
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
