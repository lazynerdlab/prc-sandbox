import "./Login.scss";
import Loader from "../../utils/Loader";
import { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import useActions from "../../utils/Hooks/hookActions";
import { useLoginMutation } from "../../features/api/userApiSlice";
import { setCredentials } from "../../features/reducers/userSlice";
import ErrorModal from "../../Components/Modals/errorModal";
const Login = () => {
  const emailRef = useRef();
  const { navigate } = useActions();

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
    if (isSuccess) {
      setPwd("");
      setEmail("");
      navigate(from, { replace: true });
      setCredentials(res.data);
    }
    if (isError) {
      console.log(error, isError, err);
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
      <main className="w-full absolute h-screen flex justify-center items-center bg-white">
        <div>
          <form
            className="h-[60%] w-[40%] flex flex-col justify-between align-start bg-white p-[1rem] rounded-[5px] relative"
            onSubmit={LoginSubmit}
          >
            <div className="flex">
              <h1>Sign In</h1>
            </div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
              required
            />
            <button className="bg-green-700 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white">
              {" "}
              {isLoading && <Loader />} Sign In
            </button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <div
                className="router"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </div>
            </span>
          </p>
          <Link to="/resetpassword">forgot Password</Link>
        </div>
      </main>
    </>
  );
};

export default Login;
