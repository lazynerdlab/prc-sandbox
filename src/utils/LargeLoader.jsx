import Loader from "./Loader";

const LargeLoader = () => {
  return (
    <div className="absolute top-0 left-0 h-[650px] w-[600px] z-50 bg-gray-400 flex flex-col items-center justify-center">
      <div>
        <Loader />
      </div>
    </div>
  );
};

export default LargeLoader;
