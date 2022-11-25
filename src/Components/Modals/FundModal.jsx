import "./Modals.scss";
import { useState } from "react";
import useActions from "../../utils/hookActions";
import FlutterWave from "../../utils/Payments/FlutterWave";
import InputAmount from "./InputAmount";
import InputMessage from "./InputMessage";
const FundModal = () => {
  const { navigate, state } = useActions();
  const [value, setValue] = useState("");
  const [remarks, setRemarks] = useState("");
  const user = state.user.value;
  const navigateHandler = () => navigate(-1);
  return (
    <div className="w-full absolute h-screen flex justify-center items-center bg-primary-light">
      <form
        className="h-[60%] w-[40%] flex flex-col justify-between align-start bg-white p-[1rem] rounded-[5px] relative"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputAmount title="Amount" value={value} state={setValue} />
        <InputMessage
          title="Remarks(optional)"
          value={remarks}
          state={setRemarks}
        />
        <div className="flex flex-col">
          <FlutterWave name={user.username} email={user.email} amount={value} />
          <button
            className="bg-rose-600 border-none p-[1rem] rounded-[5px] text-white"
            type="submit"
            onClick={navigateHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundModal;
