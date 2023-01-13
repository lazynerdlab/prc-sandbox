import { useState } from "react";

const InputPassword = ({ current, setCurrent }) => {
  const [password, setPassword] = useState("");
  return (
    <form className="md:w-[40%] w-[80%] m-auto flex flex-col justify-center items-stretch p-[1rem] rounded-[5px] bg-gray-100">
      <label htmlFor="password" className="block mb-[1rem] align-start">
        Password:
      </label>
      <div className="relative mb-[1rem]">
        <input
          type="password"
          id="password"
          className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button
        onClick={() => setCurrent(1)}
        className="bg-blue-600 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
      >
        Proceed
      </button>
    </form>
  );
};

export default InputPassword;
