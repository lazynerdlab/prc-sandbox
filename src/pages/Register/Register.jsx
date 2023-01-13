import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useFormik } from "formik";
import useActions from "../../utils/Hooks/hookActions";
import { useRegisterMutation } from "../../features/api/userApiSlice";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import Loader from "../../utils/Loader";
import { registerSchema } from "../../utils/Schemas/RegisterSchema";

const Register2 = () => {
  const userRef = useRef();
  const { navigate } = useActions();
  const [register, { isLoading, error }] = useRegisterMutation();
  const onSubmit = async (values, actions) => {
    const res = await register({
      username: values.username,
      password: values.password,
      email: values.email,
    });
    if (res.data) {
      actions.resetForm();
      setSuccess(true);
    }
    if (res.error) {
      setErr(true);
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPass, setShowpass] = useState(false);
  const [showCpass, setShowCpass] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  return (
    <>
      <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      />
      <SuccessModal
        alter={success}
        message={
          "Thanks For Signing up, Check your Email for a verification mail."
        }
        setAlter={() => {
          setSuccess(false);
        }}
      />
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="md:w-[40%]  w-[80%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-100">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="text-[2rem] text-center mb-[1rem] text-blue-500">
              <h1>Create Your Account</h1>
            </div>
            <label htmlFor="username" className="block mb-[1rem]">
              username:
            </label>
            <div className="mb-[1rem]">
              <input
                type="text"
                id="username"
                className={
                  errors.username
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                ref={userRef}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                required
              />
              {errors.username && touched.username && (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <label htmlFor="email" className="block mb-[1rem]">
              Email:
            </label>
            <div className="mb-[1rem]">
              <input
                type="text"
                id="email"
                className={
                  errors.email
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
              {errors.email && touched.email && (
                <p className="text-red-600">{errors.email}</p>
              )}
            </div>
            <label htmlFor="password" className="block mb-[1rem]">
              Password:
            </label>
            <div className="relative mb-[1rem]">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                className={
                  errors.password
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
              {showPass ? (
                <BiHide
                  className="absolute text-[2rem] text-gray-300 right-[2%] top-[20%] cursor-pointer"
                  onClick={() => setShowpass(false)}
                />
              ) : (
                <BiShow
                  className="absolute text-[2rem] text-gray-300 right-[2%] top-[20%] cursor-pointer"
                  onClick={() => setShowpass(true)}
                />
              )}
              {errors.password && touched.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>
            <label htmlFor="confirmPassword" className="block mb-[1rem]">
              ConfirmPassword:
            </label>
            <div className="mb-[1rem] relative">
              <input
                type={showCpass ? "text" : "password"}
                id="confirmPassword"
                className={
                  errors.confirmPassword
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                required
              />
              {showCpass ? (
                <BiHide
                  className="absolute text-[2rem] text-gray-300 right-[2%] top-[20%] cursor-pointer"
                  onClick={() => setShowCpass(false)}
                />
              ) : (
                <BiShow
                  className="absolute text-[2rem] text-gray-300 right-[2%] top-[20%] cursor-pointer"
                  onClick={() => setShowCpass(true)}
                />
              )}
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>
            <button
              disabled={isLoading}
              className="bg-blue-400 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            >
              {" "}
              {isLoading && <Loader />} Create Account
            </button>
          </form>
          <div className="flex justify-start mb-[1rem]">
            <div className="mr-[0.5rem]">Already Have an Account</div>
            <Link to="/login"> Sign In </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register2;
