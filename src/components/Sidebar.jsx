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
    icon: <MdOutlineDashboard className='w-6 h-6 text-lime-600' />,
    link: "/",
    active: true,
  },
];

export const technical = [
  {
    name: "Help",
    icon: <MdOutlineHelpOutline className='w-6 h-6' />,
    link: "/help",
    active: false,
  },
  {
    name: "Policies & Compliance",
    icon: <MdMenuBook className='w-6 h-6' />,
    link: "/policies",
    active: false,
  },
  {
    name: "Settings",
    icon: <MdOutlineSettings className='w-6 h-6' />,
    link: "/settings",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <div className='flex-col flex mt-10 sticky'>
      <div className='flex'>
        <div className='flex flex-col w-64 h-[80vh] gap-5 px-4 justify-between'>
          <div className='flex flex-col gap-5 px-4 justify-evenly'>
            {categories.map((category) => (
              <Link
                className='flex items-center'
                key={category.name}
                to={category.link}
              >
                {category.icon}
                <span className=' text-gray-400 ml-2'>{category.name}</span>
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-5 px-4 justify-evenly border-t-2 border-gray-700'>
            {technical.map((category) => (
              <Link
                className='flex items-center py-2'
                key={category.name}
                to={category.link}
              >
                {category.icon}
                <span className=' text-gray-400 ml-2'>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
