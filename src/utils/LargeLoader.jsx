import Loader from "./Loader";

const LargeLoader = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-gray-300 flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
};

export default LargeLoader;
