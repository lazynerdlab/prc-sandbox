const InputEmail = ({ title, value, state }) => {
  return (
    <div className="">
      <label htmlFor="input" className="block">
        {title}:
      </label>
      <input
        className="border-solid border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
        type="email"
        value={value}
        required
        onChange={(e) => {
          state(e.target.value);
        }}
      />
    </div>
  );
};

export default InputEmail;
