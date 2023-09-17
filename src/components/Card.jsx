const Card = (data) => {
  return (
    <div className='border border-gray-100 rounded-md text-left flex flex-col justify-center px-4'>
      <p className='text-sm font-light'>{data.title}</p>
      <p className='text-xl font-bold'>{data.amount}</p>
      <p className='text-xs'>
        from last week{" "}
        {data.color === "red" ? (
          <span className='text-red-500 ml-1'>
            &#8601; {data.percentage}&#37;{" "}
          </span>
        ) : (
          <span className='text-green-500 ml-1'>
            &#8599; {data.percentage}&#37;{" "}
          </span>
        )}
      </p>
    </div>
  );
};

export default Card;
