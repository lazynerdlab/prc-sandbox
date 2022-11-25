import "./Modals.scss";
import { useState } from "react";
import useActions from "../../utils/hookActions";
import InputMessage from "./InputMessage";
import Loader from "../../utils/Loader";
import InputEmail from "./InputEmail";
import InputAmount from "./InputAmount";
import { decreaseBalance } from "../../features/actions.balance";

const TransferModal = ({ action, type }) => {
  const { navigate,dispatch,state} = useActions();
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const Loading = state.balance.value.isFetching
  const user = state.user.value
  const navigateHandler = () => navigate(-1);
  const payload = {
    type: type,
    value: parseInt(value),
    senderEmail: user.email,
    receiverEmail: email,
  };
  return (
    <div className="w-full absolute h-screen flex justify-center items-center bg-primary-light">
      <form
        className="h-[60%] w-[40%] flex flex-col justify-between align-start bg-white p-[1rem] rounded-[5px] relative"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(payload);
          dispatch(decreaseBalance(payload));
        }}
      >
        <InputAmount title="Amount" value={value} state={setValue} />
        <InputEmail title="Receiver" value={email} state={setEmail} />
        <InputMessage
          title="Remarks(optional)"
          value={remarks}
          state={setRemarks}
        />
        <div className="flex flex-col">
          <button
            className="bg-blue-700 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            type="submit"
          >
            {Loading && <Loader />}
            {action}
          </button>
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

export default TransferModal;
