const Shimmer = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 m-4 p-4">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-56 h-56 bg-gray-300 flex items-center justify-center"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
