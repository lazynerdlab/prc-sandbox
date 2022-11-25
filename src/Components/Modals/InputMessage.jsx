const InputMessage = ({ title, value, state }) => {
  return (
    <div className="">
      <label className="block" htmlFor={title}>
        {title}:
      </label>
      <input
        className="border-solid border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
        type="text"
        id={title}
        value={value}
        onChange={(e) => {
          state(e.target.value);
        }}
      />
    </div>
  );
};

export default InputMessage;
