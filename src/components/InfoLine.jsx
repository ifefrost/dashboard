const InfoLine = (data) => {
  return (
    <div className='flex py-3 border-b border-gray-100' >
      <img src={data.img} alt='product' className='w-10 h-10 rounded-md' />
      <div className='flex flex-col ml-4'>
        <p className='font-bold'>{data.title}</p>
        <p className='text-xs font-light'>
          {data.date} at {data.time}
        </p>
      </div>
      <span className='ml-auto text-sm font-semibold'>{data.amount}</span>
    </div>
  );
};

export default InfoLine;
