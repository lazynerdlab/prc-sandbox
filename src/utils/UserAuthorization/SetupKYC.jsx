import Loader from "../Loader";
import { useRef, useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useActions from "../../utils/Hooks/hookActions";
import { useFormik } from "formik";
import { useRegisterKYCMutation } from "../../features/api/userApiSlice";
import ErrorModal from "../../Components/Modals/errorModal";
import { KYCSchema } from "../Schemas/KYCSchema";
const SetupKYC = () => {
  const firstnameRef = useRef();
  useEffect(() => {
    firstnameRef?.current?.focus();
  }, []);
  const kycSubmit = async (values, actions) => {
    const { firstname, lastname, address, middlename, phone } = values;
    console.log(values);
    const res = await registerKYC({
      firstname,
      lastname,
      address,
      middlename,
      phone,
    });
    console.log(res, isLoading, error);
    if (res.data) {
      actions.resetForm();
      navigate("/", { replace: true });
    }
    if (res.error) {
      setErr(true);
    }
  };
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        address: "",
        firstname: "",
        lastname: "",
        middlename: "",
        phone: "",
      },
      validationSchema: KYCSchema,
      onSubmit: kycSubmit,
    });
  const { navigate, user } = useActions();
  const [err, setErr] = useState(false);
  const location = useLocation();
  const [registerKYC, { isLoading, error }] = useRegisterKYCMutation();
  const from = location.state?.from?.pathname || "/";
  if (user.firstName) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

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
            <div className="my-[0.5rem]">
              <label htmlFor="firstname" className="block mb-[0.5rem]">
                FirstName:
              </label>
              <input
                type="text"
                id="firstname"
                className={
                  errors.firstname
                    ? "border-solid text-[1rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                ref={firstnameRef}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                required
              />
              {errors.firstname && touched.firstname && (
                <p className="text-red-600">{errors.firstname}</p>
              )}
            </div>

            <div className="my-[0.5rem]">
              <label htmlFor="lastname" className="block mb-[0.5rem]">
                LastName:
              </label>
              <input
                type="text"
                id="lastname"
                className={
                  errors.lastname
                    ? "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                required
              />
              {errors.lastname && touched.lastname && (
                <p className="text-red-600">{errors.lastname}</p>
              )}
            </div>

            <div className="my-[0.5rem]">
              <label htmlFor="middlename" className="block mb-[0.5rem]">
                MiddleName(optional):
              </label>
              <input
                type="text"
                id="middlename"
                className={
                  errors.middlename
                    ? "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.middlename}
              />
              {errors.middlename && touched.middlename && (
                <p className="text-red-600">{errors.middlename}</p>
              )}
            </div>

            <div className="my-[0.5rem]">
              <label htmlFor="phone" className="block mb-[0.5rem]">
                Phone Number:
              </label>
              <input
                type="number"
                id="phone"
                className={
                  errors.phone
                    ? "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                required
              />
              {errors.phone && touched.phone && (
                <p className="text-red-600">{errors.phone}</p>
              )}
            </div>

            <div className="my-[0.5rem]">
              <label htmlFor="address" className="block mb-[0.5rem]">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className={
                  errors.address
                    ? "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] p-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                required
              />
              {errors.address && touched.address && (
                <p className="text-red-600">{errors.address}</p>
              )}
            </div>

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

            <button
              type="submit"
              className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            >
              {isLoading && <Loader />} Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default SetupKYC;
