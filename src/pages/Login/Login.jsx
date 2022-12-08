import "./Login.scss";
import Loader from "../../utils/Loader";
import { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import useActions from "../../utils/Hooks/hookActions";
import { useLoginMutation } from "../../features/api/userApiSlice";
import { setCredentials, setToken } from "../../features/reducers/userSlice";
import ErrorModal from "../../Components/Modals/errorModal";
const Login = () => {
  const emailRef = useRef();
  const { dispatch, navigate } = useActions();

  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [pwd, setPwd] = useState("");
  const location = useLocation();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const from = location.state?.from?.pathname || "/";
  const LoginSubmit = async (e) => {
    e.preventDefault();
    const res = await login({
      email: email,
      password: pwd,
    });
    console.log(res, isLoading, error);
    if (res.data) {
      setPwd("");
      setEmail("");
      navigate(from, { replace: true });
      dispatch(setCredentials(res.data?.others));
      dispatch(setToken(res?.data?.accessToken));
      sessionStorage.setItem("token", res?.data?.refreshAccessToken);
    }
    if (res.error) {
      setErr(isError);
    }
  };

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
        <div className="w-[50%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-100">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={LoginSubmit}
          >
            <div className="text-[2rem] mb-[1rem]">
              <h1>Sign In</h1>
            </div>
            <label htmlFor="email" className="block mb-[1rem]">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password" className="block mb-[1rem]">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
              required
            />
            <button className="bg-blue-400 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white">
              {" "}
              {isLoading && <Loader />} Login
            </button>
          </form>
          <div className="flex justify-between self-stretch mb-[1rem] pl-[1rem] pr-[1rem]">
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
