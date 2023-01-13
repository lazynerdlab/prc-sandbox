import { useState } from "react";
import useActions from "../../utils/Hooks/hookActions";
import FlutterWave from "../../utils/Payments/FlutterWave";
import InputAmount from "./InputAmount";
import InputEmail from "./InputEmail";
import InputMessage from "./InputMessage";
const FundModal = () => {
  const { navigate, userName, userEmail } = useActions();
  const [value, setValue] = useState("");
  const [remarks, setRemarks] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-between bg-white p-[1rem] rounded-[5px] relative"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputAmount title="Amount" value={value} state={setValue} />
        <InputEmail title="Email" value={email} state={setEmail} />
        <InputMessage
          title="Remarks(optional)"
          value={remarks}
          state={setRemarks}
        />
        <div className="flex flex-col">
          <FlutterWave
            name={userName}
            email={userEmail}
            amount={value.split(",").join("")}
          />
        </div>
      </form>
    </div>
  );
};

export default FundModal;
