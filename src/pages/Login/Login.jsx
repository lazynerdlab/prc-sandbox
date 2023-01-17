import Loader from "../../utils/Loader";
import { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useFormik } from "formik";
import useActions from "../../utils/Hooks/hookActions";
import { useLoginMutation } from "../../features/api/userApiSlice";
import { setCredentials, setToken } from "../../features/reducers/userSlice";
import ErrorModal from "../../Components/Modals/errorModal";
import { LoginSchema } from "../../utils/Schemas/LoginSchema";
const Login = () => {
  const emailRef = useRef();
  const { dispatch, navigate } = useActions();
  const [err, setErr] = useState(false);
  const location = useLocation();
  const LoginSubmit = async (values, actions) => {
    console.log(values);
    const res = await login({
      email: values.email,
      password: values.password,
    });
    console.log(res, isLoading, error);
    if (res.data) {
      actions.resetForm();
      console.log(res.data);
      navigate(from, { replace: true });

      dispatch(setCredentials(res.data));
      // dispatch(setToken(res?.data?.accessToken));
      sessionStorage.setItem("token", res?.data?.refreshAccessToken);
      navigate("/");
    }
    if (res.error) {
      setErr(isError);
    }
  };
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const from = location.state?.from?.pathname || "/";
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
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: LoginSubmit({}),
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      />
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="md:w-[40%] w-[80%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-100">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <div className="text-[2rem] mb-[1rem]">
              <h1>Sign In</h1>
            </div>
            <label htmlFor="email" className="block mb-[1rem]">
              Email:
            </label>
            <div className="mb-[1rem]">
              <input
                type="text"
                id="email"
                ref={emailRef}
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
                type="password"
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
              {errors.password && touched.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>
            <button
              // disabled={isLoading}
              type="submit"
              className="bg-blue-600 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            >
              {" "}
              {isLoading && <Loader />} Login
            </button>
          </form>
          <div className="flex justify-between self-stretch mb-[1rem]">
            <div>Need an Account?</div>
            <Link to="/register"> Sign Up </Link>
          </div>
          <Link to="/resetpassword" className="self-end">
            forgot Password
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;
