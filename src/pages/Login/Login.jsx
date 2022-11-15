import "./Login.scss";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/user";
import Button from "@mui/material/Button";
import { LoginSubmit } from "../../utils/Login.utils";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const LoginUrl = "/login";
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const LoginSubmit = async (e) => {
    e.preventDefault();
    if (user && pwd) {
      try {
        const res = await axios.get("localhost:7000/api/register", {
          username: { user },
          password: { pwd },
        });
        const data = res.data;
        console.log(data);
        console.log(res);
        dispatch(
          login({
            name: data.username,
            email: data.email,
            isVerified: data.isVerified,
          })
        );
        setUser("");
        setPwd("");
        setEmail("");
        if (data.isVerified) {
          navigate("/");
        } else if (!data.isVerified) {
          navigate("/verify");
        }
      } catch (err) {
        console.log(err);
        if (err.request) {
          alert("Network error occured");
        }
        if (err.response) {
          if (err.response.status >= 400 && err.response.status < 500) {
            alert("email or userName incorrect");
          } else {
            alert("server error occured");
          }
        }
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
          <h1>Sign In</h1>
          <form onSubmit={LoginSubmit} className="form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
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
        </div>
      </main>
    </div>
  );
};

export default Login;
