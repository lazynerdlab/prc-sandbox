const InputAmount = ({ title, value, state }) => {
  return (
    <div className="">
      <label className="block" htmlFor="input">
        {title} (₦):
      </label>
      <input
        className="border-solid border-b-[2px] w-full m-auto text-[1.5rem]text-center focus:outline-none focus:border-primary-bold"
        type="number"
        min="1"
        required
        value={value}
        onChange={(e) => {
          if (e.target.value >= 1 && e.target.value.charAt(0) !== "0") {
            state(e.target.value);
            return;
          }
          state("0.00");
        }}
      />
    </div>
  );
};

export default InputAmount;
