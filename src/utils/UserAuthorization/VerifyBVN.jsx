import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useActions from "../Hooks/hookActions";
import { useFormik } from "formik";
import { useVerifYBvnMutation } from "../../features/api/flutterwaveApiSlice";
import Loader from "../Loader";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import { BVNSchema } from "../Schemas/BVNSchema";

const VerifyBVN = () => {
  const [VerifyBVN, { isLoading, error }] = useVerifYBvnMutation();
  const bvnSubmit = async (values, actions) => {
    const res = await VerifyBVN({ bvn: values.bvn });
    if (res.data) {
      console.log(res);
      actions.resetForm();
      // navigate("login", { replace: true });
      navigate("/");
    }
    if (res.error) {
      setErr(true);
      console.log(res);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        bvn: "",
      },
      validationSchema: BVNSchema,
      onSubmit: bvnSubmit,
    });
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [fetch, setFetch] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { navigate, user } = useActions();
  // console.log(from, user.AccountNumber, res);
  if (!user.AccountNumber) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

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
          <div className="my-[0.5rem]">
            <label htmlFor="bvn" className="">
              BVN Number:
            </label>
            <input
              type="number"
              className={
                errors.bvn
                  ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                  : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
              }
              value={values.bvn}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.bvn && touched.bvn && (
              <p className="text-red-600">{errors.bvn}</p>
            )}
          </div>
          <button className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white">
            {isLoading && <Loader />} Proceed
          </button>
        </form>
      </div>
    </>
  );
};

export default VerifyBVN;
