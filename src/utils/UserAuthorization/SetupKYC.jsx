import Loader from "../Loader";
import { useRef, useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useActions from "../../utils/Hooks/hookActions";
import { useRegisterKYCMutation } from "../../features/api/userApiSlice";
import ErrorModal from "../../Components/Modals/errorModal";
const SetupKYC = () => {
  const firstnameRef = useRef();
  useEffect(() => {
    firstnameRef?.current?.focus();
  }, []);
  const { navigate, user } = useActions();

  const [err, setErr] = useState(false);
  const [address, setAddress] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const location = useLocation();
  const [registerKYC, { isLoading, error }] = useRegisterKYCMutation();
  const from = location.state?.from?.pathname || "/";
  if (user.KYC) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerKYC({
      firstname,
      lastname,
      address,
      middlename,
    });
    console.log(res, isLoading, error);
    if (res.data) {
      setFirstname("");
      setLastname("");
      setMiddlename("");
      setAddress("");
      navigate("/verifybvn", { replace: true });
    }
    if (res.error) {
      setErr(true);
    }
  };

  return (
    <>
      <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      />
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="w-[40%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <label htmlFor="firstname" className="block mb-[1rem]">
              FirstName:
            </label>
            <input
              type="text"
              id="firstname"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              ref={firstnameRef}
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required
            />

            <label htmlFor="lastname" className="block mb-[1rem]">
              LastName:
            </label>
            <input
              type="text"
              id="lastname"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              required
            />

            <label htmlFor="middlename" className="block mb-[1rem]">
              MiddleName(optional):
            </label>
            <input
              type="text"
              id="middlename"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              onChange={(e) => setMiddlename(e.target.value)}
              value={middlename}
              required
            />

            <label htmlFor="address" className="block mb-[1rem]">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />

            <div className="flex jusify-start items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="border-solid text-[1.2rem] border-b-[2px] mr-[0.5rem] focus:outline-none focus:border-primary-bold"
                required
              />
              <label htmlFor="checkbox" className="flex-grow text-[0.5rem]">
                I have read and accepted the PrivacyPolicy and usage Terms and
                Conditions
              </label>
            </div>

            <button className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white">
              {isLoading && <Loader />} Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default SetupKYC;
