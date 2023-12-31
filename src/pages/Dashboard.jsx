import { MdOutlineAdd } from "react-icons/md";
import { FaEllipsis } from "react-icons/fa6";
import Chart from "../components/Chart";
import Card from "../components/Card";
import { topData, bottomData, productData, orderData } from "../data";
import InfoLine from "../components/InfoLine";

const Dashboard = () => {
  return (
    <div className='container md:mx-auto h-full w-full my-5 mr-2'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h1 className='lg:text-2xl font-bold'>Hello, Store</h1>
            <p className='text-sm lg:text-base lg:leading-8'>Your Store</p>
          </div>
          <div className='flex h-fit'>
            <button className='bg-black text-white text-sm md:text-base flex items-center py-2 px-4 rounded-md'>
              Add Payment
              <MdOutlineAdd className='w-4 h-4 md:w-6 md:h-6' />
            </button>
            <button className='py-2 px-4 rounded-md'>
              <FaEllipsis className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-5 gap-2 md:gap-4 mt-8'>
        {topData.map((data) => (
          <Card
            title={data.title}
            amount={data.amount}
            percentage={data.percentage}
            color={data.color}
            key={data.title}
          />
        ))}

        <div className='lg:col-span-2 col-span-3 lg:row-span-3 border border-gray-100 rounded-md text-left px-4 py-4'>
          <p className='text-xl font-bold'>Products</p>
          <div className='flex flex-col gap-4 mt-4'>
            {productData.map((data) => (
              <InfoLine
                title={data.title}
                img={data.img}
                amount={data.amount}
                date={data.date}
                time={data.time}
                key={data.id}
              />
            ))}
          </div>
        </div>
        <Chart></Chart>
        <div className='lg:col-span-2 col-span-3 row-span-2 border border-gray-100 rounded-md text-left px-4 py-4'>
          <p className='text-xl font-bold'>Orders</p>
          <div className='flex flex-col gap-4 mt-4'>
            {orderData.map((data) => (
              <InfoLine
                title={data.title}
                img={data.img}
                amount={data.amount}
                date={data.date}
                time={data.time}
                key={data.id}
              />
            ))}
          </div>
        </div>

        {bottomData.map((data) => (
          <Card
            title={data.title}
            amount={data.amount}
            percentage={data.percentage}
            color={data.color}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
