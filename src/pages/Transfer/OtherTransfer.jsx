import LargeLoader from "../../utils/LargeLoader";
import SearchBanks from "../../utils/ComboBox";
import { Banks } from "../../features/flutterwave/Banks";
import { useRef, useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useActions from "../../utils/Hooks/hookActions";
import {
  useFetchBankNameMutation,
  useFetchBanksQuery,
} from "../../features/flutterwave/flutterwave";
import ErrorModal from "../../Components/Modals/errorModal";
const OtherTransfer = () => {
  const { data: name, isLoading, isError, error } = useFetchBanksQuery();
  console.log(name, isLoading, isError, error);
  const [fetchAccountName, {}] = useFetchBankNameMutation();
  useEffect(() => {
    run();
    console.log("rendered");
  }, []);
  const run = async () => {
    const res = await fetchAccountName({
      account_number: "0690000032",
      account_bank: "058",
    });
    console.log(res);
  };
  const firstnameRef = useRef();
  useEffect(() => {
    firstnameRef.current.focus();
  }, []);
  const { navigate, user } = useActions();

  const [err, setErr] = useState(false);
  const [narration, setNarration] = useState("");
  const [nuban, setNuban] = useState("");
  const [bankname, setBankname] = useState(Banks[0]);
  const [accountName, setAccountName] = useState("");
  const location = useLocation();
  console.log(bankname);
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const res = await registerKYC({
  //       firstname,
  //       lastname,
  //       address,
  //       middlename,
  //     });
  //     console.log(res, isLoading, error);
  //     if (res.data) {
  //       setFirstname("");
  //       setLastname("");
  //       setMiddlename("");
  //       setAddress("");
  //       navigate("/verifybvn", { replace: true });
  //     }
  //     if (res.error) {
  //       setErr(true);
  //     }
  //   };

  return (
    <>
      {/* <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      /> */}
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="w-[40%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            // onSubmit={handleSubmit}
          >
            <label htmlFor="nuban" className="block mb-[1rem]">
              Destination Account:
            </label>
            <input
              type="text"
              id="nuban"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              ref={firstnameRef}
              onChange={(e) => setNuban(e.target.value)}
              value={nuban}
              required
            />

            <label className="block mb-[1rem]">BankName:</label>
            <SearchBanks
              Array={Banks}
              selected={bankname}
              setSelected={setBankname}
            />

            <label htmlFor="accountname" className="block mb-[1rem]">
              AccountName:
            </label>
            <input
              type="text"
              id="accountname"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              ref={firstnameRef}
              value={accountName}
              required
            />

            <label htmlFor="narration" className="block mb-[1rem]">
              Narration:
            </label>
            <input
              type="text"
              id="narration"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              onChange={(e) => setNarration(e.target.value)}
              value={narration}
              required
            />
            <button className="bg-blue-400 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white">
              {<LargeLoader />} Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default OtherTransfer;
