import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineHelpOutline,
  MdMenuBook,
  MdOutlineSettings,
} from "react-icons/md";

export const categories = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard className='md:w-6 md:h-6 text-lime-600' />,
    link: "/",
    active: true,
  },
];

export const technical = [
  {
    name: "Help",
    icon: <MdOutlineHelpOutline className='md:w-6 md:h-6' />,
    link: "/help",
    active: false,
  },
  {
    name: "Policies & Compliance",
    icon: <MdMenuBook className='md:w-6 md:h-6' />,
    link: "/policies",
    active: false,
  },
  {
    name: "Settings",
    icon: <MdOutlineSettings className='md:w-6 md:h-6' />,
    link: "/settings",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <div className='flex-col flex mt-5 h-full sticky top-16'>
      <div className='flex'>
        <div className='duration-300 flex flex-col lg:w-64 w-16 h-[80vh] gap-5 px-4 justify-between'>
          {categories.map((category) => (
            <Link
              className='flex items-center'
              key={category.name}
              to={category.link}
            >
              {category.icon}
              <span className=' text-gray-400 ml-2 hidden lg:block'>
                {category.name}
              </span>
            </Link>
          ))}
          <div className='flex flex-col gap-5 justify-evenly'>
          <hr className='border border-gray-700' />
          {technical.map((category) => (
            <Link
              className='flex items-center'
              key={category.name}
              to={category.link}
            >
              {category.icon}
              <span className=' text-gray-400 ml-2 hidden lg:block'>{category.name}</span>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
