import { useState } from "react";
import { useTransferMutation } from "../../features/api/transactionApiSlice";
import useActions from "../../utils/Hooks/hookActions";
import InputMessage from "./InputMessage";
import Loader from "../../utils/Loader";
import InputEmail from "./InputEmail";
import InputAmount from "./InputAmount";
import SuccessModal from "./successModal";
import ErrorModal from "./errorModal";

const TransferModal = ({ action, type }) => {
  const { navigate } = useActions();
  const [openerr, setErr] = useState(false);
  const [opensuccess, setSuccess] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [transfer, { isLoading, isSuccess, isError, error }] =
    useTransferMutation();
  const navigateHandler = () => navigate(-1);
  const payload = {
    type: type,
    value: parseInt(value),
    receiverEmail: email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await transfer(payload);
    console.log(payload);
    if (isSuccess) {
      setValue("");
      setEmail("");
      setSuccess(true);
    }
    if (isError) {
      setErr(true);
    }
  };

  const closeSuccessModal = () => {
    setSuccess(!opensuccess);
  };

  const closeErrorModal = () => {
    setErr(!openerr);
  };

  return (
    <>
      <ErrorModal
        alter={openerr}
        setAlter={closeErrorModal}
        message={error?.message}
      />
      <SuccessModal alter={opensuccess} setAlter={closeSuccessModal} />
      <div className="w-full absolute h-screen flex justify-center items-center bg-primary-light">
        <form
          className="h-[60%] w-[40%] flex flex-col justify-between align-start bg-white p-[1rem] rounded-[5px] relative"
          onSubmit={handleSubmit}
        >
          <InputAmount
            title="Amount"
            value={value}
            state={setValue}
            balance={true}
          />
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
              {isLoading && <Loader />}
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
    </>
  );
};

export default TransferModal;
