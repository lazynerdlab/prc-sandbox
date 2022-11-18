import "./Login.scss";
import Loader from "../../utils/Loader";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../features/user";
import Button from "@mui/material/Button";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const user = useSelector((state) => state.user.value);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const LoginSubmit = async (e) => {
    e.preventDefault();
    if (email && pwd) {
      try {
        dispatch(
          login({
            email: email,
            password: pwd,
          })
        );
        if (user.username) {
          setPwd("");
          setEmail("");
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please input all required fields");
      return;
    }
  };

  return (
    <div className="LoginContainer">
      <main className="Loginsection">
        <div className="LoginForm">
          <div className="flex">
            <h1>Sign In</h1>
            {user.isLoading && <Loader />}
          </div>
          {user?.error && <h5 className="err">{user?.error}</h5>}
          <form className="form">
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
            <Button
              variant="contained"
              size="small"
              color="success"
              className="signIn"
              onClick={LoginSubmit}
            >
              Sign In
            </Button>
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
    </div>
  );
};

export default Login;
