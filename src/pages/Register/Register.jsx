import { useRef, useState, useEffect } from "react";
import useActions from "../../utils/Hooks/hookActions";
import { useTransferMutation } from "../../features/api/transactionApiSlice";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import Loader from "../../utils/Loader";

const Register = () => {
  const userRef = useRef();
  const { navigate } = useActions();
  const [register, { isLoading, isError, isSuccess, error }] =
    useTransferMutation();

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Cpwd, setCPwd] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwd !== Cpwd) {
      setErr(true);
      setErrMsg("confirm password doesn't match");
      return;
    }
    const res = await register({
      username: user,
      password: pwd,
      email: email,
    });
    if (isSuccess) {
      setUser("");
      setPwd("");
      setCPwd("");
      setEmail("");
      setSuccess(true);
    }
    if (isError) {
      setErr(true);
      setErrMsg(error?.message);
    }
  };
  return (
    <div>
      <ErrorModal
        alter={err}
        message={errMsg}
        setAlter={() => {
          setErr(false);
        }}
      />
      <SuccessModal
        alter={isSuccess}
        message={
          "Thanks For Signing up, Check your Email for a verification mail."
        }
        setAlter={() => {
          setSuccess(false);
        }}
      />
      <div className="LoginContainer">
        <main className="Loginsection">
          <div className="LoginForm">
            <h1>Sign Up</h1>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="firstname">Username:</label>
              <input
                type="text"
                id="firstname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />

              <label htmlFor="Cpassword">Confirm Password:</label>
              <input
                type="password"
                id="Cpassword"
                onChange={(e) => setCPwd(e.target.value)}
                value={Cpwd}
                required
              />
              <button
                className="bg-green-700 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
                type="submit"
              >
                {isLoading && <Loader />} Sign Up
              </button>
            </form>
            <p>
              Already have an Account?
              <br />
              <span className="line">
                {/*put router link here*/}
                <div
                  className="router"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </div>
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
