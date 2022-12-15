import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useActions from "../Hooks/hookActions";
import {
  createApi,
  fetchBaseQuery,
  skipToken,
} from "@reduxjs/toolkit/query/react";
import { useVerifYBvnQuery } from "../../features/flutterwave/flutterwave";
import Loader from "../Loader";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";

const VerifyBVN = () => {
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [bvn, setBvn] = useState("");
  const [fetch, setFetch] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { navigate, user } = useActions();
  const { data: res, isLoading } = useVerifYBvnQuery(bvn, { skip: fetch });
  console.log(from, user.AccountNumber, res);
  if (!user.AccountNumber) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetch(true);
    // const res = await VerifyBVN({ bvn });
    if (res.data) {
      console.log(res);
      setSuccess(true);
      setBvn("");
      navigate("login", { replace: true });
    }
    if (res.error) {
      setErr(true);
      setFetch(true);
      console.log(res);
    }
  };

  return (
    <>
      <ErrorModal
        alter={err}
        message={"BVN Authentication failed"}
        setAlter={() => setErr(false)}
      />
      <SuccessModal
        alter={success}
        message={"BVN Verification Successful"}
        setAlter={() => setSuccess(false)}
      />
      <div className="h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[40%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50"
        >
          <label htmlFor="bvn" className="">
            BVN Number:
          </label>
          <input type="number" minLength={11} required />
          <button className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white">
            {isLoading && <Loader />} Proceed
          </button>
        </form>
      </div>
    </>
  );
};

export default VerifyBVN;
